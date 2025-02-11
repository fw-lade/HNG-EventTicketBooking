import React from "react";
import "./events.css";
import progress from "../../assets/images/progress.svg";

const Events = () => {
  return (
    <>
      <div className="event-wrapper">
        <div className="event-header">
          <div>
            <h2>Ticket Selection</h2>
            <span>Step 1/3</span>
          </div>
          <img src={progress} alt="" />
        </div>
        <div className="ticket-details">
          <div className="ticket-texts">
            <h1>Techember Fest ”25</h1>
            <p>
              Join us for an unforgettable experience at [Event Name]! Secure
              your spot now.
            </p>
            <div>
              <span>📍 [Event Location]</span>
              <span>| |</span>
              <span>March 15, 2025 | 7:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
