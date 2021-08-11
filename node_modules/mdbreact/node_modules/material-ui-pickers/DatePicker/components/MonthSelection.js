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
var styles_1 = require("@material-ui/core/styles");
var WithUtils_1 = require("../../_shared/WithUtils");
var Month_1 = __importDefault(require("./Month"));
var MonthSelection = /** @class */ (function (_super) {
    __extends(MonthSelection, _super);
    function MonthSelection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onMonthSelect = function (month) {
            var _a = _this.props, date = _a.date, onChange = _a.onChange, utils = _a.utils;
            var newDate = utils.setMonth(date, month);
            onChange(newDate);
        };
        _this.shouldDisableMonth = function (month) {
            var _a = _this.props, utils = _a.utils, disablePast = _a.disablePast, disableFuture = _a.disableFuture, minDate = _a.minDate, maxDate = _a.maxDate;
            var now = utils.date();
            var utilMinDate = utils.date(minDate);
            var utilMaxDate = utils.date(maxDate);
            var firstEnabledMonth = utils.startOfMonth(disablePast && utils.isAfter(now, utilMinDate) ? now : utilMinDate);
            var lastEnabledMonth = utils.startOfMonth(disableFuture && utils.isBefore(now, utilMaxDate) ? now : utilMaxDate);
            var isBeforeFirstEnabled = utils.isBefore(month, firstEnabledMonth);
            var isAfterLastEnabled = utils.isAfter(month, lastEnabledMonth);
            return isBeforeFirstEnabled || isAfterLastEnabled;
        };
        return _this;
    }
    MonthSelection.prototype.render = function () {
        var _this = this;
        var _a = this.props, date = _a.date, classes = _a.classes, utils = _a.utils;
        var currentMonth = utils.getMonth(date);
        return (React.createElement("div", { className: classes.container }, utils.getMonthArray(date).map(function (month) {
            var monthNumber = utils.getMonth(month);
            var monthText = utils.format(month, 'MMM');
            return (React.createElement(Month_1.default, { key: monthText, value: monthNumber, selected: monthNumber === currentMonth, onSelect: _this.onMonthSelect, disabled: _this.shouldDisableMonth(month) }, monthText));
        })));
    };
    MonthSelection.defaultProps = {
        minDate: new Date('1900-01-01'),
        maxDate: new Date('2100-01-01'),
    };
    return MonthSelection;
}(React.PureComponent));
exports.MonthSelection = MonthSelection;
exports.styles = styles_1.createStyles({
    container: {
        width: 310,
        display: 'flex',
        flexWrap: 'wrap',
        alignContent: 'stretch',
    },
});
exports.default = styles_1.withStyles(exports.styles, { name: 'MuiPickersMonthSelection' })(WithUtils_1.withUtils()(MonthSelection));
