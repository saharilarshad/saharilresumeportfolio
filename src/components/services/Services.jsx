import {
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./services.css";

export default function Services() {
  return (
    <section id="services">
      <h5>What I Can Offer</h5>
      <h2>My Experiences</h2>

      <div className="container services__container">
        <article className="services">
          <div className="service__head">
            <h3>GIS Data Processing</h3>
          </div>
          <ul className="service__list">
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="service__list__icon" />
              <p>
                2D Spatial Data Processing.
              </p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="service__list__icon" />
              <p>
                CityGML Data Conversion to 3D Tiles.
              </p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="service__list__icon" />
              <p>
                GeoSpatial Data Analysis.
              </p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="service__list__icon" />
              <p>
                Seamless Dataset.
              </p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="service__list__icon" />
              <p>
                GIS Data Quality Control.
              </p>
            </li>
          </ul>
        </article>
        <article className="services">
          <div className="service__head">
            <h3>GIS Database Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="service__list__icon" />
              <p>
                Storing GIS Raw Data.
              </p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="service__list__icon" />
              <p>
                Run Analysis.
              </p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="service__list__icon" />
              <p>
                Manage Data Stuctures & Relational Table.
              </p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="service__list__icon" />
              <p>
                Provide Dataset to Backend Development Team.
              </p>
            </li>
          </ul>
        </article>
        <article className="services">
          <div className="service__head">
            <h3>GIS Data Publishing & <br/>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="service__list__icon" />
              <p>
                2D Data Publishing for Web.
              </p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="service__list__icon" />
              <p>
                3D & Strata Data Publishing for Web.
              </p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="service__list__icon" />
              <p>
                Indoor Mapping Data Publishing.
              </p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="service__list__icon" />
              <p>
              360° Panoramic Street View Data Publishing.
              </p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="service__list__icon" />
              <p>
                Raster Data Publishing for Web.
              </p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="service__list__icon" />
              <p>
                GIS Web Mapping.
              </p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="service__list__icon" />
              <p>
                3D Data on Web.
              </p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="service__list__icon" />
              <p>
                Mapping Data from Web Map Service on Web.
              </p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="service__list__icon" />
              <p>
                GIS CRUD Operation on Web.
              </p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="service__list__icon" />
              <p>
                Clustering GIS Data Point.
              </p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className="service__list__icon" />
              <p>
                GeoSpatial Data Overlay Analysis with Raster Data.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
