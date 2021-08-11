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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = __importStar(require("prop-types"));
var React = __importStar(require("react"));
var DayWrapper = /** @class */ (function (_super) {
    __extends(DayWrapper, _super);
    function DayWrapper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function () {
            _this.props.onSelect(_this.props.value);
        };
        return _this;
    }
    DayWrapper.prototype.render = function () {
        var _a = this.props, children = _a.children, value = _a.value, dayInCurrentMonth = _a.dayInCurrentMonth, disabled = _a.disabled, onSelect = _a.onSelect, other = __rest(_a, ["children", "value", "dayInCurrentMonth", "disabled", "onSelect"]);
        return (React.createElement("div", __assign({ onClick: dayInCurrentMonth && !disabled ? this.handleClick : undefined, onKeyPress: dayInCurrentMonth && !disabled ? this.handleClick : undefined, role: "presentation" }, other), children));
    };
    DayWrapper.propTypes = {
        children: PropTypes.node.isRequired,
        dayInCurrentMonth: PropTypes.bool,
        disabled: PropTypes.bool,
        onSelect: PropTypes.func.isRequired,
        value: PropTypes.any.isRequired,
    };
    DayWrapper.defaultProps = {
        dayInCurrentMonth: true,
        disabled: false,
    };
    return DayWrapper;
}(React.PureComponent));
exports.default = DayWrapper;
