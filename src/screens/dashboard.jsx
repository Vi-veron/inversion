import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "../components/appbar";

import EnhancedTable from "../components/table";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const cardStyle = {
  display: "flex",
  justifyContent: "center",
  marginTop: "8%",
  minWidth: 300,
};

function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar />
      <div style={cardStyle}>
        <EnhancedTable />
      </div>
    </div>
  );
}

export default Dashboard;
