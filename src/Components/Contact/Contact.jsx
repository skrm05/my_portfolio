import "./Contact.css";
import mail_ion from "../../assets/mail_icon.svg";
import location_ion from "../../assets/location_icon.svg";
import call_ion from "../../assets/call_icon.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "807bc6a9-dd95-48b5-8360-2e60df4ccc9c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I am currently available for full-time opportunities as a MERN Stack
            Developer and open to roles where I can contribute, learn, and grow
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_ion} alt="" />
              <p>sanjayku6789@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_ion} alt="" />
              <p>+91 7903135593</p>
            </div>
            <div className="contact-detail">
              <img src={location_ion} alt="" />
              <p>Bengaluru, Karnataka ,India</p>
            </div>
          </div>
        </div>
        <form className="contact-right" onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            id=""
            placeholder="Enter your name"
            required
          />
          <label>Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            required
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            id=""
            rows="8"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
