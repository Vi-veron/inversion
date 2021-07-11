import React from "react";
import { Typography, MenuItem, Menu, IconButton } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";
import { removeAuthToken } from "../utils/authToken";
import axios from "axios";

const barStyle = {
  color: "#555",
  display: "flex",
  justifyContent: "space-between",
  padding: "2%",
  height: "10vh",
};

const logoStyle = {
  fontFamily: "Brush Script MT",
  color: "#42275a",
  fontSize: 30,
};

const menuItemStyle = {
  padding: 10,
};
const linkStyle = {
  textDecoration: "none",
  color: "#111",
};

export default function AppBar({ history }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut = () => {
    axios.post("https://darthvadar.herokuapp.com/api/auth/logout").then(() => {
      removeAuthToken();
      history.push("/home");
    });
  };

  return (
    <div style={barStyle}>
      <Typography style={logoStyle}>Inversion</Typography>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={open}
        onClose={handleClose}
      >
        <Link to="/profile" style={linkStyle}>
          <MenuItem style={menuItemStyle}>
            <AccountCircle />
            <span style={{ paddingLeft: 10 }}> Profile</span>
          </MenuItem>
        </Link>
        <Link to="/my-investments" style={linkStyle}>
          <MenuItem style={menuItemStyle}>
            <TrendingUpIcon />{" "}
            <span style={{ paddingLeft: 10 }}> My investments</span>
          </MenuItem>
        </Link>
        <MenuItem style={menuItemStyle}>
          <SettingsIcon />
          <span style={{ paddingLeft: 10 }}> Settings</span>
        </MenuItem>

        <MenuItem onClick={logOut} style={menuItemStyle}>
          <ExitToAppIcon />
          <span style={{ paddingLeft: 10 }}> Log out</span>
        </MenuItem>
      </Menu>
    </div>
  );
}
