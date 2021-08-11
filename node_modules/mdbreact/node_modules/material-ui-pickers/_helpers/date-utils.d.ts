import { IUtils } from '@date-io/core/IUtils';
import { DatePickerViewType } from '../constants/DatePickerView';
import { DateType } from '../constants/prop-types';
import { MaterialUiPickersDate } from '../typings/date';
interface FindClosestDateParams {
    date: MaterialUiPickersDate;
    utils: IUtils<MaterialUiPickersDate>;
    minDate: DateType;
    maxDate: DateType;
    disableFuture: boolean;
    disablePast: boolean;
    shouldDisableDate: (date: MaterialUiPickersDate) => boolean;
}
export declare const findClosestEnabledDate: ({ date, utils, minDate, maxDate, disableFuture, disablePast, shouldDisableDate, }: FindClosestDateParams) => any;
export declare const isYearOnlyView: (views: DatePickerViewType[]) => boolean;
export declare const isYearAndMonthViews: (views: DatePickerViewType[]) => boolean;
export declare const getFormatByViews: (views: DatePickerViewType[], utils: IUtils<any>) => string;
export {};
