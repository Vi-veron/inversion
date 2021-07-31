import { TrendingUp, ExitToApp } from "@material-ui/icons";
import { Typography, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";
import { removeAuthToken } from "../../utils/authToken";
import styles from "./styles";

function Sidebar({ history }) {
  const classes = styles();

  const logOut = () => {
    axios.get("https://investon.herokuapp.com/auth/logout").then((response) => {
      removeAuthToken();

      console.log(response.data);
    });
  };

  return (
    <div>
      <Typography className={classes.logo}>Inversion</Typography>
      <hr className={classes.line} />
      <div className={classes.sidebarItem}>
        <Link to="/dashboard" className={classes.link}>
          <MenuItem className={classes.active}>
            <TrendingUp />
            <span className={classes.menuItem}> Dashboard</span>
          </MenuItem>
        </Link>
        <Link className={classes.link}>
          <MenuItem onClick={logOut} className={classes.item}>
            <ExitToApp />
            <span className={classes.menuItem}> Log out</span>
          </MenuItem>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
