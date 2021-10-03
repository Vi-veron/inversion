import { makeStyles } from "@mui/styles";

const styles = makeStyles((theme) => ({
  appBar: {
    display: "flex",
    paddingLeft: 20,
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
    },
  },
  menu: {
    fontSize: 34,
    color: "#222",
  },
  userIcon: {
    color: "#555",
  },
  drawerPaper: {
    width: 200,
  },
  link: {
    textDecoration: "none",
    color: "#fff",
  },
  drawerLink: {
    textDecoration: "none",
    color: "#111",
  },
  menuItem: {
    color: "#E0DFF6",
    paddingLeft: 20,
  },
  logo: {
    width: 40,
  },
  list: {
    width: 250,
    paddingTop: "3rem",
    color: "#fff",
  },
  listItem: {
    margin: "1rem 0",
    color: "#111",
    "&:hover": {
      backgroundColor: "#eaeaea",
      color: "#111",
    },
  },
  fullList: {
    width: 250,
  },
}));

export default styles;
