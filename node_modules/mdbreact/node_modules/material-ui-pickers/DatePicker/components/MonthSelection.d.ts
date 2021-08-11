import * as React from 'react';
import { WithStyles } from '@material-ui/core/styles';
import { WithUtilsProps } from '../../_shared/WithUtils';
import { DateType } from '../../constants/prop-types';
import { MaterialUiPickersDate } from '../../typings/date';
export interface MonthSelectionProps extends WithUtilsProps, WithStyles<typeof styles> {
    date: MaterialUiPickersDate;
    minDate?: DateType;
    maxDate?: DateType;
    onChange: (date: MaterialUiPickersDate) => void;
    disablePast?: boolean | null | undefined;
    disableFuture?: boolean | null | undefined;
}
export declare class MonthSelection extends React.PureComponent<MonthSelectionProps> {
    static defaultProps: {
        minDate: Date;
        maxDate: Date;
    };
    onMonthSelect: (month: number) => void;
    shouldDisableMonth: (month: Date) => boolean;
    render(): JSX.Element;
}
export declare const styles: Record<"container", import("@material-ui/core/styles/withStyles").CSSProperties>;
declare const _default: React.ComponentType<Pick<React.PropsWithChildren<Pick<MonthSelectionProps, "onChange" | "date" | "classes" | "maxDate" | "minDate" | "disablePast" | "disableFuture">>, "children" | "onChange" | "date" | "maxDate" | "minDate" | "disablePast" | "disableFuture"> & import("@material-ui/core/styles").StyledComponentProps<"container">>;
export default _default;
