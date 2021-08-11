"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = __importStar(require("prop-types"));
var React = __importStar(require("react"));
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var InputAdornment_1 = __importDefault(require("@material-ui/core/InputAdornment"));
var TextField_1 = __importDefault(require("@material-ui/core/TextField"));
var text_field_helper_1 = require("../_helpers/text-field-helper");
var prop_types_1 = require("../constants/prop-types");
var KeyboardIcon_1 = require("./icons/KeyboardIcon");
var MaskedInput_1 = __importDefault(require("./MaskedInput"));
var WithUtils_1 = require("./WithUtils");
var DateTextField = /** @class */ (function (_super) {
    __extends(DateTextField, _super);
    function DateTextField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = DateTextField.getStateFromProps(_this.props);
        _this.commitUpdates = function (value) {
            var _a = _this.props, onChange = _a.onChange, clearable = _a.clearable, onClear = _a.onClear, utils = _a.utils, format = _a.format, onError = _a.onError;
            if (value === '') {
                if (_this.props.value === null) {
                    _this.setState(DateTextField.getStateFromProps(_this.props));
                }
                else if (clearable && onClear) {
                    onClear();
                }
                return;
            }
            var oldValue = utils.date(_this.state.value);
            var newValue = utils.parse(value, format);
            var error = text_field_helper_1.getError(newValue, _this.props);
            _this.setState({
                error: error,
                displayValue: value,
                value: error ? newValue : oldValue,
            }, function () {
                if (!error && !utils.isEqual(newValue, oldValue)) {
                    onChange(newValue);
                }
                if (error && onError) {
                    onError(newValue, error);
                }
            });
        };
        _this.handleBlur = function (e) {
            if (_this.props.keyboard) {
                e.preventDefault();
                e.stopPropagation();
                _this.commitUpdates(e.target.value);
                if (_this.props.onBlur) {
                    _this.props.onBlur(e);
                }
            }
        };
        _this.handleChange = function (e) {
            var _a = _this.props, utils = _a.utils, format = _a.format, onInputChange = _a.onInputChange;
            var parsedValue = utils.parse(e.target.value, format);
            if (onInputChange) {
                onInputChange(e);
            }
            _this.setState({
                displayValue: e.target.value,
                error: text_field_helper_1.getError(parsedValue, _this.props),
            });
        };
        _this.handleFocus = function (e) {
            e.stopPropagation();
            e.preventDefault();
            if (!_this.props.keyboard) {
                _this.openPicker(e);
            }
        };
        _this.handleKeyPress = function (e) {
            if (e.key === 'Enter') {
                if (!_this.props.disableOpenOnEnter) {
                    _this.openPicker(e);
                }
                else {
                    // @ts-ignore TODO check me
                    _this.commitUpdates(e.target.value);
                }
            }
        };
        _this.openPicker = function (e) {
            var _a = _this.props, disabled = _a.disabled, onClick = _a.onClick;
            if (!disabled) {
                onClick(e);
            }
        };
        return _this;
    }
    DateTextField.prototype.componentDidUpdate = function (prevProps) {
        var utils = this.props.utils;
        if (!utils.isEqual(utils.date(this.props.value), utils.date(prevProps.value)) ||
            prevProps.format !== this.props.format ||
            prevProps.maxDate !== this.props.maxDate ||
            prevProps.minDate !== this.props.minDate ||
            prevProps.emptyLabel !== this.props.emptyLabel ||
            prevProps.labelFunc !== this.props.labelFunc ||
            prevProps.utils !== this.props.utils) {
            this.setState(DateTextField.getStateFromProps(this.props));
        }
    };
    DateTextField.prototype.render = function () {
        var _a = this.props, adornmentPosition = _a.adornmentPosition, clearable = _a.clearable, disabled = _a.disabled, disableFuture = _a.disableFuture, disableOpenOnEnter = _a.disableOpenOnEnter, disablePast = _a.disablePast, emptyLabel = _a.emptyLabel, format = _a.format, InputAdornmentProps = _a.InputAdornmentProps, InputProps = _a.InputProps, invalidDateMessage = _a.invalidDateMessage, invalidLabel = _a.invalidLabel, keyboard = _a.keyboard, KeyboardButtonProps = _a.KeyboardButtonProps, keyboardIcon = _a.keyboardIcon, labelFunc = _a.labelFunc, mask = _a.mask, maxDate = _a.maxDate, maxDateMessage = _a.maxDateMessage, minDate = _a.minDate, minDateMessage = _a.minDateMessage, onBlur = _a.onBlur, onClear = _a.onClear, onClick = _a.onClick, pipe = _a.pipe, keepCharPositions = _a.keepCharPositions, TextFieldComponent = _a.TextFieldComponent, utils = _a.utils, value = _a.value, onInputChange = _a.onInputChange, other = __rest(_a, ["adornmentPosition", "clearable", "disabled", "disableFuture", "disableOpenOnEnter", "disablePast", "emptyLabel", "format", "InputAdornmentProps", "InputProps", "invalidDateMessage", "invalidLabel", "keyboard", "KeyboardButtonProps", "keyboardIcon", "labelFunc", "mask", "maxDate", "maxDateMessage", "minDate", "minDateMessage", "onBlur", "onClear", "onClick", "pipe", "keepCharPositions", "TextFieldComponent", "utils", "value", "onInputChange"]);
        var _b = this.state, displayValue = _b.displayValue, error = _b.error;
        var localInputProps = {
            inputComponent: MaskedInput_1.default,
            inputProps: {
                mask: !keyboard ? null : mask,
                pipe: !keyboard ? null : pipe,
                keepCharPositions: !keyboard ? undefined : keepCharPositions,
                readOnly: !keyboard,
            },
        };
        if (keyboard) {
            localInputProps[adornmentPosition + "Adornment"] = (React.createElement(InputAdornment_1.default, __assign({ position: adornmentPosition }, InputAdornmentProps),
                React.createElement(IconButton_1.default, __assign({ disabled: disabled, onClick: this.openPicker }, KeyboardButtonProps), keyboardIcon)));
        }
        var Component = TextFieldComponent;
        var inputProps = __assign({}, localInputProps, InputProps);
        return (React.createElement(Component, __assign({ onClick: this.handleFocus, error: !!error, helperText: error, onKeyPress: this.handleKeyPress, onBlur: this.handleBlur, disabled: disabled, value: displayValue }, other, { onError: undefined, onChange: this.handleChange, InputProps: inputProps })));
    };
    DateTextField.propTypes = {
        value: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.string,
            PropTypes.number,
            PropTypes.instanceOf(Date),
        ]),
        minDate: prop_types_1.DomainPropTypes.date,
        maxDate: prop_types_1.DomainPropTypes.date,
        disablePast: PropTypes.bool,
        disableFuture: PropTypes.bool,
        format: PropTypes.string,
        onBlur: PropTypes.func,
        onChange: PropTypes.func.isRequired,
        onClear: PropTypes.func,
        onClick: PropTypes.func.isRequired,
        clearable: PropTypes.bool,
        utils: PropTypes.object.isRequired,
        InputProps: PropTypes.shape({}),
        mask: PropTypes.any,
        minDateMessage: PropTypes.node,
        maxDateMessage: PropTypes.node,
        invalidLabel: PropTypes.string,
        emptyLabel: PropTypes.string,
        labelFunc: PropTypes.func,
        keyboard: PropTypes.bool,
        keyboardIcon: PropTypes.node,
        disableOpenOnEnter: PropTypes.bool,
        invalidDateMessage: PropTypes.node,
        TextFieldComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.node]),
        InputAdornmentProps: PropTypes.object,
        KeyboardButtonProps: PropTypes.object,
        adornmentPosition: PropTypes.oneOf(['start', 'end']),
        onError: PropTypes.func,
        onInputChange: PropTypes.func,
        pipe: PropTypes.func,
        keepCharPositions: PropTypes.bool,
    };
    DateTextField.defaultProps = {
        disabled: false,
        invalidLabel: 'Unknown',
        emptyLabel: '',
        keyboard: false,
        keyboardIcon: React.createElement(KeyboardIcon_1.KeyboardIcon, null),
        disableOpenOnEnter: false,
        invalidDateMessage: 'Invalid Date Format',
        clearable: false,
        disablePast: false,
        disableFuture: false,
        minDate: new Date('1900-01-01'),
        maxDate: new Date('2100-01-01'),
        minDateMessage: 'Date should not be before minimal date',
        maxDateMessage: 'Date should not be after maximal date',
        TextFieldComponent: TextField_1.default,
        InputAdornmentProps: {},
        KeyboardButtonProps: {},
        adornmentPosition: 'end',
        keepCharPositions: false,
    };
    DateTextField.getStateFromProps = function (props) { return ({
        value: props.value,
        displayValue: text_field_helper_1.getDisplayDate(props),
        error: text_field_helper_1.getError(props.utils.date(props.value), props),
    }); };
    return DateTextField;
}(React.PureComponent));
exports.DateTextField = DateTextField;
exports.default = WithUtils_1.withUtils()(DateTextField);
