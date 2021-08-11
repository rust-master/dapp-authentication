"use strict";
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
var React = __importStar(require("react"));
var date_utils_1 = require("../_helpers/date-utils");
var BasePicker_1 = __importDefault(require("../_shared/BasePicker"));
var ModalWrapper_1 = __importDefault(require("../wrappers/ModalWrapper"));
var DatePicker_1 = __importDefault(require("./DatePicker"));
exports.DatePickerModal = function (props) {
    var allowKeyboardControl = props.allowKeyboardControl, animateYearScrolling = props.animateYearScrolling, autoOk = props.autoOk, disableFuture = props.disableFuture, disablePast = props.disablePast, format = props.format, forwardedRef = props.forwardedRef, labelFunc = props.labelFunc, leftArrowIcon = props.leftArrowIcon, maxDate = props.maxDate, minDate = props.minDate, initialFocusedDate = props.initialFocusedDate, onChange = props.onChange, openToYearSelection = props.openToYearSelection, renderDay = props.renderDay, rightArrowIcon = props.rightArrowIcon, shouldDisableDate = props.shouldDisableDate, value = props.value, views = props.views, openTo = props.openTo, onMonthChange = props.onMonthChange, onYearChange = props.onYearChange, other = __rest(props, ["allowKeyboardControl", "animateYearScrolling", "autoOk", "disableFuture", "disablePast", "format", "forwardedRef", "labelFunc", "leftArrowIcon", "maxDate", "minDate", "initialFocusedDate", "onChange", "openToYearSelection", "renderDay", "rightArrowIcon", "shouldDisableDate", "value", "views", "openTo", "onMonthChange", "onYearChange"]);
    return (React.createElement(BasePicker_1.default, __assign({}, props), function (_a) {
        var date = _a.date, utils = _a.utils, handleAccept = _a.handleAccept, handleChange = _a.handleChange, handleClear = _a.handleClear, handleDismiss = _a.handleDismiss, handleSetTodayDate = _a.handleSetTodayDate, handleTextFieldChange = _a.handleTextFieldChange, isAccepted = _a.isAccepted;
        return (React.createElement(ModalWrapper_1.default, __assign({ disableFuture: disableFuture, disablePast: disablePast, format: format || date_utils_1.getFormatByViews(views, utils), labelFunc: labelFunc, maxDate: maxDate, minDate: minDate, onAccept: handleAccept, onChange: handleTextFieldChange, onClear: handleClear, onDismiss: handleDismiss, onSetToday: handleSetTodayDate, ref: forwardedRef, value: value, isAccepted: isAccepted }, other),
            React.createElement(DatePicker_1.default, { date: date, allowKeyboardControl: allowKeyboardControl, animateYearScrolling: animateYearScrolling, disableFuture: disableFuture, disablePast: disablePast, leftArrowIcon: leftArrowIcon, maxDate: maxDate, minDate: minDate, onChange: handleChange, openToYearSelection: openToYearSelection, renderDay: renderDay, rightArrowIcon: rightArrowIcon, shouldDisableDate: shouldDisableDate, views: views, openTo: openTo, onMonthChange: onMonthChange, onYearChange: onYearChange })));
    }));
};
exports.DatePickerModal.defaultProps = {
    views: ['year', 'day'],
};
exports.default = React.forwardRef(function (props, ref) { return (React.createElement(exports.DatePickerModal, __assign({}, props, { forwardedRef: ref }))); });
