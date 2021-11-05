import { makeStyles } from "@mui/styles";

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
    paddingTop: 200,
    paddingBottom: 20,

    "@media (max-width: 540px)": {
      paddingTop: 140,
      minWidth: 370,
    },
  },
  text: {
    color: "#6c6c6c",
  },
  label: {
    display: "flex",
    paddingTop: 30,
    color: "#4D555A",

    fontWeight: 600,
  },
  input: {},
  submit: {
    margin: "2rem 0",
    padding: "0.6rem",
    fontSize: "0.8rem",
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },

  link: {
    textDecoration: "none",
    display: "flex",
    fontSize: "0.8rem",
    color: theme.palette.primary.dark,
    "&:hover": {
      color: theme.palette.primary.light,
    },
    "&:focus": {
      color: theme.palette.primary.dark,
    },
  },
  passwordStyle: {
    width: "100%",
    border: "none",
  },
}));

export default styles;
