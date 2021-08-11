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
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var Dialog_1 = __importDefault(require("@material-ui/core/Dialog"));
var DialogActions_1 = __importDefault(require("@material-ui/core/DialogActions"));
var DialogContent_1 = __importDefault(require("@material-ui/core/DialogContent"));
var styles_1 = require("@material-ui/core/styles");
var clsx_1 = __importDefault(require("clsx"));
var React = __importStar(require("react"));
var react_event_listener_1 = __importDefault(require("react-event-listener"));
var dimensions_1 = require("../constants/dimensions");
exports.ModalDialog = function (_a) {
    var children = _a.children, classes = _a.classes, onKeyDownInner = _a.onKeyDownInner, onAccept = _a.onAccept, onDismiss = _a.onDismiss, onClear = _a.onClear, onSetToday = _a.onSetToday, okLabel = _a.okLabel, cancelLabel = _a.cancelLabel, clearLabel = _a.clearLabel, todayLabel = _a.todayLabel, clearable = _a.clearable, showTodayButton = _a.showTodayButton, showTabs = _a.showTabs, wider = _a.wider, other = __rest(_a, ["children", "classes", "onKeyDownInner", "onAccept", "onDismiss", "onClear", "onSetToday", "okLabel", "cancelLabel", "clearLabel", "todayLabel", "clearable", "showTodayButton", "showTabs", "wider"]);
    var _b, _c, _d;
    return (React.createElement(Dialog_1.default, __assign({ role: "dialog", onClose: onDismiss, classes: {
            paper: clsx_1.default(classes.dialogRoot, (_b = {},
                _b[classes.dialogRootWider] = wider,
                _b[classes.dialogWithTabs] = showTabs,
                _b)),
        } }, other),
        React.createElement(react_event_listener_1.default, { target: "window", onKeyDown: onKeyDownInner }),
        React.createElement(DialogContent_1.default, { children: children, className: clsx_1.default(classes.dialog, (_c = {},
                _c[classes.dialogWithTabs] = showTabs,
                _c)) }),
        React.createElement(DialogActions_1.default, { classes: {
                root: clearable || showTodayButton ? classes.dialogActions : undefined,
                action: clsx_1.default(classes.dialogAction, (_d = {},
                    _d[classes.clearableDialogAction] = clearable,
                    _d[classes.todayDialogAction] = !clearable && showTodayButton,
                    _d)),
            } },
            clearable && (React.createElement(Button_1.default, { color: "primary", onClick: onClear }, clearLabel)),
            !clearable &&
                showTodayButton && (React.createElement(Button_1.default, { color: "primary", onClick: onSetToday }, todayLabel)),
            React.createElement(Button_1.default, { color: "primary", onClick: onDismiss }, cancelLabel),
            React.createElement(Button_1.default, { color: "primary", onClick: onAccept }, okLabel))));
};
exports.ModalDialog.displayName = 'ModalDialog';
var dialogHeight = 405;
var dialogHeightWithTabs = 455;
exports.styles = styles_1.createStyles({
    dialogRoot: {
        minWidth: dimensions_1.DIALOG_WIDTH,
        minHeight: dialogHeight,
    },
    dialogRootWider: {
        minWidth: dimensions_1.DIALOG_WIDTH_WIDER,
    },
    dialog: {
        minHeight: dialogHeight,
        overflow: 'hidden',
        '&:first-child': {
            padding: 0,
        },
    },
    dialogWithTabs: {
        minHeight: dialogHeightWithTabs,
    },
    dialogActions: {
        // set justifyContent to default value to fix IE11 layout bug
        // see https://github.com/dmtrKovalenko/material-ui-pickers/pull/267
        justifyContent: 'flex-start',
    },
    clearableDialogAction: {
        '&:first-child': {
            marginRight: 'auto',
        },
    },
    todayDialogAction: {
        '&:first-child': {
            marginRight: 'auto',
        },
    },
    dialogAction: {
    // empty but may be needed for override
    },
});
exports.default = styles_1.withStyles(exports.styles, { name: 'MuiPickersModal' })(exports.ModalDialog);
