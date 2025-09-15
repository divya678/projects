"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useHomeContext } from "../contextStore";
import PacmanLoader from "react-spinners/PacmanLoader";

const Portfolio = () => {
  const { homeData, loading, error } = useHomeContext();
  const [description, setDescription] = useState(null);

  const openModal = (desc) => setDescription
    (desc);
  const closeModal = () => setDescription(null);

  console.log("homeData in Portfolio:", description);
  return (
    <>
      {!loading &&
        < div className="rightpart">
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
                        {/* {homeData[0]?.portfolio_image.map((item) => ( */}
                        {homeData[0]?.portfolio_image.map((item) => (
                          <li key={item.id}>
                            <div className="inner">
                              <div className="entry tokyo_tm_portfolio_animation_wrap">
                                <Image
                                  src={item?.image}
                                  alt={item?.name}
                                  width={300}
                                  height={300}
                                  placeholder="empty"
                                  className="rounded-lg"
                                  loading="lazy"
                                />
                                <div className="dish-name cursor-pointer" onClick={() => openModal(item)}>{item?.name}</div>
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
          {/* Modal */}
          {description && (
            <div className="modal-overlay" onClick={closeModal}>
              <motion.div
                className="modal-content flex flex-col"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
              >
                <div className="modal-body flex flex-col md:flex-row ">
                  <div style={{marginRight: '2rem'}}>
                    <Image
                      src={description?.desc_img}
                      alt={description?.name}
                      width={300}
                      height={300}
                      placeholder="empty"
                      className="rounded-lg"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <h2>{description.name}</h2>
                    <p className="text-lg pl-5">{description.description}</p>
                  </div>
                </div>
                <button className="tokyo_tm_button" onClick={closeModal}>Close</button>
              </motion.div>
            </div>
          )}
        </div >
      }

    </>
  );
};

export default Portfolio;
