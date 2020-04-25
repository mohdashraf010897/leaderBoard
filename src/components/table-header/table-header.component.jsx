import React, { Component } from "react";

import "./table-header.styles.scss";

//columns : array
//sortColumn : object
//onSort : function
class TableHeader extends Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }

    this.props.onSort(sortColumn);
  };

  renderSortIcon = (column) => {
    const { sortColumn } = this.props;

    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === "asc") return <span>&#8673;</span>;
    return <span>&#8675;</span>;
  };

  render() {
    console.log(this.props);
    return (
      <thead className="table-head">
        <tr>
          {this.props.columns.map((column) => (
            <th key={column.path} onClick={() => this.raiseSort(column.path)}>
              {column.label} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
