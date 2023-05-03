import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAlert } from "../state/reducers/alertReducer";
import { addBlog } from "../state/reducers/storageReducer";
import BackButton from "./BackButton";

export default function CreateBlog() {
  const dispatch = useDispatch();
  const history = useHistory();

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

  const handleNewBlog = () => {
    const title = document.getElementById("title").value.trim();
    const category = document.getElementById("category").value.trim();
    const content = document.getElementById("content").value.trimEnd();
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

    dispatch(addBlog({ title, category, content }));
    showAlert("Success : Blog posted successfully", "success");
    history.goBack();
  };

  const handleCancel = () => {
    showAlert("Process Cancelled : Blog not created!", "danger");
    history.goBack();
  };

  return (
    <>
      <BackButton text={"Back to Blogs"} />
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
            required
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
          ></textarea>
        </div>

        <button
          className="btn btn-outline-success me-3"
          onClick={handleNewBlog}
        >
          Submit
        </button>

        <button className="btn btn-outline-danger" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </>
  );
}
