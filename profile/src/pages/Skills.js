import React from "react";
import "./Skills.css";

const skillsLeft = [
  { label: "Sql Server", value: 100 },
  { label: "DBMS", value: 100 },
  { label: "SSRS | SSIS", value: 90 },
  { label: "Git", value: 100 },
];
const skillsRight = [

  { label: "C#", value: 100 },
  { label: "Dotnet", value: 75 }, 
  { label: "Microservices", value: 80 }, 
  { label: "WebApi and EF Core", value: 100 }
];

function Skills() {
  return (
    <section className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-title-underline"></div>
        <div className="skills-desc">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
        </div>
        <div className="skills-row">
          <div className="skills-col">
            {skillsLeft.map(skill => (
              <div className="skill" key={skill.label}>
                <div className="skill-label-row">
                  <span className="skill-label">{skill.label}</span>
                  <span className="skill-value">{skill.value}%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar" style={{ width: `${skill.value}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="skills-col">
            {skillsRight.map(skill => (
              <div className="skill" key={skill.label}>
                <div className="skill-label-row">
                  <span className="skill-label">{skill.label}</span>
                  <span className="skill-value">{skill.value}%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar" style={{ width: `${skill.value}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
