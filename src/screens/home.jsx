import React from "react";
import NavBar from "../components/navBar";
import SpacingGrid from "../components/SpacingGrid";
import Footer from "../components/Footer";
import { Typography } from "@material-ui/core";

const container = {
  root: {
    width: "100vw",
    minWidth: "300px",
    height: "100vh",
  },
  infoCard: {
    width: "100vw",
    minWidth: "300px",
    background: "linear-gradient(195.95deg, #B5179E 0%, #4895EF 100%), #C4C4C4",
    height: "46vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  infoHeaderText: {
    color: "#fefefe",
    fontSize: "2.5rem",
    textAlign: "center",
    fontWeight: 500,
  },
  infoSubheaderText: {
    color: "#fefefe",
    fontSize: "1.2rem",
    textAlign: "center",
    fontWeight: 400,
  },
  btnStyle: {
    padding: "10px 20px",
    marginTop: "2vh",
    color: "#42275a",
    fontWeight: 700,
    fontSize: 20,
    cursor: "pointer",
  },
};

export default function Home() {
  return (
    <div style={container.root}>
      <NavBar />

      <div style={container.infoCard}>
        <Typography style={container.infoHeaderText}>
          We Offer Various Investment Plans
        </Typography>
        <Typography style={container.infoSubheaderText}>
          Maximum safety and stability for your principal
        </Typography>
        <button style={container.btnStyle}>Contact Us</button>
      </div>
      <React.Fragment>
        <SpacingGrid />
      </React.Fragment>
      <React.Fragment>
        <Footer />
      </React.Fragment>
    </div>
  );
}
