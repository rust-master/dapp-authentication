import * as React from 'react';
import { Omit } from '@material-ui/core';
import { BasePickerProps } from '../_shared/BasePicker';
import { ExtendWrapper } from '../wrappers/ExtendWrapper';
import { OuterInlineWrapperProps } from '../wrappers/InlineWrapper';
import { BaseDatePickerProps } from './DatePicker';
export interface DatePickerInlineProps extends Omit<BasePickerProps, 'ampm'>, BaseDatePickerProps, ExtendWrapper<OuterInlineWrapperProps> {
    onlyCalendar?: boolean;
}
export declare const DatePickerInline: React.SFC<DatePickerInlineProps>;
declare const _default: React.ForwardRefExoticComponent<DatePickerInlineProps & React.RefAttributes<{}>>;
export default _default;
