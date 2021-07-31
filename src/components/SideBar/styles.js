import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  sideBar: {
    height: "100vh",
    background: "linear-gradient(195.95deg, #B5179E 0%, #4895EF 100%), #C4C4C4",
  },
  logo: {
    fontFamily: "Brush Script MT",
    color: "#fff",
    fontSize: 34,
    fontWeight: 500,
    paddingLeft: 30,
    paddingTop: 60,
    "@media (max-width: 1024px)": {
      fontSize: 28,
    },
  },
  line: {
    margin: 30,
    opacity: 0.2,
  },
  sidebarItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "80vh",
    margin: 30,
    color: "#fff",
  },
  active: {
    fontWeight: 900,
    marginTop: 15,
    padding: "20px 0",
    "@media (max-width: 1024px)": {
      fontSize: 12,
    },
  },
  item: {
    fontWeight: 500,
    marginTop: 15,
    padding: "20px 0",
    "@media (max-width: 1024px)": {
      fontSize: 12,
    },
  },
  link: {
    textDecoration: "none",
    color: "#fff",
  },
  menuItem: {
    paddingLeft: 20,
  },
}));

export default styles;
