import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import landing_infor from "@/data/landing.json";

const WhyChooseUsComponent = () => {
  return (
    <section id="investor">
      <div className="container">
        <div className="neoh_fn_title">
          <h3 className="fn_title">Împreună pentru binele comun!</h3>
        </div>

        <Swiper
          className="neoh_fn_services"
          modules={[Autoplay]}
          slidesPerView={4}
          spaceBetween={40}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {landing_infor.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                src={`img/landing/${item.avatar}`}
                alt="avatar"
                style={{
                  width: "100%",
                  maxHeight: "200px",
                  objectFit: "contain",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default WhyChooseUsComponent;


