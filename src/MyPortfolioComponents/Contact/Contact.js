import React from "react";
import "./Contact.css";
import ContactCard from "./ContactCard/ContactCard";

const Contact = () => {
  return (
    <>
      <div className="container-contact">
        <h2 id="contact-h2">Contact Me</h2>
        <ContactCard />
      </div>
    </>
  );
};

export default Contact;
