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
var Popover_1 = __importDefault(require("@material-ui/core/Popover"));
var withStyles_1 = __importDefault(require("@material-ui/core/styles/withStyles"));
var clsx_1 = __importDefault(require("clsx"));
var PropTypes = __importStar(require("prop-types"));
var React = __importStar(require("react"));
var react_event_listener_1 = __importDefault(require("react-event-listener"));
var DateTextField_1 = __importDefault(require("../_shared/DateTextField"));
var dimensions_1 = require("../constants/dimensions");
var InlineWrapper = /** @class */ (function (_super) {
    __extends(InlineWrapper, _super);
    function InlineWrapper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            anchorEl: null,
        };
        _this.open = function (e) {
            _this.setState({ anchorEl: e.currentTarget });
            if (_this.props.onOpen) {
                _this.props.onOpen();
            }
        };
        _this.close = function () {
            _this.setState({ anchorEl: null });
            _this.props.handleAccept();
            if (_this.props.onClose) {
                _this.props.onClose();
            }
        };
        _this.handleKeyDown = function (event) {
            switch (event.key) {
                case 'Enter': {
                    _this.props.handleAccept();
                    _this.close();
                    break;
                }
                default:
                    // if key is not handled, stop execution
                    return;
            }
            // if event was handled prevent other side effects
            event.preventDefault();
        };
        return _this;
    }
    InlineWrapper.getDerivedStateFromProps = function (nextProps) {
        // only if accept = true close the popover
        if (nextProps.isAccepted) {
            if (nextProps.onClose) {
                nextProps.onClose();
            }
            return {
                anchorEl: null,
            };
        }
        return null;
    };
    InlineWrapper.prototype.render = function () {
        var _a;
        var _b = this.props, value = _b.value, format = _b.format, children = _b.children, onOpen = _b.onOpen, onClose = _b.onClose, PopoverProps = _b.PopoverProps, isAccepted = _b.isAccepted, keyboard = _b.keyboard, onlyCalendar = _b.onlyCalendar, classes = _b.classes, handleAccept = _b.handleAccept, wider = _b.wider, other = __rest(_b, ["value", "format", "children", "onOpen", "onClose", "PopoverProps", "isAccepted", "keyboard", "onlyCalendar", "classes", "handleAccept", "wider"]);
        var isOpen = Boolean(this.state.anchorEl);
        return (React.createElement(React.Fragment, null,
            isOpen && React.createElement(react_event_listener_1.default, { target: "window", onKeyDown: this.handleKeyDown }),
            React.createElement(DateTextField_1.default, __assign({ value: value, format: format, onClick: this.open, keyboard: keyboard }, other)),
            React.createElement(Popover_1.default, __assign({ id: "picker-popover", open: isOpen, anchorEl: this.state.anchorEl, onClose: this.close, classes: {
                    paper: clsx_1.default(classes.popoverPaper, (_a = {}, _a[classes.popoverPaperWider] = wider, _a)),
                }, anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: keyboard ? 'right' : 'center',
                }, transformOrigin: {
                    vertical: 'top',
                    horizontal: keyboard ? 'right' : 'center',
                }, children: children }, PopoverProps))));
    };
    InlineWrapper.propTypes = {
        onlyCalendar: PropTypes.bool,
        onOpen: PropTypes.func,
        onClose: PropTypes.func,
        PopoverProps: PropTypes.object,
    };
    InlineWrapper.defaultProps = {
        value: new Date(),
        onlyCalendar: false,
        isAccepted: false,
    };
    return InlineWrapper;
}(React.PureComponent));
exports.InlineWrapper = InlineWrapper;
exports.styles = {
    popoverPaper: {
        width: dimensions_1.DIALOG_WIDTH,
        paddingBottom: 8,
    },
    popoverPaperWider: {
        width: dimensions_1.DIALOG_WIDTH_WIDER,
    },
};
exports.default = withStyles_1.default(exports.styles)(InlineWrapper);
