import React from "react";
import styled from "styled-components"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
