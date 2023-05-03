import React from "react";
import BlogItem from "./BlogItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Blogs() {
  const blogs = useSelector((state) => state.blogsState);

  return (
    <>
      <div className="d-flex justify-content-end">
        <Link
          className="btn btn-primary"
          style={{ backgroundColor: "#042743" }}
          to="/blogs/createBlog"
        >
          New Post
        </Link>
      </div>

      <div className="row">
        {blogs.length !== 0 &&
          blogs.map((blog) => {
            return (
              <div key={blog.blogID} className="col-12">
                <BlogItem
                  category={blog.category}
                  title={blog.title}
                  like={blog.like}
                  k={blog.blogID}
                />
              </div>
            );
          })}

        {blogs.length === 0 && (
          <div className="col-12 text-center mt-3">
            <h2>No Blogs to Show</h2>
          </div>
        )}
      </div>
    </>
  );
}

export default Blogs;
