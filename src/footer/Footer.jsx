import React from "react";
import "./footer.css";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { FaGuitar } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="footer_copyright">
        <small>&copy; SamarthNarainSharma. All rights reserved.</small>
      </div>

      <div className="socials">
        <a href="https://samarth533.netlify.app" target="blank">
          <BsGlobe />
        </a>
        <a href="https://www.linkedin.com/in/samarth533/" target="blank">
          <BsLinkedin />
        </a>
        <a href="https://www.github.com/samarth533/" target="blank">
          <BsGithub />
        </a>
        <a href="https://www.instagram.com/samarth533/" target="blank">
          <BsInstagram />
        </a>
        <a href="https://www.instagram.com/sams_acoustics/" target="blank">
          <FaGuitar />
        </a>
        <a href="https://www.youtube.com/@sams_acoustics/" target="blank">
          <BsYoutube />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
