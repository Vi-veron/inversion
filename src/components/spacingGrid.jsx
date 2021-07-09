import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import {
  WavesOutlined,
  ViewComfyOutlined,
  Eco,
  ArrowForwardOutlined,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: "36vh",
    minHeight: "350px",
    width: "33.3vw",
    minWidth: 375,
    textAlign: "center",
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 60,
    border: "0.5px solid #eee",
  },
  header: {
    fontWeight: 600,
    fontSize: "1.5em",
    color: "#222",
    paddingTop: 10,
  },
}));

export default function SpacingGrid() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Grid container>
          <Grid item>
            <div className={classes.paper}>
              <WavesOutlined style={{ fontSize: 40, color: "#42275a" }} />
              <Typography className={classes.header}>Fish Farming</Typography>
              <Typography style={{ paddingTop: 10, paddingBottom: 40 }}>
                Involves building earthen, concrete or tarpaulin ponds, stocking
                the fingernails or juveniles and feeding the fish till market
                size.
              </Typography>
              <ArrowForwardOutlined style={{ cursor: "pointer" }} />
            </div>
          </Grid>

          <Grid item>
            <div className={classes.paper}>
              <Eco style={{ fontSize: 40, color: "#42275a" }} />
              <Typography className={classes.header}>Milk Factory</Typography>
              <Typography style={{ paddingTop: 10, paddingBottom: 20 }}>
                Nigeria’s annual milk production is estimated at 500,000 tonnes
                while the annual local demand for milk stands at an average of
                1.7m tonnes, with the shortfall imported into the country.
              </Typography>
              <ArrowForwardOutlined style={{ cursor: "pointer" }} />
            </div>
          </Grid>

          <Grid item>
            <div className={classes.paper}>
              <ViewComfyOutlined style={{ fontSize: 40, color: "#42275a" }} />

              <Typography className={classes.header}>
                Poultry Farming
              </Typography>
              <Typography style={{ paddingTop: 10, paddingBottom: 40 }}>
                With over 160 Million consumers in the country who buys poultry
                products on daily basis, the market is always here waiting to be
                tapped.
              </Typography>
              <ArrowForwardOutlined style={{ cursor: "pointer" }} />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
