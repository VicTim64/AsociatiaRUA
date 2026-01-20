import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import cazuriData from "@/data/encazuri.json";

const EnCazuriSociale = () => {
  const [cazuri, setCazuri] = useState([]);

  useEffect(() => {
    setCazuri(cazuriData);
  }, []);

  return (
    <section className="cazuri_sociale">
      <div className="container">
        <h2 className="fn_title">Social Cases</h2>

        {cazuri.map((caz, idx) => (
          <div key={idx} className="caz_item">
            <h3 className="fn_subtitle">{caz.titlu}</h3>

            {caz.poze.map((poza, pidx) => (
              <div key={pidx} className={`caz_row ${poza.position}`}>
                <img
                  src={poza.src}
                  alt={`${caz.titlu} - poza ${pidx + 1}`}
                />
                <div className="caz_text">
                  {caz.descriere.map((p, didx) => (
                    <p key={didx}>{p}</p>
                  ))}
                </div>
              </div>
            ))}

            {caz.slider && caz.slider.length > 0 && (
              <Swiper
                className="caz_sociale_slider"
                spaceBetween={1}
                slidesPerView={8}
                loop={true}
                modules={[Autoplay]}
                autoplay={{ delay: 0, disableOnInteraction: false }}
                freeMode={true}
                speed={5000}
                breakpoints={{
                  320: { slidesPerView: 1, spaceBetween: 20 },
                  640: { slidesPerView: 2, spaceBetween: 40 },
                  768: { slidesPerView: 2, spaceBetween: 50 },
                  1024: { slidesPerView: 3, spaceBetween: 50 },
                  1280: { slidesPerView: 3, spaceBetween: 50 },
                }}
              >
                {caz.slider.map((s, sidx) => (
                  <SwiperSlide key={sidx}>
                    <img src={s} alt={`${caz.titlu} slider ${sidx + 1}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default EnCazuriSociale;

