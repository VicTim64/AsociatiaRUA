import useClickOutside from "@/useClickOutside";
import { Fragment, useState } from "react";

const VideoPopupLocal_ = ({ close, videoSrc }) => {
  const domNode = useClickOutside(() => close(false));

  return (
    <Fragment>
      {/* Background overlay */}
      <div
        className="mfp-bg mfp-ready"
        onClick={() => close(false)}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0,0,0,0.8)",
          zIndex: 9999,
          cursor: "pointer",
        }}
      ></div>

      {/* Popup container */}
      <div
        className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready"
        tabIndex={-1}
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)", // ✅ centrăm exact în viewport
          zIndex: 10000,
          maxWidth: "95vw",
          maxHeight: "95vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <div className="mfp-container mfp-s-ready mfp-iframe-holder">
          <div
            className="mfp-content"
            ref={domNode}
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
            }}
          >
            {/* Close button */}
            <button
              title="Close (Esc)"
              type="button"
              className="mfp-close"
              onClick={() => close(false)}
              style={{
                position: "absolute",
                top: "-40px",
                right: "0",
                fontSize: "30px",
                background: "transparent",
                border: "none",
                color: "white",
                cursor: "pointer",
                zIndex: 10001,
              }}
            >
              ×
            </button>

            {/* Video */}
            <video
              src={videoSrc}
              controls
              autoPlay
              style={{
                width: "100%",
                maxWidth: "900px",
                maxHeight: "80vh",
                borderRadius: "10px",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const VideoPopupLocal = ({ videoSrc, trigger }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div onClick={() => setOpen(true)}>{trigger}</div>
      {open && <VideoPopupLocal_ close={() => setOpen(false)} videoSrc={videoSrc} />}
    </>
  );
};

export default VideoPopupLocal;



