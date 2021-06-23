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
  { id: "investor", label: "Investor", minWidth: 150 },

  {
    id: "amount",
    label: "Amount",
    minWidth: 150,
    align: "center",
  },
  {
    id: "date",
    label: "Date",
    minWidth: 150,
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
  createData("8", "James Veron", "650,000.00", "06 / 10 / 2022"),
  createData("9", "Sonia Joe", "234,000.00", "12 / 12 / 2022"),
  createData("10", "Kay Matthew", "500,000.00", "09 / 12 / 2022"),
  createData("11", "Nuel Freeman", "450,000.00", "15 / 02 /2022"),
  createData("12", "Kiara Smith ", "565,000.00", "18 / 05 / 2022"),
  createData("13", "James Veron", "650,000.00", "06 / 10 / 2022"),
  createData("14", "Sonia Joe", "234,000.00", "12 / 12 / 2022"),
];

const useStyles = makeStyles({
  root: {
    width: "60vw",
    minWidth: "300px",
    marginTop: "12vh",
  },
  container: {
    maxHeight: "60vh",
  },
  headerText: {
    fontSize: "120%",
    fontWeight: 700,
    minWidth: 310,
    color: "#333",
  },
  tableHead: {
    display: "flex",
    justifyContent: "space-between",
    padding: "4%",
  },
  linkStyle: {
    textDecoration: "none",
    color: "#fefefe",
    backgroundColor: "#42275a",
  },
  stickyHead: {
    minWidth: columns.minWidth,
    padding: "2% 4%",
    fontSize: "110%",
    fontWeight: 600,
    backgroundColor: "#90708C",
  },
  tableData: {
    fontSize: "90%",
    padding: "2% 4%",
    fontWeight: 500,
    minWidth: 150,
    "&:hover": {
      color: "#90708C",
      backgroundColor: "#E7D9E7",
    },
  },
});

const btnStyle = {
  justifyContent: "flex-end",
  backgroundColor: "#42275a",
  color: "#fefefe",
  borderRadius: 5,
  cursor: "pointer",
  fontSize: "100%",
  fontWeight: 700,
  padding: "10px",
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
          <Typography className={classes.headerText}>
            Manage Investments
          </Typography>
          <button style={btnStyle}>
            <Link to="/create-investment" className={classes.linkStyle}>
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
                  className={classes.stickyHead}
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
                        <TableCell
                          key={column.id}
                          align={column.align}
                          className={classes.tableData}
                        >
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
