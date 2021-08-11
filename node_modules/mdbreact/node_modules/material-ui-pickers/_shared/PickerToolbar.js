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
var createStyles_1 = __importDefault(require("@material-ui/core/styles/createStyles"));
var withStyles_1 = __importDefault(require("@material-ui/core/styles/withStyles"));
var Toolbar_1 = __importDefault(require("@material-ui/core/Toolbar"));
var clsx_1 = __importDefault(require("clsx"));
var PropTypes = __importStar(require("prop-types"));
var React = __importStar(require("react"));
var PickerToolbar = function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? null : _b, classes = _a.classes, other = __rest(_a, ["children", "className", "classes"]);
    return (React.createElement(Toolbar_1.default, __assign({ className: clsx_1.default(classes.toolbar, className) }, other), children));
};
PickerToolbar.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
    className: PropTypes.string,
    classes: PropTypes.any.isRequired,
    innerRef: PropTypes.any,
};
PickerToolbar.defaultProps = {
    className: '',
};
exports.styles = function (theme) {
    return createStyles_1.default({
        toolbar: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            height: 100,
            backgroundColor: theme.palette.type === 'light'
                ? theme.palette.primary.main
                : theme.palette.background.default,
        },
    });
};
exports.default = withStyles_1.default(exports.styles, { name: 'MuiPickersToolbar' })(PickerToolbar);
