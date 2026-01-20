import useClickOutside from "@/useClickOutside";
import { Fragment, useState } from "react";

const VideoPopupLocal_ = ({ close, videoSrc }) => {
  const domNode = useClickOutside(() => close(false));

  return (
    <Fragment>
      <div className="mfp-bg mfp-ready" onClick={() => close(false)}></div>
      <div
        className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready"
        tabIndex={-1}
        style={{ overflow: "hidden auto" }}
      >
        <div className="mfp-container mfp-s-ready mfp-iframe-holder">
          <div className="mfp-content" ref={domNode}>
            <div className="mfp-iframe-scaler">
              <button
                title="Close (Esc)"
                type="button"
                className="mfp-close"
                onClick={() => close(false)}
              >
                ×
              </button>
              <video
                src={videoSrc}
                controls
                autoPlay
                style={{ width: "100%", maxHeight: "80vh" }}
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
      <div onClick={() => setOpen(true)}>{trigger}</div>
      {open && <VideoPopupLocal_ close={() => setOpen(false)} videoSrc={videoSrc} />}
    </>
  );
};

export default VideoPopupLocal;
