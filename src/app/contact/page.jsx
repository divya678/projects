"use client";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import React, { useState } from "react";
import { GoPaperclip } from "react-icons/go";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setFileName(file.name);
  };
  const onSubmit = async (data) => {
    try {
      const result = await emailjs.send(
        "service_0kwriud", // e.g. "service_123abc"
        "template_pbs3hb4", // e.g. "template_contact"
        {
          from_name: data.name,
          from_email: data.user_email,
          message: data.message,
        },
        "MUxLsgxuMqKGmMace" // e.g. "user_abc123XYZ"
      );

      alert("Message sent successfully!");
      reset();
    } catch (error) {
      console.error("Failed to send message:", error);
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <>
      <div className="rightpart">
        <div className="rightpart_in">
          <div className="tokyo_tm_section">
            <div className="container">
              <div className="tokyo_tm_contact">
                <div className="tokyo_tm_title">
                  <div className="title_flex">
                    <div className="left">
                      <span>Contact</span>
                      <h3>Get in Touch</h3>
                    </div>
                  </div>
                </div>

                <div className="fields">
                  <form
                    className="contact_form"
                    id="myForm"
                    onSubmit={handleSubmit(onSubmit)}
                    encType="multipart/form-data"
                  >
                    <div className="first">
                      <ul>
                        <li>
                          <input
                            type="text"
                            placeholder="Name"
                            {...register("name", { required: true })}
                          />
                        </li>
                        <li>
                          <input
                            type="email"
                            placeholder="Email"
                            {...register("user_email", { required: true })}
                          />
                        </li>
                        <li className="relative w-full max-w-md">
                      
                          <textarea
                            name="message"
                            placeholder="Your message..."
                            rows={6}
                             {...register("message", { required: true })}
                            // className="w-full p-4 pr-10 rounded border border-gray-300 focus:outline-none"
                          />

                          {/* Hidden File Input */}
                          <input
                            type="file"
                            id="attachment"
                            className="hidden"
                            onChange={handleFileChange}
                          />

                          {/* Paperclip Icon as Label */}

                          <label
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content="Attach a file "
                            htmlFor="attachment"
                            className="absolute top-3 right-6 cursor-pointer bg-gray-700"
                          >

                            <GoPaperclip className="w-8 h-8 text-gray-500 hover:text-gray-700 cursor-pointer" />


                          </label>
                          <Tooltip id="my-tooltip" />
                          {/* Optional: Show File Name */}
                          {fileName && (
                            <p className="text-sm mt-2 text-gray-500 truncate">
                              📎 Attached: {fileName}
                            </p>
                          )}
                        </li>
                      </ul>
                    </div>
                    <div className="tokyo_tm_button">
                      <button type="submit" className="ib-button">
                        Send Message
                      </button>
                    </div>
                  </form>
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

export default Contact;
