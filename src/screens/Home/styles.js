import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    minWidth: "375px",
    height: "100vh",
  },
  infoCard: {
    width: "100vw",
    minWidth: "100%",
    background: "linear-gradient(195.95deg, #B5179E 0%, #4895EF 100%), #C4C4C4",
    height: "46vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  infoHeaderText: {
    color: "#fefefe",
    fontSize: "2.5rem",
    textAlign: "center",
    fontWeight: 500,
  },
  infoSubheaderText: {
    color: "#fefefe",
    fontSize: "1.2rem",
    textAlign: "center",
    fontWeight: 400,
  },
  btnStyle: {
    padding: "10px 20px",
    marginTop: "2vh",
    color: "#42275a",
    fontWeight: 700,
    fontSize: 20,
    cursor: "pointer",
  },
}));

export default styles;
