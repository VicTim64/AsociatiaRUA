import Link from "next/link";
import { Fragment, useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Fragment>
      {/* Right Navigation */}
      <div
        className={`nav_overlay ${toggle ? "go" : ""}`}
        onClick={() => setToggle(false)}
      />
      <div className={`neoh_fn_nav ${toggle ? "go" : ""}`}>
        <div
          className="trigger is-active"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className="trigger_in" onClick={() => setToggle(false)}>
            <img src="/img/menu/close_button.png" alt="closeButton" />
          </div>
        </div>

        <div className="nav_content">
          <ul style={{ padding: "20px 0" }}>
            <li className="menu-item" style={{ marginBottom: "30px" }}>
              <Link legacyBehavior href="/about">
                <a style={linkStyle}>Despre Noi</a>
              </Link>
            </li>
            <li className="menu-item" style={{ marginBottom: "30px" }}>
              <Link legacyBehavior href="/voluntari">
                <a style={linkStyle}>Voluntari</a>
              </Link>
            </li>
            <li className="menu-item" style={{ marginBottom: "30px" }}>
              <Link legacyBehavior href="/contact">
                <a style={linkStyle}>Contact</a>
              </Link>
            </li>
          </ul>
        </div>

        {/* Nav Footer */}
        <div className={`nav_footer ${toggle ? "ready" : ""}`}>
          <div className="nf_left">
            <p style={{ color: "#fff" }}>
              Copyright {new Date().getFullYear()} rua.ro
            </p>
          </div>
          <div className="nf_right">
            <div className="neoh_fn_social_list">
              <ul>
                <li>
                  <a href="https://www.linkedin.com">
                    <img src="/img/menu/menu_linkedin.png" />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/rua.romania">
                    <img src="/img/menu/menu_facebook.png" />
                  </a>
                </li>
                <li>
                  <a href="https://x.com">
                    <img src="/img/menu/menu_twitter.png" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="neoh_fn_header">
        <div className="header_in">
          {/* Logo */}
          <div className="logo">
            <Link legacyBehavior href="/">
              <a>
                <img
                  src="/img/menu/logo.png"
                  alt="Logo"
                  className="logo_img"
                />
              </a>
            </Link>
          </div>

          {/* Sandwich Menu */}
          <div className="trigger">
            <div
              className="trigger_in"
              onClick={() => setToggle(!toggle)}
              style={{ cursor: "pointer" }}
            >
              <img src="/img/menu/menu.png" alt="Menu" />
            </div>
          </div>
        </div>
      </header>

      {/* CSS */}
      <style jsx>{`
        /* HEADER FIX HEIGHT */
        .neoh_fn_header {
          height: 72px;
        }

        .header_in {
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* LOGO CONTROL */
        .logo_img {
          max-height: 48px;
          width: auto;
          object-fit: contain;
          display: block;
        }

        @media (max-width: 768px) {
          .neoh_fn_header,
          .header_in {
            height: 64px;
          }

          .logo_img {
            max-height: 40px;
          }
        }

        .nav_content ul li a {
          font-size: 32px;
          font-weight: bold;
          color: #fff;
          transition: color 0.3s ease;
        }

        .nav_content ul li a:hover {
          color: #00bfff !important;
        }
      `}</style>
    </Fragment>
  );
};

const linkStyle = {
  fontSize: "32px",
  fontWeight: "bold",
  color: "#fff",
};

export default Header;

