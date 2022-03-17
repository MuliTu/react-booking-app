import React from "react";
import MUITable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const Table = ({ data, columns }) => {
  return (
    <TableContainer sx={{ maxHeight: 320 }} component={Paper}>
      <MUITable stickyHeader>
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
          {data.map((row) => (
            <TableRow hover key={row.id}>
              {columns.map((column) => {
                const value = row[column.id];
                return (
                  <TableCell key={column.id}>
                    {column.preffix}
                    {column.render ? column.render(value, row) : value}
                    {column.surffix}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </MUITable>
    </TableContainer>
  );
};
