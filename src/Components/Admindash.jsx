import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/admindash.css";

const Admindash = () => {
  const navigate = useNavigate();

  const handleEmployers = (e) => {
    e.preventDefault();
    navigate("/employerdash");
  };

  const handleJobSeek = (e) => {
    e.preventDefault();
    navigate("/jobseekdash");
  };

  const removeJob = (e) => {
    e.preventDefault();
    navigate("/removejob");
  };

  const updatefeatured = (e) => {
    e.preventDefault();
    navigate("/updatefeatured");
  };
  const updateterms = (e) => {
    e.preventDefault();
    navigate("/updateterms");
  };

  return (
    <div>
      <div className="sidebar">
        <a href="" className="sidebar-a" onClick={handleEmployers}>
          View Employers
        </a>
        <a href="" className="sidebar-a" onClick={removeJob}>
          Remove Job
        </a>
        <a href="" className="sidebar-a" onClick={handleJobSeek}>
          View Seekers
        </a>
        <a href="" className="sidebar-a" onClick={updatefeatured}>
          Update Featured
        </a>
        <a href="" className="sidebar-a" onClick={updateterms}>
          Update terms
        </a>
      </div>
      <table className="products-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>totiyamamoto</td>
            <td>Antoine</td>
            <td>Rebeiz</td>
            <td>antoine_rebeiz@hotmail.com</td>
          </tr>
          <tr>
            <td>totiyamamoto</td>
            <td>Antoine</td>
            <td>Rebeiz</td>
            <td>antoine_rebeiz@hotmail.com</td>
          </tr>
          <tr>
            <td>totiyamamoto</td>
            <td>Antoine</td>
            <td>Rebeiz</td>
            <td>antoine_rebeiz@hotmail.com</td>
          </tr>
          <tr>
            <td>totiyamamoto</td>
            <td>Antoine</td>
            <td>Rebeiz</td>
            <td>antoine_rebeiz@hotmail.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Admindash;
