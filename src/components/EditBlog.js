import React, { useState } from "react";
import BackButton from "./BackButton";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { setAlert } from "../state/reducers/alertReducer";
import { updateBlog } from "../state/reducers/storageReducer";

function EditBlog() {
  // Constants
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

  // Local states
  const [title, setTitle] = useState(blog.title);
  const [category, setCategory] = useState(blog.category);
  const [content, setContent] = useState(blog.content);

  // Functions
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

  const handleUpdate = () => {
    setTitle(title.trim());
    setCategory(category.trim());
    setContent(content.trimEnd());

    // Title length error message
    if (title.length < 5) {
      showAlert(
        "Length of the title should be between 5 - 200 characters.",
        "danger"
      );
      return;
    }
    // Category length error message
    if (category.length < 5) {
      showAlert(
        "Length of the category should be between 5 - 20 characters.",
        "danger"
      );
      return;
    }
    // Content length error message
    if (content.length < 1) {
      showAlert("Content is empty. Please add some content", "danger");
      return;
    }

    dispatch(updateBlog({ blogID, title, category, content }));
    showAlert("Success : Blog posted successfully", "success");
    history.goBack();
  };

  const handleCancel = () => {
    showAlert("Process Cancelled : Blog not Edited!", "danger");
    history.goBack();
  };

  if (blog) {
    return (
      <>
        <BackButton text={"Back"} />
        <div>
          <div className="mb-3">
            {/* Title */}
            <label htmlFor="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Title"
              autoFocus
              minLength={5}
              maxLength={200}
              required
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>

          {/* Category */}
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Category
            </label>
            <input
              type="text"
              className="form-control"
              id="category"
              minLength={5}
              maxLength={20}
              placeholder="Category"
              value={category}
              required
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
          </div>

          {/* Content */}
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Content
            </label>
            <textarea
              className="form-control"
              id="content"
              rows="6"
              placeholder="Enter Content Here"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            ></textarea>
          </div>

          <button
            className="btn btn-outline-success me-3"
            onClick={handleUpdate}
          >
            Submit
          </button>

          <button className="btn btn-outline-danger" onClick={handleCancel}>
            Cancel
          </button>
        </div>
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

export default EditBlog;
