import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import resume from "../../assets/Sanjay_Kumar_Resume_MERN.pdf";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Sanjay kumar", "a full stack developer"],
    loop: {},
  });
  return (
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
        <div className="hero-resume">View Resume</div>
      </div>
    </div>
  );
};

export default Hero;
