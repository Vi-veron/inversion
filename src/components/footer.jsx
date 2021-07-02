import { Typography } from "@material-ui/core";
import { Facebook, Instagram, Twitter } from "@material-ui/icons";
// import { Link } from "react-router-dom";

const footerStyle = {
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
  },
  copyright: {
    display: "flex",
    justifyContent: "flex-end",
  },
};

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary">
//       {"Copyright © "}
//       <Link style={footerStyle.link} color="inherit" to="/home">
//         inversion
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

export default function Footer() {
  return (
    <div style={footerStyle.container}>
      <Typography variant="h5" style={footerStyle.text}>
        Share:
      </Typography>
      <Facebook style={{ paddingTop: 20, fontSize: 60, cursor: "pointer" }} />
      <Instagram style={{ paddingTop: 20, fontSize: 60, cursor: "pointer" }} />
      <Twitter style={{ paddingTop: 20, fontSize: 60, cursor: "pointer" }} />

      {/* <Copyright style={footerStyle.copyright} /> */}
    </div>
  );
}
