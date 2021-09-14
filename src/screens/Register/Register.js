import React, { useState, useEffect } from "react";
import {
  Hidden,
  Grid,
  TextField,
  Button,
  Container,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
} from "@material-ui/core/";
import Hero from "components/Hero";
import { Link, useHistory } from "react-router-dom";
import {
  Visibility,
  VisibilityOff,
  // CheckCircleOutline,
} from "@material-ui/icons";
import { useFormik } from "formik";
import axios from "axios";
import styles from "./styles";
import RegistrationSchema from "./register.schema";
import useMutationNotifications from "hooks/useMutationNotifications";
import useCreateUserMutation from "hooks/queries/useCreateUserMutation";
import RegistrationSuccess from "./components/RegistrationSuccess";
import useParamSearch from "hooks/useParamSearch";

export default function Register() {
  const classes = styles();
  const history = useHistory();
  const [passwordVisibility, setPasswordVisibility] = useState({
    password: "",
    showPassword: false,
  });
  const [doCreateUser, userCreationState] = useCreateUserMutation();
  useMutationNotifications({
    ...userCreationState,
    actionType: "create",
    entity: "user",
    useServerMessage: false,
  });
  const [email, setEmail] = useState("");

  const [getSuccessParam, setSuccess] = useParamSearch("success");
  const setSuccessSearchParam = React.useCallback(setSuccess, [setSuccess]);
  const success = getSuccessParam();

  useEffect(() => {
    if (userCreationState.isSuccess) {
      setSuccessSearchParam(1);
      // history.push(r.LOGIN.path);
    }
  }, [userCreationState.isSuccess, setSuccessSearchParam, email, history]);

  const handleClickShowPassword = () => {
    setPasswordVisibility({
      ...passwordVisibility,
      showPassword: !passwordVisibility.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [checked, setChecked] = React.useState(true);
  const handleChecked = (event) => {
    setChecked(event.target.checked);
  };

  const formik = useFormik({
    initialValues: {
      name: "Victoria Smith",
      username: "vikee",
      email: "example@example.com",
      mobile: "08134360599",
      password: "example",
      checkbox: { checked },
    },
    validationSchema: RegistrationSchema,
    onSubmit: async (payload, values) => {
      setEmail(values.email);
      doCreateUser(payload);
    },
  });

  if (success) {
    return <RegistrationSuccess email={email} />;
  }

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
                <div>
                  <p className={classes.header}>Create an account</p>
                  <p className={classes.subheader}>
                    Already have an account?{" "}
                    <Link className={classes.linkStyle} to="/login">
                      {" "}
                      Log In
                    </Link>
                  </p>

                  <Button className={classes.googleBtn} onClick={googleSignup}>
                    <span>
                      <img
                        alt=""
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
                      <label htmlFor="name" className={classes.wrapperLabel}>
                        Name
                      </label>
                      <TextField
                        autoComplete="name"
                        name="name"
                        variant="outlined"
                        required
                        fullWidth
                        id="name"
                        autoFocus
                        InputProps={{
                          classes: {
                            input: classes.inputStyle,
                          },
                        }}
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.name && Boolean(formik.errors.name)
                        }
                        helperText={formik.touched.name && formik.errors.name}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <label
                        htmlFor="username"
                        className={classes.wrapperLabel}
                      >
                        User Name
                      </label>
                      <TextField
                        autoComplete="username"
                        name="username"
                        variant="outlined"
                        required
                        fullWidth
                        id="username"
                        InputProps={{
                          classes: {
                            input: classes.inputStyle,
                          },
                        }}
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
                    <label htmlFor="email" className={classes.labelStyle}>
                      Email Address
                    </label>
                    <TextField
                      variant="outlined"
                      required
                      autoFocus
                      fullWidth
                      id="email"
                      name="email"
                      InputProps={{
                        classes: {
                          input: classes.inputStyle,
                        },
                      }}
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                    />
                  </Grid>

                  <Grid item className={classes.gridStyle} xs={12}>
                    <label htmlFor="mobile" className={classes.labelStyle}>
                      Phone Number
                    </label>
                    <TextField
                      autoComplete="mobile"
                      name="mobile"
                      variant="outlined"
                      required
                      fullWidth
                      type="tel"
                      id="mobile"
                      InputProps={{
                        classes: {
                          input: classes.inputStyle,
                        },
                      }}
                      autoFocus
                      value={formik.values.mobile}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.mobile && Boolean(formik.errors.mobile)
                      }
                      helperText={formik.touched.mobile && formik.errors.mobile}
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
                      type={
                        passwordVisibility.showPassword ? "text" : "password"
                      }
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
                        formik.touched.password &&
                        Boolean(formik.errors.password)
                      }
                      required
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
                      classes={{
                        label: classes.inputStyle,
                      }}
                      label="I want to receive investments options and latest updates."
                      value={formik.values.checkbox}
                      onChange={handleChecked}
                      checked={checked}
                      // inputProps={{ "aria-label": "primary checkbox" }}
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
              </form>
            </div>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}
