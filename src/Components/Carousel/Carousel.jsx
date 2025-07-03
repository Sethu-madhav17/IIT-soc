// FancyCarousel.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/Media/IMG6.jpg",
  "/Media/IMG7.jpg",
  "/Media/IMG9.jpg",
  "/Media/IMG10.jpg",
];

const FancyCarousel = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds delay
    speed: 800, // transition speed
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // show left/right buttons
    dots: true, // small circle indicators
    pauseOnHover: true,
  };

  return (
    <div style={{ width: "100%",height:"fit-content", paddingBottom: "2rem" }}>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              style={{ width: "100vw", height: "50vw", objectFit: "cover" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FancyCarousel;

