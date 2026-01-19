import { useEffect } from "react";
import Layout from "@/layout/Layout";
import PageBanner from "@/layout/PageBanner";

const Contact = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://form.jotform.com/jsform/250748554584367";
    script.type = "text/javascript";

    const container = document.getElementById("jotform-container");
    if (container) container.appendChild(script);

    return () => {
      if (container) container.innerHTML = "";
    };
  }, []);

  return (
    <Layout pageName="Contact">
      <PageBanner
        pageName="Contact"
        imageURL="img/hero/head_about_background.png"
      />

      <div className="neoh_fn_contact_page">
        <div className="container">
          <div className="contact_wrapper">

            {/* CONTACT */}
            <div className="contact_card">
              <h3 className="fn_title">Ne puteți contacta oricând</h3>
              <p className="fn_desc">
                Pentru întrebări, colaborări sau informații suplimentare,
                ne puteți scrie sau suna folosind datele de mai jos.
              </p>

              <ul className="contact_list">
                <li>
                  <span>Email</span>
                  <a href="mailto:asociatia.rua@gmail.com">
                    asociatia.rua@gmail.com
                  </a>
                </li>
                <li>
                  <span>Telefon / WhatsApp</span>
                  <a href="tel:+40786493557">
                    +40 786 493 557
                  </a>
                </li>
              </ul>
            </div>

            {/* DONATII */}
            <div className="donation_card">
              <h3 className="fn_title">Susține activitatea noastră</h3>
              <p className="fn_desc">
                Donațiile ne ajută să continuăm proiectele sociale dedicate
                comunității. Vă mulțumim pentru sprijin.
              </p>

              <ul className="donation_list">
                <li>
                  <span>Cont RON</span>
                  <p>IBAN: RO73 BRDE 270S V492 3710 2700</p>
                </li>
                <li>
                  <span>Cont EUR</span>
                  <p>IBAN: RO66 BRDE 270S V621 7704 2700 </p>
                </li>
                <li>
                  <span>Cont USD</span>
                  <p>IBAN: RO72 BRDE 270S V621 7692 2700 </p>
                </li>
              </ul>

              <div className="donation_footer">
                <p>
                  Titular cont: <strong>Asociația Români Uniți Acasă – RUA</strong><br />
                  Bancă: <strong>BRD</strong>
                </p>
              </div>
            </div>

            {/* SEPARATOR */}
            <div className="contact_separator">
              <span>sau</span>
            </div>

            {/* FORMULAR */}
            <div id="jotform-container" className="contact_form_holder"></div>

          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .contact_wrapper {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }

        .contact_card,
        .donation_card {
          background: rgba(255,255,255,0.04);
          padding: 40px;
          border-radius: 20px;
          margin-bottom: 50px;
        }

        .contact_list,
        .donation_list {
          list-style: none;
          padding: 0;
          margin: 30px 0 0;
        }

        .contact_list li,
        .donation_list li {
          margin-bottom: 20px;
        }

        .contact_list span,
        .donation_list span {
          display: block;
          font-size: 14px;
          opacity: 0.6;
          margin-bottom: 6px;
        }

        .contact_list a {
          font-size: 20px;
          font-weight: 600;
          color: inherit;
        }

        .donation_list p {
          font-family: monospace;
          font-size: 18px;
        }

        .donation_footer {
          margin-top: 30px;
          font-size: 14px;
          opacity: 0.7;
        }

        .contact_separator {
          position: relative;
          margin: 60px 0;
          text-align: center;
        }

        .contact_separator span {
          background: #0f0f0f;
          padding: 0 20px;
          opacity: 0.6;
        }

        .contact_separator:before {
          content: "";
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          height: 1px;
          background: rgba(255,255,255,0.1);
          z-index: -1;
        }

        .contact_form_holder {
          margin-top: 40px;
        }
      `}</style>
    </Layout>
  );
};

export default Contact;

