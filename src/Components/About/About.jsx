import "./About.css";
import profile_img from "../../assets/about_profile.svg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I'm <strong>Sanjay</strong> , a MERN Stack Developer who
              transforms ideas into responsive and user-friendly applications.
              With a strong command of <strong>React.js</strong> for the{" "}
              <strong>front-end</strong> and
              <strong>Node.js/Express.js</strong> for the{" "}
              <strong> back-end</strong> , I focus on creating clean code and
              seamless user experiences.
            </p>
            <p>
              My practical skills were sharpened in an{" "}
              <strong>intensive MERN stack program at JSpiders</strong> ,
              preparing me to solve real-world challenges. You can see this in
              action in my projects.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React Js</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Node Js & Express Js</p>
              <hr style={{ width: "55%" }} />
            </div>
            <div className="about-skill">
              <p>Mongo DB /SQL</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>Real World</h1>
          <p>Projects Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>Projects Copleted</p>
        </div>
      </div>
    </div>
  );
};

export default About;
