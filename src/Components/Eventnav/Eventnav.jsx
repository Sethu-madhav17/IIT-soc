import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "./Eventnav.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  { image: "/Media/are.png", link: "/Reunion", label: "Reunion" },
  { image: "/Media/convo.jpg", link: "/Convocation", label: "Convocation" },
  { image: "/Media/cmeet.jpg", link: "/Meets", label: "Alumni Meet" },
  { image: "/Media/mopus.png", link: "/Magnumopus", label: "MagnumOpus" },
  { image: "/Media/gallery.jpg", link: "/Gallery", label: "Gallery" },
];

const Eventnav = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    speed: 5000,
    responsive: [
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 3,
        },
      },
      
      
    ],
  };

  return (
    <div className="eventnav-wrapper">
      <div className="achievement-banner">⚠️ Tap image below to know more</div>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="event-card1">
            <Link to={item.link}>
              <img src={item.image} alt={item.label} />
              <p className="event-label">{item.label}</p>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Eventnav;



