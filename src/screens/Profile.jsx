import React from "react";
import { Typography, Grid } from "@material-ui/core";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";

const profile = {
  container: {
    height: "100vh",
    width: "100vw",
  },
  bar: {
    color: "#555",
    display: "flex",
    justifyContent: "space-between",
    padding: "2%",
    height: "10vh",
  },
  logo: {
    fontFamily: "Brush Script MT",
    color: "#42275a",
    fontSize: 30,
  },
  linkStyle: {
    textDecoration: "none",
    color: "#111",
  },
  inbox: {
    cursor: "pointer",
  },
  root: {
    flexGrow: 1,
  },
  image: {
    width: "20vw",
    minWidth: "86%",
    marginLeft: "8%",
    marginTop: "8%",
    height: "40vh",
    backgroundColor: "#999",
    borderRadius: 2,
  },
  imageText: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "18vh",
    color: "#fefefe",
    fontSize: 20,
    fontWeight: 500,
  },
  userInfo: {
    marginTop: "4%",
    width: "68vw",
    marginLeft: "8%",
  },
  userName: {
    fontSize: "2rem",
    fontWeight: 500,
    color: "#333",
  },
  contactInfo: {
    paddingTop: "3vh",
    fontSize: "1.2rem",
    color: "#999",
  },
  details: {
    display: "flex",
    flexDirection: "row",
    paddingTop: "1.8vh",
  },
  detailsInfo: {
    paddingRight: "10%",
    fontWeight: 500,
    color: "#111",
  },
  btn: {
    marginTop: "3%",
    marginBottom: "8%",
    padding: "8px 10px",
    backgroundColor: "#42275a",
    color: "#fefefe",
    fontWeight: 700,
    border: "none",
    borderRadius: 4,
    cursor: "pointer",
  },
};

function Profile() {
  return (
    <section style={profile.container}>
      <div style={profile.bar}>
        <Typography style={profile.logo}>Inversion</Typography>
        <EmailOutlinedIcon style={profile.inbox} />
      </div>
      <Grid container style={profile.root}>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12} sm={3}>
              <div style={profile.image}>
                <Typography style={profile.imageText}>User Image</Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={9}>
              <div style={profile.userInfo}>
                <Typography style={profile.userName}>James Veron</Typography>
                <Typography style={profile.contactInfo}>
                  CONTACT INFORMATION
                </Typography>
                <span style={profile.details}>
                  <Typography style={profile.detailsInfo}>Phone</Typography>
                  <Typography style={{ paddingLeft: 10 }}>
                    +2349078657464
                  </Typography>
                </span>
                <span style={profile.details}>
                  <Typography style={profile.detailsInfo}>Address</Typography>
                  <Typography>
                    Plot No 4 Balogun Street, Baale Street, Off Ishagatedo,
                    Isolo, Lagos State.
                  </Typography>
                </span>
                <span style={profile.details}>
                  <Typography style={profile.detailsInfo}>Email</Typography>
                  <Typography style={{ paddingLeft: 18 }}>
                    james52676@gmail.com
                  </Typography>
                </span>
                <span style={profile.details}>
                  <Typography style={profile.detailsInfo}>Site</Typography>
                  <Typography style={{ paddingLeft: 28 }}>
                    www.test.com
                  </Typography>
                </span>
                <Typography style={profile.contactInfo}>
                  BASIC INFORMATION
                </Typography>
                <span style={profile.details}>
                  <Typography style={profile.detailsInfo}>DOB</Typography>
                  <Typography style={{ paddingLeft: 18 }}>
                    12/25/1978
                  </Typography>
                </span>
                <span style={profile.details}>
                  <Typography style={profile.detailsInfo}>Gender</Typography>
                  <Typography>Male</Typography>
                </span>
                <button style={profile.btn}>Edit Details</button>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
}
export default Profile;
