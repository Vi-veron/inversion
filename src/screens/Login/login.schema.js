import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string("Enter your email")
    .required("Email is required")
    .email("Email is invalid"),
  password: Yup.string("Enter your password")
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(40, "Password must not exceed 40 characters"),
});

export default LoginSchema;
