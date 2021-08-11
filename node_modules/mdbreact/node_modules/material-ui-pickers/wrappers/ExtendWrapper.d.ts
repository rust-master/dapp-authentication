import { Omit } from '@material-ui/core';
import { InlineWrapperProps } from './InlineWrapper';
import { ModalWrapperProps } from './ModalWrapper';
export declare type ExtendWrapper<T extends InlineWrapperProps | ModalWrapperProps> = Omit<T, 'onChange' | 'value' | 'format'>;
