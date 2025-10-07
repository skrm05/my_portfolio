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
              I am Sanjay Kumar, a 2023 BCA graduate and aspiring MERN stack
              developer with a strong foundation in JavaScript, React, Node.js,
              and MongoDB. I enjoy building clean, responsive, and scalable
              applications that combine functionality with great user
              experience. Through projects like a Daily Habit Tracker and a
              Fertilizer Supply Chain Dashboard, I have gained hands-on
              experience in solving real-world challenges with technology.
            </p>
            <p>
              My true passion lies in web development—transforming ideas into
              impactful digital solutions. I am eager to begin my professional
              journey, contribute my skills to innovative projects, and grow
              through continuous learning and collaboration. With curiosity,
              dedication, and a problem-solving mindset, I aim to evolve into a
              full-stack developer who delivers value and creates lasting
              impact.
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
              <p>Mongo DB</p>
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
