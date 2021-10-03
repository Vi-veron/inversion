import { makeStyles } from "@mui/styles";

const styles = makeStyles((theme) => ({
  sideBar: {
    height: "100vh",
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down("lg")]: {
      width: 200,
    },
  },
  logo: {
    paddingLeft: "2rem",
    paddingTop: "4rem",
    width: 140,
    height: "14vh",
    [theme.breakpoints.down("lg")]: {
      width: 120,
    },
  },
  line: {
    margin: 30,
    opacity: 0.2,
  },
  sidebarItem: {
    height: "76vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    color: "#fff",
  },

  active: {
    fontWeight: 900,
    fontSize: "5rem",
    marginTop: 15,
    padding: "20px 0",
    color: "red",
  },
  item: {
    fontWeight: 500,
    marginTop: 15,
    padding: "20px 0",
    [theme.breakpoints.down("lg")]: {
      fontSize: "0.8rem",
    },
  },
  link: {
    textDecoration: "none",
    color: "#fff",
  },
  btn: {
    backgroundColor: theme.palette.primary.main,
    border: "none",
    color: "#fff",
  },
  menuItem: {
    color: "#E0DFF6",
    paddingLeft: 20,
  },
}));

export default styles;
