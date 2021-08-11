import { Theme } from '@material-ui/core';
import { WithStyles } from '@material-ui/core/styles/withStyles';
import * as React from 'react';
export interface MonthProps extends WithStyles<typeof styles> {
    children: React.ReactNode;
    disabled?: boolean;
    onSelect: (value: any) => void;
    selected?: boolean;
    value: any;
}
export declare class Month extends React.PureComponent<MonthProps> {
    static defaultProps: {
        selected: boolean;
        disabled: boolean;
    };
    handleClick: () => void;
    render(): JSX.Element;
}
export declare const styles: (theme: Theme) => Record<"root" | "disabled" | "selected", import("@material-ui/core/styles/withStyles").CSSProperties>;
declare const _default: React.ComponentType<Pick<Pick<MonthProps, "children" | "value" | "classes" | "onSelect"> & Partial<Pick<MonthProps, "disabled" | "selected">> & Partial<Pick<{
    selected: boolean;
    disabled: boolean;
}, never>>, "children" | "value" | "onSelect" | "disabled" | "selected"> & import("@material-ui/core").StyledComponentProps<"root" | "disabled" | "selected">>;
export default _default;
