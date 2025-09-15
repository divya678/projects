'use client'
import React, { useState } from "react";

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);

    // Toggle class on the body or sidebar if you want
    const sidebar = document.querySelector(".leftpart");
    if (sidebar) {
      sidebar.classList.toggle("active");
    }
  };
  return (
    <div className="header">
      <div className="header-inner">
        <div className="logo">
          <a className="navbar-brand logo" href="/">
          OMI
            {/* <img
              alt="brand"
              srcSet="/_next/image?url=%2Fimg%2Flogo%2Fdark.png&w=256&q=75 1x, /_next/image?url=%2Fimg%2Flogo%2Fdark.png&w=384&q=75 2x"
              src="/img/svg/home-run.svg"
              width={140}
              height={20}
              decoding="async"
              data-nimg={1}
              loading="lazy"
              style={{ color: "transparent" }}
            /> */}
          </a>
        </div>
        <div className="my_trigger" onClick={toggleMenu}>
          <div
            className={`hamburger hamburger--collapse-r ${menuOpen ? "is-active" : ""
              }`}
          >
            <div className="hamburger-box">
              <div className="hamburger-inner" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
