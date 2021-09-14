import React from "react";
import NavBar from "components/NavBar";
import { Link } from "react-router-dom";
import "./style.css";
// import SpacingGrid from "components/SpacingGrid";

export default function HomePage() {
  return (
    <div className="container">
      <NavBar />
      <div className="hero">
        <header className="hero-text">
          <h1 className="header">Grow Wealth Consistently</h1>
          <p className="sub-header">
            Maximum safety and stability for your principal
          </p>
          <Link className="link-style" to="/">
            Get Started
          </Link>
        </header>

        <img src="img/5867.jpg" alt="" className="hero-img" />
      </div>
      <div className="section-2">
        <div className="section-2-wrapper">
          <div className="introduction-container">
            <div className="introduction-text">
              Inversion seeks maximum safety and stability for your principal by
              focusing on securities and investments that carry a low degree of
              risk.
            </div>
          </div>
          <div className="card-right">
            <div className="introduction-container introduction-text right">
              If you're a millionaire by the time you're 30 but blow it all by
              age 40, you've gained nothing.
            </div>
          </div>
          <div className="introduction-container">
            <p className="introduction-text">
              Grow and protect your investment portfolio by carefully
              diversifying it, and you may find yourself funding many
              generations to come.
            </p>
          </div>
        </div>
      </div>
      {/* <div>
        <SpacingGrid />
      </div> */}
    </div>
  );
}
