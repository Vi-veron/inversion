import { makeStyles } from "@mui/styles";

const styles = makeStyles((theme) => ({
  root: {
    width: "74vw",
    backgroundColor: "#fdfdfd",
    [theme.breakpoints.down("sm")]: {
      minWidth: "100vw",
    },
    [theme.breakpoints.down("md")]: {
      // marginLeft: "5rem",
    },
  },
  container: {
    height: "60vh",
    marginTop: "2.2rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: 20,
    },
  },
  headerText: {
    fontSize: "1.2rem",
    fontWeight: 700,
    minWidth: 30,
    color: "#363499",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.4rem",
      paddingLeft: "1rem",
      paddingBottom: 10,
    },
  },
  titleBlock: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  link: {
    textDecoration: "none",
    textAlign: "center",
    color: "#fefefe",
    borderRadius: 5,
    marginRight: 20,
    fontWeight: 500,
    fontSize: "0.8rem",
    padding: "0.5rem 1rem",
    background: theme.palette.primary.main,
    [theme.breakpoints.down("sm")]: {
      margin: "0 1rem",
    },
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },
  stickyHead: {
    minWidth: 160,
    padding: "1rem 0",
    fontWeight: 600,
  },
  tableData: {
    color: "#444",
    fontSize: "0.8rem",

    fontWeight: 500,
    minWidth: 170,
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
}));
export default styles;
