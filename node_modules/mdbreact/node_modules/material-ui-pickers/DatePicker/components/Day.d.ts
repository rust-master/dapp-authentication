import { Theme } from '@material-ui/core';
import { WithStyles } from '@material-ui/core/styles/withStyles';
import * as React from 'react';
export interface DayProps extends WithStyles<typeof styles> {
    children: React.ReactNode;
    current?: boolean;
    disabled?: boolean;
    hidden?: boolean;
    selected?: boolean;
}
export declare const styles: (theme: Theme) => Record<"day" | "hidden" | "current" | "isSelected" | "isDisabled", import("@material-ui/core/styles/withStyles").CSSProperties>;
declare const _default: React.ComponentType<(Pick<DayProps, "children" | "hidden" | "disabled" | "current" | "selected"> & import("@material-ui/core").StyledComponentProps<"day" | "hidden" | "current" | "isSelected" | "isDisabled">) | (Pick<React.PropsWithChildren<DayProps>, "children" | "hidden" | "disabled" | "current" | "selected"> & import("@material-ui/core").StyledComponentProps<"day" | "hidden" | "current" | "isSelected" | "isDisabled">)>;
export default _default;
