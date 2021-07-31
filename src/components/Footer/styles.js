import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    margin: "0 40px",
  },
  text: {
    paddingTop: 24,
    color: "#333",
  },
  link: {
    textDecoration: "none",
    paddingTop: 30,
    color: "#42275a",
  },
  copyright: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));
export default styles;
