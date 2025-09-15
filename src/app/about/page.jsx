"use client"; // Add this if you're using Next.js 13+ App Router
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useHomeContext } from "../contextStore";
import PacmanLoader from "react-spinners/PacmanLoader";

const barVariant = {
  hidden: { width: 0 },
  visible: (percent) => ({
    width: `${percent}%`,
    transition: { duration: 1, ease: "easeInOut" },
  }),
};

const About = () => {
  const { homeData, loading, error } = useHomeContext();

  const renderListResume = (items) => {
    const mid = Math.ceil(items.length / 2); // middle index (first column gets extra if odd)
    const leftColumn = items.slice(0, mid);
    const rightColumn = items.slice(mid);

    return (
      <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-80">
        <ul className="w-full md:w-1/2 md:pl-4">
          {leftColumn.map((item, index) => (
            <li key={`left-${index}`}>
              <div className="list_inner">
                <div className="time">
                  <span>{item}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <ul className="w-full md:w-1/2 ">
          {rightColumn.map((item, index) => (
            <li key={`right-${index}`}>
              <div className="list_inner">
                <div className="time">
                  <span>{item}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };


  const calculateAge = (dobString) => {
    const dob = new Date(dobString);
    const today = new Date();

    const age =
      today.getFullYear() -
      dob.getFullYear() -
      (today.getMonth() < dob.getMonth() ||
        (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate()) ? 1 : 0);

    return age;
  };

  const age = calculateAge("1995-07-15")


  return (
    <>
      {loading ?
        <div className="rightpart" >  
        {/* <PacmanLoader color="#f00" size={60} loading={true} /> */}
        </div>

        :
        <motion.div initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }} className="rightpart">
          <div className="rightpart_in">
            <div className="tokyo_tm_section">
              <div className="container">
                <div className="tokyo_tm_about">
                  {/* Section Title */}
                  <div className="tokyo_tm_title">
                    <div className="title_flex">
                      <div className="left">
                        <span>About</span>
                        <h3>About Me</h3>
                      </div>
                    </div>
                  </div>

                  {/* Author Image */}
                  <div className="top_author_image rounded-lg shadow-xl shadow-gray-500 p-6">
                    {homeData
                      ?
                      <Image
                        src={homeData[0]?.about_me_image}
                        alt="Baldev Bharti"
                        fill
                        className="author_image rounded-xl  r"
                      /> :
                      <Image
                        src={"https://aryzrvchgvkmsdwvmtwu.supabase.co/storage/v1/object/public/web-images/IMG-20230810-WA0028.jpg"}
                        alt="Baldev Bharti"
                        fill
                        className="author_image rounded-xl"
                      />
                    }
                  </div>

                  {/* Name and Role */}
                  <div className="about_title">
                    <h3>{homeData[0]?.Name}</h3>
                    <span>{homeData[0]?.designation}</span>
                  </div>

                  {/* Bio */}
                  <div className="about_text">
                    <p>
                      {homeData[0]?.["about me"]}
                    </p>
                    <p>
                      {homeData[0]?.descriptions}
                    </p>
                  </div>

                  {/* Personal Info */}
                  <div className="tokyo_tm_short_info">
                    <div className="left">
                      <div className="tokyo_tm_info">
                        <ul>
                          <li>
                            <span>Birthday:</span>
                            <span>{homeData[0]?.details?.birthday}</span>
                          </li>
                          <li>
                            <span>Age:</span>
                            <span>{age}</span>
                          </li>
                          <li>
                            <span>Address:</span>
                            <span>{homeData[0]?.details?.address}</span>
                          </li>
                          <li>
                            <span>Email:</span>
                            <span>
                              <a href="mailto:tokyo@gmail.com">{homeData[0]?.details?.email}</a>
                            </span>
                          </li>
                          <li>
                            <span>Phone:</span>
                            <span>
                              <a href="tel:+770221770505">{homeData[0]?.details?.phone}</a>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="right">
                      <div className="tokyo_tm_info">
                        <ul>
                          <li>
                            <span>Nationality:</span>
                            <span>{homeData[0]?.details?.nationality}</span>
                          </li>

                          <li>
                            <span>Degree:</span>
                            <span>{homeData[0]?.details?.degree}</span>
                          </li>

                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Download CV */}
                  <div className="tokyo_tm_button" data-position="left">
                    <a href="/resume.pdf" download="my-resume">
                      <span>Download CV</span>
                    </a>
                  </div>
                </div>
              </div>


              <div className="tokyo_tm_resumebox">
                <div className="container">
                  <div className="in">
                    {/* Education */}
                    <div className="left">
                      <div className="tokyo_section_title">
                        <h3>Culinary Skills</h3>
                      </div>
                      <div className="tokyo_tm_resume_list">
                        <ul>{renderListResume(homeData[0]?.culnary_skills)}</ul>
                      </div>
                    </div>


                  </div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      }


    </>
  );
};

export default About;
