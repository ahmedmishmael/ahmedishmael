import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div>
      <a
        href="https://www.facebook.com/ahmedmishmael"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookF className="me-3" />
      </a>
      <a
        href="https://twitter.com/ahmedmishmael"
        target="_blank"
        rel="noreferrer"
      >
        <FaTwitter className="me-3" />
      </a>
      <a
        href="https://www.instagram.com/ahmedmishmael"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram className="me-3" />
      </a>
      <a
        href="https://www.linkedin.com/in/ahmedmishmael"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin className="me-3" />
      </a>
      <a
        href="https://www.youtube.com/@ahmedmishmael"
        target="_blank"
        rel="noreferrer"
      >
        <FaYoutube className="me-3" />
      </a>
      <a
        href="https://www.github.com/ahmedmishmael"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub className="me-3" />
      </a>
    </div>
  );
};

export default SocialMedia;
