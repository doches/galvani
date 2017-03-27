import * as React from "react";
import Navbar from "../../components/navbar/navbar";

require("./container.scss");

export default class DemoContainer extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="demo-container">
        <Navbar title="Galvani"></Navbar>
        <div className="demo-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
