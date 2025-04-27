import "./portfolio.css";

import IMG1 from "../../assets/projectimg/difwa.png";
import IMG2 from "../../assets/projectimg/ravistudio.png";
import IMG3 from "../../assets/projectimg/ajaydhawan.png";
import IMG4 from "../../assets/projectimg/nextzeni.png";
import IMG5 from "../../assets/projectimg/nextzeni.png";
import IMG6 from "../../assets/projectimg/indecorlko.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Difwa Water Delivery App",
      img: IMG1,
      description:
        "An educational website is a huge interactive platform to present various information for people.",
      technologies: "Html | CSS | Javascript | React Js",
      link: "https://educational-website-reactjs.netlify.app/",
      github: "https://github.com/ANAND2001-A",
    },
    {
      id: 2,
      title: "TalentMeet",
      img: IMG4,
      description:
        "A personal website for the online Interview Online Prectice. Firebase is the basis of the website assembled as a full stack",
      technologies: "ReactJs | TailwindCSS | JavaScript | Real Time DataBase | Firebase",
      link: "https://mockinteviewanand.vercel.app/",
      github: "https://github.com/ANAND2001-A",
    },
    {
      id: 3,
      title: "RaviStudio",
      img: IMG2,
      description: "A booking website for doctor's appointments at the hospital. The website is mainly functionally developed with JavaScript",
      technologies: "HTML | CSS | JavaScript",
      link: "https://ravistudio.vercel.app/",
      github: "https://github.com/ANAND2001-A",
    },
    {
      id: 4,
      title: "AjayDhawan",
      img: IMG3,
      description:
        "A dedicated, standalone web page built for specific campaigns and target audiences.",
      technologies: "Html | CSS | JavaScript | Next Js",
      link: "https://www.ajaydhawan.com/",
      github: "https://github.com/ANAND2001-A",
    },
    {
      id: 5,
      title: "NextZeni",
      img: IMG5,
      description:
        "For when you need a fast funny joke, here are some short jokes to get anyone giggling.",
      technologies: "Html | Styled-components | Typescript",
      link: "https://www.nextzeni.com/",
      github: "https://github.com/difmo/nextzeni",
    },
    {
      id: 6,
      title: "IndecorLko",
      img: IMG6,
      description:
        "Real-world group project which is still in progress and will provide educational platform for future young developers",
      technologies: "Html | Scss | Javascript",
      link: "https://www.indecorlko.com/",
      github: "https://github.com/difmo/indecorlko",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
