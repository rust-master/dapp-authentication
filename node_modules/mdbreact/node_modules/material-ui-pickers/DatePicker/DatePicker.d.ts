import * as React from 'react';
import { WithStyles } from '@material-ui/core/styles/withStyles';
import { WithUtilsProps } from '../_shared/WithUtils';
import { DatePickerViewType } from '../constants/DatePickerView';
import { DateType } from '../constants/prop-types';
import { MaterialUiPickersDate } from '../typings/date';
import { RenderDay } from './components/Calendar';
export interface BaseDatePickerProps {
    /** Min selectable date */
    minDate?: DateType;
    /** Max selectable date */
    maxDate?: DateType;
    /** Disable past dates */
    disablePast?: boolean;
    /** Disable future dates */
    disableFuture?: boolean;
    /** To animate scrolling to current year (with scrollIntoView) */
    animateYearScrolling?: boolean;
    /** Array of views to show. Order year -> month -> day */
    views?: Array<'year' | 'month' | 'day'>;
    /** Initial view to show when date picker is open */
    openTo?: 'year' | 'month' | 'day';
    /** @deprecated use openTo instead */
    openToYearSelection?: boolean;
    /** Left arrow icon */
    leftArrowIcon?: React.ReactNode;
    /** Right arrow icon */
    rightArrowIcon?: React.ReactNode;
    /** Custom renderer for day */
    renderDay?: RenderDay;
    /** Enables keyboard listener for moving between days in calendar */
    allowKeyboardControl?: boolean;
    /** Disable specific date */
    shouldDisableDate?: (day: MaterialUiPickersDate) => boolean;
    /** Callback firing on year change */
    onYearChange?: (date: MaterialUiPickersDate) => void;
    /** Callback firing on month change */
    onMonthChange?: (date: MaterialUiPickersDate) => void;
    initialFocusedDate?: DateType;
}
export interface DatePickerProps extends BaseDatePickerProps, WithStyles<typeof styles>, WithUtilsProps {
    date: MaterialUiPickersDate;
    onChange: (date: MaterialUiPickersDate, isFinished?: boolean) => void;
}
interface DatePickerState {
    openView: DatePickerViewType;
}
export declare class DatePicker extends React.PureComponent<DatePickerProps> {
    static propTypes: any;
    static defaultProps: {
        openToYearSelection: boolean;
        minDate: Date;
        maxDate: Date;
        views: DatePickerViewType[];
    };
    state: DatePickerState;
    readonly date: any;
    readonly minDate: any;
    readonly maxDate: any;
    readonly isYearOnly: boolean;
    readonly isYearAndMonth: boolean;
    handleYearSelect: (date: any) => void;
    handleMonthSelect: (date: any) => void;
    openYearSelection: () => void;
    openCalendar: () => void;
    openMonthSelection: () => void;
    render(): JSX.Element;
}
export declare const styles: () => Record<"toolbarCenter", import("@material-ui/core/styles/withStyles").CSSProperties>;
declare const _default: React.ComponentType<Pick<React.PropsWithChildren<Pick<DatePickerProps, "initialFocusedDate" | "onChange" | "date" | "classes" | "maxDate" | "minDate" | "disablePast" | "disableFuture" | "shouldDisableDate" | "onMonthChange" | "leftArrowIcon" | "rightArrowIcon" | "renderDay" | "allowKeyboardControl" | "animateYearScrolling" | "onYearChange" | "views" | "openTo" | "openToYearSelection">>, "children" | "initialFocusedDate" | "onChange" | "date" | "maxDate" | "minDate" | "disablePast" | "disableFuture" | "shouldDisableDate" | "onMonthChange" | "leftArrowIcon" | "rightArrowIcon" | "renderDay" | "allowKeyboardControl" | "animateYearScrolling" | "onYearChange" | "views" | "openTo" | "openToYearSelection"> & import("@material-ui/core/styles/withStyles").StyledComponentProps<"toolbarCenter">>;
export default _default;
