import { makeStyles, Hidden, Grid, Typography } from "@material-ui/core/";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "100vh",
    display: "flex",
  },
}));

export default function SignUp() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid xs={12} container>
        <Hidden xsDown>
          <Grid item sm={4}>
            <div
              style={{
                background:
                  "linear-gradient(195.95deg, #B5179E 0%, #4895EF 100%), #C4C4C4",
              }}
              className={classes.paper}
            ></div>
          </Grid>
        </Hidden>
        <Grid item xs={8}>
          <div
            className={classes.paper}
            style={{ paddingTop: "4em", paddingLeft: "6em" }}
          >
            <Typography variant="h5" style={{ color: "#111", fontWeight: 500 }}>
              Create an account
            </Typography>
            <Typography>
              Already have an account? <Link>Log In</Link>
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
