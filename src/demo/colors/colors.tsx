import * as React from "react";
import { SwatchGroup } from "../swatch/swatch";

export default class DemoColors extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="demo-section">
        <h1 className="demo-section-title">Colours</h1>
        <div className="demo-columns">
          <SwatchGroup color="grey"></SwatchGroup>
          <SwatchGroup color="blue"></SwatchGroup>
          <SwatchGroup color="teal"></SwatchGroup>
          <SwatchGroup color="green"></SwatchGroup>
          <SwatchGroup color="yellow"></SwatchGroup>
          <SwatchGroup color="orange"></SwatchGroup>
          <SwatchGroup color="red"></SwatchGroup>
        </div>
      </div>
    );
  }
}
