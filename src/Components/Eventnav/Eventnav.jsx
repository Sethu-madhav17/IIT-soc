import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Eventnav.css";
import Magnumopus from "../../pages/Magnumopus/Magnumopus";

const data = [
  {
    image: "/Media/mopus.png",
    link: "/Magnumopus",
    label: "MagnumOpus",
  },
  {
    image: "/Media/are.png",
    link: "/Reunion",
    label: "Reunion",
  },
  {
    image: "/Media/convo.jpg",
    link: "/Convocation",
    label: "Convocation",
  },
  {
    image: "/Media/cmeet.jpg",
    link: "/Meets",
    label: "Chapter/Alumni Meet",
  },
  {
    image: "/Media/gallery.jpg",
    link: "/Gallery",
    label: "Gallery",
  },
];

const Eventnav = () => {
  const containerRef = useRef(null);
  const [active, setActive] = useState(3);

  const loadShow = () => {
    const items = containerRef.current.querySelectorAll(".slider .item");

    items.forEach((item, index) => {
      item.style.transition = "transform 0.5s, filter 0.5s, opacity 0.5s";

      let relativePos = index - active;
      if (relativePos > data.length / 2) {
        relativePos -= data.length;
      } else if (relativePos < -data.length / 2) {
        relativePos += data.length;
      }

      if (index === active) {
        item.style.transform = "none";
        item.style.zIndex = 1;
        item.style.filter = "none";
        item.style.opacity = 1;
      } else if (relativePos > 0) {
        const stt = relativePos;
        item.style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
        item.style.zIndex = -stt;
        item.style.filter = "blur(5px)";
        item.style.opacity = stt > 2 ? 0 : 0.6;
      } else {
        const stt = -relativePos;
        item.style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
        item.style.zIndex = -stt;
        item.style.filter = "blur(5px)";
        item.style.opacity = stt > 2 ? 0 : 0.6;
      }
    });
  };

  useEffect(() => {
    loadShow();
  }, [active]);

  const goPrev = () =>
    setActive((prev) => (prev === 0 ? data.length - 1 : prev - 1));

  const goNext = () =>
    setActive((prev) => (prev === data.length - 1 ? 0 : prev + 1));

  return (
    <div className="eventnav-wrapper" ref={containerRef}>
      <div className="label">{data[active].label}</div>

      <div className="slider">
        <div className="arrow left" onClick={goPrev}>
          &#10094;
        </div>

        {data.map((item, index) => (
          <div className="item" key={index} onClick={() => setActive(index)}>
           <Link to={item.link}>
  <img src={item.image} alt={`Image ${index + 1}`} />
</Link>

          </div>
        ))}

        <div className="arrow right" onClick={goNext}>
          &#10095;
        </div>
      </div>
    </div>
  );
};

export default Eventnav;

