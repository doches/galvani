import * as React from "react";
export interface IButtonProps {
    label: string;
    className?: string;
}
export default class Button extends React.Component<IButtonProps, {}> {
    render(): JSX.Element;
}
