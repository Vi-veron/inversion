import AppBar from "../components/appbar";
import { Typography, makeStyles, Paper, Button } from "@material-ui/core";
import BorderSelect from "../components/select";
import { grey, green } from "@material-ui/core/colors";
import CurrencyInput from "../components/currencytextfield";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  header: {
    margin: "3vw 7vw",

    fontSize: "3vh",
    color: grey[800],
    fontWeight: 500,
  },
  container: {
    width: "50vw",
    minWidth: 300,
    paddingLeft: 24,
    paddingBottom: "4vw",
    marginTop: "10vh",
  },
  fundLabel: {
    margin: " 0 7vw",
    paddingTop: "40px",
    paddingBottom: "8px",
    fontSize: "2.2vh",
    color: grey[800],
    fontWeight: 400,
  },
  nextBtn: {
    backgroundColor: green[700],
    padding: "10px  30px",
    marginTop: "8vh",
    color: "#fff",
    "&:hover": {
      backgroundColor: green[800],
    },
  },
  btnWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    marginRight: "10vw",
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
          <Typography className={classes.fundLabel}>Fund Account</Typography>
          <CurrencyInput />
          <div className={classes.btnWrapper}>
            <Button className={classes.nextBtn}>Next</Button>
          </div>
        </Paper>
      </div>
    </div>
  );
}
