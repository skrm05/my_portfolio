import logo from "../../assets/logo.svg";
import "./Navbar.css";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import { useRef, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };
  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-manu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt=""
          className="nav-mob-close"
        />
        <li>
          <AnchorLink
            className={active === "home" ? "anchor-link active" : "anchor-link"}
            offset={50}
            href="#home"
          >
            {" "}
            <p onClick={() => setActive("home")}>Home</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className={
              active === "about" ? "anchor-link active" : "anchor-link"
            }
            offset={50}
            href="#about"
          >
            <p onClick={() => setActive("about")}>About</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className={
              active === "services" ? "anchor-link active" : "anchor-link"
            }
            offset={50}
            href="#services"
          >
            <p onClick={() => setActive("services")}>Services</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className={
              active === "mywork" ? "anchor-link active" : "anchor-link"
            }
            offset={50}
            href="#mywork"
          >
            <p onClick={() => setActive("mywork")}>My Projects</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className={
              active === "contect" ? "anchor-link active" : "anchor-link"
            }
            offset={50}
            href="#contact"
          >
            <p onClick={() => setActive("contact")}>Contact</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className={
              active === "download_resume"
                ? "anchor-link active"
                : "anchor-link"
            }
            offset={40}
            href="#download_resume"
          >
            <p onClick={() => setActive("download_resume")}>download resume</p>
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect">
        {" "}
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
