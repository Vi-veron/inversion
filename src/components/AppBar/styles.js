import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  appBar: {
    display: "flex",
    marginLeft: 10,
    justifyContent: "space-between",
    "@media (max-width: 420px)": {
      minWidth: 400,
    },
    "@media (max-width: 540px)": {
      minWidth: 530,
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
    background: "linear-gradient(195.95deg, #B5179E 0%, #4895EF 100%), #C4C4C4",
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
    paddingLeft: 20,
  },
  logo: {
    fontFamily: "Brush Script MT",
    fontSize: 34,
    color: "#800180",
    fontWeight: 500,
  },
}));

export default styles;
