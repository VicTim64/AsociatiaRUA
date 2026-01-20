import Layout from "@/layout/Layout";
import PageBanner from "@/layout/PageBanner";
import CazuriSociale from "@/components/CazuriSociale";
import VideoPopup from "@/components/popup/VideoPopup";

const CazuriSocialePage = () => {
  return (
    <Layout pageName="Cazuri Sociale">
      <PageBanner
        pageName="Cazuri Sociale"
        imageURL="img/hero/head_MAAS_background.png"
      />

      {/* Video sub titlu */}
      <div className="neoh_fn_video">
        <div className="bg_overlay">
          <video
            className="bg_video"
            src="/img/MAAS/MAAS_movie.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            onClick={() => VideoPopup.open("/img/MAAS/MAAS_movie.mp4")}
          />
        </div>
        <div className="v_content">
          <img
            src="svg/play.svg"
            alt=""
            className="fn__svg"
            onClick={() => VideoPopup.open("/img/MAAS/MAAS_movie.mp4")}
          />
        </div>
      </div>

      {/* Componenta cu cazuri */}
      <CazuriSociale />
    </Layout>
  );
};

export default CazuriSocialePage;

