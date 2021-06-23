import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "../components/appbar";
import EnhancedTable from "../components/table";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    backgroundColor: "#E7D9E7",
    borderTopLeftRadius: "10%",
    borderTopRightRadius: "10%",
    height: "90vh",
  },
}));

const cardStyle = {
  display: "flex",
  justifyContent: "center",
  minWidth: 300,
};

function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar />
      <div className={classes.container}>
        <div style={cardStyle}>
          <EnhancedTable />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
