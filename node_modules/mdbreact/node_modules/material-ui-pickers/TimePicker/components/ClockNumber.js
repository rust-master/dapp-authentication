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
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var clsx_1 = __importDefault(require("clsx"));
var PropTypes = __importStar(require("prop-types"));
var React = __importStar(require("react"));
var positions = {
    0: [0, 40],
    1: [55, 19.6],
    2: [94.4, 59.5],
    3: [109, 114],
    4: [94.4, 168.5],
    5: [54.5, 208.4],
    6: [0, 223],
    7: [-54.5, 208.4],
    8: [-94.4, 168.5],
    9: [-109, 114],
    10: [-94.4, 59.5],
    11: [-54.5, 19.6],
    12: [0, 5],
    13: [36.9, 49.9],
    14: [64, 77],
    15: [74, 114],
    16: [64, 151],
    17: [37, 178],
    18: [0, 188],
    19: [-37, 178],
    20: [-64, 151],
    21: [-74, 114],
    22: [-64, 77],
    23: [-37, 50],
};
var ClockNumber = /** @class */ (function (_super) {
    __extends(ClockNumber, _super);
    function ClockNumber() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getTransformStyle = function (index) {
            var position = positions[index];
            return {
                transform: "translate(" + position[0] + "px, " + position[1] + "px",
            };
        };
        return _this;
    }
    ClockNumber.prototype.render = function () {
        var _a;
        var _b = this.props, selected = _b.selected, label = _b.label, index = _b.index, classes = _b.classes, isInner = _b.isInner;
        var className = clsx_1.default(classes.clockNumber, (_a = {},
            _a[classes.selected] = selected,
            _a));
        return (React.createElement(Typography_1.default, { component: "span", className: className, variant: isInner ? 'body2' : 'body1', style: this.getTransformStyle(index) }, label));
    };
    ClockNumber.propTypes = {
        index: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        selected: PropTypes.bool.isRequired,
        classes: PropTypes.object.isRequired,
        isInner: PropTypes.bool,
        innerRef: PropTypes.any,
    };
    ClockNumber.defaultProps = {
        isInner: false,
    };
    return ClockNumber;
}(React.Component));
exports.ClockNumber = ClockNumber;
exports.styles = function (theme) {
    var size = theme.spacing.unit * 4;
    return createStyles_1.default({
        clockNumber: {
            width: size,
            height: size,
            userSelect: 'none',
            position: 'absolute',
            left: "calc(50% - " + size / 2 + "px)",
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
            color: theme.palette.type === 'light' ? theme.palette.text.primary : theme.palette.text.hint,
        },
        selected: {
            color: theme.palette.common.white,
        },
    });
};
exports.default = withStyles_1.default(exports.styles, {
    name: 'MuiPickersClockNumber',
})(ClockNumber);
