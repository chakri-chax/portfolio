import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://web.facebook.com/chakri_chax">
                <i className="fa fa-facebook-square" />
              </a>
              <a href="https://www.github.com/chakri-chax/">
                <i className="fa fa-github" />
              </a>
              <a href="https://www.instagram.com/chakri_chax">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://www.youtube.com/@chakri1570/videos">
                <i className="fa fa-youtube-square" />
              </a>
              <a href="https://twitter.com/chax_chakri">
                <i className="fa fa-twitter" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Chakri</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Web3 Dev!",
                    1000,
                    "Full Stack Blockchain Developer!",
                    1000,
                    "Decentralized Applications (DeFi's)",
                    1000,
                    "ERC-20, ERC-721 and ERC-1155 Tokens",
                    1000,
                    "Privacy and Security!",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Architecting blockchain applications encompassing both front-end
              and back-end
            </span>
          </div>

          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {" "}
              Hire Me{" "}
            </button>
            <a
              href="LovaChakravarthiBlockchainResume.pdf"
              download="LovaChakravarthiBlockchainResume.pdf"
            >
              <button className="btn highlighted-btn"> Get Resume </button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
