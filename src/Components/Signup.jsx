import React from 'react';
import '../Styles/signup.css';

const Signup = () => {
  return (
    <div>
      <div className='all boxes'>
        <div className='top-box'>
          <h2>Job Seeker Registration</h2>
          <p>Please, fill the form below for instant registration.</p>
        </div>
        <div className="bot-box">
          <h2>Account Info</h2>
          <div className="username123">
            <label className="labelf123">
              <span className="blue-asterisk">*</span>First Name:
            </label>
            <input
              className="inputf123"
              type="text"
              id="username123f"
              name="usernamef"
              required
            />
          </div>
          <div className="username123">
            <label className="labelf123"><span className="blue-asterisk">*</span>Last Name:</label>
            <input
              className="inputf123"
              type="text"
              id="username123f"
              name="username123f"
              required
            />
          </div>
          <div className="username123">
            <label className="labelf123">
              <span className="blue-asterisk">*</span>username123:
            </label>
            <input
              className="inputf123"
              type="text"
              id="username123f"
              name="username123f"
              required
            />
          </div>
          <div className="username123">
            <label className="labelf123"><span className="blue-asterisk">*</span>Password:</label>
            <input
              className="inputf123"
              type="text"
              id="username123f"
              name="username123f"
              required
            />
          </div>
          <div className="username123">
            <label className="labelf123"><span className="blue-asterisk">*</span>Confirm Password:</label>
            <input
              className="inputf123"
              type="text"
              id="username123f"
              name="username123f"
              required
            />
          </div>
          <div className="username123">
            <label className="labelf123">Password:</label>
            <input
              className="inputf123"
              type="text"
              id="username123f"
              name="username123f"
              required
            />
          </div>
        </div>
        <div className="lower-box">{/* Additional content can be added here if needed */}</div>
      </div>
    </div>
  );
};

export default Signup;
