import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { Typography } from "@material-ui/core";

const columns = [
  { id: "investor", label: "Investor", minWidth: 100 },

  {
    id: "amount",
    label: "Amount",
    minWidth: 100,

    align: "right",
  },
  {
    id: "date",
    label: "Date",
    minWidth: 100,
    align: "right",
  },
];

function createData(investor, amount, date) {
  return { investor, amount, date };
}

const rows = [
  createData("Kay Matthew", "500,000.00", "09 / 12 / 2020"),
  createData("Nuel Freeman", "450,000.00", "15 / 02 /2021"),
  createData("Kiara Smith ", "565,000.00", "18 / 05 / 2021"),
  createData("James Veron", "650,000.00", "06 / 10 / 2020"),
  createData("Sonia Joe", "234,000.00", "12 / 12 / 2020"),
  createData("Kay Matthew", "500,000.00", "09 / 12 / 2020"),
  createData("Nuel Freeman", "450,000.00", "15 / 02 /2021"),
  createData("Kiara Smith ", "565,000.00", "18 / 05 / 2021"),
  createData("James Veron", "650,000.00", "06 / 10 / 2020"),
  createData("Sonia Joe", "234,000.00", "12 / 12 / 2020"),
  createData("Kay Matthew", "500,000.00", "09 / 12 / 2020"),
  createData("Nuel Freeman", "450,000.00", "15 / 02 /2021"),
  createData("Kiara Smith ", "565,000.00", "18 / 05 / 2021"),
  createData("James Veron", "650,000.00", "06 / 10 / 2020"),
  createData("Sonia Joe", "234,000.00", "12 / 12 / 2020"),
];

const useStyles = makeStyles({
  root: {
    width: "70vw",
    margin: "4em",
  },
  container: {
    maxHeight: 440,
  },
});

const btnStyle = {
  justifyContent: "flex-end",
  marginLeft: 160,
  backgroundColor: "#42275a",
  color: "#fff",
  borderRadius: 5,
  cursor: "pointer",
};

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "2em",
          }}
        >
          <Typography>Manage Investments</Typography>
          <button style={btnStyle}>Create Investments</button>
        </div>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.amount}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
