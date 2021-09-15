import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  appBar: {
    display: "flex",
    paddingLeft: 20,
    justifyContent: "space-between",
    "@media (max-width: 420px)": {
      minWidth: "100vw",
    },
    "@media (max-width: 540px)": {
      minWidth: "100vw",
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
    backgroundColor: "#1D1A73",
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
  active: {
    fontWeight: 900,
  },
  menuItem: {
    color: "#E0DFF6",
    paddingLeft: 20,
  },
  logo: {
    width: 40,
  },
  list: {
    width: 300,
    paddingTop: 40,
  },
  fullList: {
    width: 300,
  },
}));

export default styles;
