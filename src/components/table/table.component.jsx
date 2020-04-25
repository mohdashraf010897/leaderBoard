import React from "react";

import TableHeader from "./../table-header/table-header.component";
import TableBody from "./../table-body/table-body.component";

import "./table.styles.scss";

const Table = ({ columns, data, onSort, sortColumn }) => {
  return (
    <table className="table">
      <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn} />
      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;
