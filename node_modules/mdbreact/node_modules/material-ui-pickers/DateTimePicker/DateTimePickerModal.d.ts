import * as React from 'react';
import { BasePickerProps } from '../_shared/BasePicker';
import { ExtendWrapper } from '../wrappers/ExtendWrapper';
import { ModalWrapperProps } from '../wrappers/ModalWrapper';
import { BaseDateTimePickerProps } from './DateTimePicker';
export interface DateTimePickerModalProps extends BasePickerProps, BaseDateTimePickerProps, ExtendWrapper<ModalWrapperProps> {
}
export declare const DateTimePickerModal: React.SFC<DateTimePickerModalProps>;
declare const _default: React.ForwardRefExoticComponent<DateTimePickerModalProps & React.RefAttributes<{}>>;
export default _default;
