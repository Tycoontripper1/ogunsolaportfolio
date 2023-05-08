import React from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { FiTwitter } from "react-icons/fi";
import {AiFillFacebook} from 'react-icons/ai'

export const Contact = () => {
  return (
    <section id="contact">
      <h5 className="text-[#191919] dark:text-[#fff]">Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option items-center bg-transparent dark:bg-[#2c2c6c] dark:border-transparent">
            <AiOutlineMail className="contact_option-icon text-[#4dbfff] dark:text-white " />
            <h4>Email</h4>
            <h5 className="dark:text-[rgba(255,255,255,0.6)]">femfatteking@gmail.com</h5>
            <a href="mailto:femfattheking@gmail.com">send a message</a>
          </article>
          <article className="contact_option center bg-transparent dark:bg-[#2c2c6c] dark:border-transparent">
            <IoLogoWhatsapp className="contact_option-icon text-[#4dbfff] dark:text-white " />
            <h4>Whatsapp</h4>
            <h5 className="dark:text-[rgba(255,255,255,0.6)]">+2348039676913</h5>
            <a href="https://api.whatsapp.com/send?phone=2348039676913">
              send a message
            </a>
          </article>
          <article className="contact_option center bg-transparent dark:bg-[#2c2c6c] dark:border-transparent">
            <AiFillFacebook className="contact_option-icon text-[#4dbfff] dark:text-white " />
            <h4>Facebook</h4>
            <h5 className="dark:text-[rgba(255,255,255,0.6)]">Olufemi Ogunsola</h5>
            <a href="https://www.facebook.com/Olufmiol?mibextid=ZbWKwL">
              send a message
            </a>
          </article>
        </div>
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
