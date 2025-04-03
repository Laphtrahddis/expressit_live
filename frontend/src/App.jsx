import { useState } from "react";
import { Routes, Route } from "react-router-dom"; // Import Route
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home"; // Ensure the correct path to Home component

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />  
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
