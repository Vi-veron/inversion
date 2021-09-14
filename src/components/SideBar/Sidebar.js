import { TrendingUp, ExitToApp } from "@material-ui/icons";
import { MenuItem } from "@material-ui/core";
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
      <div className={classes.sidebarItem}>
        <Link to="/dashboard" className={classes.link}>
          <MenuItem className={classes.active}>
            <TrendingUp />
            <span className={classes.menuItem}> Dashboard</span>
          </MenuItem>
        </Link>
        <button className={classes.btn}>
          <MenuItem onClick={handleLogout} className={classes.item}>
            <ExitToApp />
            <span className={classes.menuItem}> Log out</span>
          </MenuItem>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
