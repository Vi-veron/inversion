import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  sideBar: {
    height: "100vh",
    backgroundColor: "#1D1A73",
  },
  logo: {
    paddingLeft: 20,
    paddingTop: 40,
    width: 180,
    "@media (max-width: 1024px)": {},
  },
  line: {
    margin: 30,
    opacity: 0.2,
  },
  sidebarItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "78vh",
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
  btn: {
    backgroundColor: "#1D1A73",
    border: "none",
    color: "#fff",
  },
  menuItem: {
    color: "#E0DFF6",
    paddingLeft: 20,
  },
}));

export default styles;
