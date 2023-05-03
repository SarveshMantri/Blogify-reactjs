import React from "react";
import Alert from "./components/Alert";
import Blogs from "./components/Blogs";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateBlog from "./components/CreateBlog";
import { useSelector } from "react-redux";
import ShowBlog from "./components/ShowBlog";
import EditBlog from "./components/EditBlog";

function App() {
  const alert = useSelector((state) => state.alertState);
  return (
    <>
      <Router>
        <Navbar />
        <Alert alert={alert} />
        <div className="container">
          <Switch>
            {/* Blog page */}
            <Route exact path="/blogs">
              <Blogs />
            </Route>

            {/* Home page */}
            <Route exact path="/">
              <Home />
            </Route>

            {/* Create blog page */}
            <Route exact path="/blogs/createBlog">
              <CreateBlog />
            </Route>

            {/* Create blog page */}
            <Route path="/blogs/showBlog/:blogID">
              <ShowBlog />
            </Route>

            <Route path="/blogs/edit/:blogID">
              <EditBlog />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
