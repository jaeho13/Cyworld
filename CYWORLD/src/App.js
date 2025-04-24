import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./Components/home/Home";
import Profile from "./Components/profile/Profile";
import Project from "./Components/project/Project";
import Contact from "./Components/contact/Contact";
import GlobalStyle from "./Components/globalStyle/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
