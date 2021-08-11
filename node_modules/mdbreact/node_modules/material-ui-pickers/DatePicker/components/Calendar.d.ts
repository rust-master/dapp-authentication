import * as React from 'react';
import { Theme } from '@material-ui/core';
import { IconButtonProps } from '@material-ui/core/IconButton';
import { WithStyles } from '@material-ui/core/styles/withStyles';
import { WithUtilsProps } from '../../_shared/WithUtils';
import { DateType } from '../../constants/prop-types';
import { MaterialUiPickersDate } from '../../typings/date';
import { SlideDirection } from './SlideTransition';
export declare type RenderDay = (day: MaterialUiPickersDate, selectedDate: MaterialUiPickersDate, dayInCurrentMonth: boolean, dayComponent: React.ReactElement<IconButtonProps>) => JSX.Element;
export interface CalendarProps extends WithUtilsProps, WithStyles<typeof styles, true> {
    date: MaterialUiPickersDate;
    minDate: DateType;
    maxDate: DateType;
    onChange: (date: MaterialUiPickersDate, isFinish?: boolean) => void;
    disablePast?: boolean;
    disableFuture?: boolean;
    leftArrowIcon?: React.ReactNode;
    rightArrowIcon?: React.ReactNode;
    renderDay?: RenderDay;
    allowKeyboardControl?: boolean;
    onMonthChange?: (date: MaterialUiPickersDate) => void;
    shouldDisableDate?: (day: MaterialUiPickersDate) => boolean;
}
export interface CalendarState {
    slideDirection: SlideDirection;
    currentMonth: MaterialUiPickersDate;
    lastDate?: MaterialUiPickersDate;
}
export declare class Calendar extends React.Component<CalendarProps, CalendarState> {
    static propTypes: any;
    static defaultProps: {
        minDate: Date;
        maxDate: Date;
        disablePast: boolean;
        disableFuture: boolean;
        allowKeyboardControl: boolean;
    };
    static getDerivedStateFromProps(nextProps: CalendarProps, state: CalendarState): {
        lastDate: any;
        currentMonth: any;
        slideDirection: SlideDirection;
    } | null;
    state: CalendarState;
    componentDidMount(): void;
    onDateSelect: (day: any, isFinish?: boolean) => void;
    handleChangeMonth: (newMonth: any, slideDirection: SlideDirection) => void;
    validateMinMaxDate: (day: any) => boolean;
    shouldDisablePrevMonth: () => boolean;
    shouldDisableNextMonth: () => boolean;
    shouldDisableDate: (day: any) => boolean;
    moveToDay: (day: any) => void;
    handleKeyDown: (event: KeyboardEvent) => void;
    renderWeeks: () => JSX.Element[];
    renderDays: (week: any[]) => JSX.Element[];
    render(): JSX.Element;
}
export declare const styles: (theme: Theme) => {
    transitionContainer: {
        minHeight: number;
        marginTop: number;
    };
    week: {
        display: string;
        justifyContent: string;
    };
};
declare const _default: React.ComponentType<Pick<React.PropsWithChildren<Pick<CalendarProps, "onChange" | "date" | "classes" | "theme" | "maxDate" | "minDate" | "disablePast" | "disableFuture" | "shouldDisableDate" | "onMonthChange" | "leftArrowIcon" | "rightArrowIcon" | "renderDay" | "allowKeyboardControl">>, "children" | "onChange" | "date" | "maxDate" | "minDate" | "disablePast" | "disableFuture" | "shouldDisableDate" | "onMonthChange" | "leftArrowIcon" | "rightArrowIcon" | "renderDay" | "allowKeyboardControl"> & import("@material-ui/core").StyledComponentProps<"transitionContainer" | "week">>;
export default _default;
