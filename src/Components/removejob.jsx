import React from "react";
import { useNavigate } from "react-router-dom";

const Removejob = () => {
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
    </div>
  );
};

export default Removejob;
