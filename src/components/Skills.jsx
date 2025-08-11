import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">
        <span className="hash">#</span>skills
        <span className="line"></span>
      </h2>

      <div className="skills-grid">
        {/* Languages */}
        <div className="skill-card">
          <div className="skill-card-header">Languages</div>
          <ul>
            <li>Python</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>C++</li>
             <li>SQL</li>
          </ul>
        </div>

        {/* Frameworks & Libraries */}
        <div className="skill-card">
          <div className="skill-card-header">Frameworks & Libraries</div>
             <strong>Frontend:</strong>
            <ul>
               <li>React.js</li>
                <li>Context API</li>
                <li>Tailwind CSS / CSS Modules</li>
            </ul>

            <strong>Backend:</strong>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
            </ul>

            <strong>AI / ML:</strong>
            <ul>
              <li>TensorFlow</li>
              <li>OpenCV</li>
              <li>MediaPipe</li>
            </ul>

             <strong>Templating:</strong>
            <ul>
              <li>EJS</li>
            </ul>
        </div>

        {/* Tools */}
        <div className="skill-card">
          <div className="skill-card-header">Tools</div>
           <ul>
          <li>Git & GitHub</li>
          <li>VS Code</li>
          <li>Docker</li>
          <li>Postman</li>
          <li>Firebase</li>
          <li>MongoDB</li>
          <li>Supabase</li>
          <li>Vercel</li>
          <li>Render</li>
          <li>Microsoft Azure AI Services</li>
        </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
