import { useState } from "react";
import { Routes, Route } from "react-router-dom"; // Import Route
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login"; // Ensure the correct path to Login component
import Register from "./pages/Register"; // Ensure the correct path to Register component
import Home from "./pages/Home"; // Ensure the correct path to Home component
import PostDetails from "./pages/PostDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />  
          <Route exact path="/login" element={<Login />} />  
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/posts/post/:id" element={<PostDetails />} />  
        </Routes>
        
      </div>
    </>
  );
}

export default App;
