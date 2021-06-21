import React from "react";
import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@material-ui/core/";
import { Link } from "react-router-dom";

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
  tableHead: {
    display: "flex",
    justifyContent: "space-between",
    padding: "2em",
  },
  linkStyle: {
    textDecoration: "none",
    color: "#fff",
    backgroundColor: "#42275a",
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
        <div className={classes.tableHead}>
          <Typography>Manage Investments</Typography>
          <button style={btnStyle}>
            <Link to="/createapplication" className={classes.linkStyle}>
              Create Investments
            </Link>
          </button>
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
