import { Typography } from "@material-ui/core";
import styles from "./styles";

function Hero() {
  const classes = styles();
  return (
    <div className={classes.paper}>
      <Typography className={classes.logo}>Inversion</Typography>
      <Typography className={classes.aboutQuote}>
        It is said that there is no such thing as a completely safe and secure
        investment. But you can get pretty close.
      </Typography>
      <Typography className={classes.about}>
        Inversion seeks maximum safety and stability for your principal by
        focusing on securities and investments that carry a low degree of risk.
      </Typography>
    </div>
  );
}
export default Hero;
