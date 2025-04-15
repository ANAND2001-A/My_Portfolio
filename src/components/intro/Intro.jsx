import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assets/Me.png'

// import ME from '../../assets/Rasif Tagizade image.jpg';


const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Rasif Taghizade" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1.6 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p>
            Front-End Developer with 1.6 Years of Experience

            Results-driven Front-End Developer with 1.6 years of hands-on experience in building responsive and high-performance web and mobile applications. Proficient in leveraging modern technologies such as React.js, Next.js, Tailwind CSS, Firebase, and Flutter to create seamless user experiences. Skilled in Figma for UI/UX design, with a strong ability to translate wireframes and design mockups into clean, maintainable code.

            Successfully delivered multiple projects across both web and mobile platforms, showcasing a deep understanding of component-based architecture, state management, and performance optimization. Adept at identifying and implementing user interactions, debugging complex issues, and maintaining frontend performance across various devices and browsers.

            Educational background includes a Bachelor of Technology (B.Tech) and Polytechnic Diploma in a relevant field, providing a solid foundation in both theoretical and practical aspects of software development.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
