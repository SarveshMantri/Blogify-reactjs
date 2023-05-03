import { createSlice } from "@reduxjs/toolkit";

const getLocalBlogs = () => {
  let blogs = localStorage.getItem("blogs");
  if (blogs) {
    return JSON.parse(blogs);
  } else {
    return [];
  }
};

export const storageSlice = createSlice({
  name: "changeStorage",
  initialState: getLocalBlogs(),
  reducers: {
    addBlog: (state, action) => {
      let id = 0;
      if (!(state.length === 0)) {
        id = state[state.length - 1].blogID + 1;
      }
      const newBlog = {
        blogID: id,
        title: action.payload.title,
        category: action.payload.category,
        content: action.payload.content,
        like: false,
      };
      state.push(newBlog);
      localStorage.setItem("blogs", JSON.stringify(state));
      return state;
    },
    deleteBlog: (state, action) => {
      for (let i = 0; i < state.length; i++) {
        if (parseInt(action.payload.blogID) === state[i].blogID) {
          state.splice(i, 1);
          break;
        }
      }
      localStorage.setItem("blogs", JSON.stringify(state));
      return state;
    },
    updateLike: (state, action) => {
      for (let i = 0; i < state.length; i++) {
        if (parseInt(action.payload.blogID) === state[i].blogID) {
          state[i].like = !state[i].like;
          break;
        }
      }
      localStorage.setItem("blogs", JSON.stringify(state));
      return state;
    },

    updateBlog: (state, action) => {
      for (let i = 0; i < state.length; i++) {
        if (parseInt(action.payload.blogID) === state[i].blogID) {
          state[i].title = action.payload.title;
          state[i].category = action.payload.category;
          state[i].content = action.payload.content;
          break;
        }
      }
      localStorage.setItem("blogs", JSON.stringify(state));
      return state;
    },
  },
});

export const { addBlog, updateLike, deleteBlog, updateBlog } =
  storageSlice.actions;
export default storageSlice.reducer;
