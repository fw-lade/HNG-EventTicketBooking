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
      </div>
    </>
  );
};

export default Events;
