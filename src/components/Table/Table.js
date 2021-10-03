import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./styles";

const mutedRender = (value) => (
  <span style={{ color: "#9e9e9e" }}>{value}</span>
);

const photos = [
  "img/dan.jpeg",
  "img/gab.jpeg",
  "img/james.jpeg",
  "img/joe.jpeg",
  "img/kay.jpeg",
  "img/kiara.jpeg",
  "img/nuel.jpeg",
];

const iconRenderer = (value) => {
  const randomImg = Math.floor(Math.random() * photos.length);

  return (
    <div style={{ display: "flex", position: "relative" }}>
      <span>
        <img
          alt="img"
          src={photos[randomImg]}
          style={{ width: 30, marginTop: 8, borderRadius: 20 }}
        />
      </span>
      <span
        style={{
          position: "absolute",
          paddingLeft: "3rem",
          top: 12,
          minWidth: 100,
        }}
      >
        {value}
      </span>
    </div>
  );
};

const columns = [
  {
    id: "investor",
    label: "Investor",
    align: "center",
    minWidth: 150,
    render: iconRenderer,
  },
  {
    id: "startDate",
    label: "Start Date",
    minWidth: 150,
    align: "center",
    render: mutedRender,
  },
  { id: "endDate", label: "End Date", align: "center", minWidth: 150 },
  {
    id: "amount",
    label: "Amount",
    minWidth: 150,
    align: "center",
    render: (value) => {
      return (
        <span style={{ color: "#00D181", fontWeight: "bold" }}>{value}</span>
      );
    },
  },
  {
    id: "phone",
    label: "Phone",
    minWidth: 150,
    align: "center",
    render: mutedRender,
  },
];

function createData(no, investor, startDate, endDate, amount, phone) {
  return { no, investor, startDate, endDate, amount, phone };
}

const rows = [
  createData(
    "0",
    "Kay Matthew",
    "09 / 12 / 2020",
    "10 / 06 / 2021",
    "500,000.00",
    "08139688968"
  ),
  createData(
    "1",
    "Nuel Freeman",
    "15 / 02 /2021",
    "16 / 08 / 2021",
    "450,000.00",
    "08138388968"
  ),
  createData(
    "2",
    "Kiara Smith ",
    "18 / 05 / 2021",
    "19 / 11 / 2021",
    "565,000.00",
    "08139688268"
  ),
  createData(
    "3",
    "James Veron",
    "06 / 10 / 2020",
    "07 / 04 / 2021",
    "650,000.00",
    "08109688968"
  ),
  createData(
    "4",
    "Joe Johnson",
    "12 / 12 / 2020",
    "06 / 06 / 2021",
    "234,000.00",
    "08119088968"
  ),
  createData(
    "5",
    "Kay Matthew",
    "09 / 12 / 2020",
    "10 / 06 / 2021",
    "500,000.00",
    "08109680968"
  ),
  createData(
    "6",
    "Nuel Freeman",
    "15 / 02 /2021",
    "16 / 08 / 2021",
    "450,000.00",
    "08139688988"
  ),
  createData(
    "7",
    "Kiara Smith ",
    "19 / 11 / 2021",
    "20 / 05 / 2022",
    "565,000.00",
    "08105688968"
  ),
  createData(
    "8",
    "James Veron",
    "06 / 10 / 2020",
    "07 / 04 / 2021",
    "650,000.00",
    "08139688568"
  ),
  createData(
    "9",
    "Joe Jonas",
    "12 / 12 / 2020",
    "06 / 06 / 2021",
    "234,000.00",
    "08129688968"
  ),
  createData(
    "10",
    "Kay Matthew",
    "09 / 12 / 2021",
    "10 / 06 /2022",
    "500,000.00",
    "08134688968"
  ),
  createData(
    "11",
    "Nuel Freeman",
    "15 / 02 /2021",
    "16 / 08 / 2021",
    "450,000.00",
    "08139688968"
  ),
  createData(
    "12",
    "Kiara Smith ",
    "18 / 05 / 2021",
    "19 / 11 / 2021",
    "565,000.00",
    "08139888968"
  ),
  createData(
    "13",
    "James Veron",
    "06 / 10 / 2021",
    "07 / 04 / 2022",
    "650,000.00",
    "08139699968"
  ),
  createData(
    "14",
    "Sonia Joe",
    "12 / 12 / 2021",
    "13 / 06 / 2022",
    "234,000.00",
    "08149688968"
  ),
];

export default function StickyHeadTable() {
  const classes = styles();
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
    <div className={classes.root}>
      <div className={classes.titleBlock}>
        <p className={classes.headerText}>Manage Investments</p>{" "}
        <Link to="/create-investment" className={classes.link}>
          Create Investment
        </Link>
      </div>

      <TableContainer className={classes.container}>
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
                  <TableRow hover tabIndex={-1} key={row.no}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      const defaultRenderer = (value, column) =>
                        column.format && typeof value === "number"
                          ? column.format(value)
                          : value;
                      const renderer = column.hasOwnProperty("render")
                        ? column.render
                        : defaultRenderer;

                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          className={classes.tableData}
                        >
                          {renderer(value, column)}
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
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}
