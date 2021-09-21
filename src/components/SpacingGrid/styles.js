import { makeStyles } from "@mui/styles";

const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "40px 120px",
  },
  paper: {
    minHeight: "350px",
    width: "29vw",
    minWidth: 375,
    textAlign: "left",
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 100,
    paddingBottom: 100,
  },
  header: {
    fontWeight: 600,
    fontSize: "2em",
    color: "#110066",
    paddingTop: 20,
  },
  icon: {
    fontSize: 40,
    color: "#333",
  },
  text: {
    color: "#7487a3",
    fontSize: 30,
    lineHeight: 1.5,
    paddingTop: 20,
    paddingBottom: 40,
  },
  more: {
    backgroundColor: "#37349a",
    color: "#fff",
    width: 50,
    borderRadius: 5,
    cursor: "pointer",
  },
}));
export default styles;
