import { makeStyles } from "@mui/styles";

const styles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    width: "100vw",
    background: "#eaeaea",
  },
  bar: {
    color: "#555",
    display: "flex",
    justifyContent: "space-between",
    padding: "2%",
    height: "10vh",
  },
  logo: {
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
    background: "#fff",
    width: "80vw",
    borderRadius: 20,
    padding: 40,
    boxShadow:
      "0 2px 4px -2px rgba(0,0,0,0.24), 0 4px 24px -2px rgba(0, 0, 0, 0.2)",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 400,
    marginLeft: "1.5rem",
    backgroundColor: "#999",

    borderRadius: 2,
    "@media (max-width: 540px)": {
      height: "30vh",
      marginTop: "8rem",
    },
  },
  image: {
    width: 400,
    height: 420,
  },
  imageContent: {
    display: "flex",
    flexDirection: "row",
  },
  uploadIcon: {
    fontSize: 30,
    color: "#fefefe",
  },
  uploadText: {
    fontSize: 20,
    color: "#fefefe",
  },
  userInfo: {
    marginTop: "2rem",
    marginLeft: "8%",
    "@media (max-width: 540px)": {
      marginTop: "2rem",
    },
  },
  userName: {
    fontSize: "2rem",
    fontWeight: 500,
    color: "#111",
    paddingBottom: 20,
    "@media (max-width: 540px)": {
      fontSize: "1.7rem",
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
