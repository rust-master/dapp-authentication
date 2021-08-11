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
var BasePicker_1 = __importDefault(require("../_shared/BasePicker"));
var ModalWrapper_1 = __importDefault(require("../wrappers/ModalWrapper"));
var DateTimePicker_1 = __importDefault(require("./DateTimePicker"));
exports.DateTimePickerModal = function (props) {
    var value = props.value, format = props.format, autoOk = props.autoOk, openTo = props.openTo, minDate = props.minDate, maxDate = props.maxDate, initialFocusedDate = props.initialFocusedDate, showTabs = props.showTabs, autoSubmit = props.autoSubmit, disablePast = props.disablePast, disableFuture = props.disableFuture, leftArrowIcon = props.leftArrowIcon, rightArrowIcon = props.rightArrowIcon, dateRangeIcon = props.dateRangeIcon, timeIcon = props.timeIcon, renderDay = props.renderDay, ampm = props.ampm, minutesStep = props.minutesStep, shouldDisableDate = props.shouldDisableDate, animateYearScrolling = props.animateYearScrolling, forwardedRef = props.forwardedRef, allowKeyboardControl = props.allowKeyboardControl, onMonthChange = props.onMonthChange, onYearChange = props.onYearChange, other = __rest(props, ["value", "format", "autoOk", "openTo", "minDate", "maxDate", "initialFocusedDate", "showTabs", "autoSubmit", "disablePast", "disableFuture", "leftArrowIcon", "rightArrowIcon", "dateRangeIcon", "timeIcon", "renderDay", "ampm", "minutesStep", "shouldDisableDate", "animateYearScrolling", "forwardedRef", "allowKeyboardControl", "onMonthChange", "onYearChange"]);
    // do not show tabs for small screens
    var toShowTabs = Boolean(showTabs && typeof window !== 'undefined' && window.innerHeight > 667);
    return (React.createElement(BasePicker_1.default, __assign({}, props), function (_a) {
        var date = _a.date, utils = _a.utils, handleAccept = _a.handleAccept, handleChange = _a.handleChange, handleClear = _a.handleClear, handleDismiss = _a.handleDismiss, handleSetTodayDate = _a.handleSetTodayDate, handleTextFieldChange = _a.handleTextFieldChange, isAccepted = _a.isAccepted, pick12hOr24hFormat = _a.pick12hOr24hFormat;
        return (React.createElement(ModalWrapper_1.default, __assign({ wider: true, showTabs: toShowTabs, ref: forwardedRef, disableFuture: disableFuture, disablePast: disablePast, maxDate: maxDate, minDate: minDate, onAccept: handleAccept, onChange: handleTextFieldChange, onClear: handleClear, onDismiss: handleDismiss, onSetToday: handleSetTodayDate, value: value, isAccepted: isAccepted, format: pick12hOr24hFormat(utils.dateTime12hFormat, utils.dateTime24hFormat) }, other),
            React.createElement(DateTimePicker_1.default, { allowKeyboardControl: allowKeyboardControl, ampm: ampm, minutesStep: minutesStep, animateYearScrolling: animateYearScrolling, autoSubmit: autoSubmit, date: date, dateRangeIcon: dateRangeIcon, disableFuture: disableFuture, disablePast: disablePast, leftArrowIcon: leftArrowIcon, maxDate: maxDate, minDate: minDate, onChange: handleChange, onMonthChange: onMonthChange, onYearChange: onYearChange, openTo: openTo, renderDay: renderDay, rightArrowIcon: rightArrowIcon, shouldDisableDate: shouldDisableDate, showTabs: toShowTabs, timeIcon: timeIcon })));
    }));
};
exports.DateTimePickerModal.defaultProps = {
    showTabs: true,
};
exports.default = React.forwardRef(function (props, ref) { return (React.createElement(exports.DateTimePickerModal, __assign({}, props, { forwardedRef: ref }))); });
