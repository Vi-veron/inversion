import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  logo: {
    fontFamily: "Brush Script MT",
    color: "#42275a",
    fontSize: 30,
    paddingLeft: 10,
  },
  navBar: {
    display: "flex",
    padding: "2vh 0",
    justifyContent: "space-around",
  },
  wrapper: {
    display: "flex",
    minWidth: "100px",
  },
  active: {
    textDecoration: "none",
  },
}));
export default styles;
