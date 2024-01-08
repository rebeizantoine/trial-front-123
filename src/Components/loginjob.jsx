import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../Styles/loginjob.css";

const Loginjob = () => {
  return (
    <div>
      <div className="jobseeker">
        <h3>Job Seeker Login</h3>
        <div className="username">
          <label className="labelf">Username:</label>
          <input
            className="inputf12"
            type="text"
            id="usernamef"
            name="usernamef"
            required
          />
        </div>
        <div className="username">
          <label className="labelf">Username:</label>
          <input
            className="inputf12"
            type="text"
            id="usernamef"
            name="usernamef"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default Loginjob;
