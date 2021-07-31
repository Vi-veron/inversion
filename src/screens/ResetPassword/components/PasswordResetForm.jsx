import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  OutlinedInput,
  Button,
  Typography,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from "../styles";

const PasswordResetForm = () => {
  const classes = styles();
  const setMessage = useState("");

  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const validationSchema = Yup.object().shape({
    password: Yup.string("Enter your password")
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    confirmPassword: Yup.string("Reenter your password")
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (data) => {
      setMessage("");

      axios
        .post(
          "https://investon.herokuapp.com/auth/completeresetpassword/60f311078e13fd059cf09214/99097240",
          {
            ...data,
          }
        )
        .then(
          (response) => {
            setMessage(response.data.message);
            console.log("response>>>>", response);
          },
          (error) => {
            const resMessage = error.data;
            console.log(error.response?.data);
            alert(JSON.stringify(error.response?.data.message, null, 2));

            setMessage(resMessage);
          }
        );
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={classes.container}>
      <h1 className={classes.header}>Add new Password </h1>
      <Typography className={classes.text}>
        Please enter your new password.
      </Typography>
      <label className={classes.label}>Password</label>
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
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        value={formik.values.password}
        onChange={formik.handleChange("password")}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <label className={classes.label}>Confirm Password</label>
      <OutlinedInput
        id="outlined-adornment-password"
        type={values.showPassword ? "text" : "password"}
        className={classes.passwordStyle}
        value={formik.values.confirmPassword}
        onChange={formik.handleChange("confirmPassword")}
        error={
          formik.touched.confirmPassword &&
          Boolean(formik.errors.confirmPassword)
        }
        helperText={
          formik.touched.confirmPassword && formik.errors.confirmPassword
        }
      />
      <Button
        className={classes.btn}
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
      >
        Reset password
      </Button>
      <p>
        <Link className={classes.link} to="/login">
          Back to login page
        </Link>
      </p>
    </form>
  );
};

export default PasswordResetForm;
