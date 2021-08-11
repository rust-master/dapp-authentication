"use strict";
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
var PickerToolbar_1 = __importDefault(require("../../_shared/PickerToolbar"));
var ToolbarButton_1 = __importDefault(require("../../_shared/ToolbarButton"));
var WithUtils_1 = require("../../_shared/WithUtils");
var DateTimePickerView_1 = __importDefault(require("../../constants/DateTimePickerView"));
exports.styles = function (theme) {
    return createStyles_1.default({
        toolbar: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 16,
            paddingRight: 16,
            justifyContent: 'space-around',
        },
        toolBar24h: {
            paddingLeft: 32,
        },
        separator: {
            margin: '0 4px 0 2px',
            cursor: 'default',
        },
        hourMinuteLabel: {
            top: 10,
            position: 'relative',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            flexDirection: theme.direction === 'rtl' ? 'row-reverse' : 'row',
        },
        dateHeader: {
            height: 60,
            minWidth: 110,
            marginRight: 4,
        },
        timeHeader: {
            height: 65,
            minWidth: 155,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
        },
        ampmSelection: {
            top: 11,
            position: 'relative',
            marginLeft: 10,
            marginRight: -10,
        },
        ampmLabel: {
            fontSize: 18,
        },
    });
};
exports.DateTimePickerHeader = function (_a) {
    var date = _a.date, classes = _a.classes, openView = _a.openView, meridiemMode = _a.meridiemMode, onOpenViewChange = _a.onOpenViewChange, setMeridiemMode = _a.setMeridiemMode, utils = _a.utils, ampm = _a.ampm;
    var _b;
    return (React.createElement(PickerToolbar_1.default, { className: clsx_1.default(classes.toolbar, (_b = {}, _b[classes.toolBar24h] = !ampm, _b)) },
        React.createElement("div", { className: classes.dateHeader },
            React.createElement(ToolbarButton_1.default, { variant: "subtitle1", onClick: function () { return onOpenViewChange(DateTimePickerView_1.default.YEAR); }, selected: openView === DateTimePickerView_1.default.YEAR, label: utils.getYearText(date) }),
            React.createElement(ToolbarButton_1.default, { variant: "h4", onClick: function () { return onOpenViewChange(DateTimePickerView_1.default.DATE); }, selected: openView === DateTimePickerView_1.default.DATE, label: utils.getDateTimePickerHeaderText(date) })),
        React.createElement("div", { className: classes.timeHeader },
            React.createElement("div", { className: classes.hourMinuteLabel },
                React.createElement(ToolbarButton_1.default, { variant: "h3", onClick: function () { return onOpenViewChange(DateTimePickerView_1.default.HOUR); }, selected: openView === DateTimePickerView_1.default.HOUR, label: utils.getHourText(date, ampm) }),
                React.createElement(ToolbarButton_1.default, { variant: "h3", label: ":", selected: false, className: classes.separator }),
                React.createElement(ToolbarButton_1.default, { variant: "h3", onClick: function () { return onOpenViewChange(DateTimePickerView_1.default.MINUTES); }, selected: openView === DateTimePickerView_1.default.MINUTES, label: utils.getMinuteText(date) })),
            ampm && (React.createElement("div", { className: classes.ampmSelection },
                React.createElement(ToolbarButton_1.default, { className: classes.ampmLabel, selected: meridiemMode === 'am', variant: "subtitle1", label: utils.getMeridiemText('am'), onClick: setMeridiemMode('am') }),
                React.createElement(ToolbarButton_1.default, { className: classes.ampmLabel, selected: meridiemMode === 'pm', variant: "subtitle1", label: utils.getMeridiemText('pm'), onClick: setMeridiemMode('pm') }))))));
};
exports.DateTimePickerHeader.propTypes = {
    date: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    meridiemMode: PropTypes.string.isRequired,
    utils: PropTypes.object.isRequired,
    ampm: PropTypes.bool,
    innerRef: PropTypes.any,
};
exports.default = withStyles_1.default(exports.styles, { name: 'MuiPickerDTHeader' })(WithUtils_1.withUtils()(exports.DateTimePickerHeader));
