import React from "react";
import { Grid, Typography } from "@material-ui/core";
import {
  WavesOutlined,
  ViewComfyOutlined,
  Eco,
  ArrowForwardOutlined,
} from "@material-ui/icons";
import styles from "./styles";

export default function SpacingGrid() {
  const classes = styles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Grid container>
          <Grid item>
            <div className={classes.paper}>
              <WavesOutlined className={classes.icon} />
              <Typography className={classes.header}>Fish Farming</Typography>
              <Typography className={classes.text}>
                Involves building earthen, concrete or tarpaulin ponds, stocking
                the fingernails or juveniles and feeding the fish till market
                size.
              </Typography>
              <ArrowForwardOutlined className={classes.more} />
            </div>
          </Grid>

          <Grid item>
            <div className={classes.paper}>
              <Eco className={classes.icon} />
              <Typography className={classes.header}>Milk Factory</Typography>
              <Typography className={classes.text}>
                Nigeria’s annual milk production is estimated at 500,000 tonnes
                while the annual local demand for milk stands at an average of
                1.7m tonnes, with the shortfall imported into the country.
              </Typography>
              <ArrowForwardOutlined className={classes.more} />
            </div>
          </Grid>

          <Grid item>
            <div className={classes.paper}>
              <ViewComfyOutlined className={classes.icon} />

              <Typography className={classes.header}>
                Poultry Farming
              </Typography>
              <Typography className={classes.text}>
                With over 160 Million consumers in the country who buys poultry
                products on daily basis, the market is always here waiting to be
                tapped.
              </Typography>
              <ArrowForwardOutlined className={classes.more} />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
