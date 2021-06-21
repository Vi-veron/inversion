import {
  makeStyles,
  Hidden,
  Grid,
  Typography,
  TextField,
  Button,
  Container,
} from "@material-ui/core/";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  paper: {
    flexDirection: "column",
    minHeight: "100vh",
    display: "flex",
    color: "#fff",
    background: "linear-gradient(195.95deg, #B5179E 0%, #4895EF 100%), #C4C4C4",
    textAlign: "left",
  },
  container: {
    marginRight: "20rem",
  },
  logo: {
    fontSize: 40,
    paddingTop: "22vh",
    paddingLeft: "4vw",
    fontWeight: 400,
    fontFamily: "Brush Script MT",
  },
  aboutQuote: {
    fontSize: "2vw",
    paddingTop: "2vh",
    paddingLeft: "4vw",
    paddingRight: "4vw",
    fontWeight: 500,
  },
  about: {
    fontSize: "1.2vw",
    fontWeight: 500,
    paddingTop: "2vh",
    paddingLeft: "4vw",
    paddingRight: "4vw",
  },
  header: {
    fontSize: "1.5em",
    textAlign: "left",
    color: "#292C30",
    fontWeight: 500,
    marginTop: "12rem",
    minWidth: "320px",
  },
  subheader: {
    textAlign: "left",
    padding: "2em 0",
    color: "#879197",
    minWidth: "320px",
  },
  linkStyle: {
    textDecoration: "none",
  },
  googleBtn: {
    padding: "6px 0",
    fontSize: 18,
    width: "100%",
    fontWeight: 400,
    backgroundColor: "#fff",
    color: "#111",
    border: "3px solid #E5ECF0",
    borderRadius: 5,
    display: "flex",
    position: "relative",
    textTransform: "none",
    minWidth: "320px",
  },
  googleLogo: {
    position: "absolute",
    top: 11,
  },
  googleBtnText: {
    paddingLeft: 30,
    color: "#2E3438",
  },
  line: {
    width: "100%",
    textAlign: "center",
    borderBottom: "3px solid #E5ECF0",
    lineHeight: "0.1em",
    minWidth: "320px",
    margin: "60px 0 20px",
  },
  lineText: {
    background: "#fff",
    color: "#879197",
    padding: "0 10px",
    fontSize: 20,
    fontWeight: 400,
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 80,
    position: "relative",
    color: "#4D555A",
    minWidth: "320px",
  },
  gridWrapper: {
    paddingRight: 20,
  },
  wrapperLabel: {
    position: "absolute",
    bottom: 70,
  },
  gridStyle: {
    padding: "20px 0",
    minWidth: "320px",
  },
  labelStyle: {
    display: "flex",
    paddingBottom: 20,
    color: "#4D555A",
  },
  phoneInputStyle: {
    padding: 18,
    width: "26.5vw",
    border: "1px solid #ccc",
    borderRadius: 3,
    minWidth: "280px",
  },
  checkbox: {
    minWidth: "320px",
  },
  submit: {
    backgroundColor: "#4361EE",
    margin: "20px 0",
    padding: 8,
    textTransform: "none",
    fontSize: 20,
    minWidth: "320px",
    fontWeight: 500,
  },
}));

export default function Login() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item xs={12} container>
        <Hidden xsDown>
          <Grid item sm={5}>
            <div className={classes.paper}>
              <Typography className={classes.logo}>Inversion</Typography>
              <Typography className={classes.aboutQuote}>
                It is said that there is no such thing as a completely safe and
                secure investment. But you can get pretty close.
              </Typography>
              <Typography className={classes.about}>
                Inversion seeks maximum safety and stability for your principal
                by focusing on securities and investments that carry a low
                degree of risk.
              </Typography>
            </div>
          </Grid>
        </Hidden>
        <Grid item xs={7}>
          <Container
            className={classes.container}
            component="main"
            maxWidth="sm"
          >
            <div>
              <Typography className={classes.header}>
                Log Into Your Account
              </Typography>
              <Typography className={classes.subheader}>
                Don't have an account?{" "}
                <Link className={classes.linkStyle} to="/register">
                  {" "}
                  Sign Up
                </Link>
              </Typography>
              <Button className={classes.googleBtn}>
                <span>
                  <img
                    alt="google logo"
                    src="https://img.icons8.com/fluent/20/000000/google-logo.png"
                    className={classes.googleLogo}
                  />
                </span>
                <span className={classes.googleBtnText}>
                  {" "}
                  Log in with Google
                </span>
              </Button>
              <h2 className={classes.line}>
                <span className={classes.lineText}>or</span>
              </h2>

              <Grid className={classes.gridStyle} item xs={12}>
                <label className={classes.labelStyle}>Email Address</label>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>

              <Grid className={classes.gridStyle} item xs={12}>
                <label className={classes.labelStyle}>Password</label>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Log In
              </Button>
            </div>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}
