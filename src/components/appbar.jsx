import React from "react";
import { Typography, MenuItem, Menu, IconButton } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";

const barStyle = {
  color: "#555",
  display: "flex",
  justifyContent: "space-between",
  margin: "2em",
};

const logoStyle = {
  fontFamily: "Brush Script MT",
  color: "#42275a",
  fontSize: 30,
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
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
      </Menu>
    </div>
  );
}
