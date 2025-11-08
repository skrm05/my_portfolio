import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useState } from "react"; // 1. Import useState

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Sanjay kumar", "a full stack developer"],
    loop: {},
  });

  // 2. Add the modal state
  const [showResume, setShowResume] = useState(false);

  // 3. Add the modal handlers
  const handleViewResume = () => {
    setShowResume(true); // Open the resume modal
  };

  const handleCloseResume = () => {
    setShowResume(false); // Close the resume modal
  };

  return (
    // 4. Wrap in a Fragment
    <>
      <div id="home" className="hero">
        <img src={profile_img} alt="" />
        <h1>
          I'm <span>{text}</span>
          <Cursor cursorStyle="|" />
        </h1>
        <p>I am Full Stack developer from India</p>
        <div className="hero-action">
          <div className="hero-connect">
            {" "}
            <AnchorLink className="anchor-link" offset={50} href="#contact">
              Connect with me
            </AnchorLink>
          </div>

          <div className="hero-resume" onClick={handleViewResume}>
            View Resume
          </div>
        </div>
      </div>

      {/* Add the modal */}
      {showResume && (
        <div className="resume-modal-backdrop" onClick={handleCloseResume}>
          <div
            className="resume-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="resume-modal-close" onClick={handleCloseResume}>
              &times;
            </button>
            <iframe
              src="/my_portfolio/Sanjay_Kumar_Resume_MERN.pdf"
              title="Sanjay Kumar Resume"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
