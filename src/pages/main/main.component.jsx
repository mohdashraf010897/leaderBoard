import React from "react";
import _ from "lodash";

import Table from "../../components/table/table.component";

import { columns } from "../../data/columns";
import { data } from "../../data/teamData";
import logo from "../../assets/logo.svg";

import "react-toastify/dist/ReactToastify.css";

import "./main.styles.scss";

class MainPage extends React.Component {
  constructor() {
    super();

    this.state = {
      columns: columns,
      data: data,
      sortColumn: { path: "teamNo", order: "asc" },
    };
  }

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getSortedData = () => {
    const { data, sortColumn } = this.state;

    const sorted = _.orderBy(data, [sortColumn.path], [sortColumn.order]);
    console.log(sorted);
    return {
      data: sorted,
    };
  };

  render() {
    const { columns, sortColumn } = this.state;
    const { data } = this.getSortedData();

    return (
      <div className="main">
        <div className="title">
          <img src={logo} alt="llogo" />
          <span>PUBG SCOREBOARD</span>
        </div>
        <Table
          columns={columns}
          data={data}
          sortColumn={sortColumn}
          onSort={this.handleSort}
        />
      </div>
    );
  }
}

export default MainPage;
