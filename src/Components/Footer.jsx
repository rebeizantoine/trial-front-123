import React from "react";
import "../Styles/footer.css";
import linkedin from "../Images/linkedin.png";
import facebook from "../Images/facebook.png";
import instagram from "../Images/instagram.png";
import certify from "../Images/certify.png";
import vertical from "../Images/vertical-bar.png";
import phone from "../Images/phone.png";
import email from "../Images/email.png";

const Footer = () => {
  return (
    <div className="certify">
      <div className="footer-start">
        <img className="certify-image" src={certify} alt="" />
        <p>
          CertifyRecruit is an online platform for assessing recruitment skills.
          It offers tools to evaluate sourcing, interviewing, and
          decision-making. Users get insights into strengths and areas to
          improve. Employers can certify candidates and employees in recruitment
          tasks, aiding role suitability decisions.
        </p>
        <div className="quick-links">
          <h3 className="quick-links-h3">Quick Links</h3>
          <ul className="quick-links-ul">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
          </ul>
        </div>
        <div className="contact-us-footer">
          <h3>Contact Us</h3>
          <div className="phone-footer">
            <img src={phone} alt="" />
            +961 76045061
          </div>
          <div className="email-footer">
            <img src={email} alt="" />
            jobblitz@gmail.com
          </div>
        </div>
        <div className="socials">
          <img src={facebook} alt="" />
          <img src={linkedin} alt="" />
          <img src={instagram} alt="" />
        </div>
      </div>
      <img className="vertical-line" src={vertical} alt="" />
    </div>
  );
};

export default Footer;
