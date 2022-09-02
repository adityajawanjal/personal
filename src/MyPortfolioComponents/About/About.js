import React from "react";
import "./About.css";
import SkillsList from "./SkillsList";

const About = () => {
  return (
    <>
      <div className="container-about">
        <h2 id="about-h2">About Me</h2>
        <div id="about-info">
          <p>I am a passionate Front-end Web developer .</p>
          <p>Learning new stuff everyday.</p>
        </div>
        <h2 className="skills">My Skills</h2>
        <div className="skillimages">
          {SkillsList.map((e) => {
            return (
              <div className="allimages" key={e.name}>
                <img src={e.url} alt="skill" className="skillimg" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default About;
