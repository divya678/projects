"use client"; // Add this if you're using Next.js 13+ App Router
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const barVariant = {
  hidden: { width: 0 },
  visible: (percent) => ({
    width: `${percent}%`,
    transition: { duration: 1, ease: "easeInOut" },
  }),
};

const About = () => {
  const iconPath = "/img/svg/rightarrow.svg";
  const skillsData = {
    programming: [
      { name: "WordPress", percent: 95 },
      { name: "JavaScript", percent: 80 },
      { name: "Angular", percent: 90 },
    ],
    languages: [
      { name: "English", percent: 90 },
      { name: "Russian", percent: 90 },
      { name: "Arabic", percent: 85 },
    ],
  };

  const knowledgeData = {
    knowledge: [
      "Bootstrap, Angular",
      "React, Vue, Laravel",
      "Stylus, Sass, Less",
      "Gulp, Webpack, Grunt",
      "Tweenmax, GSAP",
    ],
    interests: [
      "Make UI/UX Design",
      "Create Mobile App",
      "Site Optimization",
      "Custom Website",
      "Learn Ecommerce",
    ],
  };

  const resumeData = {
    education: [
      {
        time: "2014 - 2016",
        title: "Oxford University",
        subtitle: "Master Degree",
      },
      {
        time: "2010 - 2014",
        title: "Texas University",
        subtitle: "Bachelor Degree",
      },
      {
        time: "2008 - 2010",
        title: "Simone College",
        subtitle: "Associate Degree",
      },
    ],
    experience: [
      {
        time: "2018 - Now",
        title: "Envato Market",
        subtitle: "Exclusive Author",
      },
      {
        time: "2016 - 2018",
        title: "RGB Studio",
        subtitle: "UX Designer",
      },
      {
        time: "2012 - 2016",
        title: "Innovations Park",
        subtitle: "Web Designer",
      },
    ],
  };

  const renderListResume = (items) =>
    items.map((item, index) => (
      <li key={index}>
        <div className="list_inner">
          <div className="time">
            <span>{item.time}</span>
          </div>
          <div className="place">
            <h3>{item.title}</h3>
            <span>{item.subtitle}</span>
          </div>
        </div>
      </li>
    ));

  const renderList = (items) =>
    items.map((text, index) => (
      <li key={index}>
        <span>
          <img
            alt="arrow"
            src={iconPath}
            width={10}
            height={10}
            decoding="async"
            data-nimg="1"
            className="svg"
            loading="lazy"
            style={{ color: "transparent" }}
          />
          {text}
        </span>
      </li>
    ));

  return (
    <>
      <div className="rightpart">
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
                <div className="top_author_image">
                  <Image
                    src="/img/slider/1.jpg"
                    alt="Adriano Smith"
                    width={400}
                    height={400}
                    layout="responsive"
                    className="author_image"
                  />
                </div>

                {/* Name and Role */}
                <div className="about_title">
                  <h3>Adriano Smith</h3>
                  <span>Web Developer</span>
                </div>

                {/* Bio */}
                <div className="about_text">
                  <p>
                    Hi, my name is Adriano Smith and I began using WordPress
                    when it first began. I’ve spent most of my waking hours for
                    the last ten years designing, programming and operating
                    WordPress sites.
                  </p>
                  <p>
                    One of my specialties is taking an idea from scratch and
                    creating a full-fledged platform. I go beyond to produce
                    sites with a unique, outstanding, contemporary
                    look-and-feel. With extensive knowledge of web mechanics,
                    I’m able to optimize complex integrations to require
                    little-to-no maintenance while running on their own for
                    years.
                  </p>
                </div>

                {/* Personal Info */}
                <div className="tokyo_tm_short_info">
                  <div className="left">
                    <div className="tokyo_tm_info">
                      <ul>
                        <li>
                          <span>Birthday:</span>
                          <span>01.07.1990</span>
                        </li>
                        <li>
                          <span>Age:</span>
                          <span>32</span>
                        </li>
                        <li>
                          <span>Address:</span>
                          <span>Ave 11, New York, USA</span>
                        </li>
                        <li>
                          <span>Email:</span>
                          <span>
                            <a href="mailto:tokyo@gmail.com">tokyo@gmail.com</a>
                          </span>
                        </li>
                        <li>
                          <span>Phone:</span>
                          <span>
                            <a href="tel:+770221770505">+77 022 177 05 05</a>
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
                          <span>USA</span>
                        </li>
                        <li>
                          <span>Study:</span>
                          <span>University of Texas</span>
                        </li>
                        <li>
                          <span>Degree:</span>
                          <span>Master</span>
                        </li>
                        <li>
                          <span>Interest:</span>
                          <span>Playing Football</span>
                        </li>
                        <li>
                          <span>Freelance:</span>
                          <span>Available</span>
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
            <div className="tokyo_tm_progressbox">
              <div className="container">
                <div className="in">
                  {/* Programming Skills */}
                  <div className="left">
                    <div className="tokyo_section_title">
                      <h3>Programming Skills</h3>
                    </div>
                    <div className="tokyo_progress">
                      {skillsData.programming.map((skill, i) => (
                        <div className="progress_inner" key={`prog-${i}`}>
                          <span>
                            <span className="label">{skill.name}</span>
                            <span className="number">{skill.percent}%</span>
                          </span>
                          <div className="background">
                            <div className="bar">
                              <motion.div
                                className="bar_in"
                                custom={skill.percent}
                                variants={barVariant}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Language Skills */}
                  <div className="right">
                    <div className="tokyo_section_title">
                      <h3>Language Skills</h3>
                    </div>
                    <div className="tokyo_progress">
                      {skillsData.languages.map((skill, i) => (
                        <div className="progress_inner" key={`lang-${i}`}>
                          <span>
                            <span className="label">{skill.name}</span>
                            <span className="number">{skill.percent}%</span>
                          </span>
                          <div className="background">
                            <div className="bar">
                              <motion.div
                                className="bar_in"
                                custom={skill.percent}
                                variants={barVariant}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tokyo_tm_skillbox">
              <div className="container">
                <div className="in">
                  {/* Knowledge Section */}
                  <div className="left">
                    <div className="tokyo_section_title">
                      <h3>Knowledge</h3>
                    </div>
                    <div className="tokyo_tm_skill_list">
                      <ul>{renderList(knowledgeData.knowledge)}</ul>
                    </div>
                  </div>

                  {/* Interests Section */}
                  <div className="right">
                    <div className="tokyo_section_title">
                      <h3>Interests</h3>
                    </div>
                    <div className="tokyo_tm_skill_list">
                      <ul>{renderList(knowledgeData.interests)}</ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tokyo_tm_resumebox">
              <div className="container">
                <div className="in">
                  {/* Education */}
                  <div className="left">
                    <div className="tokyo_section_title">
                      <h3>Education</h3>
                    </div>
                    <div className="tokyo_tm_resume_list">
                      <ul>{renderListResume(resumeData.education)}</ul>
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="right">
                    <div className="tokyo_section_title">
                      <h3>Experience</h3>
                    </div>
                    <div className="tokyo_tm_resume_list">
                      <ul>{renderListResume(resumeData.experience)}</ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="tokyo_tm_testimonials">
              <div className="container">
                <div className="tokyo_section_title">
                  <h3>Testimonials</h3>
                </div>
                <div className="list">
                  <ul className="testimonila-slider-wrapper">
                    <div className="slick-slider slick-initialized" dir="ltr">
                      <div className="slick-list">
                        <div
                          className="slick-track"
                          style={{ width: "400%", left: "-100%" }}
                        >
                          <div
                            data-index={-2}
                            tabIndex={-1}
                            className="slick-slide slick-cloned"
                            aria-hidden="true"
                            style={{ width: "12.5%" }}
                          >
                            <div>
                              <li
                                tabIndex={-1}
                                style={{
                                  width: "100%",
                                  display: "inline-block",
                                }}
                              >
                                <div className="list_inner">
                                  <div className="text">
                                    <p>
                                      Beautiful minimalist design and great,
                                      fast response with support. Highly
                                      recommend. Thanks Marketify!
                                    </p>
                                  </div>
                                  <div className="details">
                                    <div className="image">
                                      <div
                                        className="main"
                                        style={{
                                          backgroundImage:
                                            "url(/img/testimonials/2.jpg)",
                                        }}
                                      />
                                    </div>
                                    <div className="info">
                                      <h3>Isabelle Smith</h3>
                                      <span>Content Manager</span>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </div>
                          </div>
                          <div
                            data-index={-1}
                            tabIndex={-1}
                            className="slick-slide slick-cloned"
                            aria-hidden="true"
                            style={{ width: "12.5%" }}
                          >
                            <div>
                              <li
                                tabIndex={-1}
                                style={{
                                  width: "100%",
                                  display: "inline-block",
                                }}
                              >
                                <div className="list_inner">
                                  <div className="text">
                                    <p>
                                      Beautiful minimalist design and great,
                                      fast response with support. Highly
                                      recommend. Thanks Marketify!
                                    </p>
                                  </div>
                                  <div className="details">
                                    <div className="image">
                                      <div
                                        className="main"
                                        style={{
                                          backgroundImage:
                                            "url(/img/testimonials/3.jpg)",
                                        }}
                                      />
                                    </div>
                                    <div className="info">
                                      <h3>Baraka Clinton</h3>
                                      <span>English Teacher</span>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </div>
                          </div>
                          <div
                            data-index={0}
                            className="slick-slide slick-active slick-current"
                            tabIndex={-1}
                            aria-hidden="false"
                            style={{ outline: "none", width: "12.5%" }}
                          >
                            <div>
                              <li
                                tabIndex={-1}
                                style={{
                                  width: "100%",
                                  display: "inline-block",
                                }}
                              >
                                <div className="list_inner">
                                  <div className="text">
                                    <p>
                                      Beautiful minimalist design and great,
                                      fast response with support. Highly
                                      recommend. Thanks Marketify!
                                    </p>
                                  </div>
                                  <div className="details">
                                    <div className="image">
                                      <div
                                        className="main"
                                        style={{
                                          backgroundImage:
                                            "url(/img/testimonials/1.jpg)",
                                        }}
                                      />
                                    </div>
                                    <div className="info">
                                      <h3>Alexander Walker</h3>
                                      <span>Graphic Designer</span>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </div>
                          </div>
                          <div
                            data-index={1}
                            className="slick-slide slick-active"
                            tabIndex={-1}
                            aria-hidden="false"
                            style={{ outline: "none", width: "12.5%" }}
                          >
                            <div>
                              <li
                                tabIndex={-1}
                                style={{
                                  width: "100%",
                                  display: "inline-block",
                                }}
                              >
                                <div className="list_inner">
                                  <div className="text">
                                    <p>
                                      Beautiful minimalist design and great,
                                      fast response with support. Highly
                                      recommend. Thanks Marketify!
                                    </p>
                                  </div>
                                  <div className="details">
                                    <div className="image">
                                      <div
                                        className="main"
                                        style={{
                                          backgroundImage:
                                            "url(/img/testimonials/2.jpg)",
                                        }}
                                      />
                                    </div>
                                    <div className="info">
                                      <h3>Isabelle Smith</h3>
                                      <span>Content Manager</span>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </div>
                          </div>
                          <div
                            data-index={2}
                            className="slick-slide"
                            tabIndex={-1}
                            aria-hidden="true"
                            style={{ outline: "none", width: "12.5%" }}
                          >
                            <div>
                              <li
                                tabIndex={-1}
                                style={{
                                  width: "100%",
                                  display: "inline-block",
                                }}
                              >
                                <div className="list_inner">
                                  <div className="text">
                                    <p>
                                      Beautiful minimalist design and great,
                                      fast response with support. Highly
                                      recommend. Thanks Marketify!
                                    </p>
                                  </div>
                                  <div className="details">
                                    <div className="image">
                                      <div
                                        className="main"
                                        style={{
                                          backgroundImage:
                                            "url(/img/testimonials/3.jpg)",
                                        }}
                                      />
                                    </div>
                                    <div className="info">
                                      <h3>Baraka Clinton</h3>
                                      <span>English Teacher</span>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </div>
                          </div>
                          <div
                            data-index={3}
                            tabIndex={-1}
                            className="slick-slide slick-cloned"
                            aria-hidden="true"
                            style={{ width: "12.5%" }}
                          >
                            <div>
                              <li
                                tabIndex={-1}
                                style={{
                                  width: "100%",
                                  display: "inline-block",
                                }}
                              >
                                <div className="list_inner">
                                  <div className="text">
                                    <p>
                                      Beautiful minimalist design and great,
                                      fast response with support. Highly
                                      recommend. Thanks Marketify!
                                    </p>
                                  </div>
                                  <div className="details">
                                    <div className="image">
                                      <div
                                        className="main"
                                        style={{
                                          backgroundImage:
                                            "url(/img/testimonials/1.jpg)",
                                        }}
                                      />
                                    </div>
                                    <div className="info">
                                      <h3>Alexander Walker</h3>
                                      <span>Graphic Designer</span>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </div>
                          </div>
                          <div
                            data-index={4}
                            tabIndex={-1}
                            className="slick-slide slick-cloned"
                            aria-hidden="true"
                            style={{ width: "12.5%" }}
                          >
                            <div>
                              <li
                                tabIndex={-1}
                                style={{
                                  width: "100%",
                                  display: "inline-block",
                                }}
                              >
                                <div className="list_inner">
                                  <div className="text">
                                    <p>
                                      Beautiful minimalist design and great,
                                      fast response with support. Highly
                                      recommend. Thanks Marketify!
                                    </p>
                                  </div>
                                  <div className="details">
                                    <div className="image">
                                      <div
                                        className="main"
                                        style={{
                                          backgroundImage:
                                            "url(/img/testimonials/2.jpg)",
                                        }}
                                      />
                                    </div>
                                    <div className="info">
                                      <h3>Isabelle Smith</h3>
                                      <span>Content Manager</span>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </div>
                          </div>
                          <div
                            data-index={5}
                            tabIndex={-1}
                            className="slick-slide slick-cloned"
                            aria-hidden="true"
                            style={{ width: "12.5%" }}
                          >
                            <div>
                              <li
                                tabIndex={-1}
                                style={{
                                  width: "100%",
                                  display: "inline-block",
                                }}
                              >
                                <div className="list_inner">
                                  <div className="text">
                                    <p>
                                      Beautiful minimalist design and great,
                                      fast response with support. Highly
                                      recommend. Thanks Marketify!
                                    </p>
                                  </div>
                                  <div className="details">
                                    <div className="image">
                                      <div
                                        className="main"
                                        style={{
                                          backgroundImage:
                                            "url(/img/testimonials/3.jpg)",
                                        }}
                                      />
                                    </div>
                                    <div className="info">
                                      <h3>Baraka Clinton</h3>
                                      <span>English Teacher</span>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="Toastify" />
    </>
  );
};

export default About;
