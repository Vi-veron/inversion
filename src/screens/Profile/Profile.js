import React from "react";
import { Typography, Grid } from "@material-ui/core";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import styles from "./styles";

function Profile() {
  const classes = styles();
  return (
    <section className={classes.container}>
      <div className={classes.bar}>
        <Typography className={classes.logo}>Inversion</Typography>
        <EmailOutlinedIcon className={classes.inbox} />
      </div>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12} sm={3}>
              <div className={classes.image}>
                <Typography className={classes.imageText}>
                  User Image
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={9}>
              <div className={classes.userInfo}>
                <Typography className={classes.userName}>
                  James Veron
                </Typography>
                <Typography className={classes.contactInfo}>
                  CONTACT INFORMATION
                </Typography>
                <span className={classes.details}>
                  <Typography className={classes.detailsInfo}>Phone</Typography>
                  <Typography style={{ paddingLeft: 10 }}>
                    +2349078657464
                  </Typography>
                </span>
                <span className={classes.details}>
                  <Typography className={classes.detailsInfo}>
                    Address
                  </Typography>
                  <Typography>
                    Plot No 4 Balogun Street, Baale Street, Off Ishagatedo,
                    Isolo, Lagos State.
                  </Typography>
                </span>
                <span className={classes.details}>
                  <Typography className={classes.detailsInfo}>Email</Typography>
                  <Typography style={{ paddingLeft: 18 }}>
                    james52676@gmail.com
                  </Typography>
                </span>
                <span className={classes.details}>
                  <Typography className={classes.detailsInfo}>Site</Typography>
                  <Typography style={{ paddingLeft: 28 }}>
                    www.test.com
                  </Typography>
                </span>
                <Typography className={classes.contactInfo}>
                  BASIC INFORMATION
                </Typography>
                <span className={classes.details}>
                  <Typography className={classes.detailsInfo}>DOB</Typography>
                  <Typography style={{ paddingLeft: 18 }}>
                    12/25/1978
                  </Typography>
                </span>
                <span className={classes.details}>
                  <Typography className={classes.detailsInfo}>
                    Gender
                  </Typography>
                  <Typography>Male</Typography>
                </span>
                <button className={classes.btn}>Edit Details</button>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
}
export default Profile;
