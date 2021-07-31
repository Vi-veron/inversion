import { makeStyles } from "@material-ui/core";
import { red, green } from "@material-ui/core/colors";

const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  image: {
    width: "60vw",
    height: "60vh",
    minWidth: "100%",
    display: "flex",
    position: "relative",
  },
  imageText: {
    color: "#6C63FF",
    fontWeight: 600,
    fontSize: "2rem",
    position: "absolute",
    top: "10%",
    left: "6%",
  },
  container: {
    margin: "2% 10%",
  },
  h2: {
    paddingBottom: "2%",
    textAlign: "center",
    color: "#666",
  },
  contactText: {
    fontSize: "1.2rem",
    color: "#666",
    paddingBottom: "2%",
  },
  text: {
    fontWeight: 500,
  },
  email: {
    color: red[500],
  },
  icon: {
    color: red[500],
    position: "absolute",
  },
  iconText: {
    paddingLeft: 40,
    color: "#666",
    fontWeight: 500,
    fontSize: "1.1rem",
  },
  emailIconText: {
    color: red[500],
    fontSize: "1.1rem",
    paddingLeft: 40,
  },
  form: {
    margin: "18% 6%",
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
  },
  line: {
    width: "23.5%",
    borderBottom: "3px solid #E5ECF0",
  },
  lineText: {
    color: "#879197",
    fontSize: 16,
    top: 40,
    marginLeft: "4%",
    marginRight: "4%",
    textAlign: "center",
    fontWeight: 400,
    minWidth: 180,
  },
  input: {
    marginTop: "4%",
    marginBottom: "4%",
    width: "30vw",
    minWidth: "330px",
    fontSize: "1.2rem",
    backgroundColor: "#eee",
    borderRadius: 5,
  },
  textarea: {
    marginTop: "4%",
    marginBottom: "4%",
    width: "30vw",
    minWidth: "330px",
    padding: "2%",
    fontSize: "1.2rem",
    backgroundColor: "#eee",
    borderRadius: 5,
    border: "1px solid #B7B7B7",
  },
  btn: {
    width: "30vw",
    minWidth: "330px",
    padding: "1%",
    backgroundColor: "#6C63FF",
    color: "#fefefe",
    fontSize: "1.2rem",
    fontWeight: 600,
    borderRadius: 5,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#fff",
    },
  },
  alertContainer: {
    marginTop: "26vh",
    minWidth: "326px",
  },
  alertContent: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  alertTitle: {
    fontSize: "4vw",
  },
  alertMessage: {
    fontSize: "20px",
    textAlign: "center",
  },
  alertIcon: {
    fontSize: 60,
    color: "green",
  },
  alertBtn: {
    marginTop: "3vh",
    padding: "12px 24px",
    fontWeight: 600,
    fontSize: "20px",
    backgroundColor: green[600],
    color: "#fefefe",
    border: "none",
    borderRadius: 5,
  },
}));

export default styles;
