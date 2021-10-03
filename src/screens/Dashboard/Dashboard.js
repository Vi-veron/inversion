import EnhancedTable from "components/Table";
import { Grid, Hidden } from "@mui/material";
import Sidebar from "components/SideBar";
import AppBar from "components/AppBar";
import styles from "./styles";
import { UserMenu } from "components/AppBar/AppBar";

function Dashboard() {
  const classes = styles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid className={classes.hide} item xs={12} sm={2}>
          <Sidebar />
        </Grid>

        <Grid item sm={10}>
          <Hidden smUp>
            <AppBar />
          </Hidden>
          <div className={classes.hide}>
            <nav className={classes.nav}>
              <UserMenu />
            </nav>
          </div>
          <div className={classes.table}>
            <EnhancedTable />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
