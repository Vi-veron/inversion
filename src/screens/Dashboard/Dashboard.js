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
        <Hidden xsDown>
          <Grid className={classes.hide} item xs={12} sm={2}>
            <Sidebar />
          </Grid>
        </Hidden>

        <Hidden smUp>
          <AppBar />
        </Hidden>

        <Grid item sm={10}>
          <div className={classes.hide}>
            <nav className={classes.nav}>
              <UserMenu />
            </nav>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "2rem 0",
            }}
          >
            <EnhancedTable />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
