import { makeStyles } from "@mui/styles";

const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100vw",
    height: "100vh",
  },
  hero: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  container: {
    marginTop: "3rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "1rem",
    },
    // [theme.breakpoints.up("md")]: {
    //   backgroundColor: "blue",
    // },
    // [theme.breakpoints.up("lg")]: {
    //   backgroundColor: "pink",
    // },
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
    color: theme.palette.primary.dark,
    "&:hover": {
      color: theme.palette.primary.light,
    },
    "&:focus": {
      color: theme.palette.primary.dark,
    },
  },
  googleBtn: {
    display: "flex",
    justifyContent: "center",
    padding: "0.8rem 0",
    fontSize: "1.1rem",
    width: "100%",
    fontWeight: 400,
    backgroundColor: "#fff",
    color: "#111",
    border: "3px solid #E5ECF0",
    borderRadius: 5,
    position: "relative",
    textTransform: "none",
    minWidth: "320px",
    fontFamily: "Montserrat",
  },
  googleLogo: {
    position: "absolute",
    top: 13,
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
  labelStyle: {
    display: "flex",
    padding: "10px 0",
    color: "#4D555A",
  },
  checkbox: {
    minWidth: 300,
  },
  submit: {
    margin: "20px 0",
    padding: 8,
    minWidth: 300,
    fontWeight: 500,
    fontSize: "1.2rem",
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },
}));
export default styles;
