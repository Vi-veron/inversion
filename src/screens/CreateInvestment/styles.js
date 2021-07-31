import { makeStyles } from "@material-ui/core";
import { grey, green } from "@material-ui/core/colors";

const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  sideBar: {
    height: "100vh",
    background: "linear-gradient(195.95deg, #B5179E 0%, #4895EF 100%), #C4C4C4",
  },
  card: {
    "@media (max-width: 540px)": {
      marginLeft: 80,
      minWidth: 375,
    },
  },
  container: {
    width: "54vw",
    margin: "160px 160px",
    display: "flex",
    "@media (max-width: 540px)": {
      paddingLeft: 50,
      paddingRight: 50,
      margin: "160px 0",
    },
  },
  image: {
    width: 500,
    height: 600,
  },
  main: {
    padding: "100px 100px",
  },
  fundLabel: {
    paddingTop: 40,
    paddingBottom: 8,
    fontSize: "1.4rem",
    color: grey[800],
    fontWeight: 400,
    "@media (max-width: 540px)": {
      fontSize: "1.2rem",
    },
  },
  nextBtn: {
    backgroundColor: "#800180",
    padding: "10px  30px",
    marginTop: 80,
    // marginRight: 280,
    color: "#fff",
    "&:hover": {
      backgroundColor: green[900],
    },
  },
  btnWrapper: {
    display: "flex",
    // justifyContent: "flex-end",
  },
}));

export default styles;
