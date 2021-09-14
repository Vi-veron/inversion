import { makeStyles } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  container: {
    marginTop: 60,
    marginLeft: 0,
    "@media (max-width: 414px)": {
      marginLeft: 16,
      marginTop: 30,
    },
    "@media (max-width: 320px)": {
      marginRight: 20,
      marginTop: 30,
    },
  },
  header: {
    fontSize: "1.5rem",
    textAlign: "left",
    color: "#292C30",
    fontWeight: 500,

    minWidth: 300,
  },
  subheader: {
    textAlign: "left",
    padding: "30px 0",
    color: "#879197",
    minWidth: 300,
  },
  linkStyle: {
    textDecoration: "none",
    color: "#37349A",
    "&:hover": {
      color: "#6A68A6",
    },
    "&:focus": {
      color: "#37349A",
    },
  },
  googleBtn: {
    padding: "6px 0",
    fontSize: "1.1rem",
    width: "100%",
    fontWeight: 400,
    backgroundColor: "#fff",
    color: "#111",
    border: "3px solid #E5ECF0",
    borderRadius: 5,
    display: "flex",
    position: "relative",
    textTransform: "none",
    minWidth: 300,
    fontFamily: "Montserrat",
  },
  googleLogo: {
    position: "absolute",
    top: 11,
  },
  googleBtnText: {
    paddingLeft: 30,
    color: "#2E3438",
  },
  line: {
    width: "100%",
    textAlign: "center",
    borderBottom: "3px solid #E5ECF0",
    lineHeight: "0.1em",
    minWidth: 300,
    marginTop: 50,
    marginBottom: 80,
  },
  lineText: {
    background: "#fff",
    color: "#879197",
    padding: "0 10px",
    fontSize: "1rem",
    fontWeight: 400,
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    position: "relative",
    color: "#4D555A",
    minWidth: 300,
  },
  gridWrapper: {
    paddingRight: 10,
    paddingBottom: 10,
  },
  wrapperLabel: {
    position: "absolute",
    bottom: 70,
    paddingBottom: 10,
  },
  gridStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    minWidth: 300,
  },
  inputStyle: {
    fontFamily: "Montserrat",
  },
  labelStyle: {
    display: "flex",
    padding: "10px 0",
    color: "#4D555A",
  },
  checkbox: {
    minWidth: 300,
  },
  submit: {
    backgroundColor: "#37349A",
    margin: "20px 0",
    padding: 8,
    textTransform: "none",
    fontSize: 20,
    minWidth: 300,
    fontWeight: 500,
  },
  alertContainer: {
    marginTop: 300,
    minWidth: "326px",
    "@media (max-width: 414px)": {
      marginTop: 30,
    },
  },
  alertContent: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  alertTitle: {
    fontSize: "2.5rem",
  },
  alertMessage: {
    fontSize: "1.2rem",
    textAlign: "center",
  },
  alertIcon: {
    fontSize: 60,
    color: "green",
  },
  alertLink: {
    textDecoration: "none",
  },
  alertBtn: {
    marginTop: 20,
    padding: "4px 24px",
    fontWeight: 600,
    fontSize: "20px",
    textTransform: "none",
    backgroundColor: green[600],
    color: "#fefefe",
    border: "none",
    borderRadius: 5,
  },
}));
export default styles;
