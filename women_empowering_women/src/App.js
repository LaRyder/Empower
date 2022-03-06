import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Mentor from "./pages/Mentor/Mentor";
import Share from "./pages/Share/Share";
import NavBar from "./NavBar/NavBar"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/"element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Mentor" element={<Mentor />} />
        <Route path="Share Your Story" element={<Share />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;