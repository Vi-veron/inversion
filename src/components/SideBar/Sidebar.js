import { TrendingUp, ExitToApp } from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { removeAuthToken } from "../../utils/authToken";
import r from "constants/routes";
import styles from "./styles";

function Sidebar() {
  const classes = styles();
  const history = useHistory();

  const handleLogout = () => {
    removeAuthToken();
    history.push(r.LOGIN.path);
  };

  return (
    <div className={classes.sideBar}>
      <img alt="" src="logo/investon-dark.svg" className={classes.logo} />
      <hr className={classes.line} />
      <List className={classes.sidebarItem}>
        <ListItem>
          <Link to="/dashboard" className={classes.link}>
            <ListItemButton>
              <ListItemIcon>
                <TrendingUp
                  className={classes.listItemButton}
                  style={{ color: "#fff" }}
                />
              </ListItemIcon>
              <ListItemText>Dashboard</ListItemText>
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem className={classes.item}>
          <ListItemButton onClick={handleLogout}>
            <ListItemIcon>
              <ExitToApp style={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText style={{ color: "#fff" }} primary="Log out" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
}

export default Sidebar;
