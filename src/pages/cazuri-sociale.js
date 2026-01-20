import { useState } from "react";
import Layout from "@/layout/Layout";
import PageBanner from "@/layout/PageBanner";
import CazuriSociale from "@/components/CazuriSociale";
import VideoPopup from "@/components/popup/VideoPopup";

const CazuriSocialePage = () => {
  const [videoOpen, setVideoOpen] = useState(false);

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
            onClick={() => setVideoOpen(true)}
          />
        </div>
        <div className="v_content">
          <img
            src="svg/play.svg"
            alt=""
            className="fn__svg"
            style={{ cursor: "pointer" }}
            onClick={() => setVideoOpen(true)}
          />
        </div>
      </div>

      {/* Popup video */}
      {videoOpen && (
        <VideoPopup
          videoSrc="/video/cazuri_video.mp4"
          isOpen={videoOpen}
          onClose={() => setVideoOpen(false)}
          autoPlay={true} // cu sunet
        />
      )}

      <CazuriSociale />
    </Layout>
  );
};

export default CazuriSocialePage;

