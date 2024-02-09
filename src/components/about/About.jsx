import React from "react";
import "./about.css";
import Image from "../../assets/avatar-2.svg";
import AboutBox from "./AboutBox";
import Me2 from "../../assets/shabnam2.jpeg";

const About = () => {
  const handleDownload = () => {
    // Replace 'shabnam rezapour.pdf' with the actual name of your CV file
    const downloadUrl = require("../../assets/shabnam rezapour.pdf");
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "shabnam rezapour.pdf"; // Specify the filename for the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="about container section" id="about">
      <h2 className="section">About Me</h2>
      <div className="about__container grid">
        <img src={Me2} alt="" srcset="" className="about__img" />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Hello there! I'm Shabnam, a passionate Front-End Developer with a
              knack for crafting seamless user experiences using React and React
              Native. With a solid foundation in JavaScript and TypeScript,
              coupled with expertise in React Redux, I've spent the last 3 years
              honing my skills and contributing to impactful projects.
            </p>
            <p className="about__description">
              💻 In the dynamic world of web development, I thrive on staying
              ahead of the curve. My journey has been marked by a constant
              eagerness to learn and explore emerging technologies. I find joy
              in tackling challenges head-on, whether it's optimizing code for
              performance or implementing elegant solutions to complex problems.
            </p>
            <p className="about__description">
              🚀 My professional journey has equipped me with a robust skill set
              in creating responsive and engaging web applications. The
              collaborative nature of development is what fuels my enthusiasm,
              and I'm always eager to be a part of teams that value innovation
              and creativity.
            </p>
            <p className="about__description">
              🌐 I believe that the web development landscape is ever-evolving,
              and this excites me. My commitment to continuous improvement
              drives me to seek out new opportunities for growth. I am currently
              enthusiastic about adding more tools to my belt and expanding my
              knowledge in this area.
            </p>
            <p className="about__description">
              <br /> Let's connect and explore the possibilities of creating
              impactful digital experiences together!
            </p>
            <a href={handleDownload} className="btn" onClick={handleDownload}>
              Download CV
            </a>
          </div>
          {/* <div className="about__skills grid">
            <div className="skill__data">
              <div className="skills__titles">
                <h3 className="skills__name">Front End Developer </h3>
                <span className="skills__number">React.js</span>
              </div>
              <div className="skill__bar">
                <span className="skills__percentage"></span>
              </div>
            </div>
            <div className="skill__data">
              <div className="skills__titles">
                <h3 className="skills__name">Mobile Developer</h3>
                <span className="skills__number">React Native</span>
              </div>
              <div className="skill__bar">
                <span className="skills__percentage"></span>
              </div>
            </div>
            <div className="skill__data">
              <div className="skills__titles">
                <h3 className="skills__name">Javascript Developer</h3>
                <span className="skills__number">Javascript</span>
              </div>
              <div className="skill__bar">
                <span className="skills__percentage"></span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <AboutBox />
    </section>
  );
};

export default About;
