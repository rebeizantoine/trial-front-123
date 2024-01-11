import React from 'react'
import '../Styles/signupemp.css'
import Dropdown from './Dropdown'

const Singnupemp = () => {
    return (
        <div>
          <div className='all-boxes'>
            <div className='top-box'>
              <h2>Employer Registration</h2>
              <p>Please, fill the form below for instant registration.</p>
            </div>
            <div className="bot-box">
              <h2>Account Info</h2>
              <div className="leftright">
                <div className='left-signup'>
                  <div className="username123">
                    <label className="labelf123">
                      <span className="blue-asterisk">*</span>First Name:
                    </label>
                    <input
                      className="inputf123"
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                    />
                  </div>
                  <div className="username123">
                    <label className="labelf123">
                      <span className="blue-asterisk">*</span>Last Name:
                    </label>
                    <input
                      className="inputf123"
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                    />
                  </div>
                  <div className="username123">
                    <label className="labelf123">
                      <span className="blue-asterisk">*</span>Personal Image:
                    </label>
                    <p className='para-upload'>(5MB max: .jpeg, .gif, .bmp)</p>
                    <input
                      className="inputf1234"
                      type="file"
                      id="personalImage"
                      name="personalImage"
                      required
                    />
                  </div>
                  <div className="username123">
                    <label className="labelf123">
                      <span className="blue-asterisk">*</span>Username:
                    </label>
                    <input
                      className="inputf123"
                      type="text"
                      id="username"
                      name="username"
                      required
                    />
                  </div>
                  <div className="username123">
                    <label className="labelf123">
                      <span className="blue-asterisk">*</span>Password:
                    </label>
                    <input
                      className="inputf123"
                      type="password"
                      id="password"
                      name="password"
                      required
                    />
                  </div>
                  <div className="username123">
                    <label className="labelf123">
                      <span className="blue-asterisk">*</span>Confirm Password:
                    </label>
                    <input
                      className="inputf123"
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      required
                    />
                  </div>
                  <div className="username123">
                    <label className="labelf123">Password:</label>
                    <input
                      className="inputf123"
                      type="password"
                      id="anotherPassword"
                      name="anotherPassword"
                      required
                    />
                  </div>
                </div>
                <div className='right-signup'>
                  <div><label className="labelf12345">
                      <span className="blue-asterisk">*</span>Location:</label>
                    <Dropdown />
                    </div>
                  <div><label className="labelf12345">
                      <span className="blue-asterisk">*</span>Nationality:</label>
                    <Dropdown />
                    </div>
                  
                  
                  <div className="username1234">
                    <label className="labelf123">
                      <span className="blue-asterisk">*</span>Phone:
                    </label>
                    <input
                      className="inputf123"
                      type="password"
                      id="phone"
                      name="confirmPassword2"
                      required
                    />
                  </div>
                  <div className="username1234">
        <label className="labelf123">
          <span className="blue-asterisk">*</span>Address:
        </label>
        <textarea
          className="inputf123"
          id="address"
          name="address"
          required
        ></textarea>
      </div>
      <div className='gender123'>
      <label className="labelf1234">
        <span className="blue-asterisk">*</span>Gender:
      </label>
      <div className="gender-select">
        <input id="setC_male" type="checkbox"  /> 
        <label htmlFor="setC_male">Male</label>
    
        <input id="setC_female" type="checkbox" />
        <label htmlFor="setC_female">Female</label>
      </div>
    </div>
                </div>
              </div>
            </div>
            <div className="lower-box">
              <label>
                <input type="checkbox" id="termsCheckbox" className='agreementpara' required />
                I accept all the terms of the <a href="" className="blue-link">license agreement</a>.
              </label>
              <div className='button-reg'>
              <button className='register-signup'>Register</button>
              </div>
            </div>
            </div>
          </div>
        
      );
    };

export default Singnupemp