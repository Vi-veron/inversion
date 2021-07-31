import { Typography } from "@material-ui/core";
import React from "react";
import {
  SocialProvider,
  SocialLink,
} from "@mui-treasury/components/socialLink";
import { useZoomSocialLinkStyles } from "@mui-treasury/styles/socialLink/zoom";
import styles from "./styles";

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

function Footer() {
  const classes = styles();
  return (
    <div className={classes.container}>
      <Typography variant="h5" className={classes.text}>
        Share:
      </Typography>
      <SocialProvider useclassNames={useZoomSocialLinkStyles}>
        <SocialLink
          brand={"Facebook"}
          href={"https://www.facebook.com"}
          className={classes.link}
        />
        <SocialLink
          brand={"Twitter"}
          href={"https://twitter.com"}
          className={classes.link}
        />
        <SocialLink brand={"Instagram"} href={""} className={classes.link} />
        <SocialLink
          brand={"LinkedIn"}
          href={"https://www.linkedin.com"}
          className={classes.link}
        />
        <SocialLink
          brand={"Whatsapp"}
          href={"https://www.whatsapp.com"}
          className={classes.link}
        />
      </SocialProvider>

      {/* <Copyright style={footerStyle.copyright} /> */}
    </div>
  );
}

export default Footer;
