import React, { useEffect } from "react";
import { TextField, Button, Typography } from "@material-ui/core";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import styles from "../styles";

import usePasswordResetLinkMutation from "hooks/queries/usePasswordResetLinkMutation";

const PasswordResetLinkForm = ({ onSuccess }) => {
  const classes = styles();

  const [generatePasswordResetLink, passwordResetLinkState] =
    usePasswordResetLinkMutation();

  useEffect(() => {
    if (passwordResetLinkState.isError) {
      toast.error(passwordResetLinkState.error.response.data.message);
    } else if (passwordResetLinkState.isSuccess) {
      onSuccess();
    }
  }, [
    passwordResetLinkState.isError,
    passwordResetLinkState.isSuccess,
    passwordResetLinkState.error,
    onSuccess,
  ]);

  const formik = useFormik({
    initialValues: {
      email: "",
    },

    onSubmit: (payload) => {
      console.log(payload);
      generatePasswordResetLink(payload);
    },
  });

  return (
    <div>
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
    </div>
  );
};

export default PasswordResetLinkForm;
