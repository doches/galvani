import * as React from "react";
import Button from "../../components/button/button";

export default class DemoButtons extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="demo-section">
        <h1 className="demo-section-title">Buttons &amp; Intents</h1>
        <div>
          <Button label="Default"></Button>
          <Button label="Dangerous!" className="intent-danger"></Button>
          <Button label="Warning?" className="intent-warning"></Button>
          <Button label="Informative." className="intent-info"></Button>
          <Button label="Success!" className="intent-success"></Button>
        </div>
        <p style={{marginTop: "10px"}}>Embiggen your buttons by adding <code>.button-large</code></p>
        <div>
          <Button label="Default" className="button-large"></Button>
          <Button label="Dangerous!" className="button-large intent-danger"></Button>
          <Button label="Warning?" className="button-large intent-warning"></Button>
          <Button label="Informative." className="button-large intent-info"></Button>
          <Button label="Success!" className="button-large intent-success"></Button>
        </div>
        <p style={{marginTop: "10px"}}>Want subtle buttons that fade into the background? Use <code>.button-minimal</code></p>
        <div>
          <Button label="Default" className="button-minimal"></Button>
          <Button label="Dangerous!" className="button-minimal intent-danger"></Button>
          <Button label="Warning?" className="button-minimal intent-warning"></Button>
          <Button label="Informative." className="button-minimal intent-info"></Button>
          <Button label="Success!" className="button-minimal intent-success"></Button>
        </div>
      </div>
    );
  }
}
