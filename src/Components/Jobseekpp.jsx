import React from 'react';
import '../Styles/jobseekpp.css';
import handsalary from '../Images/hand-salary.png'
import topimage from '../Images/face.png'

const Jobseekpp = () => {
  return (
    <div className='all-boxes-jobseek'>
      <div className='highest-box'>
        <div className='image-highest'><img src={topimage} alt="" /></div>
        <div className='profilething'>
        <h2>Antoine Rebeiz</h2>
        <div className="info-box">
          <div className="info-item">
          <div className='pergunta'>  <strong>Location:</strong></div> <div className='answer'>Lebanon - Jounieh</div>
          </div>
          <div className="info-item">
          <div className='pergunta'>  <strong>Education:</strong></div> <div className='answer'>Master’s degree, Civil Engineering</div>          </div>
          <div className="info-item">
          <div className='pergunta'>  <strong>Experience:</strong></div> <div className='answer'>0 years,0 months</div>          </div>
        </div>
      </div>
      </div>
      <div className="second-box">
        <h2>Personal Information</h2>
        <div className="info-box-1">
          <div className="info-item-1">
          <div className='pergunta-1'>  <strong>Name:</strong></div> <div className='answer-1'>Antoine Rebeiz</div>
          </div>
          <div className="info-item-1">
          <div className='pergunta-1'>  <strong>Birth Date:</strong></div> <div className='answer-1'>22-03-2000</div>          </div>
          <div className="info-item-1">
          <div className='pergunta-1'>  <strong>Gender:</strong></div> <div className='answer-1'>Male</div></div>
          <div className="info-item-1">
          <div className='pergunta-1'>  <strong>Nationality:</strong></div> <div className='answer-1'>Lebanese</div>
          </div>
          <div className="info-item-1">
          <div className='pergunta-1'>  <strong>Residence Country:</strong></div> <div className='answer-1'>Lebanon</div>          </div>
          <div className="info-item-1">
          <div className='pergunta-1'>  <strong>Marital status:</strong></div> <div className='answer-1'>Single</div></div>
        </div>
      </div>
      <div className="sidebyside">
        <div className='third-box'>
            <h2>Contact Information</h2>
            <p>This is the only way for employers to reach out to you. Make sure you add your contact details
correctly. </p>
<div className="info-item-1">
          <div className='pergunta-1'>  <strong>Email address</strong></div> <div className='answer-1'>antoine_rebeiz@hotmail.com</div></div>
          <div className="info-item-1">
          <div className='pergunta-1'>  <strong>Mobile number:</strong></div> <div className='answer-1'>+96176045061</div></div>
        </div>
        <div className="fourth-box">
            <h2>Upload CV  File</h2>
            <p>Attaching your CV file will
help employers to learn further about you</p>
<button>Attach CV</button>
        </div>  
      </div>
      <div className="last-box">
        <div className='inside-last-box'>
        <h2>My job applications</h2>
        <h3>IT Help Desk Support</h3>
        <div className='flex-1'>
        <h4>ONIX IT SOLUTIONS &nbsp;&nbsp;&nbsp;&nbsp;.  </h4><div className='job-location'><h5>Jounieh,Lebanon </h5></div>
        </div>
      <p className='description-small'>We are seeking a highly motivated and curstomer-oriented IT Help Desk Support Specialist to join our IT</p>
      <div className='flex-2'>
      <img src={handsalary} alt="" /> <p className='money'>$1,000 - $1,500</p> <p className='datenow'>6 days ago</p>
      </div>

      </div>
      </div>
    </div>
  );
};

export default Jobseekpp;
