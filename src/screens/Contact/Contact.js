import React, { useState } from "react";
import { Typography, Grid, TextField } from "@material-ui/core";

import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MailIcon from "@material-ui/icons/Mail";
import { CheckCircleOutline } from "@material-ui/icons";
import { useFormik } from "formik";

import * as Yup from "yup";
import { Link } from "react-router-dom";
import styles from "./styles";

function Contact() {
  const classes = styles();

  const [message, setMessage] = useState("");
  const [successful, setSuccessful] = useState(false);

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("FullName is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    message: Yup.string()
      .required("Must fill in your request")
      .min(6, "Your request must be at least 10 characters")
      .max(40, "Your request must not exceed 40 characters"),
  });
  const formik = useFormik({
    initialValues: {
      name: "Victoria Smith",
      email: "example@example.com",
      message: "Error trying to process transaction",
    },
    validationSchema: validationSchema,
    onSubmit: (data) => {
      setMessage("");
      setSuccessful(false);
    },
  });

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={7}>
          <img
            className={classes.image}
            src="img/contact.png"
            alt="customerSupport"
          />
          <Typography className={classes.imageText}>Contact Us</Typography>
          <div className={classes.container}>
            <h2 className={classes.h2}>GET IN TOUCH WITH US</h2>
            <Typography className={classes.contactText}>
              <span className={classes.text}>Got an awesome idea?</span> or{" "}
              <span className={classes.text}>facing any difficulty?</span> send
              us an email at{" "}
              <span className={classes.email}>hello@inversion.com</span>. We'll
              contact you shortly.
            </Typography>
            <Grid container className={{ marginTop: "4%" }}>
              <Grid item xs={12} sm={6}>
                <Typography>
                  <LocationOnIcon className={classes.icon} />
                  <span className={classes.iconText}>Inversion</span>
                </Typography>
                <Typography
                  className={{
                    maxWidth: 200,
                    marginTop: 20,
                    marginBottom: 20,
                    fontSize: "1.1rem",
                    color: "#666",
                  }}
                >
                  Plot 76B Awawu Street Off Akowonjor Street, Egbeda Road, Lagos
                  State.
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                className={{
                  display: "flex",
                  position: "relative",
                  flexDirection: "column",
                }}
              >
                <span>
                  <ContactPhoneIcon className={classes.icon} />
                  <span className={classes.iconText}>+2348137844846</span>
                </span>
                <span className={{ marginTop: 20 }}>
                  <MailIcon className={classes.icon} />
                  <span className={classes.emailIconText}>
                    hello@inversion.com
                  </span>
                </span>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12} sm={5}>
          <form className={classes.form} onSubmit={formik.handleSubmit}>
            {!successful && (
              <div>
                <div className={classes.wrapper}>
                  <span className={classes.line} />
                  <Typography className={classes.lineText}>
                    WHAT'S YOUR NAME?
                  </Typography>
                  <span className={classes.line} />
                </div>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="fullName"
                  id="fullName"
                  autoFocus
                  autoComplete="fullName"
                  placeholder="Type your name here."
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />

                <div className={classes.wrapper}>
                  <span className={classes.line} />
                  <Typography className={classes.lineText}>
                    SHARE YOUR EMAIL
                  </Typography>
                  <span className={classes.line} />
                </div>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="email"
                  id="email"
                  autoComplete="email"
                  autoFocus
                  placeholder="We won't send spam mails."
                  className={classes.input}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />

                <div className={classes.wrapper}>
                  <span className={classes.line} />
                  <Typography className={classes.lineText}>
                    WE'RE ALL EARS!
                  </Typography>
                  <span className={classes.line} />
                </div>
                <textArea
                  className={classes.textarea}
                  name="message"
                  rows="10"
                  cols="30"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.message && Boolean(formik.errors.message)
                  }
                  helperText={formik.touched.message && formik.errors.message}
                />

                <div>
                  <button type="submit" className={classes.btn}>
                    Submit
                  </button>
                </div>
              </div>
            )}
            {message && (
              <div className={classes.alertContainer}>
                <div className={classes.alertContent}>
                  <CheckCircleOutline className={classes.alertIcon} />
                  <Typography className={classes.alertTitle}>
                    Success!
                  </Typography>
                  <Typography className={classes.alertMessage}>
                    {message}.
                  </Typography>
                  <Link to="/dashboard">
                    <button className={classes.alertBtn}>Ok</button>
                  </Link>
                </div>
              </div>
            )}
          </form>
        </Grid>
      </Grid>
    </div>
  );
}
export default Contact;
