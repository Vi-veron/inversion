import { makeStyles } from "@mui/styles";

const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh",
  },
  hide: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  nav: {
    display: "flex",
    justifyContent: "flex-end",
    marginRight: "4rem",
    paddingTop: "1.5rem",
  },
  table: {
    display: "flex",
    justifyContent: "center",
    padding: "2rem 0",
    [theme.breakpoints.down("sm")]: {
      // marginLeft: 0,
    },
    [theme.breakpoints.down("md")]: {
      // marginLeft: 100,
    },
  },
}));

export default styles;
