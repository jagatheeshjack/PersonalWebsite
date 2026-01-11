import React from "react";
import "./About.css";
import "./Skills.css";

function About() {
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
  return (
    <section className="about-section">
      <h2 className="about-title">About</h2>
      <div className="about-title-underline"></div>
      <div className="about-desc">
       I am a likable and enthusiastic professional with a strong passion for problem-solving and critical thinking, bringing 3.6+ years of experience in backend development and data processing. I enjoy collaborating with diverse teams to deliver effective solutions and am eager to continuously grow my skills and career.</div>
      <div className="about-content-row">
        <div className="about-img">
          <img src="Profile.jpeg" alt="Jagatheesh K" />
        </div>
        <div className="about-info">
          <div className="about-info-title">Dotnet/C# and Sql Server Developer.</div>
          <div className="about-info-desc">
            3.6-years of experience in SQL Server [T-SQL] Development and web Api Development.
          </div>
          <div className="about-details">
            <ul>
              <li><b>Birthday:</b> 15 Dec 2000</li>
              <li><b>Website:</b> </li>
              <li><b>Phone:</b> +91 6383329450</li>
              <li><b>City:</b>Chennai - 600119</li>
            </ul>
            <ul>
              <li><b>Age:</b> 25</li>
              <li><b>Degree:</b> BE CSE</li>
              <li><b>Email:</b> jagatheeshjack07@gmail.com</li>
              <li><b>Marital Status:</b> Single</li>
            </ul>
          </div>
          <div className="about-footer">
            Passionate about .NET, SQL Server, and building scalable backend solutions 
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="skills-container">
          <h2 className="skills-title">Skills</h2>
          <div className="skills-title-underline"></div>
          <div className="skills-desc">
           Proficient in T-SQL, C# .NET, Entity Framework, ADO.NET, and  with strong experience in database development,
            Web API and GraphQL services, and ETL projects. Skilled in tools such as SSMS, SSRS, SSIS, Visual Studio, 
            Postman, and API Curio, with hands-on experience using Git for version control and working with Elasticsearch, 
            SendGrid webhooks, and OLTP systems. </div>
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
            <div className="skills-desc">
           Continuously learning • Problem Solver • Backend & Data Processing</div>
        </div>
      </section>
    </section>
  );
}

export default About;
