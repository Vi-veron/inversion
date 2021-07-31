import React from "react";
import { Link } from "react-router-dom"; // can be react-router-dom, reach router
import { NavMenu, NavItem } from "@mui-treasury/components/menu/navigation";
import { useFloatNavigationMenuStyles } from "@mui-treasury/styles/navigationMenu/float";
import { Typography } from "@material-ui/core";
import styles from "./styles";

export default function NavBar() {
  const classes = styles();
  return (
    <NavMenu
      gutter={1}
      useStyles={useFloatNavigationMenuStyles}
      className={classes.navBar}
    >
      <Typography className={classes.logo}>Inversion</Typography>

      <span className={classes.wrapper}>
        <NavItem className={classes.activeStyle} active as={Link} to={"/"}>
          Home
        </NavItem>
        <NavItem>About Us</NavItem>
        <NavItem as={Link} to={"/login"}>
          Login
        </NavItem>
        <NavItem as={Link} to={"/register"}>
          Signup
        </NavItem>
      </span>
    </NavMenu>
  );
}
