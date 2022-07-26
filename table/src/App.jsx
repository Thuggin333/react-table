import "./App.css";
import React from "react";
import "./css/style.css";

class Table extends React.Component {
  render() {
    return (
      <table id="customers">
        <tbody>
          <tr>
            <th>ID</th>
            <th>name</th>
            <th>date</th>
            <th>count</th>
            <th>price</th>
            <th>totalAmount</th>
          </tr>
          <Tbody
            id="1"
            name="Jems"
            date="05/01"
            count="10"
            price="100"
            totalAmount="100"
          />
          <Tbody
            id="2"
            name="Jons"
            date="05/01"
            count="25"
            price="100"
            totalAmount="200"
          />
          <Tbody
            id="1"
            name="Jonson"
            date="05/01"
            count="300"
            price="16"
            totalAmount="300"
          />
          <Tbody
            id="4"
            name="Sancho"
            date="05/01"
            count="42"
            price="45"
            totalAmount="400"
          />
          <Tbody totalAmount="" />
        </tbody>
      </table>
    );
  }
}

class Tbody extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.name}</td>
        <td>{this.props.date}</td>
        <td>{this.props.count}</td>
        <td>{this.props.price}</td>
        <td>{this.props.totalAmount * this.props.price}</td>
      </tr>
    );
  }
}

export default Table;
