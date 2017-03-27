import * as React from "react";

export default class DemoTypography extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="demo-section">
        <h1 className="demo-section-title">Typography</h1>
        <p><strong>Lorem ipsum dolor</strong> sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <h1>h1. Header</h1>
        <h2>h2. Header</h2>
        <h3>h3. Header</h3>
        <h4>h4. Header</h4>
        <h5>h5. Header</h5>
      </div>
    );
  }
}
