import React from "react";
import "./about.css";
import ME from "../../assets/me.png";
import { FiAward } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { CgFolder } from "react-icons/cg";
import { Fade } from "react-awesome-reveal";

export const About = () => {
  return (
    <section id="about">
      <h5 className="text-[#191919] dark:text-[#fff]">Get To Know</h5>
      <h2 >About Me</h2>

      <div className="container about_container">
        <Fade>
        <div className="about_me">

<div className="about_me-image">
  <img src={ME} alt="myself" loading="lazy" />
</div>
</div>

<div className="about_content">
<div className="about_cards">
 <Fade cascade>
 <article className="about_card  bg-transparent dark:bg-[#2c2c6c] dark:border-transparent ">
   
   <FiAward className="about_icon" />
   <h5>Experience</h5>
   <small className="text-[#191919] dark:text-[#fff] text-center">2+ years working</small>
 </article>
 <article className="about_card bg-transparent dark:bg-[#2c2c6c] dark:border-transparent ">
   <FiUsers className="about_icon" />
   <h5>Clients</h5>
   <small className="text-[#191919] dark:text-[#fff] text-center">worldwide client</small>
 </article>
 <article className="about_card bg-transparent dark:bg-[#2c2c6c] dark:border-transparent ">
   <CgFolder className="about_icon" />
   <h5>Project</h5>
   <small className="text-[#191919] dark:text-[#fff] text-center">10+  completed</small>
 </article>
 </Fade>
</div>

<p className="text-[#191919] dark:text-[rgba(255,255,255,0.6)]">
 Dedicated and result oriented copywriter with many years of work experience in ceative writting and copywritting. A problem solver with eyes for excellent and zeal to achieve desired goals in sales and marketing.
</p>
<a href="#contact" className="btn btn-primary">
  Let's Talk
</a>
</div>
        </Fade>
       
      </div>
    </section>
  );
};
