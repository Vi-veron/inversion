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
  { id: "investor", label: "Investor", minWidth: 80 },

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

function createData(no, investor, amount, date) {
  return { no, investor, amount, date };
}

const rows = [
  createData("0", "Kay Matthew", "500,000.00", "09 / 12 / 2020"),
  createData("1", "Nuel Freeman", "450,000.00", "15 / 02 /2021"),
  createData("2", "Kiara Smith ", "565,000.00", "18 / 05 / 2021"),
  createData("3", "James Veron", "650,000.00", "06 / 10 / 2020"),
  createData("4", "Sonia Joe", "234,000.00", "12 / 12 / 2020"),
  createData("5", "Kay Matthew", "500,000.00", "09 / 12 / 2020"),
  createData("6", "Nuel Freeman", "450,000.00", "15 / 02 /2021"),
  createData("7", "Kiara Smith ", "565,000.00", "18 / 05 / 2021"),
  createData("8", "James Veron", "650,000.00", "06 / 10 / 2020"),
  createData("9", "Sonia Joe", "234,000.00", "12 / 12 / 2020"),
  createData("10", "Kay Matthew", "500,000.00", "09 / 12 / 2020"),
  createData("11", "Nuel Freeman", "450,000.00", "15 / 02 /2021"),
  createData("12", "Kiara Smith ", "565,000.00", "18 / 05 / 2021"),
  createData("13", "James Veron", "650,000.00", "06 / 10 / 2020"),
  createData("14", "Sonia Joe", "234,000.00", "12 / 12 / 2020"),
];

const useStyles = makeStyles({
  root: {
    width: "60vw",
    minWidth: "300px",
  },
  container: {
    maxHeight: 440,
  },
  tableHead: {
    display: "flex",
    justifyContent: "space-between",
    padding: "4%",
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
  fontSize: "90%",
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
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.no}>
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
