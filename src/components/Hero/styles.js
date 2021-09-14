import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  hero: {
    flexDirection: "column",
    minHeight: "100vh",
    display: "flex",
    color: "#fff",
    backgroundColor: "#1D1A73",
    textAlign: "left",
  },
  logo: {
    width: 300,
    // paddingTop: "22vh",
    // paddingLeft: "4vw",
    paddingTop: 240,
    paddingLeft: 70,
  },
  heroText: {
    fontSize: "2vw",
    paddingTop: "2vh",
    paddingLeft: "4vw",
    paddingRight: "4vw",
    fontWeight: 500,
    color: "#E0DFF6",
  },
  heroSubText: {
    fontSize: "1.2vw",
    paddingTop: "2vh",
    paddingLeft: "4vw",
    paddingRight: "4vw",
    opacity: 0.5,
  },
}));

export default styles;
