import React, { useState, useEffect } from "react";
import "./events.css";
import progress from "../../assets/images/progress.svg";
import { Link } from "react-router-dom";

const Events = () => {
  const tickets = [
    { id: 1, type: "Regular Access", price: "Free" },
    { id: 2, type: "VIP Access", price: "$50" },
    { id: 3, type: "VVIP Access", price: "$150" },
  ];

  const [selectedNumber, setSelectedNumber] = useState(1);

  // Load stored number from localStorage
  useEffect(() => {
    const storedNumber = localStorage.getItem("selectedNumber");
    if (storedNumber) {
      setSelectedNumber(parseInt(storedNumber, 10));
    }
  }, []);

  // Handle number selection
  const handleSelectChange = (e) => {
    const newNumber = e.target.value;
    setSelectedNumber(newNumber);
    localStorage.setItem("selectedNumber", newNumber);
  };

  return (
    <div className="event-wrapper">
      <div className="event-header">
        <div>
          <h2>Ticket Selection</h2>
          <span>Step 1/3</span>
        </div>
        <img className="progressbar" src={progress} alt="" />
      </div>
      <div className="ticket-details">
        <div className="ticket-texts">
          <h1>Techember Fest ”25</h1>
          <p>
            Join us for an unforgettable experience at [Event Name]! Secure your
            spot now.
          </p>
          <div>
            <span>📍 [Event Location]</span>
            <span>| |</span>
            <span>March 15, 2025 | 7:00 PM</span>
          </div>
        </div>
        <div className="line"></div>
        <div className="select-ticket">
          <h2>Select Ticket Type:</h2>
          <div className="ticket-grid">
            {tickets.map((tick) => (
              <div className="grid" key={tick.id}>
                <span className="price">{tick.price}</span>
                <p>
                  {tick.type} <span>20/52</span>
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="ticket-number">
          <label htmlFor="ticketCount">Number of Tickets</label>
          <select
            id="ticketCount"
            value={selectedNumber}
            onChange={handleSelectChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div className="buttons2">
          <button className="btncancel">Cancel</button>
          <Link to={`/ticket-form/${selectedNumber}`}>
            <button>Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Events;
