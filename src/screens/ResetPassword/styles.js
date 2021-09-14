import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  container: {
    "@media (max-width: 414px)": {
      marginLeft: 40,
    },
  },
  header: {
    paddingTop: 240,
    paddingBottom: 20,
    minWidth: 300,
    "@media (max-width: 540px)": {
      paddingTop: 140,
      minWidth: 370,
    },
  },
  text: {
    minWidth: 300,
    color: "#6c6c6c",
  },
  label: {
    display: "flex",
    paddingTop: 30,
    paddingBottom: 10,
    color: "#4D555A",
    minWidth: 300,
    fontWeight: 600,
  },
  input: {
    minWidth: 300,
  },
  btn: {
    margin: theme.spacing(3, 0, 2),
    color: "#fff",
    backgroundColor: "#363499",
    textTransform: "none",
    padding: "10px 0",
    minWidth: 300,
  },
  link: {
    textDecoration: "none",
    display: "flex",
    minWidth: 300,
    color: "#5754c5",
    "&:hover": {
      color: "#363499",
    },
  },
  passwordStyle: {
    minWidth: 300,
    width: "100%",
    border: "none",
  },
  loginBtn: {
    backgroundColor: "#363499",
    color: "#fff",
    textTransform: "none",
    marginTop: 20,
    fontSize: "1rem",
    fontWeight: 500,
    "&:hover": {
      backgroundColor: "#5754c5",
    },
  },
}));

export default styles;
