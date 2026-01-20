import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import cazuriData from "@/data/cazuri.json";

const CazuriSociale = () => {
  const [cazuri, setCazuri] = useState([]);

  useEffect(() => {
    setCazuri(cazuriData); // putem extinde pentru fetch din API mai târziu
  }, []);

  return (
    <section className="cazuri_sociale" style={{ backgroundColor: "#000", color: "#fff", padding: "80px 0" }}>
      <div className="container">
        <h2 className="fn_title" style={{ textAlign: "center", marginBottom: "60px" }}>
          Cazuri Sociale
        </h2>

        {cazuri.map((caz, idx) => (
          <div key={idx} className="caz_item" style={{ marginBottom: "80px" }}>
            <h3 className="fn_subtitle" style={{ marginBottom: "30px" }}>{caz.titlu}</h3>

            {caz.poze.map((poza, pidx) => (
              <div
                key={pidx}
                className={`caz_row ${poza.position}`}
                style={{
                  display: "flex",
                  flexDirection: window.innerWidth <= 768 ? "column" : poza.position === "left" ? "row" : "row-reverse",
                  alignItems: "center",
                  marginBottom: "30px",
                  gap: "20px"
                }}
              >
                <img
                  src={poza.src}
                  alt={`${caz.titlu} - poza ${pidx + 1}`}
                  style={{ width: "50%", borderRadius: "8px", objectFit: "cover" }}
                />
                <div style={{ width: "50%" }}>
                  {caz.descriere.map((p, didx) => (
                    <p key={didx} style={{ marginBottom: "10px" }}>{p}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Slider */}
            {caz.slider && caz.slider.length > 0 && (
              <Swiper
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
                  1024: { slidesPerView: 4, spaceBetween: 25 }
                }}
                style={{ marginTop: "20px" }}
              >
                {caz.slider.map((s, sidx) => (
                  <SwiperSlide key={sidx}>
                    <img
                      src={s}
                      alt={`${caz.titlu} slider ${sidx + 1}`}
                      style={{ width: "100%", borderRadius: "8px", objectFit: "cover" }}
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
