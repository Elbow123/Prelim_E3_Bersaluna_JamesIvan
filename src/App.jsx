import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import "./index.css";

function App() {
  const [user, setUser] = useState({
    name: "James Ivan E. Bersaluna",
    settings: { darkMode: false }
  });

  const toggleDarkMode = () => {
    setUser(prevUser => ({
      ...prevUser,
      settings: { darkMode: !prevUser.settings.darkMode }
    }));
  };

  return (
    <Router>
  <div className={user.settings.darkMode ? "dark-mode" : "light-mode"}>
    <nav className={`navbar navbar-expand-lg ${user.settings.darkMode ? "navbar-dark" : "navbar-light"}`}>
      <div className="container">
        <Link className="nav-link mx-2 fw-bold" to="/">Home</Link>
        <div className="d-flex">
          <Link className="nav-link mx-2" to="/profile">Profile</Link>
          <Link className="nav-link mx-2" to="/settings">Settings</Link>
        </div>
      </div>
    </nav>

    {/* Bring back the centered container! */}
    <div className="container main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile user={user} setUser={setUser} />} />
        <Route path="/settings" element={<Settings darkMode={user.settings.darkMode} toggleDarkMode={toggleDarkMode} />} />
      </Routes>
    </div>

    {/* Footer (remains unchanged) */}
    <footer>
      © 2025 James Ivan E. Bersaluna
    </footer>
  </div>
</Router>

  );
}

export default App;
