import * as React from 'react';
import { MeridiemMode } from './components/DateTimePickerHeader';
import { Omit } from '@material-ui/core';
import { WithUtilsProps } from '../_shared/WithUtils';
import DateTimePickerView, { DateTimePickerViewType } from '../constants/DateTimePickerView';
import { BaseDatePickerProps } from '../DatePicker/DatePicker';
import { MaterialUiPickersDate } from '../typings/date';
export interface BaseDateTimePickerProps extends Omit<BaseDatePickerProps, 'openTo' | 'openToYearSelection' | 'views'> {
    /** Auto move between date, hours and minutes */
    autoSubmit?: boolean;
    /** Show or hide date/time tabs (hidden automatically on small screens) */
    showTabs?: boolean;
    /** Control 12h or 24h view mode for clock */
    ampm?: boolean;
    /** Step over minutes */
    minutesStep?: number;
    /** Initial view to show when datetime picker is open */
    openTo?: 'year' | 'date' | 'hours' | 'minutes';
    /** Date tab icon */
    dateRangeIcon?: React.ReactNode;
    /** Time tab icon */
    timeIcon?: React.ReactNode;
    /** Container component for date time picker views */
    ViewContainerComponent?: string | React.ComponentType<any>;
}
export interface DateTimePickerProps extends BaseDateTimePickerProps, WithUtilsProps {
    date: MaterialUiPickersDate;
    onChange: (date: MaterialUiPickersDate, isFinished: boolean, view?: DateTimePickerView) => void;
}
interface DateTimePickerState {
    openView: DateTimePickerViewType;
    meridiemMode: MeridiemMode;
}
export declare class DateTimePicker extends React.Component<DateTimePickerProps, DateTimePickerState> {
    static propTypes: any;
    static defaultProps: {
        autoSubmit: boolean;
        showTabs: boolean;
        ampm: boolean;
        minutesStep: number;
        openTo: DateTimePickerView;
        ViewContainerComponent: string;
    };
    state: DateTimePickerState;
    onChange: (time: any, isFinish: boolean | undefined, nextView: DateTimePickerView) => void;
    setMeridiemMode: (mode: MeridiemMode) => () => void;
    handleViewChange: (view: DateTimePickerView) => void;
    handleChange: (time: any, isFinish?: boolean) => void;
    handleYearChange: (date: any) => void;
    handleDayChange: (date: any, isFinish?: boolean | undefined) => void;
    handleHourChange: (time: any, isFinish?: boolean | undefined) => void;
    render(): JSX.Element;
}
declare const _default: React.FunctionComponent<Pick<DateTimePickerProps, "initialFocusedDate" | "onChange" | "ampm" | "date" | "maxDate" | "minDate" | "disablePast" | "disableFuture" | "showTabs" | "shouldDisableDate" | "onMonthChange" | "leftArrowIcon" | "rightArrowIcon" | "renderDay" | "allowKeyboardControl" | "animateYearScrolling" | "onYearChange" | "openTo" | "minutesStep" | "dateRangeIcon" | "timeIcon" | "autoSubmit" | "ViewContainerComponent">>;
export default _default;
