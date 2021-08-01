import React, { useState } from "react";
import {
  Hidden,
  Grid,
  Typography,
  TextField,
  Button,
  Container,
  IconButton,
  OutlinedInput,
  InputAdornment,
} from "@material-ui/core/";
import Hero from "components/Hero";
import { Link } from "react-router-dom";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { storeAuthToken } from "utils/authToken";
import styles from "./styles";

const Login = (props) => {
  const classes = styles();

  const [message, setMessage] = useState("");

  const validationSchema = Yup.object().shape({
    email: Yup.string("Enter your email")
      .required("Email is required")
      .email("Email is invalid"),
    password: Yup.string("Enter your password")
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
  });

  const formik = useFormik({
    initialValues: {
      email: "example@example.com",
      password: "example",
    },
    validationSchema: validationSchema,
    onSubmit: (data) => {
      setMessage("");

      axios
        .post("https://investon.herokuapp.com/auth/login", {
          ...data,
        })
        .then(
          (response) => {
            storeAuthToken(response.data.data.token);
            props.history.push("/dashboard");
          },
          (error) => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();

            setMessage(resMessage);
          }
        );
    },
  });

  const googleLogin = () => {
    axios
      .get("https://investon.herokuapp.com/auth/googleauth")
      .then((response) => {
        console.log(response.data);
      });
  };

  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

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
                <Typography className={classes.header}>
                  Log Into Your Account
                </Typography>
                <Typography className={classes.subheader}>
                  Don't have an account?{" "}
                  <Link className={classes.link} to="/register">
                    {" "}
                    Sign Up
                  </Link>
                </Typography>
                <Button className={classes.googleBtn} onClick={googleLogin}>
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
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </Grid>

                <Grid className={classes.gridStyle} item xs={12}>
                  <span
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <label className={classes.labelStyle}>Password</label>
                    <Link to="password/reset" className={classes.link}>
                      forgot password?
                    </Link>
                  </span>

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
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
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
                {message && (
                  <div className="form-group">
                    <div className="alert alert-danger" role="alert">
                      {message}
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
};
export default Login;
