import AppBar from "../components/appbar";
import { Typography, makeStyles, Paper } from "@material-ui/core";
import BorderSelect from "../components/select";
import { grey } from "@material-ui/core/colors";
import CurrencyInput from "../components/currencytextfield";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  header: {
    margin: "3vw 3vw",

    fontSize: "3vh",
    color: grey[800],
    fontWeight: 500,
  },
  container: {
    width: "50vw",
    minWidth: 300,
    paddingLeft: 24,
  },
}));

const cardStyle = {
  display: "flex",
  justifyContent: "center",
  margin: "2em",
  minWidth: 300,
};

export default function CreateApplication() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar />
      <div style={cardStyle}>
        <Paper className={classes.container}>
          <Typography className={classes.header}>Make Investments</Typography>
          <BorderSelect />
          <Typography
            style={{
              margin: " 0 3vw",
              paddingTop: "40px",
              paddingBottom: "8px",
              fontSize: "2vh",
              color: grey[800],
              fontWeight: 400,
            }}
          >
            Fund Account
          </Typography>
          <CurrencyInput />
        </Paper>
      </div>
    </div>
  );
}
