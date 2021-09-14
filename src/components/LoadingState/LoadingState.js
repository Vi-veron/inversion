import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./style.css";

function LoadingState() {
  return (
    <div className="container">
      <CircularProgress />
    </div>
  );
}

export default LoadingState;
