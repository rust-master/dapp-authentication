import * as React from 'react';
import { BasePickerProps } from '../_shared/BasePicker';
import { ExtendWrapper } from '../wrappers/ExtendWrapper';
import { ModalWrapperProps } from '../wrappers/ModalWrapper';
import { BaseTimePickerProps } from './TimePicker';
export interface TimePickerModalProps extends BasePickerProps, BaseTimePickerProps, ExtendWrapper<ModalWrapperProps> {
}
export declare const TimePickerModal: React.SFC<TimePickerModalProps>;
declare const _default: React.ForwardRefExoticComponent<TimePickerModalProps & React.RefAttributes<{}>>;
export default _default;
