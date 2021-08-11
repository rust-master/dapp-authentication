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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var withStyles_1 = __importDefault(require("@material-ui/core/styles/withStyles"));
var clsx_1 = __importDefault(require("clsx"));
var PropTypes = __importStar(require("prop-types"));
var React = __importStar(require("react"));
var createStyles_1 = __importDefault(require("@material-ui/core/styles/createStyles"));
var time_utils_1 = require("../_helpers/time-utils");
var PickerToolbar_1 = __importDefault(require("../_shared/PickerToolbar"));
var ToolbarButton_1 = __importDefault(require("../_shared/ToolbarButton"));
var WithUtils_1 = require("../_shared/WithUtils");
var ClockType_1 = __importDefault(require("../constants/ClockType"));
var TimePickerView_1 = __importDefault(require("./components/TimePickerView"));
var TimePicker = /** @class */ (function (_super) {
    __extends(TimePicker, _super);
    function TimePicker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            openView: ClockType_1.default.HOURS,
            meridiemMode: _this.props.utils.getHours(_this.props.date) >= 12 ? 'pm' : 'am',
        };
        _this.setMeridiemMode = function (mode) { return function () {
            _this.setState({ meridiemMode: mode }, function () {
                return _this.handleChange({
                    time: _this.props.date,
                    isFinish: false,
                    openMinutes: false,
                    openSeconds: false,
                });
            });
        }; };
        _this.handleChange = function (_a) {
            var time = _a.time, isFinish = _a.isFinish, openMinutes = _a.openMinutes, openSeconds = _a.openSeconds;
            var withMeridiem = time_utils_1.convertToMeridiem(time, _this.state.meridiemMode, Boolean(_this.props.ampm), _this.props.utils);
            if (isFinish) {
                if (!openMinutes && !openSeconds) {
                    _this.props.onChange(withMeridiem, isFinish);
                    return;
                }
                if (openMinutes) {
                    _this.openMinutesView();
                }
                if (openSeconds) {
                    _this.openSecondsView();
                }
            }
            _this.props.onChange(withMeridiem, false);
        };
        _this.handleHourChange = function (time, isFinish) {
            _this.handleChange({
                time: time,
                isFinish: isFinish,
                openMinutes: true,
                openSeconds: false,
            });
        };
        _this.handleMinutesChange = function (time, isFinish) {
            _this.handleChange({
                time: time,
                isFinish: isFinish,
                openMinutes: false,
                openSeconds: Boolean(_this.props.seconds),
            });
        };
        _this.handleSecondsChange = function (time, isFinish) {
            _this.handleChange({
                time: time,
                isFinish: isFinish,
                openMinutes: false,
                openSeconds: false,
            });
        };
        _this.openSecondsView = function () {
            _this.setState({ openView: ClockType_1.default.SECONDS });
        };
        _this.openMinutesView = function () {
            _this.setState({ openView: ClockType_1.default.MINUTES });
        };
        _this.openHourView = function () {
            _this.setState({ openView: ClockType_1.default.HOURS });
        };
        return _this;
    }
    TimePicker.prototype.render = function () {
        var _a;
        var _b = this.props, classes = _b.classes, theme = _b.theme, date = _b.date, utils = _b.utils, ampm = _b.ampm, seconds = _b.seconds, minutesStep = _b.minutesStep;
        var _c = this.state, meridiemMode = _c.meridiemMode, openView = _c.openView;
        var rtl = theme.direction === 'rtl';
        var hourMinuteClassName = rtl ? classes.hourMinuteLabelReverse : classes.hourMinuteLabel;
        return (React.createElement(React.Fragment, null,
            React.createElement(PickerToolbar_1.default, { className: clsx_1.default(classes.toolbar, (_a = {},
                    _a[classes.toolbarLeftPadding] = ampm,
                    _a)) },
                React.createElement("div", { className: hourMinuteClassName },
                    React.createElement(ToolbarButton_1.default, { variant: "h2", onClick: this.openHourView, selected: openView === ClockType_1.default.HOURS, label: utils.getHourText(date, Boolean(ampm)) }),
                    React.createElement(ToolbarButton_1.default, { variant: "h2", label: ":", selected: false, className: classes.separator }),
                    React.createElement(ToolbarButton_1.default, { variant: "h2", onClick: this.openMinutesView, selected: openView === ClockType_1.default.MINUTES, label: utils.getMinuteText(date) }),
                    seconds && (React.createElement(React.Fragment, null,
                        React.createElement(ToolbarButton_1.default, { variant: "h2", label: ":", selected: false, className: classes.separator }),
                        React.createElement(ToolbarButton_1.default, { variant: "h2", onClick: this.openSecondsView, selected: openView === ClockType_1.default.SECONDS, label: utils.getSecondText(date) })))),
                ampm && (React.createElement("div", { className: seconds ? classes.ampmSelectionWithSeconds : classes.ampmSelection },
                    React.createElement(ToolbarButton_1.default, { className: classes.ampmLabel, selected: meridiemMode === 'am', variant: "subtitle1", label: utils.getMeridiemText('am'), onClick: this.setMeridiemMode('am') }),
                    React.createElement(ToolbarButton_1.default, { className: classes.ampmLabel, selected: meridiemMode === 'pm', variant: "subtitle1", label: utils.getMeridiemText('pm'), onClick: this.setMeridiemMode('pm') })))),
            this.props.children,
            React.createElement(TimePickerView_1.default, { date: date, type: this.state.openView, ampm: ampm, minutesStep: minutesStep, onHourChange: this.handleHourChange, onMinutesChange: this.handleMinutesChange, onSecondsChange: this.handleSecondsChange })));
    };
    TimePicker.propTypes = {
        date: PropTypes.object.isRequired,
        onChange: PropTypes.func.isRequired,
        utils: PropTypes.object.isRequired,
        ampm: PropTypes.bool,
        seconds: PropTypes.bool,
        minutesStep: PropTypes.number,
        innerRef: PropTypes.any,
    };
    TimePicker.defaultProps = {
        children: null,
        ampm: true,
        seconds: false,
        minutesStep: 1,
    };
    return TimePicker;
}(React.Component));
exports.TimePicker = TimePicker;
exports.styles = function () {
    return createStyles_1.default({
        toolbar: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        toolbarLeftPadding: {
            paddingLeft: 50,
        },
        separator: {
            margin: '0 4px 0 2px',
            cursor: 'default',
        },
        ampmSelection: {
            marginLeft: 20,
            marginRight: -20,
        },
        ampmSelectionWithSeconds: {
            marginLeft: 15,
            marginRight: 10,
        },
        ampmLabel: {
            fontSize: 18,
        },
        hourMinuteLabel: {
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
        },
        hourMinuteLabelReverse: {
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            flexDirection: 'row-reverse',
        },
    });
};
exports.default = withStyles_1.default(exports.styles, {
    withTheme: true,
    name: 'MuiPickersTimePicker',
})(WithUtils_1.withUtils()(TimePicker));
