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
var Paper_1 = __importDefault(require("@material-ui/core/Paper"));
var withStyles_1 = __importDefault(require("@material-ui/core/styles/withStyles"));
var Tab_1 = __importDefault(require("@material-ui/core/Tab"));
var Tabs_1 = __importDefault(require("@material-ui/core/Tabs"));
var DateRangeIcon_1 = require("../../_shared/icons/DateRangeIcon");
var TimeIcon_1 = require("../../_shared/icons/TimeIcon");
var DateTimePickerView_1 = __importDefault(require("../../constants/DateTimePickerView"));
var viewToTabIndex = function (openView) {
    if (openView === DateTimePickerView_1.default.DATE || openView === DateTimePickerView_1.default.YEAR) {
        return 'date';
    }
    return 'time';
};
var tabIndexToView = function (tab) {
    if (tab === 'date') {
        return DateTimePickerView_1.default.DATE;
    }
    return DateTimePickerView_1.default.HOUR;
};
exports.DateTimePickerTabs = function (props) {
    var view = props.view, onChange = props.onChange, classes = props.classes, theme = props.theme, dateRangeIcon = props.dateRangeIcon, timeIcon = props.timeIcon;
    var indicatorColor = theme.palette.type === 'light' ? 'secondary' : 'primary';
    var handleChange = function (e, value) {
        if (value !== viewToTabIndex(view)) {
            onChange(tabIndexToView(value));
        }
    };
    return (React.createElement(Paper_1.default, null,
        React.createElement(Tabs_1.default, { variant: "fullWidth", value: viewToTabIndex(view), onChange: handleChange, className: classes.tabs, indicatorColor: indicatorColor },
            React.createElement(Tab_1.default, { value: "date", icon: React.createElement(React.Fragment, null, dateRangeIcon) }),
            React.createElement(Tab_1.default, { value: "time", icon: React.createElement(React.Fragment, null, timeIcon) }))));
};
exports.DateTimePickerTabs.propTypes = {
    view: PropTypes.string.isRequired,
    dateRangeIcon: PropTypes.node.isRequired,
    timeIcon: PropTypes.node.isRequired,
};
exports.DateTimePickerTabs.defaultProps = {
    dateRangeIcon: React.createElement(DateRangeIcon_1.DateRangeIcon, null),
    timeIcon: React.createElement(TimeIcon_1.TimeIcon, null),
};
exports.styles = function (theme) { return ({
    tabs: {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.type === 'light'
            ? theme.palette.primary.main
            : theme.palette.background.default,
    },
}); };
exports.default = withStyles_1.default(exports.styles, { name: 'MuiPickerDTTabs', withTheme: true })(exports.DateTimePickerTabs);
