import * as React from 'react';
import { IconButtonProps as MuiIconButtonProps } from '@material-ui/core/IconButton';
import { InputAdornmentProps as MuiInputAdornmentProps } from '@material-ui/core/InputAdornment';
import { BaseTextFieldProps, TextFieldProps } from '@material-ui/core/TextField';
import { MaskedInputProps } from 'react-text-mask';
import { DateType } from '../constants/prop-types';
import { MaterialUiPickersDate } from '../typings/date';
import { ExtendMui } from '../typings/extendMui';
import { WithUtilsProps } from './WithUtils';
export interface DateTextFieldProps extends WithUtilsProps, ExtendMui<BaseTextFieldProps, 'onError' | 'onChange' | 'value'> {
    variant?: TextFieldProps['variant'];
    InputProps?: TextFieldProps['InputProps'];
    inputProps?: TextFieldProps['inputProps'];
    value: DateType;
    minDate?: DateType;
    /** Error message, shown if date is less then minimal date */
    minDateMessage?: React.ReactNode;
    disablePast?: boolean;
    disableFuture?: boolean;
    maxDate?: DateType;
    /** Error message, shown if date is more then maximal date */
    maxDateMessage?: React.ReactNode;
    /** Input mask, used in keyboard mode read more <a href="https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#readme">here</a> */
    mask?: MaskedInputProps['mask'];
    pipe?: any;
    keepCharPositions?: boolean;
    onChange: (date: MaterialUiPickersDate) => void;
    onClear?: () => void;
    /** On/off manual keyboard input mode */
    keyboard?: boolean;
    /** Format string */
    format: string;
    /** Message displaying in text field, if date is invalid (doesn't work in keyboard mode) */
    invalidLabel?: string;
    /** Message displaying in text field, if null passed (doesn't work in keyboard mode) */
    emptyLabel?: string;
    /** Do not open picker on enter keypress */
    disableOpenOnEnter?: boolean;
    /** Dynamic label generation function */
    labelFunc?: (date: MaterialUiPickersDate, invalidLabel: string) => string;
    /** Icon displayed for open picker button in keyboard mode */
    keyboardIcon?: React.ReactNode;
    /** Message, appearing when date cannot be parsed */
    invalidDateMessage?: React.ReactNode;
    /** Clearable mode (for inline pickers works only for clearing input) */
    clearable?: boolean;
    /** Component that should replace the default Material-UI TextField */
    TextFieldComponent?: React.ComponentType<TextFieldProps> | React.ReactType<React.HTMLAttributes<any>>;
    /** Props to pass to keyboard input adornment */
    InputAdornmentProps?: Partial<MuiInputAdornmentProps>;
    /** Props to pass to keyboard adornment button */
    KeyboardButtonProps?: Partial<MuiIconButtonProps>;
    /** Specifies position of keyboard button adornment */
    adornmentPosition?: MuiInputAdornmentProps['position'];
    onClick: (e: React.SyntheticEvent) => void;
    onError?: (newValue: MaterialUiPickersDate, error: React.ReactNode) => void;
    onInputChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}
export declare class DateTextField extends React.PureComponent<DateTextFieldProps> {
    static propTypes: any;
    static defaultProps: {
        disabled: boolean;
        invalidLabel: string;
        emptyLabel: string;
        keyboard: boolean;
        keyboardIcon: JSX.Element;
        disableOpenOnEnter: boolean;
        invalidDateMessage: string;
        clearable: boolean;
        disablePast: boolean;
        disableFuture: boolean;
        minDate: Date;
        maxDate: Date;
        minDateMessage: string;
        maxDateMessage: string;
        TextFieldComponent: React.ComponentType<TextFieldProps>;
        InputAdornmentProps: {};
        KeyboardButtonProps: {};
        adornmentPosition: "end" | "start";
        keepCharPositions: boolean;
    };
    static getStateFromProps: (props: DateTextFieldProps) => {
        value: DateType;
        displayValue: string | undefined;
        error: React.ReactNode;
    };
    state: {
        value: DateType;
        displayValue: string | undefined;
        error: React.ReactNode;
    };
    componentDidUpdate(prevProps: DateTextFieldProps): void;
    commitUpdates: (value: string) => void;
    handleBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleFocus: (e: React.SyntheticEvent<Element, Event>) => void;
    handleKeyPress: (e: React.KeyboardEvent<HTMLDivElement>) => void;
    openPicker: (e: React.SyntheticEvent<Element, Event>) => void;
    render(): JSX.Element;
}
declare const _default: React.FunctionComponent<Pick<DateTextFieldProps, "label" | "select" | "style" | "title" | "mask" | "children" | "value" | "onChange" | "format" | "labelFunc" | "disableOpenOnEnter" | "onError" | "fullWidth" | "defaultValue" | "manifest" | "defaultChecked" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "className" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "id" | "lang" | "placeholder" | "slot" | "spellCheck" | "tabIndex" | "inputMode" | "is" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "color" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "component" | "disabled" | "error" | "margin" | "required" | "variant" | "innerRef" | "autoComplete" | "autoFocus" | "FormHelperTextProps" | "helperText" | "InputLabelProps" | "inputRef" | "multiline" | "name" | "rows" | "rowsMax" | "SelectProps" | "type" | "invalidLabel" | "emptyLabel" | "maxDate" | "minDate" | "disablePast" | "disableFuture" | "maxDateMessage" | "minDateMessage" | "invalidDateMessage" | "keepCharPositions" | "pipe" | "InputProps" | "inputProps" | "onClear" | "keyboard" | "keyboardIcon" | "clearable" | "TextFieldComponent" | "InputAdornmentProps" | "KeyboardButtonProps" | "adornmentPosition" | "onInputChange">>;
export default _default;
