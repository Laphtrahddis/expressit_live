import { useState } from "react";
import { Routes, Route } from "react-router-dom"; // Import Route
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login"; // Ensure the correct path to Login component
import Register from "./pages/Register"; // Ensure the correct path to Register component
import Home from "./pages/Home"; // Ensure the correct path to Home component
import PostDetails from "./pages/PostDetails";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import Profile from "./pages/Profile"; // Ensure the correct path to Profile component
import { UserContextProvider } from "./context/UserContext";
import MyBlogs from "./pages/myBlogs"; // Ensure the correct path to myBlogs component

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserContextProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />  
          <Route exact path="/login" element={<Login />} />  
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/posts/post/:id" element={<PostDetails />} /> 
          <Route exact path="/write" element={<CreatePost />} />  
          <Route exact path="/edit/:id" element={<EditPost />} />
          <Route exact path="/myBlogs/:id" element={<MyBlogs />} /> 
          <Route exact path="/profile/:id" element={<Profile />} />   
        </Routes>
    </UserContextProvider>
  );
}

export default App;
