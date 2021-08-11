import * as React from 'react';
import { BasePickerProps } from '../_shared/BasePicker';
import { ExtendWrapper } from '../wrappers/ExtendWrapper';
import { OuterInlineWrapperProps } from '../wrappers/InlineWrapper';
import { BaseDateTimePickerProps } from './DateTimePicker';
export interface DateTimePickerInlineProps extends BasePickerProps, BaseDateTimePickerProps, ExtendWrapper<OuterInlineWrapperProps> {
}
export declare const DateTimePickerInline: React.SFC<DateTimePickerInlineProps>;
declare const _default: React.ForwardRefExoticComponent<DateTimePickerInlineProps & React.RefAttributes<{}>>;
export default _default;
