import React from "react";
import styled from "styled-components"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Self from "./Home/Self";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/self" element={<Self />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
