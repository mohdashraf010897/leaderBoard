import React, { Component } from "react"
import _ from "lodash"

import "./table-body.styles.scss"

export default class TableBody extends Component {
  renderCell = (item, column) => {
    return _.get(item, column.path)
  }

  createKey = (item, column) => {
    return item._id + column.path
  }

  render = () => {
    const { data, columns } = this.props

    return (
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            {columns.map((column) => (
              <td key={this.createKey(item, column)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    )
  }
}
