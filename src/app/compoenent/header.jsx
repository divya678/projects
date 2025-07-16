import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header-inner">
        <div className="logo">
          <a className="navbar-brand" href="/">
            <img
              alt="brand"
              srcSet="/_next/image?url=%2Fimg%2Flogo%2Fdark.png&w=256&q=75 1x, /_next/image?url=%2Fimg%2Flogo%2Fdark.png&w=384&q=75 2x"
              // src="/_next/image?url=%2Fimg%2Flogo%2Fdark.png&w=384&q=75"
              src="/img/svg/home-run.svg"
              width={140}
              height={20}
              decoding="async"
              data-nimg={1}
              loading="lazy"
              style={{ color: "transparent" }}
            />
          </a>
        </div>
        <div className="my_trigger">
          <div className="hamburger">
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
