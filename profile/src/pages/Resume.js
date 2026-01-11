import React from "react";
import "./Resume.css";

function Resume() {
  return (
    <section className="resume-section">
        <div className="resume-card">
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <h2 className="resume-title">Resume</h2>
          <a
            href="/Jagatheesh%20K%20Profile.pdf"
            download="Jagatheesh_K_Profile.pdf"
            className="download-resume-btn"
            title="Download resume"
            aria-label="Download resume"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 44,
              height: 44,
              background: '#29b6f6',
              color: '#fff',
              borderRadius: '50%',
              textDecoration: 'none',
              fontSize: 16,
              boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
              transition: 'transform 120ms ease',
            }}
          >
            <i className="fas fa-download" aria-hidden="true" />
          </a>
        </div>
        <div className="resume-title-underline"></div>
        <div className="resume-desc">Ramco Systems | SQL Server |T-SQL | C# | Dotnet web api| EF| ASP.NET |Performance Tuning | ERP | SSRS |Email Template Design| ETL |SSIS.
        </div>
        <div className="resume-row">
          {/* Left Column */}
          <div className="resume-col">
            <div className="resume-block">
              <div className="resume-block-title">Summary</div>
              <div className="resume-timeline">
                <div className="resume-timeline-item">
                  <div className="resume-timeline-title">JAGATHEESH. K</div>
                  <div className="resume-timeline-desc" style={{fontStyle:'italic'}}>
                    I am a likeable and enthusiastic person with a passion for problem-solving and critical thinking. I have over 3 years of experience as an ERP Application developer. Collaborative with diverse teams to incorporate different viewpoints and ensure solutions. I am seeking to step forward in my career and knowledge.
                  </div>
                  <ul className="resume-timeline-list">
                    <li>Chennai - 600119</li>
                    <li>+91 6381329450</li>
                    <li><a href="mailto:jagatheeshk007@gmail.com">jagatheeshk007@gmail.com</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="resume-block">
              <div className="resume-block-title">Profile Summary</div>
              <div className="resume-timeline">
                <div className="resume-timeline-item">
                  <ul className="resume-timeline-list">
                    <li>3+ year experience in SQL Server (T-Sql).</li>
                    <li>Working on the concept of SSRS, Design, Development and Debugging the Stored procedure using T-SQL.</li>
                    <li>Strong experience, Quality standard base and optimizing the code runtime performance.</li>
                    <li>Good experience of giving technical support to the team and reducing bugs in multiple environments for good productivity in live server.</li>
                    <li>Experience in handling and designing in SSRS Report Server.</li>
                    <li>Designed email configuration and implemented workflows to trigger automated emails and reports.</li>
                    <li>REST and API Development using Dotnet and Tested using POSTMAN tool.</li>
                    <li>Developed Chatbots using COPILOT Studio.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="resume-block">
              <div className="resume-block-title">Technical Skills</div>
              <div className="resume-timeline">
                <div className="resume-timeline-item">
                  <ul className="resume-timeline-list">
                    <li><b>Programming Languages:</b> C#, T-SQL</li>
                    <li><b>Web Design:</b> HTML, CSS, JavaScript</li>
                    <li><b>Application:</b> SSMS, SSRS, API Calls, Postman, Copilot Studio</li>
                    <li><b>Version Control System:</b> Git</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="resume-block">
              <div className="resume-block-title">Qualifications</div>
              <div className="resume-timeline">
                <div className="resume-timeline-item">
                  <div className="resume-timeline-title">B.E. Computer Science and Engineering</div>
                  <div className="resume-timeline-location">Jai Shriram Engineering College</div>
                  <div className="resume-timeline-desc">7.72 CGPA</div>
                </div>
              </div>
            </div>
            <div className="resume-block">
              <div className="resume-block-title">Certifications</div>
              <div className="resume-timeline">
                <div className="resume-timeline-item">
                  <ul className="resume-timeline-list">
                    <li>SQL Server</li>
                    <li>CF .NET</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Right Column */}
          <div className="resume-col">
            <div className="resume-block">
              <div className="resume-block-title">Work Experience</div>
              <div className="resume-timeline">
                <div className="resume-timeline-item">
                  <div className="resume-timeline-title">Project Trainee</div>
                  <div className="resume-timeline-period">Aug 2020 - Sep 2022</div>
                  <div className="resume-timeline-location">RadixO SYSTEM LTD (CHENNAI)</div>
                  <div className="resume-timeline-desc">Analyst Programmer - Purchase, Production, Reports</div>
                  <ul className="resume-timeline-list">
                    <li>Customized the Production Budget screen and implemented logic for <b>auto-generating item codes</b> and other descriptions based on input trends.</li>
                    <li>Designed and developed Product Structure reports and BOM reports tailored to manufacturing requirements.</li>
                    <li>Created the <b>Product Testing</b> screen and configured Email Template designs for automated alerts.</li>
                    <li>Configured workflow integration between Purchase Request (PR) and Purchase Order (PO) screens for seamless procurement processing.</li>
                    <li>Developed customized SSRS reports for tracking BOM usage, production status, and purchase deliverables.</li>
                  </ul>
                </div>
                <div className="resume-timeline-item">
                  <div className="resume-timeline-title">Analyst Programmer</div>
                  <div className="resume-timeline-period">Sep 2022 - Present</div>
                  <div className="resume-timeline-location">RadixO SYSTEM LTD (CHENNAI)</div>
                  <div className="resume-timeline-desc">Purchase, Production, Reports</div>
                  <ul className="resume-timeline-list">
                    <li>Customized and supported modules for Contracts, including Service-Based Contracts and one-time Contracts.</li>
                    <li>Developed and maintained Summary Reports with detailed breakdowns and integrated billing logic.</li>
                    <li>Created dashboards and charts for group delivery, export, and auditing.</li>
                    <li>Provided training and product support for <b>Payable and Receivable</b> management modules to align client-specific financial workflows.</li>
                    <li>Performed end-to-end sales and shipping modules including Invoicing, planning, and tracking sales and payments.</li>
                    <li>Enhanced automation and features in Purchase and Subcontracting modules including Purchase and Subcontracting planning.</li>
                    <li>Provided ongoing support, bug fixes, and enhancements across all assigned modules ensuring high system uptime and client satisfaction.</li>
                    <li>Developed and deployed 40+ Web APIs and GraphQL APIs to support a React-based portal for Facility Management operations.</li>
                  </ul>
                </div>
                <div className="resume-timeline-item">
                  <div className="resume-timeline-title">Open WorksIS</div>
                  <div className="resume-timeline-period">Feb 2023 - Present</div>
                  <div className="resume-timeline-location">Facility Management Systems</div>
                  <div className="resume-timeline-desc">Analyst Programmer</div>
                  <ul className="resume-timeline-list">
                    <li>Customized and supported modules for Contracts, including Service-Based Contracts and one-time Contracts.</li>
                    <li>Developed and maintained Summary Reports with detailed breakdowns and integrated billing logic.</li>
                    <li>Created dashboards and charts for group delivery, export, and auditing.</li>
                    <li>Provided training and product support for Payable and Receivable management modules to align client-specific financial workflows.</li>
                    <li>Performed end-to-end sales and shipping modules including Invoicing, planning, and tracking sales and payments.</li>
                    <li>Enhanced automation and features in Purchase and Subcontracting modules including Purchase and Subcontracting planning.</li>
                    <li>Provided ongoing support, bug fixes, and enhancements across all assigned modules ensuring high system uptime and client satisfaction.</li>
                    <li>Developed and deployed 40+ Web APIs and GraphQL APIs to support a React-based portal for Facility Management operations.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
