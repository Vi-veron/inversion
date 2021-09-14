import EnhancedTable from "components/Table";
import { Grid, Hidden } from "@material-ui/core";

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
          <Grid item xs={12} sm={2}>
            <Sidebar />
          </Grid>
        </Hidden>

        <Hidden smUp>
          <AppBar />
        </Hidden>

        <Grid item sm={10}>
          <Hidden xsDown>
            <nav
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginRight: "4rem",
                paddingTop: "1.5rem",
              }}
            >
              <UserMenu />
            </nav>
          </Hidden>
          <EnhancedTable />
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
