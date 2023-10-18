import "./testimonials.css";
import AVTR1 from "../../assets/azmir.PNG";
import AVTR2 from "../../assets/cy.PNG";
import AVTR3 from "../../assets/hamdi.PNG";
import AVTR4 from "../../assets/mahadi.PNG";
import AVTR5 from "../../assets/matrus.PNG";
import { Autoplay, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from Person's who i work under them supervise..</h5>
      <h2>Head Organization & Supervisor</h2>

      <Swiper
        className="container testimonials__container" // install Swiper modules
        modules={[Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className="testimonial">
          <div className="supervise__avatar">
            <img src={AVTR1} alt="avtr1" />
          </div>
          <h5 className="supervise__name">Azmir Rahman</h5>
          <small className="supervise__review">
            Among the best staff I ever had. Skills Sets that his have, made it
            his always deliver my request.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="supervise__avatar">
            <img src={AVTR2} alt="avtr1" />
          </div>
          <h5 className="supervise__name">Choong Chin Yee</h5>
          <small className="supervise__review">
            Skillful staff that have a big contribution across whole department
            in our Office. Always help my division especially to monitoring and
            planning data collection on site.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="supervise__avatar">
            <img src={AVTR3} alt="avtr1" />
          </div>
          <h5 className="supervise__name">Hamdi Mokhtar</h5>
          <small className="supervise__review">
            He is the person who is set up GIS Technology, Environment & GIS
            Unit across Thailand, Malaysia & Indonesia to Our Company.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="supervise__avatar">
            <img src={AVTR4} alt="avtr1" />
          </div>
          <h5 className="supervise__name">Wan Mahadi</h5>
          <small className="supervise__review">
            Thanks a lot to him, helps us to understand how GIS Works and to
            apply it for visualize data that we was collected on Map or
            analytics purpose.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="supervise__avatar">
            <img src={AVTR5} alt="avtr1" />
          </div>
          <h5 className="supervise__name">Mohd Rus</h5>
          <small className="supervise__review">
            Upgrade my knowledge and skills with knew knowledge and new method.
            As a Senior Data Management for Mapping until locality level. It's
            very important to me to deliver as fast as we can, in simple and
            good quality data.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
