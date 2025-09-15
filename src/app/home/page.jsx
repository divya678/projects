"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { fetchHomeDetails } from "../utils";
import { useHomeContext } from "../contextStore";

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
  const { homeData, loading, error } = useHomeContext();

  return (
    <motion.div initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }} className="rightpart">
      <div className="rightpart_in">
        <section className="tokyo_tm_section">
          <div className="tokyo_tm_home">
            <div className="home_content">
              {/* Avatar */}
              <div className="avatar">
                <div
                  className="image avatar_img"
                  style={{
                    backgroundImage: homeData && homeData[0]?.profile_image
                      ? `URL(${homeData[0]?.profile_image})` // Correct URL format
                      : 'none', // Optional fallback
                  }}
                />
              </div>

              {/* Details */}
              <div className="details">
                <h3 className="name">{homeData && homeData[0]?.Name}</h3>
                <h4 className="typer">
                  <span style={{ color: "#555", fontWeight: 500, textTransform: "capitalize" }}>
                    <Typewriter
                      words={homeData && homeData[0]?.skills
                      }
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
                  {homeData && homeData[0]?.descriptions}
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
    </motion.div>
  );
};

export default Home;
