import React from "react";
import { Grid, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { ReactComponent as Devices } from "assets/icons/devices.svg";
import { ReactComponent as Forex } from "assets/icons/forex.svg";
import { ReactComponent as Hen } from "assets/icons/hen.svg";

export default function SpacingGrid() {
  return (
    <Grid container justifyContent="center" gap={4} paddingTop={4}>
      <Box
        sx={{
          boxShadow: 2,
          paddingX: 4,
          paddingTop: 1,
          paddingBottom: 4,
          bgcolor: "primary.main",
          m: 1,
          width: "18rem",
        }}
      >
        <Box
          sx={{
            borderRadius: "100%",
            bgcolor: "primary.dark",
            width: "4rem",
            height: "4rem",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            marginBottom: "2rem",
          }}
        >
          <Forex fill="#ffffff" style={{ opacity: 0.7 }} />
        </Box>
        <h2 style={{ paddingBottom: "1.2rem", textAlign: "left" }}>
          AIG Bonds
        </h2>
        <p style={{ lineHeight: "1.4rem", opacity: 0.6, textAlign: "left" }}>
          AIG Bonds is an investment package that uses your funds to trade
          bonds.
        </p>
        <Link
          to="#"
          style={{
            display: "flex",
            justifyContent: "left",
            paddingTop: 10,
            color: "white",
            opacity: 0.8,
          }}
        >
          Learn more
        </Link>
      </Box>
      <Box
        sx={{
          boxShadow: 2,
          paddingX: 4,
          paddingTop: 1,
          paddingBottom: 4,
          bgcolor: "primary.main",
          m: 1,
          width: "18rem",
        }}
      >
        <Box
          sx={{
            borderRadius: "100%",
            bgcolor: "primary.dark",
            width: "4rem",
            height: "4rem",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            marginBottom: "2rem",
          }}
        >
          <Hen fill="#ffffff" style={{ opacity: 0.7 }} />
        </Box>
        <h2 style={{ paddingBottom: "1.2rem", textAlign: "left" }}>
          Chaka Farms
        </h2>
        <p style={{ lineHeight: "1.4rem", opacity: 0.6, textAlign: "left" }}>
          Chaka farms is an investment package that uses your funds to rear
          poultry livestock.
        </p>
        <Link
          to="#"
          style={{
            display: "flex",
            justifyContent: "left",
            paddingTop: 10,
            color: "white",
            opacity: 0.8,
          }}
        >
          Learn more
        </Link>
      </Box>
      <Box
        sx={{
          boxShadow: 2,
          paddingX: 4,
          paddingTop: 1,
          paddingBottom: 4,
          bgcolor: "primary.main",
          m: 1,
          width: "18rem",
        }}
      >
        <Box
          sx={{
            borderRadius: "100%",
            bgcolor: "primary.dark",
            width: "4rem",
            height: "4rem",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            marginBottom: "2rem",
          }}
        >
          <Devices fill="#ffffff" style={{ opacity: 0.7 }} />
        </Box>
        <h2 style={{ paddingBottom: "1.2rem", textAlign: "left" }}>
          Santa Elect
        </h2>
        <p style={{ lineHeight: "1.4rem", opacity: 0.6, textAlign: "left" }}>
          Santa mobile is an investment package that uses your funds to invest
          in electronic devices.
        </p>
        <Link
          to="#"
          style={{
            display: "flex",
            justifyContent: "left",
            paddingTop: 10,
            color: "white",
            opacity: 0.8,
          }}
        >
          Learn more
        </Link>
      </Box>
    </Grid>
  );
}
