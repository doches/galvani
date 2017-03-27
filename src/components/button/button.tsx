import * as React from "react";

require("./button.scss");

export interface IButtonProps {
  label: string;
  className?: string;
}

export default class Button extends React.Component<IButtonProps, {}> {
  public render() {
    return (
      <button className={"button " + (this.props.className || "")}>{this.props.label}</button>
    );
  }
}
