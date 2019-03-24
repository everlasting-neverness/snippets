import React from "react";

class Dropmenu extends React.Component {
  render() {
    return (
      <ul className={`dropdown ${this.props.active ? "active" : ""}`}>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
      </ul>
    );
  }
}

export default Dropmenu;
