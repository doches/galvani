import * as React from "react";
import { IndexRoute, Route, Router, hashHistory } from "react-router";
import * as ReactDOM from "react-dom";

import DemoContainer from "./demo/container/container";
import DemoCommon from "./demo/common";

require("./galvani.scss");
require("./demo.scss");

let appElement = document.createElement("div");
document.body.appendChild(appElement);

let router = (
  <Router history={hashHistory}>
    <Route path="/" component={DemoContainer}>
      <IndexRoute component={DemoCommon} />
    </Route>
  </Router>
)

ReactDOM.render((
  router
), appElement);
