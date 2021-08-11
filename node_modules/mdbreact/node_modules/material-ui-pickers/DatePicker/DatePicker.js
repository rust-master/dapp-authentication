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
var clsx_1 = __importDefault(require("clsx"));
var PropTypes = __importStar(require("prop-types"));
var React = __importStar(require("react"));
var createStyles_1 = __importDefault(require("@material-ui/core/styles/createStyles"));
var withStyles_1 = __importDefault(require("@material-ui/core/styles/withStyles"));
var date_utils_1 = require("../_helpers/date-utils");
var PickerToolbar_1 = __importDefault(require("../_shared/PickerToolbar"));
var ToolbarButton_1 = __importDefault(require("../_shared/ToolbarButton"));
var WithUtils_1 = require("../_shared/WithUtils");
var prop_types_1 = require("../constants/prop-types");
var Calendar_1 = __importDefault(require("./components/Calendar"));
var MonthSelection_1 = __importDefault(require("./components/MonthSelection"));
var YearSelection_1 = __importDefault(require("./components/YearSelection"));
var DatePicker = /** @class */ (function (_super) {
    __extends(DatePicker, _super);
    function DatePicker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            // TODO in v3 remove openToYearSelection
            openView: _this.props.openTo
                ? _this.props.openTo
                : _this.props.openToYearSelection
                    ? 'year'
                    : _this.props.views[_this.props.views.length - 1],
        };
        _this.handleYearSelect = function (date) {
            _this.props.onChange(date, _this.isYearOnly);
            if (_this.isYearOnly) {
                return;
            }
            if (_this.props.views.includes('month')) {
                return _this.openMonthSelection();
            }
            _this.openCalendar();
        };
        _this.handleMonthSelect = function (date) {
            if (_this.props.onMonthChange) {
                _this.props.onMonthChange(date);
            }
            var isFinish = !_this.props.views.includes('day');
            _this.props.onChange(date, isFinish);
            if (!isFinish) {
                _this.openCalendar();
            }
        };
        _this.openYearSelection = function () {
            _this.setState({ openView: 'year' });
        };
        _this.openCalendar = function () {
            _this.setState({ openView: 'day' });
        };
        _this.openMonthSelection = function () {
            _this.setState({ openView: 'month' });
        };
        return _this;
    }
    Object.defineProperty(DatePicker.prototype, "date", {
        get: function () {
            return this.props.date;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatePicker.prototype, "minDate", {
        get: function () {
            return this.props.utils.date(this.props.minDate);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatePicker.prototype, "maxDate", {
        get: function () {
            return this.props.utils.date(this.props.maxDate);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatePicker.prototype, "isYearOnly", {
        get: function () {
            return date_utils_1.isYearOnlyView(this.props.views);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatePicker.prototype, "isYearAndMonth", {
        get: function () {
            return date_utils_1.isYearAndMonthViews(this.props.views);
        },
        enumerable: true,
        configurable: true
    });
    DatePicker.prototype.render = function () {
        var _a;
        var openView = this.state.openView;
        var _b = this.props, disablePast = _b.disablePast, disableFuture = _b.disableFuture, onChange = _b.onChange, animateYearScrolling = _b.animateYearScrolling, leftArrowIcon = _b.leftArrowIcon, rightArrowIcon = _b.rightArrowIcon, renderDay = _b.renderDay, utils = _b.utils, shouldDisableDate = _b.shouldDisableDate, allowKeyboardControl = _b.allowKeyboardControl, classes = _b.classes, onMonthChange = _b.onMonthChange, onYearChange = _b.onYearChange;
        return (React.createElement(React.Fragment, null,
            React.createElement(PickerToolbar_1.default, { className: clsx_1.default((_a = {}, _a[classes.toolbarCenter] = this.isYearOnly, _a)) },
                React.createElement(ToolbarButton_1.default, { variant: this.isYearOnly ? 'h3' : 'subtitle1', onClick: this.isYearOnly ? undefined : this.openYearSelection, selected: openView === 'year', label: utils.getYearText(this.date) }),
                !this.isYearOnly && !this.isYearAndMonth && (React.createElement(ToolbarButton_1.default, { variant: "h4", onClick: this.openCalendar, selected: openView === 'day', label: utils.getDatePickerHeaderText(this.date) })),
                this.isYearAndMonth && (React.createElement(ToolbarButton_1.default, { variant: "h4", onClick: this.openMonthSelection, selected: openView === 'month', label: utils.getMonthText(this.date) }))),
            this.props.children,
            openView === 'year' && (React.createElement(YearSelection_1.default, { date: this.date, onChange: this.handleYearSelect, minDate: this.minDate, maxDate: this.maxDate, disablePast: disablePast, disableFuture: disableFuture, onYearChange: onYearChange, animateYearScrolling: animateYearScrolling })),
            openView === 'month' && (React.createElement(MonthSelection_1.default, { date: this.date, onChange: this.handleMonthSelect, minDate: this.minDate, maxDate: this.maxDate, disablePast: disablePast, disableFuture: disableFuture })),
            openView === 'day' && (React.createElement(Calendar_1.default, { date: this.date, onChange: onChange, onMonthChange: onMonthChange, disablePast: disablePast, disableFuture: disableFuture, minDate: this.minDate, maxDate: this.maxDate, leftArrowIcon: leftArrowIcon, rightArrowIcon: rightArrowIcon, renderDay: renderDay, shouldDisableDate: shouldDisableDate, allowKeyboardControl: allowKeyboardControl }))));
    };
    DatePicker.propTypes = {
        views: PropTypes.arrayOf(prop_types_1.DomainPropTypes.datePickerView),
        openTo: prop_types_1.DomainPropTypes.datePickerView,
        openToYearSelection: PropTypes.bool,
    };
    DatePicker.defaultProps = {
        openToYearSelection: false,
        minDate: new Date('1900-01-01'),
        maxDate: new Date('2100-01-01'),
        views: ['year', 'day'],
    };
    return DatePicker;
}(React.PureComponent));
exports.DatePicker = DatePicker;
exports.styles = function () {
    return createStyles_1.default({
        toolbarCenter: {
            flexDirection: 'row',
            alignItems: 'center',
        },
    });
};
exports.default = withStyles_1.default(exports.styles)(WithUtils_1.withUtils()(DatePicker));
