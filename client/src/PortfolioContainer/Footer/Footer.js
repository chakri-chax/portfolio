import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const SOCIALS = [
  { icon: faFacebookF, link: "https://web.facebook.com/chakri.dammu.9" },
  {
    icon: faLinkedinIn,
    link: "https://www.linkedin.com/in/d-l-chakravarthi-440a7a219/",
  },
  { icon: faGithub, link: "https://www.github.com/chakri-chax/" },
  { icon: faInstagram, link: "https://www.instagram.com/chakri_chax/" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="main-footer-container">
      <div className="main-footer-content">
        <div className="main-footer-message">
          <span>All rights reserved &copy; {year} c4chakri </span>
        </div>
        <div className="main-footer-socials">
          {SOCIALS.map((social, index) => (
            <a
              rel="noopener noreferrer"
              key={index}
              href={social.link}
              target="_blank"
            >
              <FontAwesomeIcon className="social-icon" icon={social.icon} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
