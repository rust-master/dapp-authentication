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
var Clock_1 = __importDefault(require("./Clock"));
var WithUtils_1 = require("../../_shared/WithUtils");
var ClockType_1 = __importDefault(require("../../constants/ClockType"));
var ClockNumbers_1 = require("./ClockNumbers");
var TimePickerView = /** @class */ (function (_super) {
    __extends(TimePickerView, _super);
    function TimePickerView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getViewProps = function () {
            var _a = _this.props, type = _a.type, ampm = _a.ampm, date = _a.date, utils = _a.utils;
            switch (type) {
                case ClockType_1.default.HOURS:
                    return {
                        value: utils.getHours(date),
                        children: ClockNumbers_1.getHourNumbers({ date: date, ampm: Boolean(ampm), utils: utils }),
                        onChange: _this.handleHourChange,
                    };
                case ClockType_1.default.MINUTES:
                    var minutesValue = utils.getMinutes(date);
                    return {
                        value: minutesValue,
                        children: ClockNumbers_1.getMinutesNumbers({ value: minutesValue, utils: utils }),
                        onChange: _this.handleMinutesChange,
                    };
                case ClockType_1.default.SECONDS:
                    var secondsValue = utils.getSeconds(date);
                    return {
                        value: secondsValue,
                        children: ClockNumbers_1.getMinutesNumbers({ value: secondsValue, utils: utils }),
                        onChange: _this.handleSecondsChange,
                    };
                default:
                    throw new Error('You must provide the type for TimePickerView');
            }
        };
        _this.handleHourChange = function (hours, isFinish) {
            var _a = _this.props, date = _a.date, utils = _a.utils;
            var updatedTime = utils.setHours(date, hours);
            _this.props.onHourChange(updatedTime, isFinish);
        };
        _this.handleMinutesChange = function (minutes, isFinish) {
            var _a = _this.props, date = _a.date, utils = _a.utils;
            var updatedTime = utils.setMinutes(date, minutes);
            _this.props.onMinutesChange(updatedTime, isFinish);
        };
        _this.handleSecondsChange = function (seconds, isFinish) {
            var _a = _this.props, date = _a.date, utils = _a.utils;
            var updatedTime = utils.setSeconds(date, seconds);
            _this.props.onSecondsChange(updatedTime, isFinish);
        };
        return _this;
    }
    TimePickerView.prototype.render = function () {
        var _a = this.props, ampm = _a.ampm, type = _a.type, minutesStep = _a.minutesStep;
        var viewProps = this.getViewProps();
        return React.createElement(Clock_1.default, __assign({ type: type, ampm: ampm, minutesStep: minutesStep }, viewProps));
    };
    TimePickerView.propTypes = {
        date: PropTypes.object.isRequired,
        onHourChange: PropTypes.func.isRequired,
        onMinutesChange: PropTypes.func.isRequired,
        onSecondsChange: PropTypes.func.isRequired,
        ampm: PropTypes.bool,
        minutesStep: PropTypes.number,
        type: PropTypes.oneOf(Object.keys(ClockType_1.default).map(function (key) { return ClockType_1.default[key]; })).isRequired,
    };
    TimePickerView.defaultProps = {
        ampm: true,
        minutesStep: 1,
    };
    return TimePickerView;
}(React.PureComponent));
exports.TimePickerView = TimePickerView;
exports.default = WithUtils_1.withUtils()(TimePickerView);
