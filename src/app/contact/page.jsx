"use client";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import React from "react";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
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
                        <li>
                          <textarea
                            placeholder="Message"
                            {...register("message", { required: true })}
                          />
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
