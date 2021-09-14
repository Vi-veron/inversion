import React from "react";
import clsx from "clsx";
import {
  IconButton,
  Drawer,
  List,
  ListItemText,
  ListItem,
  ListItemIcon,
  Badge,
  Divider,
} from "@material-ui/core";
import {
  Menu,
  AccountCircle,
  Notifications,
  Settings,
  Help,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import styles from "./styles";
import SideBar from "../SideBar";

export function UserMenu() {
  const classes = styles();
  const [state, setState] = React.useState({
    right: false,
  });

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
        [classes.fullList]: anchor === "right",
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
        <ListItem>
          <ListItemIcon>
            <Help />
          </ListItemIcon>
          <ListItemText>Help</ListItemText>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      {["right"].map((anchor) => (
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

export function MobileSideBar() {
  const classes = styles();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <div>
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
        <SideBar />
      </Drawer>
    </div>
  );
}

function AppBar() {
  const classes = styles();

  return (
    <div className={classes.appBar}>
      <MobileSideBar />
      <UserMenu />
    </div>
  );
}
export default AppBar;
