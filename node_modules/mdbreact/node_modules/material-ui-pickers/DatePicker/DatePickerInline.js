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
var InlineWrapper_1 = __importDefault(require("../wrappers/InlineWrapper"));
var Calendar_1 = __importDefault(require("./components/Calendar"));
var DatePicker_1 = __importDefault(require("./DatePicker"));
exports.DatePickerInline = function (props) {
    var allowKeyboardControl = props.allowKeyboardControl, animateYearScrolling = props.animateYearScrolling, disableFuture = props.disableFuture, disablePast = props.disablePast, format = props.format, forwardedRef = props.forwardedRef, labelFunc = props.labelFunc, leftArrowIcon = props.leftArrowIcon, maxDate = props.maxDate, minDate = props.minDate, initialFocusedDate = props.initialFocusedDate, onChange = props.onChange, openToYearSelection = props.openToYearSelection, renderDay = props.renderDay, rightArrowIcon = props.rightArrowIcon, shouldDisableDate = props.shouldDisableDate, value = props.value, autoOk = props.autoOk, onlyCalendar = props.onlyCalendar, views = props.views, openTo = props.openTo, other = __rest(props, ["allowKeyboardControl", "animateYearScrolling", "disableFuture", "disablePast", "format", "forwardedRef", "labelFunc", "leftArrowIcon", "maxDate", "minDate", "initialFocusedDate", "onChange", "openToYearSelection", "renderDay", "rightArrowIcon", "shouldDisableDate", "value", "autoOk", "onlyCalendar", "views", "openTo"]);
    var ComponentToShow = onlyCalendar ? Calendar_1.default : DatePicker_1.default;
    return (React.createElement(BasePicker_1.default, __assign({}, props, { autoOk: true }), function (_a) {
        var date = _a.date, utils = _a.utils, isAccepted = _a.isAccepted, handleChange = _a.handleChange, handleClear = _a.handleClear, handleTextFieldChange = _a.handleTextFieldChange, handleAccept = _a.handleAccept;
        return (React.createElement(InlineWrapper_1.default, __assign({ disableFuture: disableFuture, disablePast: disablePast, format: format || utils.dateFormat, labelFunc: labelFunc, maxDate: maxDate, minDate: minDate, onChange: handleTextFieldChange, innerRef: forwardedRef, value: value, isAccepted: isAccepted, handleAccept: handleAccept, onClear: handleClear }, other),
            React.createElement(ComponentToShow, { date: date, views: views, openTo: openTo, allowKeyboardControl: allowKeyboardControl, animateYearScrolling: animateYearScrolling, disableFuture: disableFuture, disablePast: disablePast, leftArrowIcon: leftArrowIcon, maxDate: maxDate, minDate: minDate, onChange: handleChange, openToYearSelection: openToYearSelection, renderDay: renderDay, rightArrowIcon: rightArrowIcon, shouldDisableDate: shouldDisableDate })));
    }));
};
exports.DatePickerInline.defaultProps = {
    views: ['year', 'day'],
};
exports.default = React.forwardRef(function (props, ref) { return (React.createElement(exports.DatePickerInline, __assign({}, props, { forwardedRef: ref }))); });
