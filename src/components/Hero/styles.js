import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  paper: {
    flexDirection: "column",
    minHeight: "100vh",
    display: "flex",
    color: "#fff",
    background: "linear-gradient(195.95deg, #B5179E 0%, #4895EF 100%), #C4C4C4",
    textAlign: "left",
  },
  logo: {
    fontSize: 40,
    // paddingTop: "22vh",
    // paddingLeft: "4vw",
    paddingTop: 260,
    paddingLeft: 76,
    fontWeight: 400,
    fontFamily: "Brush Script MT",
  },
  aboutQuote: {
    fontSize: "2vw",
    paddingTop: "2vh",
    paddingLeft: "4vw",
    paddingRight: "4vw",
    fontWeight: 500,
  },
  about: {
    fontSize: "1.2vw",
    fontWeight: 500,
    paddingTop: "2vh",
    paddingLeft: "4vw",
    paddingRight: "4vw",
  },
}));

export default styles;
