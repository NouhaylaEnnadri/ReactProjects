import React from "react";
import { QuoteNanime_banner, QuoteNanime_logo } from "../assets";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div class>
    
      <footer className="footer bg-secondary justify-between rounded-lg text-neutral-content p-6">
        <aside>
        <Link to="/Quote">
        <img src={QuoteNanime_logo} alt="logo" className="w-36 h-auto " />
      </Link>        </aside>
        <nav>
          <h6 className="footer-title"></h6>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGmail className="w-6 h-6 text-base-100 text-current" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <FaLinkedin className="w-6 h-6 text-base-100 text-current" />

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <FaGithub className="w-6 h-6  text-base-100 text-current" />
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
