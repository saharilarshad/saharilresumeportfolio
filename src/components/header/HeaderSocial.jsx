import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faGithub,
  faLinkedin,
  faTelegram,
  faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons";

export default function HeaderSocial() {
  return (
    <div className="header__socials">
      <a href="#facebook" target="_blank">
        <FontAwesomeIcon icon={faWhatsappSquare} />
      </a>
      <a href="#facebook" target="_blank">
        <FontAwesomeIcon icon={faTelegram} />
      </a>
      <a href="#facebook" target="_blank">
        <FontAwesomeIcon icon={faFacebookSquare} />
      </a>
      <a href="#facebook" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="#facebook" target="_blank">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
}
