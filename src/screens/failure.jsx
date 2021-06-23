import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";
import { red } from "@material-ui/core/colors";
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
  color: red[600],
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
  backgroundColor: red[600],
  color: "#fefefe",
  textTransform: "none",
};

const linkStyle = {
  textDecoration: "none",
  backgroundColor: red[600],
  color: "#fefefe",
};

export default function Success() {
  return (
    <div style={container}>
      <Paper style={cardStyle}>
        <HighlightOffOutlinedIcon style={iconStyle} />
        <Typography style={header}>Sorry!</Typography>
        <Typography style={subHeader}>
          Your transaction has failed. Please go back and try again.
        </Typography>
        <Button style={btnStyle}>
          <KeyboardBackspaceIcon />
          <Link to="/create-investment" style={linkStyle}>
            Try Again
          </Link>
        </Button>
      </Paper>
    </div>
  );
}
