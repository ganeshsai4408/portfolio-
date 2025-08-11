import React from "react";
import "./Experience.css";
import { FiExternalLink } from "react-icons/fi";

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">
        <span className="hash">#</span>experience
        <span className="line"></span>
      </h2>

      <div className="experience-card">
        <div className="experience-header">
          <div className="role">Episilon Pi Club - VBIT</div>
          <div className="date">Sep 2022 - 2024</div>
        </div>
        
        <div className="experience-content">
          <p>
            Designed and deployed the club's website using HTML, CSS, and JavaScript, improving UX and increasing member engagement by 50%. Built a fully responsive UI, reducing mobile bounce rates by 30%, and maintained 100% uptime via GitHub during events.
          <div className="links">
                      <a href="#" className="btn"><FiExternalLink /> Live </a>
          </div>
          </p>
          <p>
            PDF Summarizer Developed a PDF summarization tool using Hugging Face NLP models for coherent, structured summaries. Features an intuitive upload interface and processes documents up to 20 pages quickly and accurately.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience; 