import React from "react";
import "./style.css";
import NavBar from "components/NavBar";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import SpacingGrid from "components/SpacingGrid";
import { LocationOn, PhoneAndroid, Mail, Language } from "@mui/icons-material";

export default function HomePage() {
  return (
    <div className="container">
      <NavBar />
      {/**Section 1 */}
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
      {/**Section 2 */}
      <div className="section-2">
        <div className="section-2-wrapper">
          <div className="introduction-container">
            <div className="introduction-text">
              Investon seeks maximum safety and stability for your principal by
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
      {/**Section 3 */}
      <div className="section-3">
        <Box
          sx={{ display: "flex", flexDirection: "row", paddingBottom: "2rem" }}
        >
          <h1 style={{ color: "#F44335" }}>Become </h1>
          <h1 style={{ color: "#1d1a72", paddingLeft: 12 }}>An Investor</h1>
        </Box>
        <Container
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-evenly",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ width: "40px" }}>
              <img
                style={{ width: "100%", borderRadius: 20 }}
                alt=""
                src="img/kay.jpeg"
              />
            </Box>
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: 700,
                color: "#5e5e5e",
                paddingLeft: "1rem",
              }}
            >
              Joe Johnson
            </p>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ width: "40px" }}>
              <img
                alt=""
                style={{ width: "100%", borderRadius: 20 }}
                src="img/dan.jpeg"
              />
            </Box>
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: 700,
                color: "#5e5e5e",
                paddingLeft: "1rem",
              }}
            >
              James Veron
            </p>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ width: "40px" }}>
              <img
                alt=""
                style={{ width: "100%", borderRadius: 20 }}
                src="img/kiara.jpeg"
              />
            </Box>
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: 700,
                color: "#5e5e5e",
                paddingLeft: "1rem",
              }}
            >
              Kiara Smith
            </p>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ width: "40px" }}>
              <img
                alt=""
                style={{ width: "100%", borderRadius: 20 }}
                src="img/james.jpeg"
              />
            </Box>
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: 700,
                color: "#5e5e5e",
                paddingLeft: "1rem",
              }}
            >
              Joe Jonas
            </p>
          </Box>
        </Container>

        <h2 style={{ paddingTop: 80, paddingBottom: 10, color: "#333" }}>
          Wondering How To Become An Investor?
        </h2>
        <p style={{ lineHeight: "1.5rem" }}>
          The br hfjhjfeatu,knres built inton,k were designed to help online
          shop ownejbgbrs present tn,.kheir <br />
          merchanbjgkdise and find more customers The br hfjhjfeatu,knres built
          inton,k were
          <br /> designed to help online shop ownejbgbrs present tn.
        </p>
      </div>
      {/**Section 4 */}
      <div className="section-4">
        <Container maxWidth="md">
          <h1>Check out available investment plans</h1>
          <p>
            The br hfjhjfeatu,knres built inton,k were designed to help online
            shop ownejbgbrs <br />
            present tn,.kheir merchanbjgkdise and find more customers
          </p>
          <SpacingGrid />
        </Container>
      </div>
      {/**Section 5 */}
      <div className="section-5" id="contact">
        <Container maxWidth="md">
          <Box sx={{ display: "flex", width: "100%" }}>
            <Box
              sx={{ width: "40%", display: "flex", flexDirection: "column" }}
            >
              <h2>GET IN TOUCH WITH US</h2>
              <p style={{ paddingBottom: "1.4rem" }}>
                For registration questions please don't hesitate to get in touch
                using the contact details below
              </p>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "center",
                  height: 40,
                }}
              >
                <LocationOn
                  style={{
                    color: "#F44335",
                    fontSize: "1rem",
                    marginRight: "0.4rem",
                  }}
                />
                <p style={{ fontSize: "0.8rem" }}>
                  Plot 76B Egbeda Road, Lagos State.
                </p>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "center",
                  height: 40,
                }}
              >
                <PhoneAndroid
                  style={{
                    color: "#5e5e5e",
                    fontSize: "1rem",
                    marginRight: "0.4rem",
                  }}
                />
                <p style={{ fontSize: "0.8rem" }}>+2348137844846</p>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "center",
                  height: 40,
                }}
              >
                <Mail
                  style={{
                    color: "#5e5e5e",
                    fontSize: "1rem",
                    marginRight: "0.4rem",
                  }}
                />
                <p style={{ fontSize: "0.8rem" }}>investon@investon.com</p>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "center",
                  height: 40,
                }}
              >
                <Language
                  style={{
                    color: "#5e5e5e",
                    fontSize: "1rem",
                    marginRight: "0.4rem",
                  }}
                />
                <p style={{ fontSize: "0.8rem" }}>www.investon.com</p>
              </Box>
            </Box>
            <Box
              sx={{
                width: "60%",
                display: "flex",
                flexDirection: "column",
                paddingLeft: "6rem",
              }}
            >
              <form>
                <TextField
                  type="text"
                  placeholder="What's your name?"
                  style={{ marginBottom: "1.4rem" }}
                  fullWidth
                />
                <TextField
                  type="email"
                  placeholder="Share your email"
                  style={{ marginBottom: "1.4rem" }}
                  fullWidth
                />
                <TextareaAutosize
                  aria-label="We are all ears!"
                  minRows={10}
                  type="text"
                  placeholder="We are all ears!"
                  style={{
                    marginBottom: "1.4rem",
                    width: "100%",
                    padding: "0.6rem 1rem",
                    borderColor: "#BCBFC2",
                    borderRadius: 5,
                    backgroundColor: "#F5F8FC",
                    fontFamily: "Montserrat",
                    fontSize: "1rem",
                    input: {
                      "&::placeholder": {
                        textOverflow: "ellipsis !important",
                        color: "blue",
                      },
                    },
                  }}
                  fullWidth
                />

                <Button variant="contained" fullWidth type="submit">
                  Submit
                </Button>
              </form>
            </Box>
          </Box>
        </Container>
      </div>
    </div>
  );
}
