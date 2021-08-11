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
var createStyles_1 = __importDefault(require("@material-ui/core/styles/createStyles"));
var withStyles_1 = __importDefault(require("@material-ui/core/styles/withStyles"));
var clsx_1 = __importDefault(require("clsx"));
var PropTypes = __importStar(require("prop-types"));
var React = __importStar(require("react"));
var react_transition_group_1 = require("react-transition-group");
var animationDuration = 350;
exports.styles = function (theme) {
    var slideTransition = theme.transitions.create('transform', {
        duration: animationDuration,
        easing: 'cubic-bezier(0.35, 0.8, 0.4, 1)',
    });
    return createStyles_1.default({
        transitionContainer: {
            display: 'block',
            position: 'relative',
            '& > *': {
                position: 'absolute',
                top: 0,
                right: 0,
                left: 0,
            },
        },
        'slideEnter-left': {
            willChange: 'transform',
            transform: 'translate(100%)',
        },
        'slideEnter-right': {
            willChange: 'transform',
            transform: 'translate(-100%)',
        },
        slideEnterActive: {
            transform: 'translate(0%)',
            transition: slideTransition,
        },
        slideExit: {
            transform: 'translate(0%)',
        },
        'slideExitActiveLeft-left': {
            willChange: 'transform',
            transform: 'translate(-200%)',
            transition: slideTransition,
        },
        'slideExitActiveLeft-right': {
            willChange: 'transform',
            transform: 'translate(200%)',
            transition: slideTransition,
        },
    });
};
var SlideTransition = function (_a) {
    var classes = _a.classes, _b = _a.className, className = _b === void 0 ? null : _b, children = _a.children, transKey = _a.transKey, slideDirection = _a.slideDirection;
    var transitionClasses = {
        enter: classes['slideEnter-' + slideDirection],
        enterActive: classes.slideEnterActive,
        exit: classes.slideExit,
        exitActive: classes['slideExitActiveLeft-' + slideDirection],
    };
    return (React.createElement(react_transition_group_1.TransitionGroup, { className: clsx_1.default(classes.transitionContainer, className), childFactory: function (element) {
            return React.cloneElement(element, {
                classNames: transitionClasses,
            });
        } },
        React.createElement(react_transition_group_1.CSSTransition, { key: transKey + slideDirection, mountOnEnter: true, unmountOnExit: true, timeout: animationDuration, children: children, classNames: transitionClasses })));
};
SlideTransition.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    slideDirection: PropTypes.oneOf(['left', 'right']).isRequired,
    transKey: PropTypes.string.isRequired,
    innerRef: PropTypes.any,
};
exports.default = withStyles_1.default(exports.styles, {
    name: 'MuiPickersSlideTransition',
})(SlideTransition);
