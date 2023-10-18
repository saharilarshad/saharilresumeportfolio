import {
  faTelegram,
  faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css";

export default function Footer() {
  const today = new Date();
  return (
    <footer>
      <a href="#" className="footer__logo">
        Saharil Arshad
      </a>

      <ul className="permanlinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio's</a>
        </li>
        <li>
          <a href="#testimonials">Supervised</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <div className="social">
          <a href="mailto:saharilarshad@gmail.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            Email
          </a>
        </div>
        <div className="social">
          <a href="https://api.whatsapp.com/send?phone=60166180682" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faWhatsappSquare} className="icon" />
            WhatsApp
          </a>
        </div>
        <div className="social">
          <a href="https://t.me/+60166180682" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTelegram} className="icon" />
            Telegram
          </a>
        </div>
      </div>

      <div className="footer__copyright">
        <small>
          Copyright &copy; {today.getFullYear()}. All rights reserved.
        </small>
      </div>
    </footer>
  );
}
