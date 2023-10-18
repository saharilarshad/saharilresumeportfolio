import "./portfolio.css";
import IMG1 from "../../assets/sk2.PNG";
import IMG2 from "../../assets/voyager.PNG";
import IMG3 from "../../assets/geoledang.PNG";
import IMG4 from "../../assets/iplan.PNG";
import IMG5 from "../../assets/ssf.png";
import IMG6 from "../../assets/tiba.png";
import IMG7 from "../../assets/irist1.png";

// if want to use map method

// const dataPortfolio = [
//   {
//     id: 1,
//     image: IMG1,
//     title: "my portfolio",
//     github: "https://github.com",
//     demo: "",
//   },
//   {
//     id: 2,
//     image: IMG2,
//     title: "my portfolio",
//     github: "https://github.com",
//     demo: "",
//   },
// ];

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Previous Work</h5>
      <h2>Portfolio's</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img
              src={IMG1}
              alt="img1"
              onClick={() =>
                window.open(
                  "https://smartkadaster.jupem.gov.my/smartkadaster",
                  "_blank",
                  "noreferrer"
                )
              }
            />
          </div>
          <h3>Smart Kadaster II</h3>
          {/* <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="_blank" rel="noreferrer">
              Github
            </a>
            <a
              href="https://dribbble.com/Alien_pixels"
              className="btn btn-primary"
              target="_blank" rel="noreferrer"
            >
              Live Demo
            </a>
          </div> */}
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img
              src={IMG2}
              alt="img2"
              onClick={() =>
                window.open(
                  "https://www.dattel.asia/products/voyager-gives-small-and-large-businesses-the-means-to-access-the-latest-asean-consumer-insights-across-industries-anchored-by-our-holistic-consumer-approach/",
                  "_blank",
                  "noreferrer"
                )
              }
            />
          </div>
          <h3>Dattel Voyeger</h3>
          {/* <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="_blank" rel="noreferrer">
              Github
            </a>
            <a
              href="https://dribbble.com/Alien_pixels"
              className="btn btn-primary"
              target="_blank" rel="noreferrer"
            >
              Live Demo
            </a>
          </div> */}
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img
              src={IMG3}
              alt="img3"
              onClick={() =>
                window.open(
                  "https://geoledang.mdtangkak.gov.my/",
                  "_blank",
                  "noreferrer"
                )
              }
            />
          </div>
          <h3>GeoLedang Portal</h3>
          {/* <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="_blank" rel="noreferrer">
              Github
            </a>
            <a
              href="https://dribbble.com/Alien_pixels"
              className="btn btn-primary"
              target="_blank" rel="noreferrer"
            >
              Live Demo
            </a>
          </div> */}
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img
              src={IMG4}
              alt="img4"
              onClick={() =>
                window.open(
                  "https://iplan.planmalaysia.gov.my/public/geoportal",
                  "_blank",
                  "noreferrer"
                )
              }
            />
          </div>
          <h3>I-Plan</h3>
          {/* <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="_blank" rel="noreferrer">
              Github
            </a>
            <a
              href="https://dribbble.com/Alien_pixels"
              className="btn btn-primary"
              target="_blank" rel="noreferrer"
            >
              Live Demo
            </a>
          </div> */}
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img
              src={IMG5}
              alt="img5"
              onClick={() =>
                window.open(
                  "",
                  "_blank",
                  "noreferrer"
                )
              }
            />
          </div>
          <h3>Sarawak Smart Farming</h3>
          {/* <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="_blank" rel="noreferrer">
              Github
            </a>
            <a
              href="https://dribbble.com/Alien_pixels"
              className="btn btn-primary"
              target="_blank" rel="noreferrer"
            >
              Live Demo
            </a>
          </div> */}
        </article>
        <article className="portfolio__item articleAdj">
          <div className="portfolio__item-image">
            <img className="p-img"
              src={IMG6}
              alt="img6"
              onClick={() =>
                window.open(
                  "",
                  "_blank",
                  "noreferrer"
                )
              }
            />
          </div>
          <h3>TIBA E-Commerce</h3>
          {/* <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="_blank" rel="noreferrer">
              Github
            </a>
            <a
              href="https://dribbble.com/Alien_pixels"
              className="btn btn-primary"
              target="_blank" rel="noreferrer"
            >
              Live Demo
            </a>
          </div> */}
        </article>
        <article className="portfolio__item articleAdj">
          <div className="portfolio__item-image">
            <img className="p-img"
              src={IMG7}
              alt="img7"
              onClick={() =>
                window.open(
                  "",
                  "_blank",
                  "noreferrer"
                )
              }
            />
          </div>
          <h3>iRIST</h3>
          {/* <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="_blank" rel="noreferrer">
              Github
            </a>
            <a
              href="https://dribbble.com/Alien_pixels"
              className="btn btn-primary"
              target="_blank" rel="noreferrer"
            >
              Live Demo
            </a>
          </div> */}
        </article>
      </div>
    </section>
  );
}
