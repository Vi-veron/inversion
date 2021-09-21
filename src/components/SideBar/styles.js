import { makeStyles } from "@mui/styles";

const styles = makeStyles((theme) => ({
  sideBar: {
    height: "100vh",
    backgroundColor: theme.palette.primary.main,
    "@media (max-width: 1024px)": {
      width: 180,
    },
  },
  logo: {
    paddingLeft: 34,
    paddingTop: 80,
    width: 180,
    height: "20vh",
    "@media (max-width: 1024px)": {
      width: 120,
    },
  },
  line: {
    margin: 30,
    opacity: 0.2,
  },
  sidebarItem: {
    height: "70vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    margin: 30,
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
    "@media (max-width: 1024px)": {
      fontSize: 12,
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
