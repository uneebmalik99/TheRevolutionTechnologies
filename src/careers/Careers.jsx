import React, { useEffect, useState } from "react";
import "./career.css";

const jobData = [
  {
    title: "Web Developer",
    location: "Rawalpindi",
    shortDesc: "We are looking for a skilled Full Stack Developer.",
    fullDesc:
      "We are looking for a Full Stack Developer skilled in React, Node.js, and modern frameworks. You will collaborate with designers and developers to build high-quality web applications.",
  },
  {
    title: "Mobile App Developer",
    location: "Rawalpindi",
    shortDesc: "We are looking for talented Mobile App Developers.",
    fullDesc:
      "You should have experience in Flutter or React Native. You'll work on developing apps that deliver exceptional user experiences across Android and iOS.",
  },
  {
    title: "UI/UX Designer",
    location: "Rawalpindi",
    shortDesc: "We are hiring creative UI/UX designers.",
    fullDesc:
      "Your role will focus on creating engaging, user-friendly interfaces. Experience with Figma, Adobe XD, and modern design trends is a plus.",
  },
];

const Careers = ({ title }) => {
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    document.title = `${title} - The Revolution Technologies`;
  }, [title]);

  return (
    <>
      {/* --- Header Section --- */}
      <div className="container-fluid career-hero">
        <div className="row cpar">
          <div className="col-md-6 hero-content">
            <h1 id="career-p1">Careers</h1>
            <p className="career-subtitle">
              Discover your next career move with one of the leading Tech Firms!
            </p>
            <div className="hero-cta">
              <button
                className="cta-button"
                onClick={() =>
                  document
                    .getElementById("vacancies-section")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                View Open Positions
              </button>
            </div>
          </div>
          <div className="col-md-6 career-column">
            <img src="images/career2.png" id="career-img1" alt="career" />
          </div>
        </div>
      </div>

      {/* --- Why Join Section --- */}
      <div className="container-fluid why-join-section">
        <div className="why-join-content">
          <h2>Why Join The Revolution Technologies?</h2>
          <p className="why-join-desc">
            We believe in innovation, collaboration, and growth. Join a team
            that values creativity and technical excellence while helping you
            reach your full potential.
          </p>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">💡</div>
              <h4>Innovation</h4>
              <p>Work with cutting-edge technologies and modern frameworks</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">👥</div>
              <h4>Collaboration</h4>
              <p>
                Join a supportive team that values teamwork and knowledge
                sharing
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🚀</div>
              <h4>Growth</h4>
              <p>Continuous learning opportunities and career advancement</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- Open Vacancies --- */}
      <div className="container-fluid vacancies-section" id="vacancies-section">
        <h2 className="section-title">OPEN VACANCIES</h2>
        <p className="section-subtitle">
          Find your perfect role and join our innovative team
        </p>

        <div className="vacancies-container">
          {jobData.map((job, index) => (
            <div className="job-card" key={index}>
              <div className="job-header">
                <h3 className="job-title">{job.title}</h3>
                <span className="job-location">📍 {job.location}</span>
              </div>

              <div className="job-description">
                <p className="job-short-desc">{job.shortDesc}</p>
                <button
                  className="read-more-btn"
                  onClick={() => setSelectedJob(job)}
                >
                  Read more →
                </button>
              </div>

              <div className="job-actions">
                <button
                  className="apply-btn"
                  onClick={() =>
                    window.open(
                      "mailto:info@therevolutiontechnologies.tech?subject=Application for " +
                        job.title
                    )
                  }
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* --- Modal --- */}
        {selectedJob && (
          <div className="job-modal">
            <div className="job-modal-content">
              <span className="close-btn" onClick={() => setSelectedJob(null)}>
                ×
              </span>
              <h3>{selectedJob.title}</h3>
              <div className="job-meta">
                <span className="location-tag">📍 {selectedJob.location}</span>
              </div>
              <p className="job-full-desc">{selectedJob.fullDesc}</p>
              <div className="modal-buttons">
                <button
                  className="btn-close"
                  onClick={() => setSelectedJob(null)}
                >
                  Close
                </button>
                <button
                  className="btn-apply"
                  onClick={() =>
                    window.open(
                      "mailto:info@therevolutiontechnologies.tech?subject=Application for " +
                        selectedJob.title
                    )
                  }
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Careers;
