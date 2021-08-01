import React from "react";
import NavBar from "components/NavBar";
import SpacingGrid from "components/SpacingGrid";
import Footer from "components/Footer";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "./styles";

export default function Home() {
  const classes = styles();
  return (
    <div className={classes.root}>
      <NavBar />

      <div className={classes.infoCard}>
        <Typography className={classes.infoHeaderText}>
          We Offer Various Investment Plans
        </Typography>
        <Typography className={classes.infoSubheaderText}>
          Maximum safety and stability for your principal
        </Typography>
        <Link to="/contact">
          <button className={classes.btnStyle}>Contact Us</button>
        </Link>
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
