import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom"; // Import useLocation
import "../Styles/header.css";

const Header = () => {
  const location = useLocation(); // Get the current location
  const isMainMenu = location.pathname === "/"; // Check if on the main menu page

  const scrollToSection = (sectionId, event) => {
    event.preventDefault();

    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <div>
      <div className="header1">
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <nav>
          <ul className="header-ul">
            <li>
              <a href="/">Home</a>
            </li>
            {/* <li>
              <a
                onClick={(e) => scrollToSection("about-us", e)}
                href="#about-us"
              >
                About Us
              </a>
            </li> */}
            <li>
              <a href="/category">Find Jobs</a>
            </li>

            <li>
              <a href="/login">Job Seekers</a>
            </li>
            <li>
              <a href="/loginemp">Employers</a>
            </li>

            {/* <li>
              <a href="">Create Your CV</a>
            </li> */}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
