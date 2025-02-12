import React from "react";
import progress2 from "../../assets/images/progress2.svg";
import ticket from "../../assets/images/ticket.svg";
import { Link } from "react-router-dom";

const Ticket = () => {
  const ticketdetails =
    JSON.parse(localStorage.getItem("ticketFormData")) || {};
  console.log(ticketdetails);

  const { name, number, photo, email } = ticketdetails;
  return (
    <>
      <div className="event-wrapper">
        <div className="event-header">
          <div>
            <h2>Ready</h2>
            <span>Step 3/3</span>
          </div>
          <img className="progressbar" src={progress2} alt="" />
        </div>
        <div className="ticket">
          <div className="ticket-header">
            <h1>Your Ticket is Booked!</h1>
            <p>Check your email for a copy or you can download</p>
          </div>
          <div className="user-details">
            <img src={ticket} alt="" />
            <span className="tickname">{name}</span>
            <span className="tickemail">{email}</span>
            <span className="ticknumber">{number}</span>
            <span className="ticktype">Regular</span>
            <img className="tickp" src={photo} alt="" />
          </div>
          <div className="buttons2">
            <Link to="/">
              <button>Book Another Ticket</button>
            </Link>
            <button>Download Ticket</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ticket;
