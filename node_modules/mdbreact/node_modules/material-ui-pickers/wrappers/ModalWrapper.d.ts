import { Omit } from '@material-ui/core';
import { DialogProps as DialogPropsType } from '@material-ui/core/Dialog';
import * as React from 'react';
import { DateTextFieldProps } from '../_shared/DateTextField';
export interface ModalWrapperProps extends Omit<DateTextFieldProps, 'utils' | 'onClick'> {
    onAccept?: () => void;
    onDismiss?: () => void;
    onClear?: () => void;
    onSetToday?: () => void;
    /** On open callback */
    onOpen?: () => void;
    /** On close callback */
    onClose?: () => void;
    /** "OK" label message */
    okLabel?: React.ReactNode;
    /** "Cancel" label message */
    cancelLabel?: React.ReactNode;
    /** "Clear" label message */
    clearLabel?: React.ReactNode;
    /** "Today" label message */
    todayLabel?: React.ReactNode;
    showTabs?: boolean;
    /**
     * If true today button will be displayed
     * <b>Note*</b> that clear button has higher priority
     */
    showTodayButton?: boolean;
    container?: React.ReactNode;
    DialogProps?: Partial<Omit<DialogPropsType, 'classes'>>;
    isAccepted?: boolean;
    wider?: boolean;
}
export default class ModalWrapper extends React.PureComponent<ModalWrapperProps> {
    static propTypes: any;
    static defaultProps: {
        value: Date;
        okLabel: string;
        cancelLabel: string;
        clearLabel: string;
        todayLabel: string;
        clearable: boolean;
        showTodayButton: boolean;
        isAccepted: boolean;
    };
    static getDerivedStateFromProps(nextProps: ModalWrapperProps): {
        open: boolean;
    } | null;
    state: {
        open: boolean;
    };
    handleKeyDown: (event: KeyboardEvent) => void;
    handleSetTodayDate: () => void;
    open: () => void;
    close: () => void;
    handleAccept: () => void;
    handleDismiss: () => void;
    handleClear: () => void;
    render(): JSX.Element;
}
