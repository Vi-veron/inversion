import React, { useState } from "react";
import {
  makeStyles,
  Hidden,
  Grid,
  Typography,
  TextField,
  Button,
  Container,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  OutlinedInput,
  InputAdornment,
} from "@material-ui/core/";
import { Link } from "react-router-dom";
import Input from "react-phone-number-input/input";
import { Visibility, VisibilityOff } from "@material-ui/icons";

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
    marginTop: "10%",
    minWidth: "320px",
  },
  subheader: {
    textAlign: "left",
    padding: "4% 0",
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
    margin: "10% 0 3%",
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
    paddingTop: 60,
    position: "relative",
    color: "#4D555A",
    minWidth: "320px",
  },
  gridWrapper: {
    paddingRight: "1vw",
  },
  wrapperLabel: {
    position: "absolute",
    bottom: 60,
    paddingBottom: "1vh",
  },
  gridStyle: {
    padding: "1vw 0",
    minWidth: "320px",
  },
  labelStyle: {
    display: "flex",
    paddingBottom: "1vw",
    color: "#4D555A",
  },
  phoneInputStyle: {
    padding: 18,
    width: "100%",
    border: "1px solid #ccc",
    borderRadius: 3,
    minWidth: "320px",
    "&:hover": {
      border: "1px solid #111",
    },
  },
  passwordStyle: {
    minWidth: "320px",
    width: "100%",
  },
  checkbox: {
    minWidth: "320px",
  },
  controlLabel: {},
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

export default function SignUp() {
  const classes = useStyles();

  const [value, setValue] = useState();
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
                Create an account
              </Typography>
              <Typography className={classes.subheader}>
                Already have an account?{" "}
                <Link className={classes.linkStyle} to="/login">
                  {" "}
                  Log In
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
                  Sign up with Google
                </span>
              </Button>
              <h2 className={classes.line}>
                <span className={classes.lineText}>or</span>
              </h2>
              <div className={classes.wrapper}>
                <Grid item className={classes.gridWrapper} xs={6}>
                  <label className={classes.wrapperLabel}>First Name</label>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={6}>
                  <label className={classes.wrapperLabel}>Last Name</label>
                  <TextField
                    variant="outlined"
                    required
                    id="lastName"
                    name="lastName"
                    fullWidth
                    autoComplete="lname"
                  />
                </Grid>
              </div>
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
              <Grid item xs={12}>
                <label className={classes.labelStyle}>Phone Number</label>
                <Input
                  country="NG"
                  international
                  withCountryCallingCode
                  value={value}
                  onChange={setValue}
                  className={classes.phoneInputStyle}
                />
              </Grid>

              <Grid className={classes.gridStyle} item xs={12}>
                <label className={classes.labelStyle}>Password</label>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  className={classes.passwordStyle}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </Grid>
              <FormGroup className={classes.checkbox} row>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to investments options and latest updates."
                  className={classes.controlLabel}
                />
              </FormGroup>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Create Account
              </Button>
            </div>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}
