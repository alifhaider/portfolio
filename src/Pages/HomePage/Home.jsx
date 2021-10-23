import React, { useState } from "react";
import "./Home.css";
import logo from "../../img/logo.png";

function Home() {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  // Toogle Menu
  const [show, setShow] = useState(false);
  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
          <div className="logo">
            <a href="/">
              <svg
                width="70"
                viewBox="0 0 99 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Group 2">
                  <path
                    id="Text"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.036 53.2C17.6573 53.2 18.7973 52.3386 19.456 50.616L21.356 45.296H39.9L41.8 50.616C42.4586 52.3386 43.5986 53.2 45.22 53.2H46.092H59.584H61.748C62.3053 53.2 62.7866 52.9973 63.192 52.5919C63.5973 52.1866 63.8 51.7053 63.8 51.1479V34.9599H79V51.1479C79 51.7053 79.2026 52.1866 79.608 52.5919C80.0133 52.9973 80.4946 53.2 81.052 53.2H96.708C97.2653 53.2 97.7466 52.9973 98.152 52.5919C98.5573 52.1866 98.76 51.7053 98.76 51.1479V2.05195C98.76 1.49462 98.5573 1.01328 98.152 0.607949C97.7466 0.202615 97.2653 -5.24521e-05 96.708 -5.24521e-05H81.052C80.4946 -5.24521e-05 80.0133 0.202615 79.608 0.607949C79.2026 1.01328 79 1.49462 79 2.05195V17.6319H63.8V2.05195C63.8 1.49462 63.5973 1.01328 63.192 0.607949C62.7866 0.202615 62.3053 -5.24521e-05 61.748 -5.24521e-05H46.092C45.5346 -5.24521e-05 45.0533 0.202615 44.648 0.607949C44.386 0.869941 44.2087 1.1637 44.116 1.48919C43.9372 1.23076 43.7225 0.987676 43.472 0.759947C42.9146 0.253281 42.1546 -5.24521e-05 41.192 -5.24521e-05H20.064C19.1013 -5.24521e-05 18.3413 0.253281 17.784 0.759947C17.2266 1.26662 16.8466 1.84928 16.644 2.50795L0.0759756 51.072L-2.43858e-05 51.528C-2.43858e-05 51.984 0.151976 52.3893 0.455976 52.7439C0.810642 53.048 1.21598 53.2 1.67198 53.2H16.036ZM25.232 30.4759L30.628 14.6679L36.024 30.4759H25.232Z"
                    stroke="white"
                  />
                </g>
              </svg>
            </a>
          </div>
          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <a href="#Home">
                <li className="nav__items mx__15">Home</li>
              </a>
              <a href="#About">
                <li className="nav__items mx__15">About</li>
              </a>
              <a href="#Services">
                <li className="nav__items mx__15">Services</li>
              </a>
              <a href="#Portfolio">
                <li className="nav__items mx__15">Portfolio</li>
              </a>
              <a href="#Blog">
                <li className="nav__items mx__15">Blog</li>
              </a>
              <a href="#Contact">
                <li className="nav__items mx__15">Contact</li>
              </a>
            </ul>
          </div>
          {/* Toogle Menu */}
          <div className="toggle__menu">
            <div className="box">
              <div
                onClick={() => setShow(!show)}
                className={`navBtn ${show ? "active" : "not-active"}`}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          {show ? (
            <div className="sideNavbar">
              <ul className="sidebar d__flex">
                <li className="sideNavbar">
                  <a href="#Home">Home</a>
                </li>
                <li className="sideNavbar">
                  <a href="#About">About</a>
                </li>
                <li className="sideNavbar">
                  <a href="#Services">Services</a>
                </li>
                <li className="sideNavbar">
                  <a href="#Portfolio">Portfolio</a>
                </li>
                <li className="sideNavbar">
                  <a href="#Blog">Blog</a>
                </li>
                <li className="sideNavbar">
                  <a href="#Contact">Contact</a>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
        {/* HOME CONTENT */}
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 className="home__text pz__10">WELCOME TO MY WORLD</h1>
              <h2 className="home__text pz__10">Hi, I’m Alif Haider</h2>
              <h3 className="home__text sweet pz__10">Front-End Developer.</h3>
              <h4 className="home__text pz__10">based in BD.</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
