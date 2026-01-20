import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import cazuriData from "@/data/cazuri.json";

const CazuriSociale = () => {
  const [cazuri, setCazuri] = useState([]);

  useEffect(() => {
    setCazuri(cazuriData);
  }, []);

  return (
    <section className="cazuri_sociale">
      <div className="container">
        <h2 className="fn_title">Cazuri Sociale</h2>

        {cazuri.map((caz, idx) => (
          <div key={idx} className="caz_item">
            <h3 className="fn_subtitle">{caz.titlu}</h3>

            {caz.poze.map((poza, pidx) => (
              <div
                key={pidx}
                className={`caz_row ${poza.position}`}
              >
                <img
                  src={poza.src}
                  alt={`${caz.titlu} - poza ${pidx + 1}`}
                />
                <div>
                  {caz.descriere.map((p, didx) => (
                    <p key={didx}>{p}</p>
                  ))}
                </div>
              </div>
            ))}

            {caz.slider && caz.slider.length > 0 && (
              <Swiper
                className="caz_sociale_slider"
                spaceBetween={10}
                slidesPerView={3}
                loop={true}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                freeMode={true}
                speed={3000}
                modules={[Autoplay]}
                breakpoints={{
                  320: { slidesPerView: 1, spaceBetween: 10 },
                  480: { slidesPerView: 2, spaceBetween: 15 },
                  768: { slidesPerView: 3, spaceBetween: 20 },
                  1024: { slidesPerView: 4, spaceBetween: 25 },
                }}
              >
                {caz.slider.map((s, sidx) => (
                  <SwiperSlide key={sidx}>
                    <img
                      src={s}
                      alt={`${caz.titlu} slider ${sidx + 1}`}
                    />
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

export default CazuriSociale;

