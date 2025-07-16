"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const Service = () => {
  const serviceData = {
    services: [
      {
        number: "01",
        title: "Web Design",
        text: "Web development is the most famous job in the world and it is very interesting...",
      },
      {
        number: "02",
        title: "Content Writing",
        text: "Web development is the most famous job in the world and it is very interesting...",
      },
      {
        number: "03",
        title: "Brand Identity",
        text: "Web development is the most famous job in the world and it is very interesting...",
      },
      {
        number: "04",
        title: "Live Chat",
        text: "Web development is the most famous job in the world and it is very interesting...",
      },
      {
        number: "05",
        title: "After Effects",
        text: "Web development is the most famous job in the world and it is very interesting...",
      },
      {
        number: "06",
        title: "Mobile App",
        text: "Web development is the most famous job in the world and it is very interesting...",
      },
    ],
    partners: [
      "/img/partners/dark/1.png",
      "/img/partners/dark/2.png",
      "/img/partners/dark/3.png",
      "/img/partners/dark/4.png",
      "/img/partners/dark/5.png",
      "/img/partners/dark/6.png",
      "/img/partners/dark/7.png",
      "/img/partners/dark/8.png",
    ],
  };

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
                    {serviceData.services.map((service, index) => (
                      <motion.li
                        key={index}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={cardVariants}
                      >
                        <div className="list_inner">
                          <span className="number">{service.number}</span>
                          <h3 className="title">{service.title}</h3>
                          <p className="text">{service.text}</p>
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

              {/* Partners */}
              <div className="tokyo_tm_partners">
                <div className="container">
                  <div className="tokyo_section_title">
                    <h3>Partners</h3>
                  </div>
                  <div className="partners_inner">
                    <ul>
                      {serviceData.partners.map((src, i) => (
                        <li key={i}>
                          <div className="list_inner">
                            <img
                              src={src}
                              alt="partners brand"
                              width={123}
                              height={37}
                              loading="lazy"
                              style={{ color: "transparent" }}
                            />
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
            <h2>{activeService.title}</h2>
            <p>{activeService.details}</p>
            <button onClick={closeModal}>Close</button>
          </motion.div>
        </div>
      )}

      {/* Toast Placeholder */}
      <div className="Toastify" />
    </>
  );
};

export default Service;
