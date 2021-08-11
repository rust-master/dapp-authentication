import * as React from 'react';
import { Theme } from '@material-ui/core';
import { WithStyles } from '@material-ui/core/styles/withStyles';
import { WithUtilsProps } from '../../_shared/WithUtils';
import { MaterialUiPickersDate } from '../../typings/date';
import { SlideDirection } from './SlideTransition';
export interface CalendarHeaderProps extends WithUtilsProps, WithStyles<typeof styles, true> {
    currentMonth: object;
    onMonthChange: (date: MaterialUiPickersDate, direction: SlideDirection) => void;
    leftArrowIcon?: React.ReactNode;
    rightArrowIcon?: React.ReactNode;
    disablePrevMonth?: boolean;
    disableNextMonth?: boolean;
    slideDirection: SlideDirection;
}
export declare const CalendarHeader: React.SFC<CalendarHeaderProps>;
export declare const styles: (theme: Theme) => Record<"transitionContainer" | "switchHeader" | "iconButton" | "daysHeader" | "dayLabel", import("@material-ui/core/styles/withStyles").CSSProperties>;
declare const _default: React.FunctionComponent<Pick<Pick<React.PropsWithChildren<CalendarHeaderProps>, "utils" | "children" | "slideDirection" | "currentMonth" | "onMonthChange" | "leftArrowIcon" | "rightArrowIcon" | "disablePrevMonth" | "disableNextMonth"> & import("@material-ui/core").StyledComponentProps<"transitionContainer" | "switchHeader" | "iconButton" | "daysHeader" | "dayLabel">, "children" | "classes" | "innerRef" | "slideDirection" | "currentMonth" | "onMonthChange" | "leftArrowIcon" | "rightArrowIcon" | "disablePrevMonth" | "disableNextMonth">>;
export default _default;
