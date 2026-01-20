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
        style={{ cursor: "pointer" }}
      ></div>

      {/* Popup container */}
      <div
        className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready"
        tabIndex={-1}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden auto",
        }}
      >
        <div className="mfp-container mfp-s-ready mfp-iframe-holder">
          <div
            className="mfp-content"
            ref={domNode}
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="mfp-iframe-scaler" style={{ width: "100%", height: "100%" }}>
              {/* Close button */}
              <button
                title="Close (Esc)"
                type="button"
                className="mfp-close"
                onClick={() => close(false)}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  zIndex: 1000,
                  fontSize: "30px",
                  background: "transparent",
                  border: "none",
                  color: "white",
                  cursor: "pointer",
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
                  height: "100%",
                  maxHeight: "90vh",
                  borderRadius: "10px",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
          <div className="mfp-preloader">Loading...</div>
        </div>
      </div>
    </Fragment>
  );
};

const VideoPopupLocal = ({ videoSrc, trigger }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Trigger */}
      <div onClick={() => setOpen(true)}>{trigger}</div>

      {/* Popup */}
      {open && <VideoPopupLocal_ close={() => setOpen(false)} videoSrc={videoSrc} />}
    </>
  );
};

export default VideoPopupLocal;

