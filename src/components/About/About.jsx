import React from "react";
import boba from "../../assets/boba.jpg";
import capcake from "../../assets/cupcake.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./About.css";

const About = () => {
  return (
    <div className="about" id="blogs">
      <Swiper
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 9500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
        className="swiper about-row"
      >
        <SwiperSlide className="box">
          <div className="img">
            <img src={boba} alt="boba" />
          </div>
          <div className="content">
            <h3>What makes our boba special?</h3>
            <p>
              Boba drinks, also known as bubble tea, offer a unique experience
              with their chewy tapioca pearls, a wide range of flavors, and
              customizable options. Originating from Taiwan, these visually
              appealing beverages are perfect for social gatherings and have
              become a global symbol of modern Asian culture. Enjoy the fun
              texture and personalized taste that make boba a favorite
              worldwide!
            </p>
            <a href="#about" className="btn">
              learn more
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="box">
          <div className="img">
            <img src={capcake} alt="capcake" />
          </div>
          <div className="content">
            <h3>What makes our boba special?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            <a href="#about" className="btn">
              learn more
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="box">
          <div className="img">
            <img src={boba} alt="boba" />
          </div>
          <div className="content">
            <h3>What makes our boba special?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            <a href="#about" className="btn">
              learn more
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default About;
