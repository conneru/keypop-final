import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <p>Developed by Conner Underhill</p>
        <div className="footer-links">
          <a
            href="https://github.com/conneru/keypop-final"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github fa-2x" />
          </a>
          &nbsp;
          <a
            href="https://www.linkedin.com/in/conner-underhill-64b3921a2"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin fa-2x" />
          </a>
          &nbsp;
          <a
            href="mailto:cunderhillosx@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <i className="far fa-envelope fa-2x" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
