import React from "react";
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";
import "./Footer.css";
import logo from "../../../Media/sripada logo2.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Address Section */}
        <div className="footer-section address">
          <img src={logo} alt="Company Logo" className="footer-logo" />
          <p>
            <a href="mailto:sripadatechnosoft@gmail.com">
            📧{" "} sripadatechnosoft@gmail.com
            </a>
          </p>
          <p><a href="tel:+919676534304">📞 9676534304 </a></p>
          <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="facebook">
          <FaFacebook />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="linkedin">
          <FaLinkedin />
        </a>
        <a href="https://youtube.com/@sripadatechnosoft?si=fjegembM0MVe6KUM" target="_blank" rel="noopener noreferrer" className="youtube">
          <FaYoutube />
        </a>
        <a href="https://www.instagram.com/sripadatechnosoft/" target="_blank" rel="noopener noreferrer" className="instagram">
          <FaInstagram />
        </a>
      </div>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="#">C</a>
            </li>
            <li>
              <a href="#">Java</a>
            </li>
            <li>
              <a href="#">Python</a>
            </li>
            <li>
              <a href="#">Aptitude</a>
            </li>
            <li>
              <a href="#">Soft Skills</a>
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="footer-section support">
          <h2>Support</h2>
          <ul>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Sample Videos</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Sripada Technosoft. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
