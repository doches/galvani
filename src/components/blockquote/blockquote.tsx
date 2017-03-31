import * as React from "react";

require("./blockquote.scss");

export type BlockquoteAlign = "left"|"right";

export interface IBlockquoteProps {
  align?: BlockquoteAlign;
  citation: React.ReactElement<any>|string;
  source?: React.ReactElement<any>|string;
  className?: string;
}

export default class Blockquote extends React.Component<IBlockquoteProps, {}> {
  public render() {
    let decoration: React.ReactElement<any>;
    if (this.props.citation) {
      if (this.props.source) {
        decoration = (<small className="reference"><cite className="citation">{this.props.citation}</cite>, {this.props.source}</small>);
      } else {
        decoration = (<small className="reference"><cite className="citation">{this.props.citation}</cite></small>);
      }
    }
    return (
      <blockquote className={"blockquote " + (this.props.className || " ") + (this.props.align === "right" ? "blockquote-right" : "")}>
        <div className="quote">{this.props.children}</div>
        {decoration ? decoration : ""}
      </blockquote>
    );
  }
}
