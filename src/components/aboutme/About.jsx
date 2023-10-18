import "./about.css";
import AboutMe from "../../assets/qq.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faRectangleList,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={AboutMe} alt="aboutme" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FontAwesomeIcon icon={faAward} className="about__icon" />
              <h5>Experience</h5>
              <small>8+ Years Working</small>
            </article>
            <article className="about__card">
              <FontAwesomeIcon icon={faSnowflake} className="about__icon" />
              <h5>Clients</h5>
              <small>50+ Worldwide</small>
            </article>
            <article className="about__card">
              <FontAwesomeIcon icon={faRectangleList} className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>
            Have experienced working with small and medium size company. Serve
            goverment agencies, local authority and private sector with
            technologies and data. Experienced as Team Leader in technical team for GIS Department..
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}
