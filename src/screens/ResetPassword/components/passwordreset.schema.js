import * as Yup from "yup";

const PasswordResetFormSchema = Yup.object().shape({
  password: Yup.string("Enter your password")
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(40, "Password must not exceed 40 characters"),
  // confirmPassword: Yup.string("Reenter your password")
  //   .oneOf([Yup.ref("password"), null], "Passwords must match")
  //   .required("Confirm Password is required"),
});

export default PasswordResetFormSchema;
