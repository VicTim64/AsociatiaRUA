import Layout from "@/layout/Layout";
import PageBanner from "@/layout/PageBanner";
import CazuriSociale from "@/components/CazuriSociale";
import VideoPopupLocal from "@/components/popup/VideoPopupLocal";

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
          <video
            className="bg_video"
            src="/video/cazuri_video.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{ width: "100%", height: "100%", objectFit: "cover", cursor: "pointer" }}
          />
        </div>
        <div className="v_content">
          <VideoPopupLocal
            videoSrc="/video/cazuri_video.mp4"
            trigger={<img src="svg/play.svg" alt="Play" className="fn__svg" />}
          />
        </div>
      </div>

      <CazuriSociale />
    </Layout>
  );
};

export default CazuriSocialePage;


