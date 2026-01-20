import { useState, useRef } from "react";
import styles from "./JoinNeoTechArmy.module.css";

const JoinNeoTechArmy = () => {
  const [image, setImage] = useState(null);
  const canvasRef = useRef(null);
  const watermarkRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          const canvas = canvasRef.current;
          const ctx = canvas.getContext("2d");

          // Calculate the cropping area
          const aspectRatio = img.width / img.height;
          let cropWidth, cropHeight;
          if (aspectRatio > 1) {
            cropHeight = img.height;
            cropWidth = img.height; // square crop
          } else {
            cropWidth = img.width;
            cropHeight = img.width; // square crop
          }

          const offsetX = (img.width - cropWidth) / 2;
          const offsetY = (img.height - cropHeight) / 2;

          canvas.width = 400;
          canvas.height = 400;

          // Draw circular clipping
          ctx.beginPath();
          ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, 0, Math.PI * 2);
          ctx.closePath();
          ctx.clip();

          // Draw the cropped image
          ctx.drawImage(
            img,
            offsetX,
            offsetY,
            cropWidth,
            cropHeight,
            0,
            0,
            canvas.width,
            canvas.height
          );

          // Draw watermark
          const watermark = watermarkRef.current;
          ctx.drawImage(watermark, 0, 0, canvas.width, canvas.height);
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
      setImage(file);
    }
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = url;
    link.download = "RUA_profile.png";
    link.click();
  };

  const handleChooseAnother = () => {
    setImage(null);
    canvasRef.current.getContext("2d").clearRect(0, 0, 400, 400);
  };

  return (
    <section id="join-rua">
      <div className="container">
        {/* Titlu identic cu secțiunea „Împreună pentru binele comun!” */}
        <div className="neoh_fn_title">
          <h3 className="fn_title">Fii parte din mișcarea RUA!</h3>
        </div>

        {/* Conținut centrat */}
        <div className={styles.explanationWrapper}>
          <p className={styles.explanation}>
            Încarcă poza ta sau fă un selfie dacă ești pe telefon, iar noi vom adăuga watermark-ul nostru.
            Apoi o poți descărca și folosi ca poză de profil pe platformele sociale pentru a ne susține.
            Dacă nu-ți place previzualizarea, poți alege o altă poză.
            Nu stocăm aceste poze nicăieri, așadar dacă reîncarci pagina va trebui să repeți procesul.
          </p>

          {image ? (
            <div className={styles.previewContainer}>
              <canvas ref={canvasRef} className={styles.canvas} />
              <div className={styles.buttonsContainer}>
                <button className={styles.downloadButton} onClick={handleDownload}>
                  Descarcă Imaginea
                </button>
                <button className={styles.chooseAnotherButton} onClick={handleChooseAnother}>
                  Alege altă imagine
                </button>
              </div>
            </div>
          ) : (
            <label className={styles.customFileUpload}>
              Alege fișier
              <input
                type="file"
                className={styles.hiddenInput}
                onChange={handleFileChange}
              />
            </label>
          )}
        </div>

        {/* Watermark invizibil */}
        <img
          ref={watermarkRef}
          src="/img/watermark.png"
          alt="Watermark"
          className={styles.hidden}
        />
      </div>
    </section>
  );
};

export default JoinNeoTechArmy;

