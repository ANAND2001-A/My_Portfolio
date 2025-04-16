import './contact.css';
import React, { useRef, useState } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_r7pe28t', // Your service ID
        'template_vfjszyl', // Your template ID
        formRef.current,
        'aLoWHmUVCfVHsayPK' // Your public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageSent(true);
          setError(false);
          e.target.reset();
          setTimeout(() => setMessageSent(false), 5000); // Hide message after 5s
        },
        (error) => {
          console.error(error.text);
          setError(true);
          setTimeout(() => setError(false), 5000);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h5>I do receive your messages and will respond ASAP if a valid email is provided :)</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>a9401yadav@gmail.com</h5>
            <a href="mailto:a9401yadav@gmail.com" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input type="text" name="user_name" placeholder="Your Full Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
          {messageSent && <span className="success-msg">Thanks, I'll reply ASAP :)</span>}
          {error && <span className="error-msg">Oops! Something went wrong.</span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
