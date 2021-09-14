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
    fontFamily: "Montserrat",
    color: "#1D1A73",
    fontWeight: 600,
    fontSize: 20,
  },
  linkStyle: {
    textDecoration: "none",
    color: "#111",
  },
  inbox: {
    cursor: "pointer",
  },
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "90vh",
    width: "100%",
  },
  wrapper: {
    display: "flex",
    justifyContent: "center",
  },
  image: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "20vw",
    minWidth: "86%",
    marginLeft: "1.5rem",
    marginTop: "0.5rem",
    height: "40vh",
    backgroundColor: "#999",
    borderRadius: 2,
    "@media (max-width: 540px)": {
      height: "30vh",
      marginTop: "8rem",
    },
  },
  imageText: {
    color: "#fefefe",
    fontSize: 20,
    fontWeight: 500,
  },
  userInfo: {
    marginTop: "2rem",
    width: "68vw",
    marginLeft: "8%",
    "@media (max-width: 540px)": {
      marginTop: "2rem",
    },
  },
  userName: {
    fontSize: "2rem",
    fontWeight: 500,
    color: "#333",
    paddingBottom: 20,
    "@media (max-width: 540px)": {
      fontSize: "1.7rem",
    },
  },
  contactInfo: {
    paddingTop: "3vh",
    fontSize: "1.2rem",
    color: "#999",
    "@media (max-width: 540px)": {
      fontSize: "1rem",
    },
  },
  details: {
    display: "flex",
    flexDirection: "row",
    paddingTop: "1.8vh",
  },
  formDetails: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "1.8vh",
  },
  detailsInfo: {
    width: 100,
    fontWeight: 600,
    color: "#222",
    "@media (max-width: 540px)": {
      width: 44,
    },
  },
  detailsContent: {
    paddingLeft: 300,
    "@media (max-width: 540px)": {
      paddingLeft: 50,
    },
  },
  btn: {
    width: 140,
    marginTop: "3%",
    marginBottom: "8%",
    padding: "8px 10px",
    backgroundColor: "#37349A",
    color: "#fefefe",
    fontWeight: 700,
    border: "none",
    borderRadius: 4,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#37449A",
    },
  },
}));
export default styles;
