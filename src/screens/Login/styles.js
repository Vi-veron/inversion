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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      padding: "50% 10%",
    },
  },
  header: {
    fontSize: "1.2rem",
    textAlign: "left",
    color: "#292C30",
    fontWeight: 500,
  },
  subheader: {
    fontSize: "0.8rem",
    textAlign: "left",
    padding: "1rem 0",
    color: "#879197",
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
    padding: "0.5rem 0",
    fontSize: "0.8rem",
    width: "100%",
    fontWeight: 500,
    backgroundColor: "#fff",
    color: "#111",
    border: "2px solid #E5ECF0",
    borderRadius: 5,
    position: "relative",
    textTransform: "none",
    fontFamily: "Montserrat",
    "&:hover": {
      backgroundColor: "#eaeaea",
      border: "none",
    },
  },
  googleLogo: {
    position: "absolute",
    top: 6,
  },
  googleBtnText: {
    paddingLeft: 30,
    color: "#2E3438",
  },
  line: {
    width: "100%",
    textAlign: "center",
    borderBottom: "2px solid #E5ECF0",
    lineHeight: "0.1em",
    marginTop: "1.875rem",
    marginBottom: "1.8rem",
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
  },
  gridWrapper: {
    paddingRight: "0.5rem",
    paddingBottom: "0.5rem",
  },
  wrapperLabel: {
    position: "absolute",
    bottom: "4rem",
    paddingBottom: "0.5rem",
    fontSize: "0.8rem",
  },
  gridStyle: {
    minWidth: 300,
    paddingTop: 0,
    paddingBottom: 10,
  },
  labelStyle: {
    fontSize: "0.8rem",
    display: "flex",
    padding: "10px 0",
    color: "#4D555A",
  },
  forgotPassword: {
    fontSize: "0.8rem",
    display: "flex",
    padding: "10px 0",
    textDecoration: "none",
    color: theme.palette.primary.dark,
    "&:hover": {
      color: theme.palette.primary.light,
    },
    "&:focus": {
      color: theme.palette.primary.dark,
    },
  },
  submit: {
    padding: "0.6rem",
    fontSize: "0.8rem",
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },
}));
export default styles;
