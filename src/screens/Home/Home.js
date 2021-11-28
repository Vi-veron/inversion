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
import { Mail, Language } from "@mui/icons-material";

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
          <div className="introduction-container animation">
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
        <Container maxWidth="md">
          <p style={{ lineHeight: "1.5rem" }}>
            Investing is essential if you want your savings to grow over time.
            Although keeping money in a savings account appears safe, the
            interest you’ll earn isn’t enough to keep up with inflation over
            many decades. You don’t have to <br />
            wait until you are debt-free to start investing (in fact, you
            shouldn’t wait this long!). <a href="/">Start Now!</a>
          </p>
        </Container>
      </div>
      {/**Section 4 */}
      <div className="section-4">
        <Container maxWidth="md">
          <h1>Check out available investment plans</h1>
          <p style={{ lineHeight: "1.5rem" }}>
            Choosing an investment plan is the first step to becoming an
            investor. You can invest in agriculture, <br />
            bonds, real estate, mutual funds, and much more. What you invest in
            depends on your
            <br /> goals - both long-term and short-term.
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
