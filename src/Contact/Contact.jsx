import React from "react";
import Contactform from "./Contactform";
import "./Contact.css";

const Contact = () => {
  const emailAddress = "support@bonik.com";
  const phoneNumber = "+88012 3456 7894";
  return (
    <div className="heading">
      <div className="mainheading">
        <h1>Contact Us!!</h1>
      </div>
      <div className="para">
        <p>
          Welcome to our Contact page at Bonik! We are thrilled to hear from you
          and eager to assist with any questions, concerns, or inquiries you may
          have. Our customer support team is here to ensure your shopping
          experience is as smooth as possible. Feel free to reach out to us
          through any of the following channels:
        </p>
      </div>
      <div className="head1">
        <h2>Contact Form:</h2>
      </div>
      <div className="para1">
        <p>
          For your convenience, we have provided a user-friendly contact form
          below. Simply fill in your details and message, and we'll get back to
          you promptly.
        </p>
      </div>
      <Contactform />
      <div className="head2">
        <h2>Email:</h2>
      </div>
      <div className="para2">
        <p>
        Have a specific question or need assistance? Don't hesitate to send us
          an email us at{" "}
          <a href={`mailto:${emailAddress}`}>{emailAddress}</a>. We strive to
          respond to all emails within one business day.
        </p>
      </div>
      <div className="head3">
        <h2>Phone:</h2>
      </div>
      <div className="para3">
        <p>
          Prefer talking to someone directly? You can reach our dedicated
          customer support helpline at {phoneNumber}. Our phone lines are
          open during business hours, Monday to Friday.
        </p>
      </div>
      <div className="head4">
        <h2>Social Media:
        </h2>
      </div>
      <div className="para4">
        <p>
          Stay connected with us on social media! You can send us direct
          messages on Facebook, Twitter, and Instagram, and our team will be
          happy to assist you.
        </p>
      </div>
      <div className="para5">
        <p>
          We value your feedback and look forward to providing you with the best
          service possible. Your satisfaction is our top priority, and we thank
          you for choosing Bonik for all your shopping needs. Happy shopping!
        </p>
      </div>
    </div>
  );
};

export default Contact;
