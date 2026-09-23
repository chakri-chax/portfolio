import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    const date =
      props.fromDate && props.toDate
        ? props.fromDate + " - " + props.toDate
        : props.date;
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {date ? <div className="heading-date">{date}</div> : <div></div>}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const DescriptionPoints = ({ points }) => (
    <div className="experience-description">
      {points.map((point, index) => (
        <span className="resume-description-text" key={index}>
          - {point}
        </span>
      ))}
    </div>
  );

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "About me", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Technical Skills", logoSrc: "programming-skills.svg" },
    { label: "Key Projects", logoSrc: "projects.svg" },
    { label: "Education", logoSrc: "education.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const aboutMeDetails = [
    {
      title: "Professional Summary",
      subHeading: "Blockchain Engineer | 3+ Years | EVM, DeFi, RWA & DAO",
      description:
        "Blockchain Engineer with 3+ years of experience designing and building production-grade smart contracts, DeFi protocols, RWA tokenization systems, DAO governance, cross-chain protocols and enterprise blockchain infrastructure on EVM-compatible networks. Strong background in Solidity, EVM internals, gas optimization and smart contract security.",
    },
    {
      title: "RWA Tokenization & Compliance",
      subHeading: "ERC-3643, Tokeny T-REX, OnchainID, KYC/AML",
      description:
        "Compliant on-chain representation of real-world assets, with identity-bound wallets, investor eligibility checks, compliance gates and permissioned issuance.",
    },
    {
      title: "DeFi, DAO & Cross-Chain Protocols",
      subHeading: "Staking, Treasury, Governance, Bridges, HTLC",
      description:
        "Staking and locking mechanisms, treasury and vault systems, DAO proposal and voting lifecycles, blockchain bridges with multisig relayers, and atomic-swap/HTLC settlement.",
    },
    {
      title: "Security & Infrastructure",
      subHeading: "Multisig, ECDSA, Replay Protection, Hyperledger Besu, Validators",
      description:
        "Security-first contract design with role separation, signature verification and emergency controls, plus permissioned Hyperledger Besu networks and validator node operations.",
    },
  ];

  const workHistoryDetails = [
    {
      company: "Gaian Solutions",
      role: "Solidity Blockchain Developer | Hyderabad, India",
      fromDate: "Aug 2024",
      toDate: "Present",
      points: [
        "Architected RWA tokenization protocols using ERC-3643 and the Tokeny T-REX framework for compliant on-chain representation of real-world assets.",
        "Integrated OnchainID with third-party KYC/AML services for wallet identity binding, investor eligibility and transfer authorization, backed by RBAC, whitelisting/blacklisting and compliance gates.",
        "Designed modular DAO governance covering proposal creation, voting, execution, treasury management, vesting and gas-optimized reward distribution.",
        "Engineered DeFi components including staking, asset locking, treasury/vault mechanisms, escrow flows and yield harvesting.",
        "Designed cross-chain architecture for RWA liquidity and settlement using bridge contracts, message relayers, signed payloads, nonce-based replay protection and emergency pause controls.",
        "Implemented atomic swap and HTLC settlement flows (create, certify, release, refund) and integrated Chainlink oracles for asset valuation and automated execution.",
        "Designed permissioned Hyperledger Besu infrastructure with node permissioning, private transactions and consortium governance.",
      ],
    },
    {
      company: "ULTRAPRO Blockchain Pvt. Ltd.",
      role: "Blockchain Backend Developer | Madurai, India",
      fromDate: "Dec 2023",
      toDate: "Jun 2024",
      points: [
        "Built backend services for BEP-20 deposits and withdrawals on BNB Chain for BNB, UPRO and USDT.",
        "Implemented multi-signature verification, nonce management, event-driven transaction monitoring and replay-attack protection.",
        "Built deterministic HD wallet infrastructure (BIP-39 / BIP-32 / BIP-44) across Ethereum, BNB Chain and Polygon, with ECDSA signing and encrypted key storage.",
        "Developed REST and WebSocket services linking on-chain events with real-time TradingView market feeds and analytics APIs.",
      ],
    },
  ];

  const technicalSkillsDetails = [
    {
      category: "Languages",
      skills: ["Solidity", "JavaScript", "TypeScript", "Python", "Go", "Rust", "Java"],
    },
    {
      category: "Blockchains",
      skills: ["Ethereum / EVM", "BNB Chain", "Polygon", "CoreDAO", "Venom", "Hyperledger Besu", "Hyperledger Fabric"],
    },
    {
      category: "Smart Contracts",
      skills: ["OpenZeppelin", "ERC-20", "ERC-721", "ERC-1155", "ERC-3643", "Upgradeable / Proxy Patterns", "Token Factories"],
    },
    {
      category: "DeFi & DAO",
      skills: ["Staking", "Yield & Treasury", "Token Locking", "Vesting", "Governance & Voting", "Vote Delegation", "Multisig Governance"],
    },
    {
      category: "RWA & Compliance",
      skills: ["Tokeny T-REX", "OnchainID", "KYC / AML", "KYA", "Compliance Gates", "Permissioned Tokenization"],
    },
    {
      category: "Cross-Chain & Security",
      skills: ["Bridges & Relayers", "HTLC / Atomic Swaps", "ECDSA", "Replay Protection", "RBAC", "Auditing", "Gas Optimization"],
    },
    {
      category: "Oracles & Verification",
      skills: ["Chainlink", "Merkle Proofs", "Audit Anchoring", "Evidence Registry"],
    },
    {
      category: "Tools, Backend & Infra",
      skills: ["Hardhat", "Truffle", "Ethers.js", "Web3.js", "Locklift", "IPFS", "Node.js", "GraphQL", "MongoDB", "React", "Next.js", "AWS EC2", "Docker", "Geth"],
    },
  ];

  const keyProjectsDetails = [
    {
      title: "Mobius Lattice",
      date: "2026",
      subHeading: "RWA / DeFi / DAO / Cross-Chain Protocol Architecture",
      points: [
        "Multi-layer blockchain architecture with a constitutional root, commons layers and independent permissioned EVM worlds.",
        "MobiusBridge for bidirectional cross-chain messaging with signed payloads, monotonic nonces, chain whitelisting and a 3-of-5 multisig relayer set.",
        "Lock-weighted governance, treasury yield and deterministic release flows, with Merkle-root audit anchoring across networks.",
      ],
    },
    {
      title: "CoreDAO Mainnet Validator Node",
      date: "2025",
      subHeading: "AWS EC2, CoreDAO, Geth, Linux, systemd, JSON-RPC",
      points: [
        "Deployed a CoreDAO mainnet full node on AWS EC2 using pruned snapshot sync, hardened with systemd and UFW.",
        "Transitioned it into validator infrastructure and verified sync, peers and validator registration over JSON-RPC.",
      ],
    },
    {
      title: "Venom Blockchain DAO Protocol",
      date: "2023",
      subHeading: "Solidity, TypeScript, Locklift, Venom Blockchain",
      points: [
        "Production DAO suite: Governance, Treasury, FounderNFT, DeedNFT and CommissionDistribution contracts.",
        "NFT-gated governance eligibility, interval-based fund distribution, and Locklift deployment and testing workflows.",
      ],
    },
  ];

  const resumeDetails = [
    /* ABOUT ME */
    <div className="resume-screen-container scrollable" key="about-me">
      {aboutMeDetails.map((detail, index) => (
        <ResumeHeading
          key={index}
          heading={detail.title}
          subHeading={detail.subHeading}
          description={detail.description}
        />
      ))}
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container scrollable" key="work-experience">
      {workHistoryDetails.map((job, index) => (
        <div className="experience-container" key={index}>
          <ResumeHeading
            heading={job.company}
            subHeading={job.role}
            fromDate={job.fromDate}
            toDate={job.toDate}
          />
          <DescriptionPoints points={job.points} />
        </div>
      ))}
    </div>,

    /* TECHNICAL SKILLS */
    <div className="resume-screen-container scrollable" key="technical-skills">
      {technicalSkillsDetails.map((group, index) => (
        <div className="skill-group" key={index}>
          <div className="resume-main-heading">
            <div className="heading-bullet"></div>
            <span>{group.category}</span>
          </div>
          <div className="skill-chips">
            {group.skills.map((skill) => (
              <span className="skill-chip" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>,

    /* KEY PROJECTS */
    <div className="resume-screen-container scrollable" key="key-projects">
      {keyProjectsDetails.map((project, index) => (
        <div className="experience-container" key={index}>
          <ResumeHeading
            heading={project.title}
            subHeading={project.subHeading}
            date={project.date}
          />
          <DescriptionPoints points={project.points} />
        </div>
      ))}
    </div>,

    /* EDUCATION, CERTIFICATIONS & ACHIEVEMENTS */
    <div className="resume-screen-container scrollable" key="education">
      <ResumeHeading
        heading={"RGUKT AP-IIIT Nuzvid"}
        subHeading={"BACHELOR OF TECHNOLOGY | CGPA 8.25 / 10"}
        fromDate={"2020"}
        toDate={"2024"}
        description={
          "Relevant coursework: Distributed Systems, Computer Networks, Cryptography, Data Structures."
        }
      />
      <ResumeHeading
        heading={"RGUKT AP-IIIT Nuzvid"}
        subHeading={"PRE-UNIVERSITY COURSE"}
        fromDate={"2018"}
        toDate={"2020"}
      />
      <ResumeHeading
        heading={"Certifications"}
        subHeading={"Full Stack Blockchain Developer - iNeuron (200-hour Bootcamp)"}
        description={"Ethereum Blockchain Developer - Udemy"}
      />
      <ResumeHeading
        heading={"GDSC WOW Hackathon"}
        subHeading={"Google Developer Student Clubs, Kerala"}
        date={"2023"}
        description={
          "Built a blockchain-based e-learning credential verification platform using decentralized records."
        }
      />
    </div>,

    /* INTERESTS */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Smart Contract Security CTFs"
        description="Solving Ethernaut challenges on reentrancy, overflow, delegatecall and access control, and applied cryptography challenges on picoCTF, to keep my security instincts sharp."
      />
      <ResumeHeading
        heading="Protocol Research"
        description="Reading protocol designs, audit reports and EIPs to understand how production systems fail and how to build ones that do not."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to music is my favourite way to unwind; working through Spotify's pop charts is the best stress reliever I know."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="resume-container screen-container fade-in" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
