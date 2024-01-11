import React from "react";
import "../Styles/jobdescription.css";

const jobdescription = () => {
  return (
    <div className="job-description-big">
      <h1 className="title-position">IT Administrator</h1>
      <h2 className="company-position">ONIX IT SOLUTIONS LLC</h2>
      <div className="first-flex1">
        <div className="location-position">Dubai.UAE </div>
        <div className="date-position"> 7 days ago</div>
      </div>
      <h3 className="reach-out">Reach out to the employer</h3>
      <div className="go-next">
        <h4 className="job-description">Job Descrtiption</h4>
        <h5 className="job-overview">Job Overview:</h5>
        <p className="job-text">
          We are seeking a highly motivated and customer-oriented IT Help Desk
          Support Specialist to join our dynamic team. As a key member of our IT
          department, you will be responsible for providing technical assistance
          and support to our employees, ensuring smooth and efficient operation
          of their computer systems and software applications. The ideal
          candidate will possess excellent communication skills, a strong
          technical aptitude, and a passion for delivering outstanding customer
          service.
        </p>
        <h4 className="skills">Skills:</h4>
        <h5 className="responsibilities"> Responsibilities:</h5>
        <h4 className="responsibility-1">
          {" "}
          -End-User Support: Provide timely and effective technical support to
          end-users via phone, email, and in-person, addressing hardware and
          software issues.
        </h4>
        <h4 className="responsibility-2">
          -Troubleshooting: Diagnose and resolve hardware and software problems,
          and escalate issues to higher-level support as needed.
        </h4>
        <h4 className="responsibility-3">
          -Software Installation and Configuration: Install, configure, and
          update software applications on user devices, ensuring compatibility
          and adherence to security policies.
        </h4>
        <h4 className="responsibility-4">
          -Hardware Maintenance: Perform routine maintenance and repairs on
          computer equipment, peripherals, and other IT devices
        </h4>
        <h4 className="responsibility-5">
          -User Training: Assist users in understanding and utilizing technology
          resources effectively through training sessions and documentation
        </h4>

        <h5 className="qualifications">Qualifications:</h5>
        <p className="qualification-1">
          1-Minimum of 3+ years of experience in IT support or a related field.
        </p>
        <p className="qualification-2">
          2-Able to join immediately. Strong written and verbal communication
          skills in English.
        </p>
        <p className="qualification-3">
          3-Proficiency in troubleshooting hardware and software issues.
        </p>
        <p className="qualification-4">
          4-Strong knowledge of Microsoft Windows and Office Suite.
        </p>
        <div className="info-item1-12">
          <div className="pergunta-123">
            {" "}
            <strong>Employement Type:</strong>
          </div>{" "}
          <div className="answer-1">Full Time Employee</div>
        </div>
        <div className="info-item1-12">
          <div className="pergunta-123">
            {" "}
            <strong>Monthly Salary Range:</strong>
          </div>{" "}
          <div className="answer-1">$1000-$1500</div>
        </div>
        <div className="info-item1-12">
          <div className="pergunta-123">
            {" "}
            <strong>Number of Vacancies:</strong>
          </div>{" "}
          <div className="answer-1">1</div>
        </div>
        <div className="info-item1-12">
          <div className="pergunta-123">
            {" "}
            <strong>Degree:</strong>
          </div>{" "}
          <div className="answer-1">Bachelor’s degree / higher diploma</div>
        </div>
      </div>
    </div>
  );
};

export default jobdescription;
