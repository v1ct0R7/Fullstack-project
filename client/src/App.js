import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post"

function App() {
  return (
    <div className="App">
      <Router>
        <div className="topBar">
          <div className="brand">
            <span className="brandMark">P</span>
            <span className="brandText">Posts</span>
          </div>

          <div className="navLinks">
            <Link className="navLink navLinkPrimary" to="/createpost">
              Create a Post
            </Link>
            <Link className="navLink" to="/home">
              Home Page
            </Link>
          </div>
        </div>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
