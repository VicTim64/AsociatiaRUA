import Layout from "@/layout/Layout";
import PageBanner from "@/layout/PageBanner";
import CazuriSociale from "@/components/CazuriSociale";

const CazuriSocialePage = () => {
  return (
    <Layout pageName="Cazuri Sociale">
      <PageBanner
        pageName="Cazuri Sociale"
        imageURL="/img/hero/cazuri_background.png"
      />

      {/* Video sub titlu */}
      <div className="neoh_fn_video">
        <div className="bg_overlay">
          <a
            href="/video/cazuri_video.mp4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <video
              className="bg_video"
              src="/video/cazuri_video.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </a>
        </div>
        <div className="v_content">
          <a
            href="/video/cazuri_video.mp4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="svg/play.svg" alt="" className="fn__svg" />
          </a>
        </div>
      </div>

      {/* Componenta cu cazuri */}
      <CazuriSociale />
    </Layout>
  );
};

export default CazuriSocialePage;
