import React from "react";
import "./Magnumopus.css";

const events = [
  {
    title: "Magnum Opus 2025",
    date: "Jan 11, 2025",
    time: "08:00 AM",
    description:
      "Relive, Revive, Reconnect: Back to the Roots; Where It All Began ✨We are thrilled to announce Magnum Opus 2025 – a special gathering to celebrate and strengthen the cherished relationship between our alumni and alma mater! 🎓This event is more than just a reunion; it’s a celebration of shared dreams, lifelong memories, and incredible growth. Let’s honor the timeless bond that unites us all. 🌟",
    image: "/Media/mopus.png",
    isLive: true,
  },
  {
    title: "Magnum Opus",
    date: "Mar 09, 2024",
    time: "10:00 AM",
    description:
      "Magnum Opus- A get together of the Students and alumni was organized in the campus of IIT Indore, attended by alumni on 09th March 2024. The event also witnessed few distinguished Alumni of the institute wherein they shared their experiences and motivated the current students of the institute.\nThe event was also graced by Prof. Suman Mukhopadhyay, Dean (Alumni & Corporate Relations), IIT Indore, who met and addressed the Alumni, who are the valued ambassador, taking forward the legacy of the institute across the world.",
    image: "/Media/IMG9.jpg",
    isLive: false,
  },
  
];

const EventCard = ({ event }) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: event.title,
          text: event.description,
          url: window.location.href,
        })
        .catch((error) => console.log("Error sharing", error));
    } else {
      alert("Sharing not supported on this browser.");
    }
  };

  return (
    <div className="event-card" tabIndex={0}>
      <img src={event.image} alt={event.title} className="event-image" />
      <div style={{ flex: 1 }}>
        <div className="event-header">
          <h2 className="event-title">{event.title}</h2>
          <button
            onClick={handleShare}
            className="share-button"
            aria-label={`Share ${event.title}`}
            title="Share"
          >
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
  <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/>
</svg>
          </button>
        </div>
        <p className="event-date-time">
          📅 {event.date} &nbsp; 🕒 {event.time}
        </p>
        <p className="event-description">{event.description}</p>
        <div className="event-footer">
          <button
            className="view-button"
            onClick={() => alert(`Viewing details for: ${event.title}`)}
          >
            VIEW
          </button>
        </div>
      </div>
    </div>
  );
};

function Magnumopus() {
  return (
    <div className="magnumopus-container">
      <div className="bannermo">
        <img
          src="/Media/mopus.png"
          alt="Magnum Opus Banner"
        />
      </div>

      <div className="events-container">
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
}

export default Magnumopus;
