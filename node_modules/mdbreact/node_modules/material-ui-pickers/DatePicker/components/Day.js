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
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var createStyles_1 = __importDefault(require("@material-ui/core/styles/createStyles"));
var withStyles_1 = __importDefault(require("@material-ui/core/styles/withStyles"));
var clsx_1 = __importDefault(require("clsx"));
var PropTypes = __importStar(require("prop-types"));
var React = __importStar(require("react"));
var Day = /** @class */ (function (_super) {
    __extends(Day, _super);
    function Day() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Day.prototype.render = function () {
        var _a;
        var _b = this.props, children = _b.children, classes = _b.classes, disabled = _b.disabled, hidden = _b.hidden, current = _b.current, selected = _b.selected, other = __rest(_b, ["children", "classes", "disabled", "hidden", "current", "selected"]);
        var className = clsx_1.default(classes.day, (_a = {},
            _a[classes.hidden] = hidden,
            _a[classes.current] = current,
            _a[classes.isSelected] = selected,
            _a[classes.isDisabled] = disabled,
            _a));
        return (React.createElement(IconButton_1.default, __assign({ className: className, tabIndex: hidden || disabled ? -1 : 0 }, other), children));
    };
    Day.propTypes = {
        children: PropTypes.node.isRequired,
        classes: PropTypes.object.isRequired,
        current: PropTypes.bool,
        disabled: PropTypes.bool,
        hidden: PropTypes.bool,
        selected: PropTypes.bool,
        innerRef: PropTypes.any,
    };
    Day.defaultProps = {
        disabled: false,
        hidden: false,
        current: false,
        selected: false,
    };
    return Day;
}(React.PureComponent));
exports.styles = function (theme) {
    return createStyles_1.default({
        day: {
            width: 36,
            height: 36,
            fontSize: theme.typography.caption.fontSize,
            margin: '0 2px',
            color: theme.palette.text.primary,
            fontWeight: theme.typography.fontWeightMedium,
            padding: 0,
        },
        hidden: {
            opacity: 0,
            pointerEvents: 'none',
        },
        current: {
            color: theme.palette.primary.main,
            fontWeight: 600,
        },
        isSelected: {
            color: theme.palette.common.white,
            backgroundColor: theme.palette.primary.main,
            fontWeight: theme.typography.fontWeightMedium,
            '&:hover': {
                backgroundColor: theme.palette.primary.main,
            },
        },
        isDisabled: {
            pointerEvents: 'none',
            color: theme.palette.text.hint,
        },
    });
};
exports.default = withStyles_1.default(exports.styles, { name: 'MuiPickersDay' })(Day);
