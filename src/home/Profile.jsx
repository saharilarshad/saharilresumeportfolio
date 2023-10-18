import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faLinkedin,
  faTelegram,
  faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons";
import Typical from "react-typical";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="#facebook">
                <FontAwesomeIcon icon={faWhatsappSquare} />
              </a>
              <a href="#facebook">
                <FontAwesomeIcon icon={faTelegram} />
              </a>
              <a href="#facebook">
                <FontAwesomeIcon icon={faFacebookSquare} />
              </a>
              <a href="#facebook">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'm <span className="highligted-text">Saharil Arshad</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h2>
                <Typical
                  loop={Infinity}
                  steps={[
                    "GIS Engineer 🗺",
                    1000,
                    "DataBase Engineer 📅",
                    1000,
                    "GIS Analyst 🗺",
                    1000,
                    "React GIS Developer 🗺",
                    1000,
                  ]}
                />
              </h2>
              <span className="profile-role-tagline">
                Able to Understand, Process, Store in DB, Publish onto Web
                Service, Backend & Frontend GIS Operations
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="hireme">Hire Me</button>
            <a
              href="Resume_Saharil_Arshad.pdf"
              download="Resume Resume_Saharil_Arshad.pdf"
            >
              <button className="getResume">Ge Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
            <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
