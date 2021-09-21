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

  link: {
    textDecoration: "none",
    display: "flex",
    minWidth: 300,
    color: theme.palette.primary.dark,
    "&:hover": {
      color: theme.palette.primary.light,
    },
    "&:focus": {
      color: theme.palette.primary.dark,
    },
  },
  passwordStyle: {
    minWidth: 300,
    width: "100%",
    border: "none",
  },
}));

export default styles;
