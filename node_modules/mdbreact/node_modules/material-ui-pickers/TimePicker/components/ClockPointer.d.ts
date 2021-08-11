import { Theme } from '@material-ui/core';
import { WithStyles } from '@material-ui/core/styles/withStyles';
import * as React from 'react';
import { ClockTypeType } from '../../constants/ClockType';
export interface ClockPointerProps extends WithStyles<typeof styles> {
    value: number;
    hasSelected: boolean;
    isInner: boolean;
    type: ClockTypeType;
}
export declare class ClockPointer extends React.Component<ClockPointerProps> {
    static propTypes: any;
    static getDerivedStateFromProps: (nextProps: ClockPointerProps, state: {
        toAnimateTransform: boolean;
        previousType: undefined;
    }) => {
        toAnimateTransform: boolean;
        previousType: ClockTypeType;
    };
    state: {
        toAnimateTransform: boolean;
        previousType: undefined;
    };
    getAngleStyle: () => {
        height: string;
        transform: string;
    };
    render(): JSX.Element;
}
export declare const styles: (theme: Theme) => Record<"animateTransform" | "pointer" | "thumb" | "noPoint", import("@material-ui/core/styles/withStyles").CSSProperties>;
declare const _default: React.ComponentType<(Pick<ClockPointerProps, "value" | "type" | "hasSelected" | "isInner"> & import("@material-ui/core").StyledComponentProps<"animateTransform" | "pointer" | "thumb" | "noPoint">) | (Pick<React.PropsWithChildren<ClockPointerProps>, "children" | "value" | "type" | "hasSelected" | "isInner"> & import("@material-ui/core").StyledComponentProps<"animateTransform" | "pointer" | "thumb" | "noPoint">)>;
export default _default;
