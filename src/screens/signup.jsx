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
// import Input from "react-phone-number-input/input";
import {
  Visibility,
  VisibilityOff,
  CheckCircleOutline,
} from "@material-ui/icons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
import { green } from "@material-ui/core/colors";

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
    marginTop: "10%",
    marginBottom: "10vh",
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
    paddingTop: "1vh",
    paddingBottom: "1vh",
    minWidth: "320px",
  },
  labelStyle: {
    display: "flex",
    padding: "1vh 0",
    color: "#4D555A",
  },
  phoneInputStyle: {
    padding: 20,
    width: "100%",
    border: "1px solid #ccc",
    borderRadius: 3,
    minWidth: "320px",
    "&:hover": {
      border: "1px solid #111",
    },
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

const passwordStyle = {
  minWidth: "320px",
  width: "100%",

  border: "none",
};

const alertStyle = {
  container: {
    marginTop: "26vh",
    minWidth: "326px",
  },
  content: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  title: {
    fontSize: "4vw",
  },
  message: {
    fontSize: "20px",
    textAlign: "center",
  },
  icon: {
    fontSize: 60,
    color: "green",
  },
  btn: {
    marginTop: "3vh",
    padding: "12px 24px",
    fontWeight: 600,
    fontSize: "20px",
    backgroundColor: green[600],
    color: "#fefefe",
    border: "none",
    borderRadius: 5,
  },
};

export default function SignUp() {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Firstname is required"),
    lastName: Yup.string().required("Lastname is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
  });

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = (data) => {
    setMessage("");
    setSuccessful(false);

    axios
      .post("https://darthvadar.herokuapp.com/api/auth/register", {
        ...data,
      })
      .then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
          console.log("response>>>>", response);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
  };

  const classes = useStyles();

  // const [value, setValue] = useState();
  const [values, setValues] = useState({
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
              <form onSubmit={handleSubmit(onSubmit)}>
                {!successful && (
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
                        <label className={classes.wrapperLabel}>
                          First Name
                        </label>
                        <TextField
                          autoComplete="fname"
                          name="firstName"
                          variant="outlined"
                          required
                          fullWidth
                          id="firstName"
                          autoFocus
                          {...register("firstName")}
                          className={`form-control ${
                            errors.firstName ? "is-invalid" : ""
                          }`}
                        />
                        <div className="invalid-feedback">
                          {errors.firstName?.message}
                        </div>
                      </Grid>
                      <Grid item xs={6}>
                        <label className={classes.wrapperLabel}>
                          Last Name
                        </label>
                        <TextField
                          variant="outlined"
                          required
                          id="lastName"
                          name="lastName"
                          fullWidth
                          autoComplete="lname"
                          {...register("lastName")}
                          className={`form-control ${
                            errors.lastName ? "is-invalid" : ""
                          }`}
                        />
                        <div className="invalid-feedback">
                          {errors.lastName?.message}
                        </div>
                      </Grid>
                    </div>
                    <Grid className={classes.gridStyle} item xs={12}>
                      <label className={classes.labelStyle}>
                        Email Address
                      </label>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        name="email"
                        autoComplete="email"
                        {...register("email")}
                        className={`form-control ${
                          errors.email ? "is-invalid" : ""
                        }`}
                      />
                      <div className="invalid-feedback">
                        {errors.email?.message}
                      </div>
                    </Grid>
                    {/* <Grid item xs={12}>
                  <label className={classes.labelStyle}>Phone Number</label>

                  <Input
                    country="NG"
                    international
                    withCountryCallingCode
                    value={value}
                    onChange={setValue}
                    className={classes.phoneInputStyle}
                  />
                </Grid> */}

                    <Grid className={classes.gridStyle} item xs={12}>
                      <label className={classes.labelStyle}>Password</label>
                      <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? "text" : "password"}
                        onChange={handleChange("password")}
                        style={passwordStyle}
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
                        {...register("password")}
                        className={`form-control ${
                          errors.password ? "is-invalid" : ""
                        }`}
                      />
                      <div className="invalid-feedback">
                        {errors.password?.message}
                      </div>
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
                )}
                {message && (
                  <div style={alertStyle.container}>
                    <div style={alertStyle.content}>
                      <CheckCircleOutline style={alertStyle.icon} />
                      <Typography style={alertStyle.title}>Success!</Typography>
                      <Typography style={alertStyle.message}>
                        {message}.
                      </Typography>
                      <Link to="/login">
                        <button style={alertStyle.btn}>Ok</button>
                      </Link>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}
