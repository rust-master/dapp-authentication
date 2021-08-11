import * as React from 'react';
import { WithUtilsProps } from '../../_shared/WithUtils';
import { ClockTypeType } from '../../constants/ClockType';
import { MaterialUiPickersDate } from '../../typings/date';
export interface TimePickerViewProps extends WithUtilsProps {
    date: MaterialUiPickersDate;
    type: ClockTypeType;
    ampm?: boolean;
    minutesStep?: number;
    onHourChange: (date: MaterialUiPickersDate, isFinish?: boolean) => void;
    onMinutesChange: (date: MaterialUiPickersDate, isFinish?: boolean) => void;
    onSecondsChange: (date: MaterialUiPickersDate, isFinish?: boolean) => void;
}
export declare class TimePickerView extends React.PureComponent<TimePickerViewProps> {
    static propTypes: any;
    static defaultProps: {
        ampm: boolean;
        minutesStep: number;
    };
    getViewProps: () => {
        value: number;
        children: JSX.Element[];
        onChange: (hours: number, isFinish?: boolean | undefined) => void;
    };
    handleHourChange: (hours: number, isFinish?: boolean | undefined) => void;
    handleMinutesChange: (minutes: number, isFinish?: boolean | undefined) => void;
    handleSecondsChange: (seconds: number, isFinish?: boolean | undefined) => void;
    render(): JSX.Element;
}
declare const _default: React.FunctionComponent<Pick<TimePickerViewProps, "ampm" | "date" | "type" | "minutesStep" | "onHourChange" | "onMinutesChange" | "onSecondsChange">>;
export default _default;
