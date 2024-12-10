import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/home/Home";
import Profile from "./Components/profile/Profile";
import Project from "./Components/project/Project";
import Contact from "./Components/contact/Contact";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <>
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
