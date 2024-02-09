import React from "react";

function HeaderSocials() {
  return (
    <div className="home__socials">
      <a
        href="https://www.linkedin.com/in/shabnam-rezapour-9088841a5"
        className="home__social-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <i className="icon-social-linkedin"></i>
      </a>
      <a
        href="https://github.com/shabnam67r"
        className="home__social-link"
        target="_blank"
      >
        <i className="icon-social-github"></i>
      </a>
    </div>
  );
}

export default HeaderSocials;
