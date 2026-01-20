import Layout from "@/layout/Layout";
import PageBanner from "@/layout/PageBanner";
import VideoPopupLocal from "@/components/popup/VideoPopupLocal";
import jsonData from "@/data/cazuri.json";

const CazuriSocialePage = () => {
  // Extragem cazurile din primul obiect JSON
  const { cazuri } = jsonData[0];

  return (
    <Layout pageName="Cazuri Sociale">
      <PageBanner
        pageName="Cazuri Sociale"
        imageURL="img/hero/head_about_background.png"
      />

      {/* Video sub titlu */}
      <VideoPopupLocal
        videoSrc="/img/MAAS/MAAS_movie.mp4"
        trigger={
          <div className="neoh_fn_video">
            <div className="bg_overlay">
              <video
                className="bg_video"
                src="/img/MAAS/MAAS_movie.mp4"
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  cursor: "pointer",
                  borderRadius: "10px",
                }}
              />
            </div>
            <div className="v_content">
              <img
                src="svg/play.svg"
                alt="Play"
                className="fn__svg"
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
        }
      />

      {/* Cazuri sociale */}
      <div className="cazuri_sociale_wrapper">
        {cazuri.map((item, index) => (
          <div
            key={index}
            className={`caz_block ${item.pozitie === "left" ? "left" : "right"}`}
            style={{
              display: "flex",
              flexDirection:
                item.pozitie === "left" ? "row" : "row-reverse",
              alignItems: "center",
              marginBottom: "50px",
              gap: "30px",
              flexWrap: "wrap",
            }}
          >
            <img
              src={item.poza}
              alt={`Poza ${index}`}
              style={{
                width: "45%",
                maxWidth: "400px",
                borderRadius: "10px",
                objectFit: "cover",
              }}
            />
            <p
              style={{
                width: "50%",
                fontSize: "18px",
                lineHeight: "1.6",
                textAlign: "justify",
              }}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default CazuriSocialePage;


