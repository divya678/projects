"use client";

import React from "react";
import Image from "next/image";

const Portfolio = () => {
  const portfolioItems = [
    { id: 1, alt: "Vimeo", image: "/img/portfolio/5.jpg" },
    { id: 2, alt: "Youtube", image: "/img/portfolio/2.jpg" },
    { id: 3, alt: "Shot", image: "/img/portfolio/4.jpg" },
    { id: 4, alt: "Shot", image: "/img/portfolio/3.jpg" },
    { id: 5, alt: "Details", image: "/img/portfolio/6.jpg" },
    { id: 6, alt: "Details", image: "/img/portfolio/7.jpg" },
  ];
  return (
    <>
      <div className="rightpart">
        <div className="rightpart_in">
          <div className="tokyo_tm_section">
            <div className="container">
              <div className="tokyo_tm_portfolio">
                <div className="portfolio_filter">
                  <div className="p_wrapper">
                    <div className="tokyo_tm_title">
                      <div className="title_flex">
                        <div className="left">
                          <span>Portfolio</span>
                          <h3>Creative Portfolio</h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="list_wrapper">
                    <ul
                      className="portfolio_list"
                      data-aos="fade-right"
                      data-aos-duration={1200}
                    >
                      {portfolioItems.map((item) => (
                        <li key={item.id}>
                          <div className="inner">
                            <div className="entry tokyo_tm_portfolio_animation_wrap">
                              <Image
                                src={item.image}
                                alt={item.alt}
                                width={300}
                                height={300}
                                placeholder="empty"
                                className="rounded-lg"
                                loading="lazy"
                              />
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Toastify" />
    </>
  );
};

export default Portfolio;
