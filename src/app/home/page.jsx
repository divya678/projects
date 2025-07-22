"use client";

import Image from "next/image";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  const socialLink = [
    {
      href: "https://www.facebook.com/",
      src: "/img/svg/social/facebook.svg",
      alt: "facebook",
    },
    {
      href: "https://twitter.com/",
      src: "/img/svg/social/twitter.svg",
      alt: "twitter",
    },
    {
      href: "https://www.instagram.com/",
      src: "/img/svg/social/instagram.svg",
      alt: "instagram",
    },
    {
      href: "https://dribbble.com/",
      src: "/img/svg/social/dribbble.svg",
      alt: "dribbble",
    },
    {
      href: "https://www.tiktok.com/",
      src: "/img/svg/social/tik-tok.svg",
      alt: "tiktok",
    },
  ];
  return (
    <div className="rightpart">
      <div className="rightpart_in">
        <section className="tokyo_tm_section">
          <div className="tokyo_tm_home">
            <div className="home_content">
              {/* Avatar */}
              <div className="avatar">
                <div
                  className="image avatar_img"
                  style={{ backgroundImage: "url(/img/slider/1.jpg)" }}
                />
              </div>

              {/* Details */}
              <div className="details">
                <h3 className="name">Baldev Bharti</h3>
                <h4 className="typer">
                  <span style={{ color: "#555", fontWeight: 500 }}>
                    <Typewriter
                      words={[
                        "Full Stack Developer",
                        "React Enthusiast",
                        "UI/UX Designer",
                      ]}
                      loop={true}
                      cursor
                      cursorStyle="|"
                      typeSpeed={80}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                </h4>
                <p className="job">
                  Creative Photographer based in New York and happy to travel
                  all over Europe to capture photos.
                </p>

                {/* Social Links */}
                <ul className="social">
                  {socialLink.map((item, idx) => (
                    <li key={idx}>
                      <a href={item.href} target="_blank" rel="noreferrer">
                        <Image
                          className="svg"
                          src={item.src}
                          alt={item.alt}
                          width={24}
                          height={24}
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Optional Toastify div if needed */}
      <div className="Toastify" />
    </div>
  );
};

export default Home;
