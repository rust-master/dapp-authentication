import { Theme } from '@material-ui/core';
import { WithStyles } from '@material-ui/core/styles/withStyles';
import * as React from 'react';
export declare type SlideDirection = 'right' | 'left';
interface SlideTransitionProps extends WithStyles<typeof styles> {
    transKey: React.Key;
    className?: string;
    slideDirection: SlideDirection;
    children: React.ReactChild;
}
export declare const styles: (theme: Theme) => Record<"transitionContainer" | "slideEnter-left" | "slideEnter-right" | "slideEnterActive" | "slideExit" | "slideExitActiveLeft-left" | "slideExitActiveLeft-right", import("@material-ui/core/styles/withStyles").CSSProperties>;
declare const _default: React.ComponentType<Pick<React.PropsWithChildren<SlideTransitionProps>, "children" | "className" | "transKey" | "slideDirection"> & import("@material-ui/core").StyledComponentProps<"transitionContainer" | "slideEnter-left" | "slideEnter-right" | "slideEnterActive" | "slideExit" | "slideExitActiveLeft-left" | "slideExitActiveLeft-right">>;
export default _default;
