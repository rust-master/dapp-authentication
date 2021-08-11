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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var MuiPickersUtilsProvider_1 = require("../MuiPickersUtilsProvider");
var checkUtils = function (utils) {
    if (!utils) {
        // tslint:disable-next-line
        throw new Error('Can not find utils in context. You either a) forgot to wrap your component tree in MuiPickersUtilsProvider; or b) mixed named and direct file imports.  Recommendation: use named imports from the module index.');
    }
};
exports.withUtils = function () { return function (Component) {
    var WithUtils = function (props) { return (React.createElement(MuiPickersUtilsProvider_1.MuiPickersContext.Consumer, null, function (utils) {
        checkUtils(utils);
        return React.createElement(Component, __assign({ utils: utils }, props));
    })); };
    WithUtils.displayName = "WithUtils(" + (Component.displayName || Component.name) + ")";
    return WithUtils;
}; };
