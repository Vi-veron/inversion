import React, { useState } from "react";
import {
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
import Hero from "components/Hero";
import { Link } from "react-router-dom";
import {
  Visibility,
  VisibilityOff,
  CheckCircleOutline,
} from "@material-ui/icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from "./styles";

export default function Register() {
  const classes = styles();
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });
  const [checked, setChecked] = React.useState(true);

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChecked = (event) => {
    setChecked(event.target.checked);
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string("Enter your name").required("Fullname is required"),
    username: Yup.string("Enter your username")
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("User name Required"),
    email: Yup.string("Enter your email")
      .required("Email is required")
      .email("Email is invalid"),
    mobile: Yup.string("Enter your phone number")
      .required("Phone number is required")
      .matches(
        /^([0]{1}|\+?[234]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g,
        "Invalid phone number"
      ),
    password: Yup.string("Enter your password")
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
  });

  const formik = useFormik({
    initialValues: {
      name: "Victoria Smith",
      username: "vikee",
      email: "example@example.com",
      mobile: "08134360599",
      password: "example",
      checkbox: { checked },
    },
    validationSchema: validationSchema,
    onSubmit: (data) => {
      setMessage("");

      axios
        .post("https://investon.herokuapp.com/auth/register", {
          ...data,
        })
        .then(
          (response) => {
            setMessage(response.data.message);
            setSuccessful(true);
            console.log("response>>>>", response);
          },
          (error) => {
            const resMessage = error.data;
            console.log(error.response?.data);
            alert(JSON.stringify(error.response?.data.message, null, 2));

            setMessage(resMessage);
            setSuccessful(false);
          }
        );
    },
  });

  const googleSignup = () => {
    axios
      .get("https://investon.herokuapp.com/auth/googleauth")
      .then((response) => {
        console.log(response.data);
      });
  };

  return (
    <div className={classes.root}>
      <Grid item xs={12} container>
        <Hidden xsDown>
          <Grid item sm={5}>
            <Hero />
          </Grid>
        </Hidden>
        <Grid item xs={7}>
          <Container component="main" maxWidth="sm">
            <div>
              <form
                onSubmit={formik.handleSubmit}
                className={classes.container}
              >
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

                    <Button
                      className={classes.googleBtn}
                      onClick={googleSignup}
                    >
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
                        <label className={classes.wrapperLabel}>Name</label>
                        <TextField
                          autoComplete="name"
                          name="name"
                          variant="outlined"
                          required
                          fullWidth
                          id="name"
                          autoFocus
                          value={formik.values.name}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.name && Boolean(formik.errors.name)
                          }
                          helperText={formik.touched.name && formik.errors.name}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <label className={classes.wrapperLabel}>
                          User Name
                        </label>
                        <TextField
                          autoComplete="username"
                          name="username"
                          variant="outlined"
                          required
                          fullWidth
                          id="username"
                          autoFocus
                          value={formik.values.username}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.username &&
                            Boolean(formik.errors.username)
                          }
                          helperText={
                            formik.touched.username && formik.errors.username
                          }
                        />
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
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.email && Boolean(formik.errors.email)
                        }
                        helperText={formik.touched.email && formik.errors.email}
                      />
                    </Grid>

                    <Grid item className={classes.gridStyle} xs={12}>
                      <label className={classes.labelStyle}>Phone Number</label>
                      <TextField
                        autoComplete="mobile"
                        name="mobile"
                        variant="outlined"
                        required
                        fullWidth
                        type="tel"
                        id="mobile"
                        autoFocus
                        value={formik.values.mobile}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.mobile && Boolean(formik.errors.mobile)
                        }
                        helperText={
                          formik.touched.mobile && formik.errors.mobile
                        }
                      />
                    </Grid>

                    <Grid className={classes.gridStyle} item xs={12}>
                      <label className={classes.labelStyle}>Password</label>
                      <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? "text" : "password"}
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
                        value={formik.values.password}
                        onChange={formik.handleChange("password")}
                        error={
                          formik.touched.password &&
                          Boolean(formik.errors.password)
                        }
                        helperText={
                          formik.touched.password && formik.errors.password
                        }
                      />
                    </Grid>
                    <FormGroup className={classes.checkbox} row>
                      <FormControlLabel
                        control={
                          <Checkbox value="allowExtraEmails" color="primary" />
                        }
                        label="I want to receive investments options and latest updates."
                        className={classes.controlLabel}
                        value={formik.values.checkbox}
                        onChange={handleChecked}
                        checked={checked}
                        inputProps={{ "aria-label": "primary checkbox" }}
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
                  <div className={classes.container}>
                    {successful === true ? (
                      <div className={classes.content}>
                        <CheckCircleOutline className={classes.icon} />
                        <Typography className={classes.title}>
                          Success!
                        </Typography>
                        <Typography className={classes.message}>
                          {message}
                        </Typography>
                        <Link to="/login" className={classes.link}>
                          <Button className={classes.btn}>Ok</Button>
                        </Link>
                      </div>
                    ) : (
                      <div>
                        <Typography>{message}</Typography>
                      </div>
                    )}
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
