import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/Saharil_Intro.png";
import HeaderSocial from "./HeaderSocial";
import Typical from "react-typical";

export default function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Saharil Arshad</h1>
        <h3 className="text-light">
          <Typical
            loop={Infinity}
            steps={[
              "GIS Engineer 🗺",
              1000,
              "DataBase Engineer 📅",
              1000,
              "GIS Analyst 🗺",
              1000,
              "Web Developer + GIS 🗺",
              1000,
            ]}
          />
        </h3>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}
