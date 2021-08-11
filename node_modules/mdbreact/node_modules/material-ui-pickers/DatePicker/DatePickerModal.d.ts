import * as React from 'react';
import { BasePickerProps } from '../_shared/BasePicker';
import { ExtendWrapper } from '../wrappers/ExtendWrapper';
import { ModalWrapperProps } from '../wrappers/ModalWrapper';
import { BaseDatePickerProps } from './DatePicker';
export interface DatePickerModalProps extends BasePickerProps, BaseDatePickerProps, ExtendWrapper<ModalWrapperProps> {
}
export declare const DatePickerModal: React.SFC<DatePickerModalProps>;
declare const _default: React.ForwardRefExoticComponent<DatePickerModalProps & React.RefAttributes<{}>>;
export default _default;
