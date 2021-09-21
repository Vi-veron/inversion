import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import { Paper, Typography, Button } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link } from "react-router-dom";
import styles from "./styles";

export default function Failed() {
  const classes = styles();
  return (
    <div className={classes.container}>
      <Paper className={classes.cardStyle}>
        <HighlightOffOutlinedIcon className={classes.iconStyle} />
        <Typography className={classes.header}>Sorry!</Typography>
        <Typography className={classes.subHeader}>
          Your transaction has failed. Please go back and try again.
        </Typography>
        <Button className={classes.btnStyle}>
          <KeyboardBackspaceIcon />
          <Link to="/create-investment" className={classes.linkStyle}>
            Try Again
          </Link>
        </Button>
      </Paper>
    </div>
  );
}
