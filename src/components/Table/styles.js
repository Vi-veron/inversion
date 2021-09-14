import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
  root: {
    width: "74vw",
    minWidth: "350px",
    paddingTop: 100,
    marginLeft: 80,
    backgroundColor: "#fdfdfd",
    "@media (max-width: 420px)": {
      minWidth: "100vw",
    },
    "@media (max-width: 540px)": {
      paddingTop: 20,
      marginLeft: 30,
      minWidth: "100vw",
    },
  },
  container: {
    height: "70vh",
    marginTop: 40,
    "@media (max-width: 420px)": {
      // maxHeight: "94vh",
      marginTop: 20,
    },
    "@media (min-width: 540px)": {
      // maxHeight: "60vh",
      marginTop: 20,
    },
  },
  headerText: {
    fontSize: "1.8rem",
    fontWeight: 700,
    minWidth: 310,
    color: "#363499",
    "@media (max-width: 540px)": {
      fontSize: "1.4rem",
      paddingBottom: 10,
    },
  },
  titleBlock: {
    display: "flex",
    justifyContent: "space-between",
    "@media (max-width: 540px)": {
      flexDirection: "column",
    },
  },
  link: {
    textDecoration: "none",
    textAlign: "center",
    color: "#fefefe",
    borderRadius: 5,
    backgroundColor: "#37349A",
    marginRight: 20,
  },
  stickyHead: {
    minWidth: 150,
    padding: "2% 4%",
    fontSize: "110%",
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
      color: "green",
    },
  },
  btn: {
    color: "#fefefe",
    textTransform: "none",
    fontSize: 16,
  },
});
export default styles;
