import EnhancedTable from "../../components/Table";
import { Grid, Hidden } from "@material-ui/core";

import Sidebar from "../../components/SideBar";
import AppBar from "../../components/AppBar";
import styles from "./styles";

function Dashboard() {
  const classes = styles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Hidden xsDown>
          <Grid item xs={12} sm={2} className={classes.sideBar}>
            <Sidebar />
          </Grid>
        </Hidden>

        <Hidden smUp>
          <AppBar />
        </Hidden>

        <Grid item xs={12} sm={10} className={classes.table}>
          <EnhancedTable />
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
