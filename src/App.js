import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Project from "./components/Project";

function App() {
    return (
        <Router>
            <div className="nav-bar">
                <Link className="nav-link" to="/">
                    Home
                </Link>
                <Link className="nav-link" to="/project">
                    Project
                </Link>
            </div>

            <div style={{ paddingTop: "50px" }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/project" element={<Project />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
