import React from "react";

function Settings({ darkMode, toggleDarkMode }) {
  return (
    <div className="page-container">
      <div className="content-box">
        <h2>Settings</h2>
        <div className="toggle-container">
          <span className="toggle-label">{darkMode ? "Dark Mode" : "Light Mode"}</span>
          <div className={`toggle-switch ${darkMode ? "active" : ""}`} onClick={toggleDarkMode}></div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
