import React from "react";
import "../Styles/cv.css";

const Cv = () => {
  return (
    <div className="border-cv">
      <div className="cv-first-flex">
        <div>
          <h1>Firstname</h1>{" "}
        </div>
        <div>
          <h2>Lastname</h2>{" "}
        </div>
      </div>
      <div className="cv-second-flex">
        <div>Home Street Address</div>
        <div>City,State</div>
        <div>Your Email</div>
        <div>phone number</div>
      </div>
      <div className="all-experiences">
        <div className="first-experience">
          <div className="experiencetitle">
            <h2>EXPERIENCE</h2>
            <hr />
          </div>
          <div className="experience1">
            <div className="experience-flex-1">
              <div className="oraganization">
                <div className="flex-1">
                  <h2>Organization</h2>
                </div>
                <div className="flex-2">
                  <h4>City,State(or Remote)</h4>
                </div>
              </div>
            </div>
            <div className="experience-flex-2">
              <div>
                <h3>Position Title</h3>
              </div>
              <div>
                <h4>Month Year</h4>
              </div>
            </div>
            <div className="experience-text">
              <ul>
                <li>
                  Beginning with your most recent position, describe your
                  experience, skills, and resulting outcomes in bullet or
                  paragraph form.
                </li>
                <li>
                  Begin each line with an action verb and include details that
                  will help the reader understand your accomplishments, skills,
                  knowledge, abilities, or achievements.
                </li>
                <li>
                  Quantify where possible. Do not use personal pronouns; each
                  line should be a phrase rather than a full sentence.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="first-experience">
          <div className="experiencetitle">
            <hr />
          </div>
          <div className="experience1">
            <div className="experience-flex-1">
              <div className="oraganization">
                <div className="flex-1">
                  <h2>Organization</h2>
                </div>
                <div className="flex-2">
                  <h4>City,State(or Remote)</h4>
                </div>
              </div>
            </div>
            <div className="experience-flex-2">
              <div>
                <h3>Position Title</h3>
              </div>
              <div>
                <h4>Month Year</h4>
              </div>
            </div>
            <div className="experience-text">
              <ul>
                <li>
                  Beginning with your most recent position, describe your
                  experience, skills, and resulting outcomes in bullet or
                  paragraph form.
                </li>
                <li>
                  Begin each line with an action verb and include details that
                  will help the reader understand your accomplishments, skills,
                  knowledge, abilities, or achievements.
                </li>
                <li>
                  Quantify where possible. Do not use personal pronouns; each
                  line should be a phrase rather than a full sentence.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="education-section">
          <h2>EDUCATION</h2>
          <hr />
          <div className="education-flex-1">
            <div className="education-name">HARVARD UNIVERSITY</div>
            <div>
              <h3 className="location-education">Cambride,MA</h3>
            </div>
          </div>
          <div className="education-flex-2">
            <div>
              <h3 className="degree-education">
                Degree, Concentration. GPA [Note: Optional]
              </h3>
              <h3 className="additional-explination">
                Relevant Coursework: [Note: Optional. Awards and honors can also
                be listed here.]
              </h3>
            </div>
            <div>
              <h3 className="graduation-date">Graudation Date</h3>
            </div>
          </div>
          <div className="education-flex-1">
            <div className="education-name">HARVARD UNIVERSITY</div>
            <div>
              <h3 className="location-education">Cambride,MA</h3>
            </div>
          </div>
          <div className="education-flex-2">
            <div>
              <h3 className="degree-education">
                Degree, Concentration. GPA [Note: Optional]
              </h3>
              <h3 className="additional-explination">
                Relevant Coursework: [Note: Optional. Awards and honors can also
                be listed here.]
              </h3>
            </div>
            <div>
              <h3 className="graduation-date">Graudation Date</h3>
            </div>
          </div>
        </div>
        <div className="skills">
          <h2>SKILLS & INTERESTS</h2>
          <hr className="hr-bot" />
        </div>
        <div className="skills-names">
          <ul>
            <li>Skill 1</li>
            <li>Skill 2</li>
            <li>Skill 3</li>
            <li>Skill 4</li>
            <li>Skill 5</li>
            <li>Skill 6</li>
            <li>Skill 7</li>
            <li>Skill 8</li>
            <li>Skill 9</li>
            <li>Skill 10</li>
            <li>Skill 11</li>
            <li>Skill 12</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cv;
