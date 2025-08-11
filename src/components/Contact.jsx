import React from "react";
import "./Contact.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">
        <span className="hash">#</span>Contact
        <span className="line"></span>
      </h2>

      <div className="contact-content">
        <div className="contact-left">
          <p className="contact-description">
            I’m on the lookout for exciting internship opportunities to sharpen my skills, and I’m also open to freelance projects — feel free to reach out for anything we can build or solve together.
          </p>
        </div>

        <div className="contact-right">
          <div className="message-card">
            <h3 className="message-title">Let’s Connect</h3>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">
                  <a href="https://www.linkedin.com/in/ganesh-sai-bendre-929a9b2a4/">
                  <FaLinkedin />
                  </a>
                </span>
                <span className="contact-text">ganesh sai bendre</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">
                  <span className="contact-icon">
                  <a href="https://www.linkedin.com/in/ganesh-sai-bendre-929a9b2a4/">
                  <FaEnvelope/>
                  </a>
                </span>
                </span>
                <span className="contact-text">ganeshsaibendre4408@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      <footer className="footer">
        <div className="footer-left">
          <div className="logo-container">
            
            <div className="name-container">
              <span className="first-name">GANESH <span className="last-name">SAI</span>
              </span>
            </div>
          </div>
          <p className="subtitle">Full stack Developer and AI Enthusiast</p>
        </div>

        <div className="footer-right">
          <h4 className="media-title">Media</h4>
          <div className="social-icons">
            <span className="social-icon">
              <a href="https://www.linkedin.com/in/ganesh-sai-bendre-929a9b2a4/">
                  <FaLinkedin />
              </a>
            </span>
            <span className="social-icon">
              <a href="https://github.com/ganeshsai4408">
              <FaGithub />
              </a>
              </span>
            
          </div>
        </div>
      </footer>

      <div className="copyright">
        © Copyright 2025. Made by Ganesh sai
      </div>
    </section>
  );
}

export default Contact; 