"use client";

import dynamic from "next/dynamic";
import landing_infor from "@/data/landing.json";

const Swiper = dynamic(
  () => import("swiper/react").then((mod) => mod.Swiper),
  { ssr: false }
);

const SwiperSlide = dynamic(
  () => import("swiper/react").then((mod) => mod.SwiperSlide),
  { ssr: false }
);

import "swiper/css";
import { Autoplay, FreeMode } from "swiper/modules";

const WhyChooseUsComponent = () => {
  return (
    <section id="investor">
      <div className="container">
        <div className="neoh_fn_title">
          <h3 className="fn_title">Împreună pentru binele comun!</h3>
        </div>

        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView="auto"
          spaceBetween={40}
          loop={true}
          loopAdditionalSlides={landing_infor.length}
          speed={6000}
          allowTouchMove={false}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
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

