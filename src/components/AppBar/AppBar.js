import React from "react";
import clsx from "clsx";
import {
  IconButton,
  Drawer,
  MenuItem,
  Typography,
  List,
  ListItemText,
  ListItem,
  ListItemIcon,
  Badge,
  Divider,
} from "@material-ui/core";
import {
  Menu,
  TrendingUp,
  Home,
  AccountCircle,
  Notifications,
  Settings,
  ExitToApp,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { removeAuthToken } from "../../utils/authToken";
import axios from "axios";
import styles from "./styles";

function AppBar() {
  const classes = styles();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [state, setState] = React.useState({
    bottom: false,
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const logOut = () => {
    axios.get("https://investon.herokuapp.com/auth/logout").then((response) => {
      removeAuthToken();

      console.log(response.data);
    });
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link to="/profile" className={classes.drawerLink}>
          <ListItem>
            <ListItemIcon>
              <AccountCircle className={classes.userIcon} />
            </ListItemIcon>
            <ListItemText>Profile</ListItemText>
          </ListItem>
        </Link>
        <ListItem>
          <ListItemIcon>
            <Badge badgeContent={11} color="secondary">
              <Notifications />
            </Badge>
          </ListItemIcon>
          <ListItemText>Notifications</ListItemText>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText>Settings</ListItemText>
        </ListItem>
        <ListItem onClick={logOut}>
          <ListItemIcon>
            <ExitToApp />
          </ListItemIcon>
          <ListItemText>Log out</ListItemText>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.appBar}>
      <IconButton
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        className={classes.menuButton}
      >
        <Menu className={classes.menu} />
      </IconButton>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        classes={{
          paper: classes.drawerPaper,
        }}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <Link
          to="/dashboard"
          onClick={handleDrawerToggle}
          className={classes.link}
        >
          <MenuItem className={classes.active}>
            <TrendingUp />
            <span className={classes.menuItem}> Dashboard</span>
          </MenuItem>
        </Link>
        <Link to="/" className={classes.link}>
          <MenuItem>
            <Home />
            <span className={classes.menuItem}> Home</span>
          </MenuItem>
        </Link>
      </Drawer>

      <Typography className={classes.logo}>inversion</Typography>
      {["bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton onClick={toggleDrawer(anchor, true)}>
            <AccountCircle className={classes.userIcon} />
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
export default AppBar;
