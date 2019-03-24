import React from "react";
import NavBar from "../NavBar/NavBar.js";
import SideMenu from "../SideMenu/SideMenu.js";
import Content from "../Content/Content.js";
import "./Main.css";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.handleSlideBtn = this.handleSlideBtn.bind(this);
    this.state = {
      navBarActive: false
    };
  }

  handleSlideBtn() {
    this.setState({ navBarActive: !this.state.navBarActive });
  }

  render() {
    return (
      <div className="container">
        <NavBar handleSlideBtn={this.handleSlideBtn} />
        <SideMenu
          navBarActive={this.state.navBarActive}
          handleSlideBtn={this.handleSlideBtn}
        />
        <Content navBarActive={this.state.navBarActive} />
      </div>
    );
  }
}

export default Main;
