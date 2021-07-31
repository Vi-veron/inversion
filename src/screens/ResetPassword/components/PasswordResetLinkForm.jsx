import React, { useState } from "react";
import { TextField, Button, Typography } from "@material-ui/core";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "../styles";

const PasswordResetLinkForm = () => {
  const classes = styles();

  const setMessage = useState("");

  const validationSchema = Yup.object().shape({
    email: Yup.string("Enter your email")
      .required("Email is required")
      .email("Email is invalid"),
  });

  const formik = useFormik({
    initialValues: {
      email: "example@example.com",
    },
    validationSchema: validationSchema,
    onSubmit: (data) => {
      setMessage("");

      axios
        .post("https://investon.herokuapp.com/auth/resetpassword", {
          ...data,
        })
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
      <h1 className={classes.header}>Reset Password </h1>
      <Typography className={classes.text}>
        Please enter your credentials first.They wont be shared publicly, and
        you wont be spammed.
      </Typography>
      <label className={classes.label}>Email Address</label>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        name="email"
        autoComplete="email"
        autoFocus
        className={classes.input}
        handleSubmit={formik.handleSubmit}
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        // {...textFieldProps}
      />
      <Button
        className={classes.btn}
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
      >
        Reset Link
      </Button>
      <p>
        <Link className={classes.link} to="/login">
          Back to login page
        </Link>
      </p>
    </form>
  );
};

export default PasswordResetLinkForm;
