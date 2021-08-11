"use strict";
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
var createStyles_1 = __importDefault(require("@material-ui/core/styles/createStyles"));
var withStyles_1 = __importDefault(require("@material-ui/core/styles/withStyles"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var ArrowLeftIcon_1 = require("../../_shared/icons/ArrowLeftIcon");
var ArrowRightIcon_1 = require("../../_shared/icons/ArrowRightIcon");
var WithUtils_1 = require("../../_shared/WithUtils");
var SlideTransition_1 = __importDefault(require("./SlideTransition"));
exports.CalendarHeader = function (_a) {
    var classes = _a.classes, theme = _a.theme, currentMonth = _a.currentMonth, onMonthChange = _a.onMonthChange, leftArrowIcon = _a.leftArrowIcon, rightArrowIcon = _a.rightArrowIcon, disablePrevMonth = _a.disablePrevMonth, disableNextMonth = _a.disableNextMonth, utils = _a.utils, slideDirection = _a.slideDirection;
    var rtl = theme.direction === 'rtl';
    var selectNextMonth = function () { return onMonthChange(utils.getNextMonth(currentMonth), 'left'); };
    var selectPreviousMonth = function () { return onMonthChange(utils.getPreviousMonth(currentMonth), 'right'); };
    return (React.createElement("div", null,
        React.createElement("div", { className: classes.switchHeader },
            React.createElement(IconButton_1.default, { disabled: disablePrevMonth, onClick: selectPreviousMonth, className: classes.iconButton }, rtl ? rightArrowIcon : leftArrowIcon),
            React.createElement(SlideTransition_1.default, { slideDirection: slideDirection, transKey: currentMonth.toString(), className: classes.transitionContainer },
                React.createElement(Typography_1.default, { align: "center", variant: "body1" }, utils.getCalendarHeaderText(currentMonth))),
            React.createElement(IconButton_1.default, { disabled: disableNextMonth, onClick: selectNextMonth, className: classes.iconButton }, rtl ? leftArrowIcon : rightArrowIcon)),
        React.createElement("div", { className: classes.daysHeader }, utils.getWeekdays().map(function (day, index) { return (React.createElement(Typography_1.default, { key: index, variant: "caption", className: classes.dayLabel }, day)); }))));
};
exports.CalendarHeader.propTypes = {
    currentMonth: PropTypes.object.isRequired,
    onMonthChange: PropTypes.func.isRequired,
    leftArrowIcon: PropTypes.node,
    rightArrowIcon: PropTypes.node,
    disablePrevMonth: PropTypes.bool,
    disableNextMonth: PropTypes.bool,
    slideDirection: PropTypes.oneOf(['right', 'left']).isRequired,
    innerRef: PropTypes.any,
};
exports.CalendarHeader.displayName = 'CalendarHeader';
exports.CalendarHeader.defaultProps = {
    leftArrowIcon: React.createElement(ArrowLeftIcon_1.ArrowLeftIcon, null),
    rightArrowIcon: React.createElement(ArrowRightIcon_1.ArrowRightIcon, null),
    disablePrevMonth: false,
    disableNextMonth: false,
};
exports.styles = function (theme) {
    return createStyles_1.default({
        switchHeader: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: theme.spacing.unit / 2,
            marginBottom: theme.spacing.unit,
        },
        transitionContainer: {
            width: '100%',
            height: 20,
        },
        iconButton: {
            zIndex: 2,
            backgroundColor: theme.palette.background.paper,
            '& > *': {
                // label
                backgroundColor: theme.palette.background.paper,
                '& > *': {
                    // icon
                    zIndex: 1,
                    overflow: 'visible',
                },
            },
        },
        daysHeader: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            maxHeight: 16,
        },
        dayLabel: {
            width: 36,
            margin: '0 2px',
            textAlign: 'center',
            color: theme.palette.text.hint,
        },
    });
};
exports.default = WithUtils_1.withUtils()(withStyles_1.default(exports.styles, {
    withTheme: true,
    name: 'MuiPickersCalendarHeader',
})(exports.CalendarHeader));
