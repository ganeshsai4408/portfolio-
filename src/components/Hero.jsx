import "./Hero.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import profilePic from "../assets/profilePic.jpg";


export default function Hero() {
  return (
    <section className="hero-container" id="home">
      <div className="hero-content">
        <h2>
          Hey I’m <span className="purple">Ganesh sai Bendre</span><br />
          Aspiring <span className="purple">Fullstack developer</span> <br />
          and <span className="purple">AI Enthusiast</span>
        </h2>
        <p>
          I love building things that live on the internet from sleek, responsive websites to AI-powered applications. Every project I take on is a chance to learn, innovate, and push boundaries.
        </p>
        <div className="buttons">
          <a href="/GaneshBendre(1)[1].pdf" download className="resume-btn">
            Resume <FiDownload />
          </a>
          <div className="social-container">
            <a href="https://www.linkedin.com/in/ganesh-sai-bendre-929a9b2a4/" target="_blank" rel="noopener noreferrer" className="icon-circle">
              <FaLinkedin />
            </a>
            <a href="https://github.com/ganeshsai4408" target="_blank" rel="noopener noreferrer" className="icon-circle">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img
          src={profilePic}  // or {profileImg} if imported
          alt="Ganesh Sai Bendre"
        />
      </div>
    </section>
  );
}