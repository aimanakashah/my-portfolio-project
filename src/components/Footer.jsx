import React from "react";
import InlineSVG from "react-inlinesvg";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-note">Designed and built by NOR AIMAN @2024</div>
        <div className="footer-link">
          <ul>
            <li>
              <InlineSVG className="icon" src="github-142-svgrepo-com.svg" />
            </li>
            <li>
              <InlineSVG className="icon" src="linkedin-svgrepo-com.svg" />
            </li>
            <li>
              <InlineSVG
                className="icon"
                src="email-envelope-letter-mail-message-svgrepo-com.svg"
              />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
