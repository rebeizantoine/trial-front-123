import React from "react";
import { useNavigate } from "react-router-dom";

const Jobseekdash = () => {
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
  return (
    <div>
      <div className="sidebar">
        <a href="" className="sidebar-a" onClick={handleEmployers}>
          View Employers
        </a>
        <a href="" className="sidebar-a" onClick={handleJobSeek}>
          Remove Job
        </a>
        <a href="" className="sidebar-a" onClick={removeJob}>
          View Seekers
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

export default Jobseekdash;
