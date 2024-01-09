import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import bullet1 from '../Images/bullet-1.png'
import blue12 from '../Images/blue12.jpg'
import "../Styles/loginjob.css";

const Loginemp = () => {
  return (
    <div className="job-back">
    <div className="jobseeker">
      <div className="left1">
        <h3>Employer Login</h3>
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
          <label className="labelf">Password:</label>
          <input
            className="inputf12"
            type="text"
            id="usernamef"
            name="usernamef"
            required
          />
        </div>
        <button>Login</button>
      </div>
      <div className="right1">
        <h3>Not an Employer?</h3>
        <p className="para12">
          Becoming a member at Hirelebanese.com offers you the following benefits:
        </p>
        <div className="parabox">
          <p className="para2"><img src={bullet1} alt="" />Posting Job Openings</p> 
          <p className="para2"> <img src={bullet1} alt="" />Managing Job Applications</p> 
          <p className="para2"><img src={bullet1} alt="" />Finding the Right Candidates</p>
          <button>Register Now</button> 
        </div>
      </div>
    </div>
  </div>
);
};

export default Loginemp;
