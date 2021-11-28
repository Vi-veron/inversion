import styles from "./styles";

function Hero() {
  const classes = styles();
  return (
    <div className={classes.hero}>
      <img
        alt=""
        src={`/logo/investon-dark-logo-with-text.svg`}
        className={classes.logo}
      />

      <p className={classes.heroText}>
        It is said that there is no such thing as a completely safe and secure
        investment. But you can get pretty close.
      </p>
      <p className={classes.heroSubText}>
        Investon seeks maximum safety and stability for your principal by
        focusing on securities and investments that carry a low degree of risk.
      </p>
    </div>
  );
}
export default Hero;
