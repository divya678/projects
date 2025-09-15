"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useHomeContext } from "../contextStore";
import PacmanLoader from "react-spinners/PacmanLoader";

const Service = () => {
  const { homeData, loading, error } = useHomeContext();


  const [activeService, setActiveService] = useState(null);

  const openModal = (service) => setActiveService(service);
  const closeModal = () => setActiveService(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  return (
    <>
      {!loading ?
        <>

          <div className="rightpart">
            <div className="rightpart_in">
              <div className="tokyo_tm_section">
                <div className="container">
                  {/* Services */}
                  <div className="tokyo_tm_services">
                    <div className="tokyo_tm_title">
                      <div className="title_flex">
                        <div className="left">
                          <span>Services</span>
                          <h3>What I Do</h3>
                        </div>
                      </div>
                    </div>

                    <div className="list">
                      <ul>
                        {homeData[0]?.services.map((service, index) => (
                          <motion.li
                            key={index}
                            custom={index}
                            initial="hidden"
                            animate="visible"
                            variants={cardVariants}
                          >
                            <div className="list_inner">
                              <span className="number">{`0${index + 1}`}</span>
                              <h3 className="title">{service?.heading}</h3>
                              <p className="text">{service?.description}</p>
                              <div className="tokyo_tm_read_more">
                                <div
                                  className="read-more"
                                  onClick={() => openModal(service)}
                                >
                                  <span>Read More</span>
                                </div>
                              </div>
                            </div>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Modal */}
          {activeService && (
            <div className="modal-overlay" onClick={closeModal}>
              <motion.div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
              >
                <h2>{activeService.heading}</h2>
                <p>{activeService.read_more}</p>
                <button className="tokyo_tm_button" onClick={closeModal}>Close</button>
              </motion.div>
            </div>
          )}

          {/* Toast Placeholder */}
          <div className="Toastify" />
        </> :
        <PacmanLoader color="#f00" size={60} loading={true} />
      }      </>
  );
};

export default Service;
