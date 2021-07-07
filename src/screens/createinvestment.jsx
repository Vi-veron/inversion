import AppBar from "../components/appBar";
import { Typography, makeStyles, Paper, Button } from "@material-ui/core";
import BorderSelect from "../components/Select";
import { grey, green } from "@material-ui/core/colors";
import CurrencyInput from "../components/CurrencyTextfield";
import Modal from "../components/modal/Modal";
import useModal from "../components/modal/useModal";
import "../App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  wrapper: {
    backgroundColor: "#E7D9E7",
    borderTopLeftRadius: "10%",
    borderTopRightRadius: "10%",
    height: "90vh",
    minWidth: 340,
    minHeight: 546,
  },
  header: {
    margin: "3vw 7vw",

    fontSize: "3vh",
    color: grey[800],
    fontWeight: 500,
  },
  container: {
    width: "50vw",
    minWidth: 280,
    paddingRight: "10vw",
    paddingBottom: "4vw",
    marginTop: "16vh",
    marginRight: "6vw",
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
    marginRight: "2vw",
    marginBottom: "2vw",
  },
}));

const cardStyle = {
  display: "flex",
  justifyContent: "center",
  minWidth: 300,
};

export default function CreateInvestment() {
  const classes = useStyles();
  const { isShowing, toggle } = useModal();

  return (
    <div className={classes.root}>
      <AppBar />
      <div className={classes.wrapper}>
        <div style={cardStyle}>
          <Paper className={classes.container}>
            <Typography className={classes.header}>Make Investments</Typography>
            <BorderSelect />
            <Typography className={classes.fundLabel}>Fund Account</Typography>
            <CurrencyInput />
            <div className={classes.btnWrapper}>
              <Button onClick={toggle} className={classes.nextBtn}>
                Next
              </Button>
              <Modal isShowing={isShowing} hide={toggle} />
            </div>
          </Paper>
        </div>
      </div>
    </div>
  );
}
