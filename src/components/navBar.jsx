import React from "react";
import { Link } from "react-router-dom"; // can be react-router-dom, reach router
import { NavMenu, NavItem } from "@mui-treasury/components/menu/navigation";
import { useFloatNavigationMenuStyles } from "@mui-treasury/styles/navigationMenu/float";
import { Typography } from "@material-ui/core";

const logoStyle = {
  fontFamily: "Brush Script MT",
  color: "#42275a",
  fontSize: 30,
  paddingLeft: 10,
};

const navBarStyle = {
  display: "flex",
  padding: "2vh 0",
  justifyContent: "space-around",
};

const activeStyle = {
  textDecoration: "none",
};

export default function NavBar() {
  return (
    <NavMenu
      gutter={1}
      useStyles={useFloatNavigationMenuStyles}
      style={navBarStyle}
    >
      <Typography style={logoStyle}>Inversion</Typography>

      <span style={{ display: "flex", minWidth: "100px" }}>
        <NavItem style={activeStyle} active as={Link} to={"/"}>
          Home
        </NavItem>
        <NavItem>About Us</NavItem>

        <NavItem>Contacts</NavItem>
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
