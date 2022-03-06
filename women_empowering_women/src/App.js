import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from 'styled-components';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Mentor from "./pages/Mentor/Mentor"
import Share from "./pages/Share/Share";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer"

const AppContainer = styled.div`
 
  margin: 0 auto;
  `;

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppContainer>
      <Routes>
        <Route path="/"element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mentor" element={<Mentor />} />
        <Route path="/share" element={<Share />} />
      </Routes>
      </AppContainer>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;