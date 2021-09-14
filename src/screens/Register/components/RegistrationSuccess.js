import React from "react";
import EmptyState from "components/EmptyState";
import { ReactComponent as SuccessIllustration } from "assets/registration-success.svg";

const RegistrationSuccess = ({ email }) => {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <EmptyState
          artwork={<SuccessIllustration />}
          title="Thanks for signing up!"
          message={`We just sent a verification email to ${email}. Please follow the link to complete your registration`}
        ></EmptyState>
      </div>
    </section>
  );
};

RegistrationSuccess.defaultProps = {
  email: "",
};

export default RegistrationSuccess;
