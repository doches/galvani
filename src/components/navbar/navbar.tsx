import * as React from "react";

require("./navbar.scss");

export interface INavbarProps {
  title: string;
}

export default class Navbar extends React.Component<INavbarProps, {}> {
  public render() {
    return (
      <div className="navbar-container">
        <div className="navbar-left">
          <span className="header-label">{this.props.title}</span>
        </div>
        <div className="navbar-right">
          
        </div>
      </div>
    );
  }
}
