import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export default function NavBar() {
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <a href="/">
          <img
            alt="investon"
            src={`/logo/investon-light-with-text.svg`}
            className="logo"
          />
        </a>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="nav-links">
        <ul>
          <li>
            <Link to="/" className="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="">About</Link>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>

          <li>
            <Link to="/login">Login</Link>
          </li>

          <li>
            <Link to="/register">Signup</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
