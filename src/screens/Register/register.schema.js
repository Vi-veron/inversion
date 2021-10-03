import * as Yup from "yup";

const RegistrationSchema = Yup.object().shape({
  name: Yup.string("Enter your name")
    .min(2, "Too Short!")
    .required("Fullname is required"),
  username: Yup.string("Enter your username")
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("User name Required"),
  email: Yup.string("Enter your email")
    .required("Email is required")
    .email("Email is invalid"),
  mobile: Yup.string("Enter your phone number")
    .required("Phone number is required")
    .matches(
      /^([0]{1}|\+?[234]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g,
      "Invalid phone number"
    ),
  password: Yup.string("Enter your password")
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(40, "Password must not exceed 40 characters"),
});

export default RegistrationSchema;
