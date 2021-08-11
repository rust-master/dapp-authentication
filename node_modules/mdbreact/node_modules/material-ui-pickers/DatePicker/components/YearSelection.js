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
var createStyles_1 = __importDefault(require("@material-ui/core/styles/createStyles"));
var withStyles_1 = __importDefault(require("@material-ui/core/styles/withStyles"));
var PropTypes = __importStar(require("prop-types"));
var React = __importStar(require("react"));
var react_dom_1 = require("react-dom");
var WithUtils_1 = require("../../_shared/WithUtils");
var prop_types_1 = require("../../constants/prop-types");
var Year_1 = __importDefault(require("./Year"));
var YearSelection = /** @class */ (function (_super) {
    __extends(YearSelection, _super);
    function YearSelection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.selectedYearRef = undefined;
        _this.getSelectedYearRef = function (ref) {
            _this.selectedYearRef = ref;
        };
        _this.scrollToCurrentYear = function (domNode) {
            var animateYearScrolling = _this.props.animateYearScrolling;
            var currentYearElement = react_dom_1.findDOMNode(domNode);
            if (currentYearElement && currentYearElement.scrollIntoView) {
                if (animateYearScrolling) {
                    setTimeout(function () { return currentYearElement.scrollIntoView({ behavior: 'smooth' }); }, 100);
                }
                else {
                    currentYearElement.scrollIntoView();
                }
            }
        };
        _this.onYearSelect = function (year) {
            var _a = _this.props, date = _a.date, onChange = _a.onChange, utils = _a.utils, onYearChange = _a.onYearChange;
            var newDate = utils.setYear(date, year);
            if (onYearChange) {
                onYearChange(newDate);
            }
            onChange(newDate);
        };
        return _this;
    }
    YearSelection.prototype.componentDidMount = function () {
        if (this.selectedYearRef) {
            this.scrollToCurrentYear(this.selectedYearRef);
        }
    };
    YearSelection.prototype.render = function () {
        var _this = this;
        var _a = this.props, minDate = _a.minDate, maxDate = _a.maxDate, date = _a.date, classes = _a.classes, disablePast = _a.disablePast, disableFuture = _a.disableFuture, utils = _a.utils;
        var currentYear = utils.getYear(date);
        return (React.createElement("div", { className: classes.container }, utils.getYearRange(minDate, maxDate).map(function (year) {
            var yearNumber = utils.getYear(year);
            var selected = yearNumber === currentYear;
            return (React.createElement(Year_1.default, { key: utils.getYearText(year), selected: selected, value: yearNumber, onSelect: _this.onYearSelect, ref: selected ? _this.getSelectedYearRef : undefined, disabled: (disablePast && utils.isBeforeYear(year, utils.date())) ||
                    (disableFuture && utils.isAfterYear(year, utils.date())) }, utils.getYearText(year)));
        })));
    };
    YearSelection.propTypes = {
        date: PropTypes.shape({}).isRequired,
        minDate: prop_types_1.DomainPropTypes.date,
        maxDate: prop_types_1.DomainPropTypes.date,
        onChange: PropTypes.func.isRequired,
        animateYearScrolling: PropTypes.bool,
        innerRef: PropTypes.any,
    };
    YearSelection.defaultProps = {
        animateYearScrolling: false,
        minDate: new Date('1900-01-01'),
        maxDate: new Date('2100-01-01'),
    };
    return YearSelection;
}(React.PureComponent));
exports.YearSelection = YearSelection;
exports.styles = createStyles_1.default({
    container: {
        maxHeight: 300,
        overflowY: 'auto',
        justifyContent: 'center',
    },
});
exports.default = withStyles_1.default(exports.styles, { name: 'MuiPickersYearSelection' })(WithUtils_1.withUtils()(YearSelection));
