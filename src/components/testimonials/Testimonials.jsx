import React from "react";
import "./testimonials.css";
import Image1 from "../../assets/avatar-1.svg";
import Image2 from "../../assets/avatar-3.svg";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Front End Developer",
    subtitle: "Developer",

    comment:
      "Developed a project that was similar to editing text and grammar mistakes ni Turkish language  and Developed a project related ot buying and seling coins and currency",
  },
  {
    id: 2,
    image: Image2,
    title: "Mobile Developer",
    subtitle: "Developer",

    comment:
      "Developed a project that was similar to editing text and grammar mistakes ni Turkish language  and Developed a project related ot buying and seling coins and currency",
  },
];
function Testimonials() {
  return (
    <section className="testimonials container section">
      <h2 className="section__title">Clients & Reviews</h2>
      <Swiper
        className="testimonials__container grid"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        grapCruser={true}
      >
        {data.map(({ id, image, title, subtitle, comment }) => {
          return (
            <SwiperSlide className="testimonials__item" key={id}>
              <div className="thumb">
                <img src={image} alt="" srcset="" />
              </div>
              <h3 className="testimonials__title">{title}</h3>
              <span className="subtitle">{subtitle}</span>
              <div className="comment">{comment}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonials;
