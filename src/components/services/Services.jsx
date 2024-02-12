import React from "react";
import "./services.css";
import image1 from "../../assets/service-1.svg";
import image2 from "../../assets/service-2.svg";
import image3 from "../../assets/service-3.svg";
const data = [
  {
    id: 1,
    image: image1,
    title:`Front End Developer . \n 
     (React.js | JavaScript | Typescript | Next.js | |Redux | MUI)  `,
    description:
      "Developed a project that was similar to editing text and grammar mistakes in Turkish language  and Developed a project related ot buying and seling coins and currency",
  },
  {
    id: 2,
    image: image2,
    title: "Mobile Developer . \n  ReactNative | Javascript",
    description:
      "Developed a project that was similar to editing text and grammar mistakes in Turkish language  and Developed a project related ot buying and seling coins and currency",
  }
];

function Services() {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Skills</h2>
      <div className="services__container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
