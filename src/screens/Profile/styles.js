import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    width: "100vw",
  },
  bar: {
    color: "#555",
    display: "flex",
    justifyContent: "space-between",
    padding: "2%",
    height: "10vh",
  },
  logo: {
    fontFamily: "Brush Script MT",
    color: "#42275a",
    fontSize: 30,
  },
  linkStyle: {
    textDecoration: "none",
    color: "#111",
  },
  inbox: {
    cursor: "pointer",
  },
  root: {
    flexGrow: 1,
  },
  image: {
    width: "20vw",
    minWidth: "86%",
    marginLeft: "8%",
    marginTop: "8%",
    height: "40vh",
    backgroundColor: "#999",
    borderRadius: 2,
  },
  imageText: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "18vh",
    color: "#fefefe",
    fontSize: 20,
    fontWeight: 500,
  },
  userInfo: {
    marginTop: "4%",
    width: "68vw",
    marginLeft: "8%",
  },
  userName: {
    fontSize: "2rem",
    fontWeight: 500,
    color: "#333",
  },
  contactInfo: {
    paddingTop: "3vh",
    fontSize: "1.2rem",
    color: "#999",
  },
  details: {
    display: "flex",
    flexDirection: "row",
    paddingTop: "1.8vh",
  },
  detailsInfo: {
    paddingRight: "10%",
    fontWeight: 500,
    color: "#111",
  },
  btn: {
    marginTop: "3%",
    marginBottom: "8%",
    padding: "8px 10px",
    backgroundColor: "#42275a",
    color: "#fefefe",
    fontWeight: 700,
    border: "none",
    borderRadius: 4,
    cursor: "pointer",
  },
}));
export default styles;
