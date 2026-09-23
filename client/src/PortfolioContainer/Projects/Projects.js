import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import libraryImg from "../../assets/Projects/library.png";
import bestowImg from "../../assets/Projects/bestow.png";
import nftImg from "../../assets/Projects/nft.png";
import "./Projects.css";

const PROJECTS = [
  {
    name: "RWA Tokenization",
    video: "rwa-map.mp4",
    description:
      "Real-world asset tokenization platform that brings assets such as real estate and funds on-chain as compliant, permissioned security tokens. Investor identity and jurisdiction checks are enforced at transfer time, so only eligible holders can receive tokens.",
    highlights: {
      heading: "Key Features of RWA Tokenization",
      bullets: [
        "Fractional Ownership of Real-World Assets",
        "Compliance Enforced On-Chain (ERC-3643)",
        "Investor Identity and Eligibility Checks",
        "Jurisdiction-Aware Transfer Rules",
      ],
    },
  },
  {
    name: "Library Claw",
    image: libraryImg,
    imageAlt: "Library Claw",
    link: "https://libraryclaw.netlify.app",
    description:
      "Library Claw is an Ethereum-based DApp, transforming library management with blockchain technology. Enabling secure cryptocurrency transactions for book-related activities.",
    highlights: {
      heading: "Key feautures of Library Claw",
      bullets: [
        "Innovative Library Management",
        "Decentralized and Trustless",
        "Secure and Immutable Transactions",
        "Enhanced Proposal System",
        "Empowering Library Community",
      ],
    },
  },
  {
    name: "Bestow ",
    image: bestowImg,
    imageAlt: "Crypto Transfer Dapp",
    link: "https://bestow.netlify.app",
    description:
      "Bestow is a cutting-edge DApp revolutionizing crypto transfers, eliminating intermediaries, reducing costs, and enhancing speed. Users maintain full control in a secure, transparent, and user-friendly environment. Supports multiple cryptos and cross-chain transactions .",
    highlights: {
      heading: "Key Features of Bestow",
      bullets: [
        "Decentralized and Trustfull",
        "Seamless and Fast Transfers",
        "Secure and Immutable Transactions",
        "Interoperability and Multi-Currency Support",
      ],
    },
  },
  {
    name: "NFT Marketplace",
    image: nftImg,
    imageAlt: "NFT Market Place",
    link: "https://nftmarketplacex.netlify.app",
    description:
      "Decentralized NFT exchange empowering artists and collectors to engage in secure NFT trading without intermediaries. Artists can mint their digital artworks as NFTs, while curated collections showcase diverse masterpieces. Interoperable wallet integration ensures smooth asset management, auctions, and limited editions",
    highlights: {
      heading: "Key Features of NFT market place",
      bullets: [
        "Decentralized NFT Exchange",
        "Seamless NFT Minting",
        "Curated Collections:",
        "Interoperable Wallet Integration",
        "Community Engagement",
      ],
    },
  },
];

export default function Projects(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  useEffect(() => {
    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  const renderHighlights = (project) =>
    project.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading
          title={"Projects"}
          subHeading={"DeFi's |  NFT's  | DAO's"}
        />
        {PROJECTS.map((project) => (
          <div className="about-me-card" key={project.name}>
            <div
              className={
                project.video
                  ? "about-me-profile project-video-wrap"
                  : "about-me-profile"
              }
            >
              {project.video ? (
                <video
                  className="projectVideo"
                  src={project.video}
                  controls
                  muted
                  playsInline
                  preload="metadata"
                />
              ) : (
                <img
                  className="projectImg"
                  src={project.image}
                  alt={project.imageAlt}
                />
              )}
            </div>
            <div className="about-me-details">
              <div className="highlight-heading">
                <span>{project.name}</span>
              </div>
              <span className="about-me-description">
                {project.description}
              </span>
              <div className="about-me-highlights">
                <div className="highlight-heading">
                  <span>{project.highlights.heading}</span>
                </div>
                {renderHighlights(project)}
              </div>
              {project.link && (
                <div className="about-me-options">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <button className="btn primary-btn">Explore</button>
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
