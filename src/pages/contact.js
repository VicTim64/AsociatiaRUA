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

            {/* Contact Info */}
            <div className="contact_card">
              <h3 className="fn_title">Ne puteți contacta oricând</h3>
              <p className="fn_desc">
                Pentru întrebări, colaborări sau informații suplimentare, ne
                puteți scrie sau suna folosind datele de mai jos.
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

            {/* Separator */}
            <div className="contact_separator">
              <span>sau</span>
            </div>

            {/* JotForm */}
            <div id="jotform-container" className="contact_form_holder"></div>

          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .contact_wrapper {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .contact_card {
          background: rgba(255,255,255,0.04);
          padding: 40px;
          border-radius: 20px;
          margin-bottom: 40px;
        }

        .contact_list {
          list-style: none;
          padding: 0;
          margin: 30px 0 0;
        }

        .contact_list li {
          margin-bottom: 20px;
          font-size: 18px;
        }

        .contact_list span {
          display: block;
          font-size: 14px;
          opacity: 0.6;
          margin-bottom: 4px;
        }

        .contact_list a {
          font-size: 20px;
          font-weight: 600;
          color: inherit;
        }

        .contact_separator {
          position: relative;
          margin: 50px 0;
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

