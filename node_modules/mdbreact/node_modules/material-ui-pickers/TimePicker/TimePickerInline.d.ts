import * as React from 'react';
import { BasePickerProps } from '../_shared/BasePicker';
import { ExtendWrapper } from '../wrappers/ExtendWrapper';
import { OuterInlineWrapperProps } from '../wrappers/InlineWrapper';
import { BaseTimePickerProps } from './TimePicker';
export interface TimePickerInlineProps extends BasePickerProps, BaseTimePickerProps, ExtendWrapper<OuterInlineWrapperProps> {
}
export declare const TimePickerInline: React.SFC<TimePickerInlineProps>;
declare const _default: React.ForwardRefExoticComponent<TimePickerInlineProps & React.RefAttributes<{}>>;
export default _default;
