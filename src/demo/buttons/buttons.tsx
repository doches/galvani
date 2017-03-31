import * as React from "react";
import Button from "../../components/button/button";

export default class DemoButtons extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="demo-section">
        <h1 className="demo-section-title">Buttons &amp; Intents</h1>
        <p>Galvani includes styling (<code>.button</code>) and a React component (<code>Button</code>), with four optional intent classes. The available intents are:
        <code>intent-danger</code>, <code>intent-warning</code>, <code>intent-info</code>, and <code>intent-success</code>.
        </p>
        <pre>
&lt;!-- CSS --&gt;<br />
&lt;button class="button intent-warning intent-minimal"&gt;Warning?&lt;/button&gt;<br />
<br />
// JSX<br />
&lt;Button label="Warning?" className="intent-warning button-minimal"&gt;&lt;/Button&gt;
        </pre>
        <div>
          <Button label="Default"></Button>
          <Button label="Dangerous!" className="intent-danger"></Button>
          <Button label="Warning?" className="intent-warning"></Button>
          <Button label="Informative." className="intent-info"></Button>
          <Button label="Success!" className="intent-success"></Button>
        </div>
        <p style={{marginTop: "10px"}}>Want subtle buttons that fade into the background? Use <code>.button-minimal</code></p>
        <div>
          <Button label="Default" className="button-minimal"></Button>
          <Button label="Dangerous!" className="button-minimal intent-danger"></Button>
          <Button label="Warning?" className="button-minimal intent-warning"></Button>
          <Button label="Informative." className="button-minimal intent-info"></Button>
          <Button label="Success!" className="button-minimal intent-success"></Button>
        </div>
        <p style={{marginTop: "10px"}}>Need more punch? Use  <code>.button-large</code> for, you guessed it, large buttons:</p>
        <div>
          <Button label="Default" className="button-large"></Button>
          <Button label="Dangerous!" className="button-large intent-danger"></Button>
          <Button label="Warning?" className="button-large intent-warning"></Button>
          <Button label="Informative." className="button-large intent-info"></Button>
          <Button label="Success!" className="button-large intent-success"></Button>
        </div>
      </div>
    );
  }
}
