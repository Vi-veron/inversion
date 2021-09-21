import { makeStyles } from "@mui/styles";

const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  hero: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  container: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "1.5rem",
    },
  },
  header: {
    fontSize: "1.5rem",
    textAlign: "left",
    color: "#292C30",
    fontWeight: 500,
  },
  subheader: {
    textAlign: "left",
    padding: "30px 0",
    color: "#879197",
    minWidth: "320px",
  },
  link: {
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
    minWidth: "320px",
    margin: "60px 0 40px",
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
    paddingTop: 80,
    position: "relative",
    color: "#4D555A",
    minWidth: "320px",
  },
  gridWrapper: {
    paddingRight: 20,
  },
  wrapperLabel: {
    position: "absolute",
    bottom: 70,
  },
  gridStyle: {
    padding: "20px 0",
    minWidth: "320px",
  },
  labelStyle: {
    display: "flex",
    paddingBottom: 20,
    color: "#4D555A",
  },
  submit: {
    margin: "20px 0",
    fontSize: "1.2rem",
    padding: 8,
    minWidth: "320px",
    fontWeight: 500,
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },
}));
export default styles;
