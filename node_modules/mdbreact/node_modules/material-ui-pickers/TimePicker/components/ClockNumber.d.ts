import { Theme } from '@material-ui/core';
import { WithStyles } from '@material-ui/core/styles/withStyles';
import * as React from 'react';
export interface ClockNumberProps extends WithStyles<typeof styles> {
    index: number;
    label: string;
    selected: boolean;
    isInner?: boolean;
}
export declare class ClockNumber extends React.Component<ClockNumberProps> {
    static propTypes: any;
    static defaultProps: {
        isInner: boolean;
    };
    getTransformStyle: (index: number) => {
        transform: string;
    };
    render(): JSX.Element;
}
export declare const styles: (theme: Theme) => Record<"selected" | "clockNumber", import("@material-ui/core/styles/withStyles").CSSProperties>;
declare const _default: React.ComponentType<(Pick<ClockNumberProps, "label" | "index" | "selected" | "isInner"> & import("@material-ui/core").StyledComponentProps<"selected" | "clockNumber">) | (Pick<React.PropsWithChildren<ClockNumberProps>, "label" | "children" | "index" | "selected" | "isInner"> & import("@material-ui/core").StyledComponentProps<"selected" | "clockNumber">)>;
export default _default;
