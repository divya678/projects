"use client";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import React, { useState } from "react";
import { GoPaperclip } from "react-icons/go";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { motion } from "framer-motion";
import PacmanLoader from "react-spinners/PacmanLoader";
import toast from "react-hot-toast";

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setFileName(file.name);
  };
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const result = await emailjs.send(
        "service_7utzj6c", // e.g. "service_123abc"
        "template_pbs3hb4", // e.g. "template_contact"
        {
          from_name: data.name,
          from_email: data.user_email,
          message: data.message,
        },
        "MUxLsgxuMqKGmMace" // e.g. "user_abc123XYZ public key"
      );
      toast.success("Message sent successfully!");
      reset();
      setFileName("");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Failed to send message:", error);
      toast.success("Failed to send message. Please try again later.");
    }
  };

  return (
    <>
      <motion.div initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }} className="rightpart">
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
                            {...register("name", { required: "Name is required", minLength: { value: 2, message: "Minimum 2 characters" } })}
                          /> {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

                        </li>
                        <li>
                          <input
                            type="email"
                            placeholder="Email"
                            {...register("user_email", {
                              required: "Email is required",
                              pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Enter a valid email",
                              },
                            })}
                          />
                          {errors.user_email && <p className="text-red-500 text-sm">{errors.user_email.message}</p>}
                        </li>
                        <li className="relative w-full max-w-md">

                          <textarea
                            name="message"
                            placeholder="Your message..."
                            rows={6}
                            {...register("message", {
                              required: "Message is required",
                              minLength: { value: 10, message: "Minimum 10 characters" },
                            })}
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
                          {(fileName || fileName!== "") && (
                            <p className="text-sm mt-2 text-gray-500 truncate">
                              📎 Attached: {fileName}
                            </p>
                          )}
                          {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                        </li>
                      </ul>
                    </div>
                    <div className="tokyo_tm_button">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        type="submit"
                        className="ib-button"
                      >
                        {loading ? (
                          <PacmanLoader color="#fff" size={20} loading={true} />
                        ) : (
                          "Send Message"
                        )}
                      </motion.button>

                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

    </>
  );
};

export default Contact;
