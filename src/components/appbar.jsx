import React from "react";
import { Typography, MenuItem, Menu, IconButton } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

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

export default function AppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
          vertical: "bottom",
          horizontal: "center",
        }}
        keepMounted
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} style={menuItemStyle}>
          <AccountCircle /> <span style={{ paddingLeft: 10 }}> Profile</span>
        </MenuItem>
        <MenuItem onClick={handleClose} style={menuItemStyle}>
          <TrendingUpIcon />{" "}
          <span style={{ paddingLeft: 10 }}> My investments</span>
        </MenuItem>
        <MenuItem onClick={handleClose} style={menuItemStyle}>
          <SettingsIcon />
          <span style={{ paddingLeft: 10 }}> Settings</span>
        </MenuItem>

        <MenuItem onClick={handleClose} style={menuItemStyle}>
          <ExitToAppIcon />
          <span style={{ paddingLeft: 10 }}> Log out</span>
        </MenuItem>
      </Menu>
    </div>
  );
}
