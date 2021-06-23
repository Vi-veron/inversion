import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { green } from "@material-ui/core/colors";
import { Paper, Typography, Button } from "@material-ui/core";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { Link } from "react-router-dom";

const container = {
  display: "flex",
  justifyContent: "center",
  minWidth: "340px",
  height: "100vh",
  backgroundColor: "#F4F1F9",
};

const cardStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "50vw",
  margin: "10vw 2vw",
  minWidth: "300px",
};

const iconStyle = {
  color: green[600],
  fontSize: "10rem",
};

const header = {
  fontSize: "2.5rem",
  fontWeight: 500,
};
const subHeader = {
  fontSize: "1rem",
  fontWeight: 400,
  textAlign: "center",
};

const btnStyle = {
  margin: "6%",
  backgroundColor: green[600],
  color: "#fefefe",
  textTransform: "none",
};

const linkStyle = {
  textDecoration: "none",
  backgroundColor: green[600],
  color: "#fefefe",
};

export default function Success() {
  return (
    <div style={container}>
      <Paper style={cardStyle}>
        <CheckCircleIcon style={iconStyle} />
        <Typography style={header}>You're all set!</Typography>
        <Typography style={subHeader}>
          Your money has been invested successfully.
        </Typography>
        <Button style={btnStyle}>
          <KeyboardBackspaceIcon />
          <Link to="/dashboard" style={linkStyle}>
            Back to dashboard
          </Link>
        </Button>
      </Paper>
    </div>
  );
}
