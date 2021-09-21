import { makeStyles } from "@mui/styles";

const styles = makeStyles((theme) => ({
  hero: {
    flexDirection: "column",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    color: "#fff",
    backgroundColor: "#1D1A73",
    textAlign: "left",
  },
  logo: {
    width: "50%",
    // paddingTop: "22vh",
    // paddingLeft: "4vw",
    // paddingTop: 240,
    paddingLeft: "4vw",
    "@media (max-width: 1024px)": {
      paddingLeft: 30,
      width: 240,
    },
  },
  heroText: {
    fontSize: "2vw",
    paddingTop: "4vh",
    paddingLeft: "4vw",
    paddingRight: "4vw",
    fontWeight: 500,
    color: "#E0DFF6",
    "@media (max-width: 1024px)": {
      fontSize: "2.2vw",
    },
  },
  heroSubText: {
    fontSize: "1.2vw",
    paddingTop: "2vh",
    paddingLeft: "4vw",
    paddingRight: "4vw",
    opacity: 0.5,
    "@media (max-width: 1024px)": {
      fontSize: "1.6vw",
    },
  },
}));

export default styles;
