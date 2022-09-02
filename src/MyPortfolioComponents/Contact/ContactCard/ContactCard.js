import React from "react";
import "./ContactCard.css";
import ContactList from "./ContactList";

const ContactCard = () => {
  return (
    <>
      <div className="all-card">
        {ContactList.map((e) => {
          return (
            <div className="card" key={e.id}>
              <div className="card-img">
                <img src={e.img} alt="linkedin" />
              </div>
              <div className="card-title">{e.title}</div>
              <div className="card-description">{e.description}</div>
              <button type="button" id="read-more-btn">
                <a href={e.url} target="_blank" rel="noopener noreferrer">
                  {" "}
                  Connect Me
                </a>
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ContactCard;
