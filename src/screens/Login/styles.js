import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  container: {
    "@media (max-width: 414px)": {
      marginLeft: 16,
    },
  },
  header: {
    fontSize: "1.5rem",
    textAlign: "left",
    color: "#292C30",
    fontWeight: 500,
    marginTop: 150,
    "@media (max-width: 540px)": {
      minWidth: "370px",
      marginTop: 20,
    },
  },
  subheader: {
    textAlign: "left",
    padding: "30px 0",
    color: "#879197",
    minWidth: "320px",
  },
  link: {
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
    minWidth: "320px",
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
    backgroundColor: "#37349A",
    margin: "20px 0",
    padding: 8,
    textTransform: "none",
    fontSize: 20,
    minWidth: "320px",
    fontWeight: 500,
  },
}));
export default styles;
