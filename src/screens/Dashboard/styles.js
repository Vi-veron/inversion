import { makeStyles } from "@mui/styles";

const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
}));

export default styles;
