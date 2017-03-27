import * as React from "react";

require("./swatch.scss");

export interface ISwatchProps {
  color: string;
}

export class Swatch extends React.Component<ISwatchProps, {}> {
  public render() {
    return (
      <div className={"swatch swatch-" + this.props.color}>
      </div>
    );
  }
}

export class SwatchGroup extends React.Component<ISwatchProps, {}> {
  public render() {
    let swatches = [];
    for (let i = 1; i < 4; i++) {
      swatches.push((
        <Swatch color={this.props.color + "" + i} key={i}></Swatch>
      ));
    }

    return (
      <div>
        <h5 className="swatch-group-title">{this.props.color}</h5>
        <div className="swatch-group">
        {swatches}
        </div>
      </div>
    );
  }
}
