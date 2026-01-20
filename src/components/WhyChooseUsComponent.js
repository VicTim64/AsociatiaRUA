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
          slidesPerView="auto"
          spaceBetween={40}
          loop={true}
          speed={6000}
          allowTouchMove={false}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          freeMode={{
            enabled: true,
            momentum: false,
          }}
        >
          {landing_infor.map((item, index) => (
            <SwiperSlide
              key={index}
              style={{
                width: "200px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={`img/landing/${item.avatar}`}
                alt="avatar"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
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
