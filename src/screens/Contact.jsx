import React, { useState } from "react";
import { Typography, Grid, TextField } from "@material-ui/core";
import contact from "../img/contact.png";
import { red, green } from "@material-ui/core/colors";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MailIcon from "@material-ui/icons/Mail";
import { CheckCircleOutline } from "@material-ui/icons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const styles = {
  root: {
    flexGrow: 1,
  },
  image: {
    width: "60vw",
    height: "60vh",
    minWidth: "100%",
    display: "flex",
    position: "relative",
  },
  imageText: {
    color: "#6C63FF",
    fontWeight: 600,
    fontSize: "2rem",
    position: "absolute",
    top: "10%",
    left: "6%",
  },
  container: {
    margin: "2% 10%",
  },
  h2: {
    paddingBottom: "2%",
    textAlign: "center",
    color: "#666",
  },
  contactText: {
    fontSize: "1.2rem",
    color: "#666",
    paddingBottom: "2%",
  },
  text: {
    fontWeight: 500,
  },
  email: {
    color: red[500],
  },
  icon: {
    color: red[500],
    position: "absolute",
  },
  iconText: {
    paddingLeft: 40,
    color: "#666",
    fontWeight: 500,
    fontSize: "1.1rem",
  },
  emailIconText: {
    color: red[500],
    fontSize: "1.1rem",
    paddingLeft: 40,
  },
  form: {
    margin: "18% 6%",
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
  },
  line: {
    width: "23.5%",
    borderBottom: "3px solid #E5ECF0",
  },
  lineText: {
    color: "#879197",
    fontSize: 16,
    top: 40,
    marginLeft: "4%",
    marginRight: "4%",
    textAlign: "center",
    fontWeight: 400,
    minWidth: 180,
  },
  input: {
    marginTop: "4%",
    marginBottom: "4%",
    width: "30vw",
    minWidth: "330px",
    fontSize: "1.2rem",
    backgroundColor: "#eee",
    borderRadius: 5,
  },
  textarea: {
    marginTop: "4%",
    marginBottom: "4%",
    width: "30vw",
    minWidth: "330px",
    padding: "2%",
    fontSize: "1.2rem",
    backgroundColor: "#eee",
    borderRadius: 5,
    border: "1px solid #B7B7B7",
  },
  btn: {
    width: "30vw",
    minWidth: "330px",
    padding: "1%",
    backgroundColor: "#6C63FF",
    color: "#fefefe",
    fontSize: "1.2rem",
    fontWeight: 600,
    borderRadius: 5,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#fff",
    },
  },
};

const alertStyle = {
  container: {
    marginTop: "26vh",
    minWidth: "326px",
  },
  content: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  title: {
    fontSize: "4vw",
  },
  message: {
    fontSize: "20px",
    textAlign: "center",
  },
  icon: {
    fontSize: 60,
    color: "green",
  },
  btn: {
    marginTop: "3vh",
    padding: "12px 24px",
    fontWeight: 600,
    fontSize: "20px",
    backgroundColor: green[600],
    color: "#fefefe",
    border: "none",
    borderRadius: 5,
  },
};

function Contact() {
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("FullName is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    message: Yup.string()
      .required("Must fill in your request")
      .min(6, "Your request must be at least 10 characters")
      .max(40, "Your request must not exceed 40 characters"),
  });

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [message, setMessage] = useState("");
  const [successful, setSuccessful] = useState(false);

  const onSubmit = () => {
    setMessage("");
    setSuccessful(false);
  };

  return (
    <div style={styles.root}>
      <Grid container>
        <Grid item xs={12} sm={7}>
          <img style={styles.image} src={contact} alt="customerSupport" />
          <Typography style={styles.imageText}>Contact Us</Typography>
          <div style={styles.container}>
            <h2 style={styles.h2}>GET IN TOUCH WITH US</h2>
            <Typography style={styles.contactText}>
              <span style={styles.text}>Got an awesome idea?</span> or{" "}
              <span style={styles.text}>facing any difficulty?</span> send us an
              email at <span style={styles.email}>hello@inversion.com</span>.
              We'll contact you shortly.
            </Typography>
            <Grid container style={{ marginTop: "4%" }}>
              <Grid item xs={12} sm={6}>
                <Typography>
                  <LocationOnIcon style={styles.icon} />
                  <span style={styles.iconText}>Inversion</span>
                </Typography>
                <Typography
                  style={{
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
                style={{
                  display: "flex",
                  position: "relative",
                  flexDirection: "column",
                }}
              >
                <span>
                  <ContactPhoneIcon style={styles.icon} />
                  <span style={styles.iconText}>+2348137844846</span>
                </span>
                <span style={{ marginTop: 20 }}>
                  <MailIcon style={styles.icon} />
                  <span style={styles.emailIconText}>hello@inversion.com</span>
                </span>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12} sm={5}>
          <form style={styles.form} onSubmit={handleSubmit(onSubmit)}>
            {!successful && (
              <div>
                <div style={styles.wrapper}>
                  <span style={styles.line} />
                  <Typography style={styles.lineText}>
                    WHAT'S YOUR NAME?
                  </Typography>
                  <span style={styles.line} />
                </div>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="fullName"
                  id="fullName"
                  autoFocus
                  autoComplete="fullName"
                  placeholder="Type your name here."
                  style={styles.input}
                  {...register("fullName")}
                  className={`form-control ${
                    errors.fullName ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.fullName?.message}
                </div>
                <div style={styles.wrapper}>
                  <span style={styles.line} />
                  <Typography style={styles.lineText}>
                    SHARE YOUR EMAIL
                  </Typography>
                  <span style={styles.line} />
                </div>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="email"
                  id="email"
                  autoComplete="email"
                  autoFocus
                  placeholder="We won't send spam mails."
                  style={styles.input}
                  {...register("email")}
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                />
                <div className="invalid-feedback">{errors.email?.message}</div>
                <div style={styles.wrapper}>
                  <span style={styles.line} />
                  <Typography style={styles.lineText}>
                    WE'RE ALL EARS!
                  </Typography>
                  <span style={styles.line} />
                </div>
                <textArea
                  style={styles.textarea}
                  name="message"
                  rows="10"
                  cols="30"
                  placeholder="Share with us any information that might help us to respond to your request."
                  {...register("message")}
                  className={`form-control ${
                    errors.message ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.message?.message}
                </div>
                <div>
                  <button type="submit" style={styles.btn}>
                    Submit
                  </button>
                </div>
              </div>
            )}
            {message && (
              <div style={alertStyle.container}>
                <div style={alertStyle.content}>
                  <CheckCircleOutline style={alertStyle.icon} />
                  <Typography style={alertStyle.title}>Success!</Typography>
                  <Typography style={alertStyle.message}>{message}.</Typography>
                  <Link to="/dashboard">
                    <button style={alertStyle.btn}>Ok</button>
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
