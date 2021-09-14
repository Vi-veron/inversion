import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const NotFound = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <Link
        to="/dashboard"
        className="btn btn-primary btn-md font-weight-bold px-4"
      >
        Go back to dashboard
      </Link>
    </div>
  );
};

export default NotFound;
