import React, { useEffect } from "react";
import {
  Hidden,
  Grid,
  TextField,
  Button,
  Container,
  IconButton,
  InputAdornment,
} from "@material-ui/core/";
import Hero from "components/Hero";
import { Link, useHistory } from "react-router-dom";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useFormik } from "formik";
import axios from "axios";
import { storeAuthToken } from "utils/authToken";
import styles from "./styles";
import { toast } from "react-toastify";
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
      email: "example@example.com",
      password: "example",
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
                <p className={classes.header}>Log Into Your Account</p>
                <p className={classes.subheader}>
                  Don't have an account?{" "}
                  <Link className={classes.link} to="/register">
                    {" "}
                    Sign Up
                  </Link>
                </p>
                <Button className={classes.googleBtn} onClick={googleLogin}>
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
                </Button>
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
                    fullWidth
                    autoFocus
                    id="email"
                    name="email"
                    InputProps={{
                      classes: {
                        input: classes.inputStyle,
                      },
                    }}
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
                    <label htmlFor="password" className={classes.labelStyle}>
                      Password
                    </label>
                    <Link to="password/reset" className={classes.link}>
                      forgot password?
                    </Link>
                  </span>

                  <TextField
                    variant="outlined"
                    fullWidth
                    id="password"
                    name="password"
                    autoFocus
                    type={passwordVisibility.showPassword ? "text" : "password"}
                    InputProps={{
                      classes: {
                        input: classes.inputStyle,
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
              </form>
            </div>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};
export default Login;
