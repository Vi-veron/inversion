import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  TextField,
  Button,
  Typography,
  InputAdornment,
  IconButton,
  Container,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import PasswordResetFormSchema from "./passwordreset.schema";
import usePasswordResetMutation from "hooks/queries/usePasswordResetMutation";
import styles from "../styles";

const PasswordResetForm = ({ token }) => {
  const classes = styles();

  const [passwordVisibility, setPasswordVisibility] = useState({
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

  const [doPasswordReset, passwordResetState] = usePasswordResetMutation();

  React.useEffect(() => {
    if (passwordResetState.isError) {
      toast.error(passwordResetState.error.response.data.message);
    } else if (passwordResetState.isSuccess) {
      toast.success("Successfully reset password. Please login.");
    }
  }, [
    passwordResetState.isError,
    passwordResetState.isSuccess,
    passwordResetState.error,
  ]);

  const formik = useFormik({
    initialValues: {
      password: "",
      // confirmPassword: "",
    },
    validationSchema: PasswordResetFormSchema,
    onSubmit: (payload) => {
      doPasswordReset(payload);
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <form onSubmit={formik.handleSubmit} className={classes.container}>
        <h1 className={classes.header}>Add new Password </h1>
        <Typography className={classes.text}>
          Please enter your new password.
        </Typography>
        <label htmlFor="password" className={classes.label}>
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
          error={formik.touched.password && Boolean(formik.errors.password)}
          required
          helperText={formik.touched.password && formik.errors.password}
        />
        {/* <label htmlFor="confirmPassword" className={classes.label}>
        Confirm Password
      </label>
      <TextField
        variant="outlined"
        fullWidth
        id="confirmPassword"
        name="confirmPassword"
        autoFocus
        type="password"
        value={formik.values.confirmPassword}
        onChange={formik.handleChange("confirmPassword")}
        error={
          formik.touched.confirmPassword &&
          Boolean(formik.errors.confirmPassword)
        }
        required
        helperText={
          formik.touched.confirmPassword && formik.errors.confirmPassword
        }
      /> */}
        <Button
          variant="contained"
          type="submit"
          fullWidth
          className={classes.submit}
        >
          Reset password
        </Button>
        <p>
          <Link className={classes.link} to="/login">
            Back to login page
          </Link>
        </p>
      </form>
    </Container>
  );
};

export default PasswordResetForm;
