'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";

const News = () => {
  const newsData = [
  {
    id: 1,
    image: "/img/news/1.jpg",
    author: "ALEX WATSON",
    date: "07 APRIL 2021",
    title: "Format releases a new tool that enables direct video hosting",
  },
  {
    id: 2,
    image: "/img/news/2.jpg",
    author: "TAHINA AMAI",
    date: "05 APRIL 2021",
    title: "Sony announced two new full frame cameras with zero fanfare",
  },
  {
    id: 3,
    image: "/img/news/3.jpg",
    author: "NIRO AKTA",
    date: "15 APRIL 2021",
    title: "Why every photographer should shoot film, even in 2022",
  },
  {
    id: 4,
    image: "/img/news/4.jpg",
    author: "SHIKA VAIL",
    date: "12 APRIL 2021",
    title: "Stay creative in lockdown with these fun photo projects",
  },
];

  const [activeNews, setActiveNews] = useState(null);

  const handleReadMore = (news) => {
    setActiveNews(news);
  };

  const closeModal = () => {
    setActiveNews(null);
  };

  return (
    <>
      <div className="rightpart">
        <div className="rightpart_in">
          <div className="tokyo_tm_section">
            <div className="container">
              <div className="tokyo_tm_news">
                <div className="tokyo_tm_title">
                  <div className="title_flex">
                    <div className="left">
                      <span>News</span>
                      <h3>Latest News</h3>
                    </div>
                  </div>
                </div>
                <ul>
                  {newsData.map((item, index) => (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.2 }}
                    >
                      <div className="list_inner">
                        <div className="image">
                          <div
                            className="main"
                            style={{ backgroundImage: `url(${item.image})` }}
                          />
                        </div>
                        <div className="details">
                          <div className="extra">
                            <p className="date">
                              By <a href="#">{item.author}</a>
                              <span>{item.date}</span>
                            </p>
                          </div>
                          <h3 className="title">{item.title}</h3>
                          <div className="tokyo_tm_read_more">
                            <div
                              className="read-more"
                              onClick={() => handleReadMore(item)}
                              style={{ cursor: 'pointer' }}
                            >
                              <span>Read More</span>
                            </div>
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

      {activeNews && (
        <div className="news-modal" onClick={closeModal}>
          <motion.div
            className="modal-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{activeNews.title}</h2>
            <p><strong>By:</strong> {activeNews.author}</p>
            <p><strong>Date:</strong> {activeNews.date}</p>
            <img
              src={activeNews.image}
              alt="News"
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <p style={{ marginTop: '15px' }}>
              Full content can go here. You can connect this to a CMS to fetch and display full article text.
            </p>
            <button onClick={closeModal} style={{ marginTop: '20px' }}>Close</button>
          </motion.div>
        </div>
      )}

      <style jsx>{`
        .news-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .modal-content {
          background: #fff;
          padding: 30px;
          border-radius: 10px;
          width: 90%;
          max-width: 600px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }
      `}</style>

      <div className="Toastify" />
    </>
  );
};

export default News;
