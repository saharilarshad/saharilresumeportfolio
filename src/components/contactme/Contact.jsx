import {
  faTelegram,
  faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import "./contact.css";
import emailjs from "emailjs-com";

export default function Contact() {

  const [isDone, setIsDone] = useState(false);

  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_pr49cpf',
        'template_6un2yib',
        formRef.current,
        'user_xf5AXvYhXQbv3yBWxNTea'
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );

      e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="contact__option-icon"
            />
            <h4>Email</h4>
            <h5>saharilarshad@gmail.com</h5>
            <a href="mailto:saharilarshad@gmail.com" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FontAwesomeIcon
              icon={faWhatsappSquare}
              className="contact__option-icon"
            />
            <h4>WhatsApp</h4>
            <h5>166180682</h5>
            <a
              href="https://api.whatsapp.com/send?phone=60166180682"
              target="_blank" rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FontAwesomeIcon
              icon={faTelegram}
              className="contact__option-icon"
            />
            <h4>Telegram</h4>
            <h5>166180682</h5>
            <a href="https://t.me/+60166180682" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
        </div>

        <form ref={formRef} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            id="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {isDone && <p style={{color:"#fff"}}>Submitted.. Thank You</p>}
        </form>
      </div>
    </section>
  );
}
