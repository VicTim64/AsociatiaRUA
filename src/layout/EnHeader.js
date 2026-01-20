import Link from "next/link";
import { Fragment, useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Fragment>
      {/* Right Navigation Overlay */}
      <div
        className={`nav_overlay ${toggle ? "go" : ""}`}
        onClick={() => setToggle(false)}
      />

      {/* Right Navigation */}
      <div className={`neoh_fn_nav ${toggle ? "go" : ""}`}>
        <div
          className="trigger is-active"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Close Button */}
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
                  <a href="https://www.instagram.com/asociatia.rua">
                    <img src="/img/menu/menu_instagram.png" />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/rua.romania">
                    <img src="/img/menu/menu_facebook.png" />
                  </a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@asociatia.rua">
                    <img src="/img/menu/menu_tiktok.png" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="neoh_fn_header">
        <div
          className="header_in"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          {/* Logo */}
          <div className="logo">
            <Link legacyBehavior href="/">
              <a>
                <img
                  src="/img/menu/logo.png"
                  alt="Logo"
                  width="150"
                  height="30"
                  style={{ objectFit: "contain", display: "block" }}
                />
              </a>
            </Link>
          </div>

          {/* Sandwich Menu + US Flag */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {/* Sandwich Menu */}
            <div className="trigger" style={{ cursor: "pointer" }}>
              <div
                className="trigger_in"
                onClick={() => setToggle(!toggle)}
              >
                <a>
                  <img src="/img/menu/menu.png" alt="Menu" />
                </a>
              </div>
            </div>

            {/* US Flag */}
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "5px",
                overflow: "hidden",
                cursor: "pointer",
                border: "1px solid #fff",
              }}
              onClick={() => {
                window.location.href = "/en"; // link către versiunea engleză
              }}
            >
              <img
                src="/img/flags/us.png"
                alt="English"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* CSS for Animation */}
      <style jsx>{`
        @keyframes gradient-wave {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .neoh_fn_header div[style*="animation"] {
          background-size: 200% 200%;
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

        @media screen and (max-width: 768px) {
          .neoh_fn_header div[style*="position: absolute"] {
            width: 95%;
            max-width: 300px;
            font-size: 16px;
          }
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
