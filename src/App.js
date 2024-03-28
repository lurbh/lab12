import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import SubmittedForm from "./pages/SubmittedFrom";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <Router>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/posts">Post Page</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/submitform" element={<SubmittedForm/>}/>
          <Route path="/posts" element={<PostPage/>}/>
        </Routes>
    </Router>
  );
}

export default App;
