import React from "react";
import ReactDOM from "react-dom";
import Dropmenu from "./Dropmenues.js";
import "./index.css";

class NavItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
    this.state = {
      active: false
    };
  }

  toggleClass() {
    this.setState({ active: !this.state.active });
  }

  render() {
    return (
      <nav>
        <div className="logo">
          <img
            src="https://62.img.avito.st/140x105/3326533062.jpg"
            alt="logo"
          />
        </div>
        <ul className="menu-ctn">
          <li>Home</li>
          <li
            id="menu"
            onMouseEnter={this.toggleClass}
            onMouseLeave={this.toggleClass}
          >
            My items
            <Dropmenu active={this.state.active} />
          </li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}

ReactDOM.render(<NavItem />, document.querySelector("#root"));
