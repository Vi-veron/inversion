import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";
import { Paper, Typography, Button } from "@material-ui/core";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
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
