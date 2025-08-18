import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import "./Projects.css";
import projectImage1 from "../assets/project1.jpg"; // Adjust the path as needed
import projectImage2 from "../assets/project2.png"; // Adjust the path as needed
import projectImage3 from "../assets/project3.jpg"; // Adjust the path as needed
import projectImage4 from "../assets/project4.jpg"; // Adjust the path as needed
import projectImage5 from "../assets/project5.jpg"; // Adjust the path as needed
import projectImage6 from "../assets/project6.jpg"; // Adjust the path as needed
function Projects() {
  return (
    <section id="projects" className="projects-section">
      {/* Section Header */}
      <h2 className="section-title">
        <span className="hash">#</span>projects
        <span className="line"></span>
      </h2>

      {/* Project 1 */}
      <div className="project-card">
        <div className="project-image-container">
          
        <img src={projectImage1}  alt="Sign Language Recognition" />
        <div className="project-caption">Sign Language Recognition System</div>
        </div>
        <div className="project-info">
          <p>
            TensorFlow + OpenCV Real-Time Sign Language Detection System detect
            and interpret sign language gestures with high accuracy. Designed
            for accessibility, it works reliably even with complex backgrounds.
          </p>
          <div className="tags">
            <span className="tag">TensorFlow</span>
            <span className="tag">Open CV</span>
            <span className="tag">MediaPipe</span>
            <span className="tag">Python</span>
          </div>
          <div className="links">
            <a href="https://github.com/ganeshsai4408/sign-language-recognition" className="btn"><FaGithub /> Github</a>
          </div>
        </div>
      </div>

      {/* project2 */}
       <div className="project-card">
      
        <div className="project-info">
          <p>
            An AI-powered ticket routing system using Inngest workflows to intelligently categorize and assign tickets based on skill-based admin matching, enabling efficient and automated support routing.
          </p>
          <div className="tags">
            <span className="tag">Gen AI</span>
            <span className="tag">Inngest </span>
            <span className="tag">Node.js</span>
            <span className="tag">React.js</span>
            <span className="tag">Render</span>
            <span className="tag">Vercel</span>

          </div>
          <div className="links">
            <a href="https://ai-ticket-system-frontend-nw7b.vercel.app/" className="btn"><FiExternalLink/>Live</a>
          </div>
        </div>
           <div className="project-image-container">
          
        <img src={projectImage3}  alt="Sign Language Recognition" />
        <div className="project-caption">AI Ticketing System</div>
        </div>
      </div>
    
      {/* project3 */}
      <div className="project-card">
        <div className="project-image-container">
          
        <img src={projectImage2}  alt="Sign Language Recognition" />
        <div className="project-caption">Notes App</div>
        </div>
        <div className="project-info">
          <p>
            A fast and responsive notes application built with React.js, featuring 1-second keyword search and local storage for offline persistence.
          </p>
          <div className="tags">
            <span className="tag">React.js</span>
            <span className="tag">Local Storage</span>
            
            <span className="tag">Responsive</span>
          </div>
          <div className="links">
            <a href="https://notes-app-nxbn.vercel.app/" className="btn"><FiExternalLink/> Live</a>
          </div>
        </div>
        
        
      </div>
      
      {/* project4 */}
      <div className="project-card">
        <div className="project-info">
          <p>
            Node.js Discord bot powered by OpenAI that offers intelligent study planning and educational assistance through natural language interactions. It integrates seamlessly with the Discord API to provide personalized, real-time support for learners.
          </p>
          <div className="tags">
            <span className="tag">Node.js</span>
            <span className="tag">Gen AI </span>
            <span className="tag">Gemini API</span>
            <span className="tag">Discord.js</span>
            <span className="tag">Render</span>
          </div>
          <div className="links">
            <a href="https://gen-bot-web.vercel.app/" className="btn"><FiExternalLink/> Live</a>
          </div>
        </div>
        <div className="project-image-container">
          
        <img src={projectImage4}  alt="Sign Language Recognition" />
        <div className="project-caption">GenAI Discord Bot</div>
        </div>
        
      </div>
      {/*project5 */}
      <div className="project-card">
        <div className="project-image-container">
          
        <img src={projectImage5}  alt="Sign Language Recognition" />
        <div className="project-caption">Responsive Food Ordering Web App</div>
        </div>
        <div className="project-info">
          <p>
            A slick, responsive web app built with React.js that lets users browse a dynamic menu, customize their orders, and manage their cart in real-time. Features include customizable meals, live cart updates, and a streamlined checkout process. Deployed on Vercel for seamless access.
           </p> 
          <div className="tags">
            <span className="tag">React.js</span>
            <span className="tag">JavaScript (ES6+)</span>
            <span className="tag">HTML5</span>
            <span className="tag">CSS3</span>
            <span className="tag">Context API</span>
           

          </div>
          <div className="links">
            <a href="https://react-food-order-app-swart.vercel.app/" className="btn"><FiExternalLink/>Live</a>
          </div>
        </div>
      </div>
      {/*project6*/}
       <div className="project-card">
        <div className="project-info">
          <p>
           A full-stack URL shortener that generates short links for long URLs, tracks click counts, and displays all shortened URLs with stats — built using Node.js, Express, MongoDB, and EJS.
          </p>
          <div className="tags">
            <span className="tag">Node.js</span>
            <span className="tag">Express.js</span>
            <span className="tag">MongoDB</span>
            <span className="tag">HTML5</span>
            <span className="tag">JavaScript</span>
          </div>
          <div className="links">
            <a href="https://url-shortner-vvaq.onrender.com" className="btn"><FiExternalLink/> Live</a>
          </div>
        </div>
        <div className="project-image-container">
          
        <img src={projectImage6}  alt="Sign Language Recognition" />
        <div className="project-caption">GenAI Discord Bot</div>
        </div>
        
      </div>

    </section>
  );
}

export default Projects;
