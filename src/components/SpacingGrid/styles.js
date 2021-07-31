import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: "36vh",
    minHeight: "350px",
    width: "33.3vw",
    minWidth: 375,
    textAlign: "center",
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 60,
    border: "0.5px solid #eee",
    color: "#555",
  },
  header: {
    fontWeight: 600,
    fontSize: "1.5em",
    color: "333",
    paddingTop: 10,
  },
  icon: {
    fontSize: 40,
    color: "#333",
  },
  text: {
    paddingTop: 10,
    paddingBottom: 40,
  },
  more: {
    cursor: "pointer",
  },
}));
export default styles;
