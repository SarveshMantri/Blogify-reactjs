import React from "react";
import Arrow from "./Arrow";
import PropTypes from "prop-types";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function BlogItem({ category, title, k, like }) {
  return (
    <>
      {/* Horizontal Line */}
      <hr className="my-3" />
      {like && <span className="badge bg-danger">Liked!</span>}
      {/* Main Div */}
      <div className="row">
        {/* Title Div */}
        <div className="col-9 col-sm-10 p-x-0">
          {/* Title */}
          <div>
            <Link
              to={`/blogs/showBlog/${k}`}
              className="fs-2 link-dark link-underline-dark link-underline-opacity-0 link-underline-opacity-75-hover text-break"
              k={k}
            >
              {title.length > 117 ? title.slice(0, 110) + "......" : title}
            </Link>
          </div>
          {/* Category */}
          <h5 className="text-break">
            <span className="badge bg-success">{category}</span>
          </h5>
        </div>

        {/* Arrow Div*/}
        <div className="col-3 col-sm-2 p-3 ps-sm-5 m-auto">
          <Arrow />
        </div>
      </div>
      <hr className="my-3" />
    </>
  );
}

BlogItem.propTypes = {
  category: PropTypes.string,
  title: PropTypes.string,
};

export default BlogItem;
