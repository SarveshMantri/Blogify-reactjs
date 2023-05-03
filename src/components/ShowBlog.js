import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import BackButton from "./BackButton";
import Heart from "react-animated-heart";
import { updateLike, deleteBlog } from "../state/reducers/storageReducer";
import { setAlert } from "../state/reducers/alertReducer";

export default function ShowBlog() {
  const { blogID } = useParams();
  const blogs = useSelector((state) => state.blogsState);
  const dispatch = useDispatch();
  const history = useHistory();

  let blog = null;

  blogs.forEach((element) => {
    if (element.blogID === parseInt(blogID)) {
      blog = element;
    }
  });

  const showAlert = (message, type) => {
    dispatch(
      setAlert({
        message: message,
        type: type,
      })
    );
    setTimeout(() => {
      dispatch(setAlert(null));
    }, 3000);
  };

  const handleDelete = () => {
    dispatch(deleteBlog({ blogID }));
    showAlert("Blog Deleted Successfully !", "success");
    history.goBack();
  };
  if (blog) {
    return (
      <>
        <BackButton text={"Back to Blogs"} />
        <div className="row mb-3 px-2">
          <Link
            className="btn btn-outline-success me-3 col"
            to={`/blogs/edit/${blogID}`}
          >
            Edit
          </Link>

          <button className="btn btn-outline-danger col" onClick={handleDelete}>
            Delete
          </button>
        </div>

        <div className="row">
          <div className="col m-auto p-auto">
            <h2>{blog.title}</h2>
          </div>
          <div className="col-auto m-auto p-0">
            <Heart
              isClick={blog.like}
              onClick={() => {
                dispatch(updateLike({ blogID }));
              }}
            />
          </div>
        </div>

        <div className="mb-3">
          <h5 className="text-break">
            <span className="badge bg-success  ">{blog.category}</span>
          </h5>
        </div>
        <div className="mb-3">
          <pre className="" style={{ whiteSpace: "pre-wrap" }}>
            {blog.content}
          </pre>
        </div>
        <div></div>
      </>
    );
  } else {
    return (
      <>
        <BackButton text={"Back to Blogs"} />
        <div className="m-auto p-auto">
          <h2 className="m-auto p-auto">Blog does not exist.</h2>
        </div>
      </>
    );
  }
}
