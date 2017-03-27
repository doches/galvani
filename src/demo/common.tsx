import * as React from "react";
import DemoColors from "./colors/colors";
import DemoTypography from "./typography/typography";
import DemoButtons from "./buttons/buttons";

export default class DemoCommon extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <DemoColors />
        <DemoTypography />
        <DemoButtons />
      </div>
    );
  }
}
