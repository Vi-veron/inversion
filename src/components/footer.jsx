import { Typography } from "@material-ui/core";
import React from "react";
import {
  SocialProvider,
  SocialLink,
} from "@mui-treasury/components/socialLink";
import { useZoomSocialLinkStyles } from "@mui-treasury/styles/socialLink/zoom";

const footer = {
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
    <div style={footer.container}>
      <Typography variant="h5" style={footer.text}>
        Share:
      </Typography>
      <SocialProvider useStyles={useZoomSocialLinkStyles}>
        <SocialLink
          brand={"Facebook"}
          href={"https://www.facebook.com"}
          style={footer.link}
        />
        <SocialLink
          brand={"Twitter"}
          href={"https://twitter.com"}
          style={footer.link}
        />
        <SocialLink brand={"Instagram"} href={""} style={footer.link} />
        <SocialLink
          brand={"LinkedIn"}
          href={"https://www.linkedin.com"}
          style={footer.link}
        />
        <SocialLink
          brand={"Whatsapp"}
          href={"https://www.whatsapp.com"}
          style={footer.link}
        />
      </SocialProvider>

      {/* <Copyright style={footerStyle.copyright} /> */}
    </div>
  );
}
