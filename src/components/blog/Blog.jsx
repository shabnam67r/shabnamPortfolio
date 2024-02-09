import React from "react";
import "./blog.css";
import Image1 from "../../assets/blog-1.svg";
import Image2 from "../../assets/blog-2.svg";
import Image3 from "../../assets/blog-3.svg";

function Blog() {
  return (
    <section className="blog container section" id="blog">
      <h2 className="section__title">Latest Posts</h2>

      <div className="blog__container grid">
        <div className="blog__card">
          <div className="blog__thumb">
            <a href="#">
              <span className="blog__category"></span>
            </a>
            <a href="#">
              <img src={Image1} alt="" className="blog__img" />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">
              <div className="blog__meta">
                <span></span>
                <span className="blog__dot">.</span>
                <span>Bolby</span>
              </div>
            </h3>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <a href="#">
              <span className="blog__category"></span>
            </a>
            <a href="#">
              <img src={Image1} alt="" className="blog__img" />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">
              <div className="blog__meta">
                <span></span>
                <span className="blog__dot">.</span>
                <span>Bolby</span>
              </div>
            </h3>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <a href="#">
              <span className="blog__category"></span>
            </a>
            <a href="#">
              <img src={Image1} alt="" className="blog__img" />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">
              <div className="blog__meta">
                <span></span>
                <span className="blog__dot">.</span>
                <span>Bolby</span>
              </div>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
