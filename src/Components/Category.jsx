import React from "react";
import "../Styles/category.css";
import buisness from "../Images/buisness-analyst 1.png";
import itjob from "../Images/it-jobs 1.png";
import engjob from "../Images/engineering-job 1.png";
import finjob from "../Images/finance 1.png";
import restjob from "../Images/Restaurant-jobs 1.png";
import nursejob from "../Images/nursing 2.png";
import teachingjob from "../Images/teaching 1.png";
import webjob from "../Images/web developement 1.png";
import hoteljob from "../Images/hotel-jobs 1.png";
import marketjob from "../Images/marketing-jobs 1.png";
import hrjob from "../Images/HR 1.png";
import salesjob from "../Images/sales 1.png";

const Category = () => {
  return (
    <div>
      <div className="category-all">
        <h1 className="h1-find">Find the job you love</h1>
        <div className="categories-container">
          <div className="single-category">
            <div className="categories-available">
              <h2 className="category-name">IT Jobs</h2>
              <div className="image-box">
                <img className="img-category" src={itjob} alt="" />
              </div>
            </div>
          </div>
          <div className="single-category">
            <div className="categories-available">
              <h2 className="category-name">Engineering Jobs</h2>
              <div className="image-box">
                <img className="img-category" src={engjob} alt="" />
              </div>
            </div>
          </div>
          <div className="single-category">
            <div className="categories-available">
              <h2 className="category-name">Sales Jobs</h2>
              <div className="image-box">
                <img className="img-category" src={salesjob} alt="" />
              </div>
            </div>
          </div>
          <div className="single-category">
            <div className="categories-available">
              <h2 className="category-name">Marketing Jobs</h2>
              <div className="image-box">
                <img className="img-category" src={marketjob} alt="" />
              </div>
            </div>
          </div>
          <div className="single-category">
            <div className="categories-available">
              <h2 className="category-name">HR Jobs</h2>
              <div className="image-box">
                <img className="img-category" src={hrjob} alt="" />
              </div>
            </div>
          </div>
          <div className="single-category">
            <div className="categories-available">
              <h2 className="category-name">Finance Jobs</h2>
              <div className="image-box">
                <img className="img-category" src={finjob} alt="" />
              </div>
            </div>
          </div>
          <div className="single-category">
            <div className="categories-available">
              <h2 className="category-name">Hotel Jobs</h2>
              <div className="image-box">
                <img className="img-category" src={hoteljob} alt="" />
              </div>
            </div>
          </div>
          <div className="single-category">
            <div className="categories-available">
              <h2 className="category-name">Analyst Jobs</h2>
              <div className="image-box">
                <img className="img-category" src={buisness} alt="" />
              </div>
            </div>
          </div>
          <div className="single-category">
            <div className="categories-available">
              <h2 className="category-name">Restaurant Jobs</h2>
              <div className="image-box">
                <img className="img-category" src={restjob} alt="" />
              </div>
            </div>
          </div>
          <div className="single-category">
            <div className="categories-available">
              <h2 className="category-name">Nursing Jobs</h2>
              <div className="image-box">
                <img className="img-category" src={nursejob} alt="" />
              </div>
            </div>
          </div>
          <div className="single-category">
            <div className="categories-available">
              <h2 className="category-name">Teaching Jobs</h2>
              <div className="image-box">
                <img className="img-category" src={teachingjob} alt="" />
              </div>
            </div>
          </div>
          <div className="single-category">
            <div className="categories-available">
              <h2 className="category-name">Development Jobs</h2>
              <div className="image-box">
                <img className="img-category" src={webjob} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
