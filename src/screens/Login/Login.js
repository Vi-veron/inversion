import React, { useEffect } from "react";
import {
  Grid,
  TextField,
  Button,
  Container,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Hero from "components/Hero";
import { Link, useHistory } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import axios from "axios";
import { storeAuthToken } from "utils/authToken";
import styles from "./styles";
import { toast } from "react-hot-toast";
import LoginSchema from "./login.schema";
import useLoginMutation from "hooks/queries/useLoginMutation";

const Login = () => {
  const classes = styles();
  const history = useHistory();
  const [doLogin, loginState] = useLoginMutation();

  useEffect(() => {
    if (loginState.isError) {
      toast.error(loginState.error.response.data.message);
    } else if (loginState.isSuccess) {
      storeAuthToken(loginState.data.data.token);
      history.push("/dashboard");
    }
  }, [
    loginState.isError,
    loginState.data,
    loginState.isSuccess,
    loginState.error,
    history,
  ]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: async (payload, values) => {
      doLogin(payload);
    },
  });

  const googleLogin = () => {
    axios
      .get("https://investon.herokuapp.com/auth/googleauth")
      .then((response) => {
        console.log(response.data);
      });
  };

  const [passwordVisibility, setPasswordVisibility] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setPasswordVisibility({
      ...passwordVisibility,
      showPassword: !passwordVisibility.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.root}>
      <Grid item xs={12} container>
        <Grid className={classes.hero} item sm={5}>
          <Hero />
        </Grid>

        <Grid className={classes.container} item sm={7}>
          <Container component="main" maxWidth="xs">
            <form onSubmit={formik.handleSubmit}>
              <h2 className={classes.header}>Log Into Your Account</h2>
              <p className={classes.subheader}>
                Don't have an account?{" "}
                <Link className={classes.link} to="/register">
                  {" "}
                  Sign Up
                </Link>
              </p>
              <button className={classes.googleBtn} onClick={googleLogin}>
                <span>
                  <img
                    alt=""
                    src="https://img.icons8.com/fluent/20/000000/google-logo.png"
                    className={classes.googleLogo}
                  />
                </span>
                <span className={classes.googleBtnText}>
                  {" "}
                  Log in with Google
                </span>
              </button>
              <h2 className={classes.line}>
                <span className={classes.lineText}>or</span>
              </h2>

              <Grid className={classes.gridStyle} item xs={12}>
                <label htmlFor="email" className={classes.labelStyle}>
                  Email Address
                </label>
                <TextField
                  variant="outlined"
                  required
                  autoFocus
                  fullWidth
                  id="email"
                  inputProps={{
                    style: {
                      fontSize: "0.8rem",
                    },
                  }}
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>

              <Grid className={classes.gridStyle} item xs={12}>
                <label htmlFor="password" className={classes.labelStyle}>
                  Password
                </label>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="password"
                  name="password"
                  autoFocus
                  type={passwordVisibility.showPassword ? "text" : "password"}
                  InputProps={{
                    style: {
                      fontSize: "0.8rem",
                      marginBottom: "1.8rem",
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {passwordVisibility.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  value={formik.values.password}
                  onChange={formik.handleChange("password")}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  required
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Grid>

              <Button
                variant="contained"
                type="submit"
                fullWidth
                className={classes.submit}
              >
                Log In
              </Button>
            </form>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};
export default Login;
