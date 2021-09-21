import { makeStyles } from "@mui/styles";

const styles = makeStyles((theme) => ({
  root: {
    width: "74vw",
    height: "100vh",
    minWidth: "350px",
    backgroundColor: "#fdfdfd",
    [theme.breakpoints.down("sm")]: {
      minWidth: "100vw",
    },
  },
  container: {
    height: "70vh",
    marginTop: 40,
    [theme.breakpoints.down("sm")]: {
      marginTop: 20,
    },
  },
  headerText: {
    fontSize: "1.8rem",
    fontWeight: 700,
    minWidth: 310,
    color: "#363499",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.4rem",
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
    fontSize: 16,
    padding: "1rem",
    background: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },
  stickyHead: {
    minWidth: 160,
    padding: "2% 4%",
    fontSize: "9rem",
    fontWeight: 600,
    color: "#554",
  },
  tableData: {
    color: "#444",
    fontSize: "90%",
    padding: "2% 4%",
    fontWeight: 500,
    minWidth: 150,
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
}));
export default styles;
