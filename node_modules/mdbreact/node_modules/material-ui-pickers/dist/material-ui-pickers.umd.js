(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types'), require('@material-ui/core/IconButton'), require('@material-ui/core/InputAdornment'), require('@material-ui/core/TextField'), require('@material-ui/core/SvgIcon'), require('@material-ui/core/Button'), require('@material-ui/core/Dialog'), require('@material-ui/core/DialogActions'), require('@material-ui/core/DialogContent'), require('@material-ui/core/styles'), require('@material-ui/core/styles/createStyles'), require('@material-ui/core/styles/withStyles'), require('@material-ui/core/Toolbar'), require('@material-ui/core/Typography'), require('react-dom'), require('@material-ui/core/Popover'), require('@material-ui/core/Paper'), require('@material-ui/core/Tab'), require('@material-ui/core/Tabs')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types', '@material-ui/core/IconButton', '@material-ui/core/InputAdornment', '@material-ui/core/TextField', '@material-ui/core/SvgIcon', '@material-ui/core/Button', '@material-ui/core/Dialog', '@material-ui/core/DialogActions', '@material-ui/core/DialogContent', '@material-ui/core/styles', '@material-ui/core/styles/createStyles', '@material-ui/core/styles/withStyles', '@material-ui/core/Toolbar', '@material-ui/core/Typography', 'react-dom', '@material-ui/core/Popover', '@material-ui/core/Paper', '@material-ui/core/Tab', '@material-ui/core/Tabs'], factory) :
    (global = global || self, factory(global['material-ui-pickers'] = {}, global.React, global.PropTypes, global['material-ui'].IconButton, global['material-ui'].InputAdornment, global['material-ui'].TextField, global['material-ui'].SvgIcon, global['material-ui'].Button, global['material-ui'].Dialog, global['material-ui'].DialogActions, global['material-ui'].DialogContent, global['material-ui'].styles, global['material-ui'].createStyles, global['material-ui'].withStyles, global['material-ui'].Toolbar, global['material-ui'].Typography, global.ReactDOM, global['material-ui'].Popover, global['material-ui'].Paper, global['material-ui'].Tab, global['material-ui'].Tabs));
}(this, function (exports, React, PropTypes$1, IconButton, InputAdornment, TextField, SvgIcon, Button, Dialog, DialogActions, DialogContent, styles$j, createStyles, withStyles, Toolbar, Typography, reactDom, Popover, Paper, Tab, Tabs) { 'use strict';

    var React__default = 'default' in React ? React['default'] : React;
    var PropTypes$1__default = 'default' in PropTypes$1 ? PropTypes$1['default'] : PropTypes$1;
    IconButton = IconButton && IconButton.hasOwnProperty('default') ? IconButton['default'] : IconButton;
    InputAdornment = InputAdornment && InputAdornment.hasOwnProperty('default') ? InputAdornment['default'] : InputAdornment;
    TextField = TextField && TextField.hasOwnProperty('default') ? TextField['default'] : TextField;
    SvgIcon = SvgIcon && SvgIcon.hasOwnProperty('default') ? SvgIcon['default'] : SvgIcon;
    Button = Button && Button.hasOwnProperty('default') ? Button['default'] : Button;
    Dialog = Dialog && Dialog.hasOwnProperty('default') ? Dialog['default'] : Dialog;
    DialogActions = DialogActions && DialogActions.hasOwnProperty('default') ? DialogActions['default'] : DialogActions;
    DialogContent = DialogContent && DialogContent.hasOwnProperty('default') ? DialogContent['default'] : DialogContent;
    createStyles = createStyles && createStyles.hasOwnProperty('default') ? createStyles['default'] : createStyles;
    withStyles = withStyles && withStyles.hasOwnProperty('default') ? withStyles['default'] : withStyles;
    Toolbar = Toolbar && Toolbar.hasOwnProperty('default') ? Toolbar['default'] : Toolbar;
    Typography = Typography && Typography.hasOwnProperty('default') ? Typography['default'] : Typography;
    var reactDom__default = 'default' in reactDom ? reactDom['default'] : reactDom;
    Popover = Popover && Popover.hasOwnProperty('default') ? Popover['default'] : Popover;
    Paper = Paper && Paper.hasOwnProperty('default') ? Paper['default'] : Paper;
    Tab = Tab && Tab.hasOwnProperty('default') ? Tab['default'] : Tab;
    Tabs = Tabs && Tabs.hasOwnProperty('default') ? Tabs['default'] : Tabs;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    }

    var findClosestEnabledDate = function (_a) {
      var date = _a.date,
          utils = _a.utils,
          minDate = _a.minDate,
          maxDate = _a.maxDate,
          disableFuture = _a.disableFuture,
          disablePast = _a.disablePast,
          shouldDisableDate = _a.shouldDisableDate;
      var today = utils.startOfDay(utils.date());
      minDate = minDate && utils.date(minDate);
      maxDate = maxDate && utils.date(maxDate);

      if (disablePast && utils.isBefore(minDate, today)) {
        minDate = today;
      }

      if (disableFuture && utils.isAfter(maxDate, today)) {
        maxDate = today;
      }

      var forward = date;
      var backward = date;

      if (utils.isBefore(date, minDate)) {
        forward = utils.date(minDate);
        backward = null;
      }

      if (utils.isAfter(date, maxDate)) {
        if (backward) {
          backward = utils.date(maxDate);
        }

        forward = null;
      }

      while (forward || backward) {
        if (forward && utils.isAfter(forward, maxDate)) {
          forward = null;
        }

        if (backward && utils.isBefore(backward, minDate)) {
          backward = null;
        }

        if (forward) {
          if (!shouldDisableDate(forward)) {
            return forward;
          }

          forward = utils.addDays(forward, 1);
        }

        if (backward) {
          if (!shouldDisableDate(backward)) {
            return backward;
          }

          backward = utils.addDays(backward, -1);
        }
      }

      return null;
    };
    var isYearOnlyView = function (views) {
      return views.length === 1 && views[0] === 'year';
    };
    var isYearAndMonthViews = function (views) {
      return views.length === 2 && views.includes('month') && views.includes('year');
    };
    var getFormatByViews = function (views, utils) {
      if (isYearOnlyView(views)) {
        return utils.yearFormat;
      }

      if (isYearAndMonthViews(views)) {
        return utils.yearMonthFormat;
      }

      return utils.dateFormat;
    };

    var date = PropTypes$1.oneOfType([PropTypes$1.object, PropTypes$1.string, PropTypes$1.number, PropTypes$1.instanceOf(Date)]);
    var datePickerView = PropTypes$1.oneOf(['year', 'month', 'day']);
    var DomainPropTypes = {
      date: date,
      datePickerView: datePickerView
    };

    var MuiPickersContext = React.createContext(null); // TODO remove in v3.0

    var MuiPickersContextConsumer = MuiPickersContext.Consumer;

    var MuiPickersUtilsProvider =
    /** @class */
    function (_super) {
      __extends(MuiPickersUtilsProvider, _super);

      function MuiPickersUtilsProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.state = {
          utils: null
        };
        return _this;
      }

      MuiPickersUtilsProvider.getDerivedStateFromProps = function (_a) {
        var Utils = _a.utils,
            locale = _a.locale,
            moment = _a.moment;
        return {
          utils: new Utils({
            locale: locale,
            moment: moment
          })
        };
      };

      MuiPickersUtilsProvider.prototype.render = function () {
        return React.createElement(MuiPickersContext.Provider, {
          value: this.state.utils,
          children: this.props.children
        });
      };

      MuiPickersUtilsProvider.propTypes = {
        utils: PropTypes$1.func.isRequired,
        locale: PropTypes$1.oneOfType([PropTypes$1.object, PropTypes$1.string]),
        children: PropTypes$1.oneOfType([PropTypes$1.element.isRequired, PropTypes$1.arrayOf(PropTypes$1.element.isRequired)]).isRequired,
        moment: PropTypes$1.func
      };
      return MuiPickersUtilsProvider;
    }(React.Component);

    var checkUtils = function (utils) {
      if (!utils) {
        // tslint:disable-next-line
        throw new Error('Can not find utils in context. You either a) forgot to wrap your component tree in MuiPickersUtilsProvider; or b) mixed named and direct file imports.  Recommendation: use named imports from the module index.');
      }
    };

    var withUtils = function () {
      return function (Component) {
        var WithUtils = function (props) {
          return React.createElement(MuiPickersContext.Consumer, null, function (utils) {
            checkUtils(utils);
            return React.createElement(Component, __assign({
              utils: utils
            }, props));
          });
        };

        WithUtils.displayName = "WithUtils(" + (Component.displayName || Component.name) + ")";
        return WithUtils;
      };
    };

    var getInitialDate = function (_a) {
      var utils = _a.utils,
          value = _a.value,
          initialFocusedDate = _a.initialFocusedDate;
      var initialDate = value || initialFocusedDate || utils.date();
      var date = utils.date(initialDate);
      return date && utils.isValid(date) ? date : utils.date();
    };

    var BasePicker =
    /** @class */
    function (_super) {
      __extends(BasePicker, _super);

      function BasePicker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.state = {
          date: getInitialDate(_this.props),
          isAccepted: false
        };

        _this.changeDate = function (date, callback) {
          return _this.setState({
            date: date
          }, callback);
        };

        _this.handleAcceptedChange = function (isAccepted, callback) {
          return _this.setState({
            isAccepted: isAccepted
          }, callback);
        };

        _this.handleClear = function () {
          return _this.props.onChange(null);
        };

        _this.handleAccept = function () {
          return _this.props.onChange(_this.state.date);
        };

        _this.handleSetTodayDate = function () {
          return _this.handleChange(_this.props.utils.date(), false);
        };

        _this.handleTextFieldChange = function (date) {
          var _a = _this.props,
              onChange = _a.onChange,
              utils = _a.utils,
              mergePreviousDateOnChange = _a.mergePreviousDateOnChange;

          if (mergePreviousDateOnChange) {
            date = utils.mergeDateAndTime(_this.state.date, date);
          }

          if (date === null) {
            onChange(null);
          } else {
            _this.changeDate(date, function () {
              return onChange(date);
            });
          }
        };

        _this.pick12hOr24hFormat = function (default12hFormat, default24hFormat) {
          var _a = _this.props,
              format = _a.format,
              ampm = _a.ampm;

          if (format) {
            return format;
          }

          return ampm ? default12hFormat : default24hFormat;
        };

        _this.handleChange = function (newDate, isFinish) {
          if (isFinish === void 0) {
            isFinish = true;
          }

          var _a = _this.props,
              autoOk = _a.autoOk,
              onChange = _a.onChange;

          _this.changeDate(newDate, function () {
            if (isFinish && autoOk) {
              onChange(newDate); // pass down accept true, and make it false in the next tick

              _this.handleAcceptedChange(true, function () {
                return _this.handleAcceptedChange(false);
              });
            }
          });
        };

        _this.handleDismiss = function () {
          _this.setState({
            date: getInitialDate(_this.props)
          });
        };

        return _this;
      }

      BasePicker.prototype.componentDidUpdate = function (prevProps) {
        var _a = this.props,
            utils = _a.utils,
            value = _a.value,
            initialFocusedDate = _a.initialFocusedDate;

        if (prevProps.value !== value || prevProps.utils.locale !== utils.locale || prevProps.initialFocusedDate !== initialFocusedDate) {
          this.changeDate(getInitialDate(this.props));
        }
      };

      BasePicker.prototype.render = function () {
        return this.props.children(__assign({}, this.state, {
          utils: this.props.utils,
          changeDate: this.changeDate,
          handleAcceptedChange: this.handleAcceptedChange,
          handleClear: this.handleClear,
          handleAccept: this.handleAccept,
          handleDismiss: this.handleDismiss,
          handleSetTodayDate: this.handleSetTodayDate,
          handleTextFieldChange: this.handleTextFieldChange,
          pick12hOr24hFormat: this.pick12hOr24hFormat,
          handleChange: this.handleChange
        }));
      };

      BasePicker.propTypes = {
        value: DomainPropTypes.date,
        onChange: PropTypes$1.func.isRequired,
        autoOk: PropTypes$1.bool,
        initialFocusedDate: PropTypes$1.any
      };
      BasePicker.defaultProps = {
        value: new Date(),
        autoOK: false,
        ampm: true
      };
      return BasePicker;
    }(React.Component);
    var BasePicker$1 = withUtils()(BasePicker);

    var getDisplayDate = function (_a) {
      var utils = _a.utils,
          value = _a.value,
          format = _a.format,
          invalidLabel = _a.invalidLabel,
          emptyLabel = _a.emptyLabel,
          labelFunc = _a.labelFunc;
      var isEmpty = value === null;
      var date = utils.date(value);

      if (labelFunc) {
        return labelFunc(isEmpty ? null : date, invalidLabel);
      }

      if (isEmpty) {
        return emptyLabel;
      }

      return utils.isValid(date) ? utils.format(date, format) : invalidLabel;
    };
    var getError = function (value, props) {
      var utils = props.utils,
          maxDate = props.maxDate,
          minDate = props.minDate,
          disablePast = props.disablePast,
          disableFuture = props.disableFuture,
          maxDateMessage = props.maxDateMessage,
          minDateMessage = props.minDateMessage,
          invalidDateMessage = props.invalidDateMessage; // if null - do not show error

      if (utils.isNull(value)) {
        return '';
      }

      if (!utils.isValid(value)) {
        return invalidDateMessage;
      }

      if (maxDate && utils.isAfter(value, utils.endOfDay(utils.date(maxDate))) || disableFuture && utils.isAfter(value, utils.endOfDay(utils.date()))) {
        return maxDateMessage;
      }

      if (minDate && utils.isBefore(value, utils.startOfDay(utils.date(minDate))) || disablePast && utils.isBefore(value, utils.startOfDay(utils.date()))) {
        return minDateMessage;
      }

      return '';
    };

    var KeyboardIcon = function (props) {
      return React__default.createElement(SvgIcon, __assign({}, props), React__default.createElement("path", {
        d: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"
      }), React__default.createElement("path", {
        fill: "none",
        d: "M0 0h24v24H0z"
      }));
    };

    var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function unwrapExports (x) {
    	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
    }

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var reactTextMask = createCommonjsModule(function (module, exports) {
    !function(e,t){module.exports=t(React__default);}(commonjsGlobal,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t);}Object.defineProperty(t,"__esModule",{value:!0}),t.conformToMask=void 0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);}return e},l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n);}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=r(3);Object.defineProperty(t,"conformToMask",{enumerable:!0,get:function(){return n(f).default}});var c=r(11),p=n(c),d=r(9),h=n(d),v=r(5),y=n(v),m=r(2),b=function(e){function t(){var e;i(this,t);for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];var u=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(n)));return u.setRef=u.setRef.bind(u),u.onBlur=u.onBlur.bind(u),u.onChange=u.onChange.bind(u),u}return u(t,e),l(t,[{key:"setRef",value:function(e){this.inputElement=e;}},{key:"initTextMask",value:function(){var e=this.props,t=this.props.value;this.textMaskInputElement=(0, y.default)(s({inputElement:this.inputElement},e)),this.textMaskInputElement.update(t);}},{key:"componentDidMount",value:function(){this.initTextMask();}},{key:"componentDidUpdate",value:function(e){var t=this.props,r=t.value,n=t.pipe,o=t.mask,i=t.guide,a=t.placeholderChar,u=t.showMask,s={guide:i,placeholderChar:a,showMask:u},l="function"==typeof n&&"function"==typeof e.pipe?n.toString()!==e.pipe.toString():(0, m.isNil)(n)&&!(0, m.isNil)(e.pipe)||!(0, m.isNil)(n)&&(0, m.isNil)(e.pipe),f=o.toString()!==e.mask.toString(),c=Object.keys(s).some(function(t){return s[t]!==e[t]})||f||l,p=r!==this.inputElement.value;(p||c)&&this.initTextMask();}},{key:"render",value:function e(){var t=this.props,e=t.render,r=o(t,["render"]);return delete r.mask,delete r.guide,delete r.pipe,delete r.placeholderChar,delete r.keepCharPositions,delete r.value,delete r.onBlur,delete r.onChange,delete r.showMask,e(this.setRef,s({onBlur:this.onBlur,onChange:this.onChange,defaultValue:this.props.value},r))}},{key:"onChange",value:function(e){this.textMaskInputElement.update(),"function"==typeof this.props.onChange&&this.props.onChange(e);}},{key:"onBlur",value:function(e){"function"==typeof this.props.onBlur&&this.props.onBlur(e);}}]),t}(p.default.PureComponent);t.default=b,b.propTypes={mask:h.default.oneOfType([h.default.array,h.default.func,h.default.bool,h.default.shape({mask:h.default.oneOfType([h.default.array,h.default.func]),pipe:h.default.func})]).isRequired,guide:h.default.bool,value:h.default.oneOfType([h.default.string,h.default.number]),pipe:h.default.func,placeholderChar:h.default.string,keepCharPositions:h.default.bool,showMask:h.default.bool},b.defaultProps={render:function(e,t){return p.default.createElement("input",s({ref:e},t))}};},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.placeholderChar="_",t.strFunction="function";},function(e,t,r){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l.placeholderChar;if(!o(e))throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");if(e.indexOf(t)!==-1)throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n"+("The placeholder character that was received is: "+JSON.stringify(t)+"\n\n")+("The mask that was received is: "+JSON.stringify(e)));return e.map(function(e){return e instanceof RegExp?t:e}).join("")}function o(e){return Array.isArray&&Array.isArray(e)||e instanceof Array}function i(e){return "string"==typeof e||e instanceof String}function a(e){return "number"==typeof e&&void 0===e.length&&!isNaN(e)}function u(e){return "undefined"==typeof e||null===e}function s(e){for(var t=[],r=void 0;r=e.indexOf(c),r!==-1;)t.push(r),e.splice(r,1);return {maskWithoutCaretTraps:e,indexes:t}}Object.defineProperty(t,"__esModule",{value:!0}),t.convertMaskToPlaceholder=n,t.isArray=o,t.isString=i,t.isNumber=a,t.isNil=u,t.processCaretTraps=s;var l=r(1),f=[],c="[]";},function(e,t,r){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!(0, i.isArray)(t)){if(("undefined"==typeof t?"undefined":o(t))!==a.strFunction)throw new Error("Text-mask:conformToMask; The mask property must be an array.");t=t(e,r),t=(0, i.processCaretTraps)(t).maskWithoutCaretTraps;}var n=r.guide,l=void 0===n||n,f=r.previousConformedValue,c=void 0===f?s:f,p=r.placeholderChar,d=void 0===p?a.placeholderChar:p,h=r.placeholder,v=void 0===h?(0, i.convertMaskToPlaceholder)(t,d):h,y=r.currentCaretPosition,m=r.keepCharPositions,b=l===!1&&void 0!==c,g=e.length,k=c.length,C=v.length,O=t.length,T=g-k,P=T>0,x=y+(P?-T:0),w=x+Math.abs(T);if(m===!0&&!P){for(var S=s,_=x;_<w;_++)v[_]===d&&(S+=d);e=e.slice(0,x)+S+e.slice(x,g);}for(var M=e.split(s).map(function(e,t){return {char:e,isNew:t>=x&&t<w}}),j=g-1;j>=0;j--){var E=M[j].char;if(E!==d){var R=j>=x&&k===O;E===v[R?j-T:j]&&M.splice(j,1);}}var V=s,N=!1;e:for(var A=0;A<C;A++){var B=v[A];if(B===d){if(M.length>0)for(;M.length>0;){var I=M.shift(),F=I.char,q=I.isNew;if(F===d&&b!==!0){V+=d;continue e}if(t[A].test(F)){if(m===!0&&q!==!1&&c!==s&&l!==!1&&P){for(var D=M.length,L=null,W=0;W<D;W++){var J=M[W];if(J.char!==d&&J.isNew===!1)break;if(J.char===d){L=W;break}}null!==L?(V+=F,M.splice(L,1)):A--;}else V+=F;continue e}N=!0;}b===!1&&(V+=v.substr(A,C));break}V+=B;}if(b&&P===!1){for(var U=null,H=0;H<V.length;H++)v[H]===d&&(U=H);V=null!==U?V.substr(0,U+1):s;}return {conformedValue:V,meta:{someCharsRejected:N}}}Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=n;var i=r(2),a=r(1),u=[],s="";},function(e,t){function r(e){var t=e.previousConformedValue,r=void 0===t?o:t,i=e.previousPlaceholder,a=void 0===i?o:i,u=e.currentCaretPosition,s=void 0===u?0:u,l=e.conformedValue,f=e.rawValue,c=e.placeholderChar,p=e.placeholder,d=e.indexesOfPipedChars,h=void 0===d?n:d,v=e.caretTrapIndexes,y=void 0===v?n:v;if(0===s||!f.length)return 0;var m=f.length,b=r.length,g=p.length,k=l.length,C=m-b,O=C>0,T=0===b,P=C>1&&!O&&!T;if(P)return s;var x=O&&(r===l||l===p),w=0,S=void 0,_=void 0;if(x)w=s-C;else{var M=l.toLowerCase(),j=f.toLowerCase(),E=j.substr(0,s).split(o),R=E.filter(function(e){return M.indexOf(e)!==-1});_=R[R.length-1];var V=a.substr(0,R.length).split(o).filter(function(e){return e!==c}).length,N=p.substr(0,R.length).split(o).filter(function(e){return e!==c}).length,A=N!==V,B=void 0!==a[R.length-1]&&void 0!==p[R.length-2]&&a[R.length-1]!==c&&a[R.length-1]!==p[R.length-1]&&a[R.length-1]===p[R.length-2];!O&&(A||B)&&V>0&&p.indexOf(_)>-1&&void 0!==f[s]&&(S=!0,_=f[s]);for(var I=h.map(function(e){return M[e]}),F=I.filter(function(e){return e===_}).length,q=R.filter(function(e){return e===_}).length,D=p.substr(0,p.indexOf(c)).split(o).filter(function(e,t){return e===_&&f[t]!==e}).length,L=D+q+F+(S?1:0),W=0,J=0;J<k;J++){var U=M[J];if(w=J+1,U===_&&W++,W>=L)break}}if(O){for(var H=w,Y=w;Y<=g;Y++)if(p[Y]===c&&(H=Y),p[Y]===c||y.indexOf(Y)!==-1||Y===g)return H}else if(S){for(var z=w-1;z>=0;z--)if(l[z]===_||y.indexOf(z)!==-1||0===z)return z}else for(var G=w;G>=0;G--)if(p[G-1]===c||y.indexOf(G)!==-1||0===G)return G}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var n=[],o="";},function(e,t,r){function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var t={previousConformedValue:void 0,previousPlaceholder:void 0};return {state:t,update:function(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,o=n.inputElement,l=n.mask,c=n.guide,y=n.pipe,b=n.placeholderChar,g=void 0===b?h.placeholderChar:b,k=n.keepCharPositions,C=void 0!==k&&k,O=n.showMask,T=void 0!==O&&O;if("undefined"==typeof r&&(r=o.value),r!==t.previousConformedValue){("undefined"==typeof l?"undefined":s(l))===m&&void 0!==l.pipe&&void 0!==l.mask&&(y=l.pipe,l=l.mask);var P=void 0,x=void 0;if(l instanceof Array&&(P=(0, d.convertMaskToPlaceholder)(l,g)),l!==!1){var w=a(r),S=o.selectionEnd,_=t.previousConformedValue,M=t.previousPlaceholder,j=void 0;if(("undefined"==typeof l?"undefined":s(l))===h.strFunction){if(x=l(w,{currentCaretPosition:S,previousConformedValue:_,placeholderChar:g}),x===!1)return;var E=(0, d.processCaretTraps)(x),R=E.maskWithoutCaretTraps,V=E.indexes;x=R,j=V,P=(0, d.convertMaskToPlaceholder)(x,g);}else x=l;var N={previousConformedValue:_,guide:c,placeholderChar:g,pipe:y,placeholder:P,currentCaretPosition:S,keepCharPositions:C},A=(0, p.default)(w,x,N),B=A.conformedValue,I=("undefined"==typeof y?"undefined":s(y))===h.strFunction,F={};I&&(F=y(B,u({rawValue:w},N)),F===!1?F={value:_,rejected:!0}:(0, d.isString)(F)&&(F={value:F}));var q=I?F.value:B,D=(0, f.default)({previousConformedValue:_,previousPlaceholder:M,conformedValue:q,placeholder:P,rawValue:w,currentCaretPosition:S,placeholderChar:g,indexesOfPipedChars:F.indexesOfPipedChars,caretTrapIndexes:j}),L=q===P&&0===D,W=T?P:v,J=L?W:q;t.previousConformedValue=J,t.previousPlaceholder=P,o.value!==J&&(o.value=J,i(o,D));}}}}}function i(e,t){document.activeElement===e&&(b?g(function(){return e.setSelectionRange(t,t,y)},0):e.setSelectionRange(t,t,y));}function a(e){if((0, d.isString)(e))return e;if((0, d.isNumber)(e))return String(e);if(void 0===e||null===e)return v;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);}return e},s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=o;var l=r(4),f=n(l),c=r(3),p=n(c),d=r(2),h=r(1),v="",y="none",m="object",b="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),g="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout;},function(e,t){function r(e){return function(){return e}}var n=function(){};n.thatReturns=r,n.thatReturnsFalse=r(!1),n.thatReturnsTrue=r(!0),n.thatReturnsNull=r(null),n.thatReturnsThis=function(){return this},n.thatReturnsArgument=function(e){return e},e.exports=n;},function(e,t,r){function n(e,t,r,n,i,a,u,s){if(!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var f=[r,n,i,a,u,s],c=0;l=new Error(t.replace(/%s/g,function(){return f[c++]})),l.name="Invariant Violation";}throw l.framesToPop=1,l}}e.exports=n;},function(e,t,r){var n=r(6),o=r(7),i=r(10);e.exports=function(){function e(e,t,r,n,a,u){u!==i&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return r.checkPropTypes=n,r.PropTypes=r,r};},function(e,t,r){e.exports=r(8)();},function(e,t){var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";e.exports=r;},function(t,r){t.exports=e;}])});
    });

    var MaskedInput = unwrapExports(reactTextMask);
    var reactTextMask_1 = reactTextMask.reactTextMask;

    var Input =
    /** @class */
    function (_super) {
      __extends(Input, _super);

      function Input() {
        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.createInputRef = function (ref) {
          var inputRef = _this.props.inputRef;

          if (inputRef && typeof inputRef === 'function') {
            // @ts-ignore inputElement exists in Masked input. Issue in typings
            inputRef(ref ? ref.inputElement : null);
          }
        };

        return _this;
      }

      Input.prototype.render = function () {
        var _a = this.props,
            inputRef = _a.inputRef,
            keepCharPositions = _a.keepCharPositions,
            rest = __rest(_a, ["inputRef", "keepCharPositions"]);

        return this.props.mask ? React.createElement(MaskedInput, __assign({}, rest, {
          ref: this.createInputRef,
          keepCharPositions: keepCharPositions
        })) : React.createElement("input", __assign({}, rest, {
          ref: inputRef
        }));
      };

      Input.propTypes = {
        mask: PropTypes$1.any,
        inputRef: PropTypes$1.func.isRequired
      };
      return Input;
    }(React.PureComponent);

    var DateTextField =
    /** @class */
    function (_super) {
      __extends(DateTextField, _super);

      function DateTextField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.state = DateTextField.getStateFromProps(_this.props);

        _this.commitUpdates = function (value) {
          var _a = _this.props,
              onChange = _a.onChange,
              clearable = _a.clearable,
              onClear = _a.onClear,
              utils = _a.utils,
              format = _a.format,
              onError = _a.onError;

          if (value === '') {
            if (_this.props.value === null) {
              _this.setState(DateTextField.getStateFromProps(_this.props));
            } else if (clearable && onClear) {
              onClear();
            }

            return;
          }

          var oldValue = utils.date(_this.state.value);
          var newValue = utils.parse(value, format);
          var error = getError(newValue, _this.props);

          _this.setState({
            error: error,
            displayValue: value,
            value: error ? newValue : oldValue
          }, function () {
            if (!error && !utils.isEqual(newValue, oldValue)) {
              onChange(newValue);
            }

            if (error && onError) {
              onError(newValue, error);
            }
          });
        };

        _this.handleBlur = function (e) {
          if (_this.props.keyboard) {
            e.preventDefault();
            e.stopPropagation();

            _this.commitUpdates(e.target.value);

            if (_this.props.onBlur) {
              _this.props.onBlur(e);
            }
          }
        };

        _this.handleChange = function (e) {
          var _a = _this.props,
              utils = _a.utils,
              format = _a.format,
              onInputChange = _a.onInputChange;
          var parsedValue = utils.parse(e.target.value, format);

          if (onInputChange) {
            onInputChange(e);
          }

          _this.setState({
            displayValue: e.target.value,
            error: getError(parsedValue, _this.props)
          });
        };

        _this.handleFocus = function (e) {
          e.stopPropagation();
          e.preventDefault();

          if (!_this.props.keyboard) {
            _this.openPicker(e);
          }
        };

        _this.handleKeyPress = function (e) {
          if (e.key === 'Enter') {
            if (!_this.props.disableOpenOnEnter) {
              _this.openPicker(e);
            } else {
              // @ts-ignore TODO check me
              _this.commitUpdates(e.target.value);
            }
          }
        };

        _this.openPicker = function (e) {
          var _a = _this.props,
              disabled = _a.disabled,
              onClick = _a.onClick;

          if (!disabled) {
            onClick(e);
          }
        };

        return _this;
      }

      DateTextField.prototype.componentDidUpdate = function (prevProps) {
        var utils = this.props.utils;

        if (!utils.isEqual(utils.date(this.props.value), utils.date(prevProps.value)) || prevProps.format !== this.props.format || prevProps.maxDate !== this.props.maxDate || prevProps.minDate !== this.props.minDate || prevProps.emptyLabel !== this.props.emptyLabel || prevProps.labelFunc !== this.props.labelFunc || prevProps.utils !== this.props.utils) {
          this.setState(DateTextField.getStateFromProps(this.props));
        }
      };

      DateTextField.prototype.render = function () {
        var _a = this.props,
            adornmentPosition = _a.adornmentPosition,
            clearable = _a.clearable,
            disabled = _a.disabled,
            disableFuture = _a.disableFuture,
            disableOpenOnEnter = _a.disableOpenOnEnter,
            disablePast = _a.disablePast,
            emptyLabel = _a.emptyLabel,
            format = _a.format,
            InputAdornmentProps = _a.InputAdornmentProps,
            InputProps = _a.InputProps,
            invalidDateMessage = _a.invalidDateMessage,
            invalidLabel = _a.invalidLabel,
            keyboard = _a.keyboard,
            KeyboardButtonProps = _a.KeyboardButtonProps,
            keyboardIcon = _a.keyboardIcon,
            labelFunc = _a.labelFunc,
            mask = _a.mask,
            maxDate = _a.maxDate,
            maxDateMessage = _a.maxDateMessage,
            minDate = _a.minDate,
            minDateMessage = _a.minDateMessage,
            onBlur = _a.onBlur,
            onClear = _a.onClear,
            onClick = _a.onClick,
            pipe = _a.pipe,
            keepCharPositions = _a.keepCharPositions,
            TextFieldComponent = _a.TextFieldComponent,
            utils = _a.utils,
            value = _a.value,
            onInputChange = _a.onInputChange,
            other = __rest(_a, ["adornmentPosition", "clearable", "disabled", "disableFuture", "disableOpenOnEnter", "disablePast", "emptyLabel", "format", "InputAdornmentProps", "InputProps", "invalidDateMessage", "invalidLabel", "keyboard", "KeyboardButtonProps", "keyboardIcon", "labelFunc", "mask", "maxDate", "maxDateMessage", "minDate", "minDateMessage", "onBlur", "onClear", "onClick", "pipe", "keepCharPositions", "TextFieldComponent", "utils", "value", "onInputChange"]);

        var _b = this.state,
            displayValue = _b.displayValue,
            error = _b.error;
        var localInputProps = {
          inputComponent: Input,
          inputProps: {
            mask: !keyboard ? null : mask,
            pipe: !keyboard ? null : pipe,
            keepCharPositions: !keyboard ? undefined : keepCharPositions,
            readOnly: !keyboard
          }
        };

        if (keyboard) {
          localInputProps[adornmentPosition + "Adornment"] = React.createElement(InputAdornment, __assign({
            position: adornmentPosition
          }, InputAdornmentProps), React.createElement(IconButton, __assign({
            disabled: disabled,
            onClick: this.openPicker
          }, KeyboardButtonProps), keyboardIcon));
        }

        var Component = TextFieldComponent;

        var inputProps = __assign({}, localInputProps, InputProps);

        return React.createElement(Component, __assign({
          onClick: this.handleFocus,
          error: !!error,
          helperText: error,
          onKeyPress: this.handleKeyPress,
          onBlur: this.handleBlur,
          disabled: disabled,
          value: displayValue
        }, other, {
          onError: undefined,
          onChange: this.handleChange,
          InputProps: inputProps
        }));
      };

      DateTextField.propTypes = {
        value: PropTypes$1.oneOfType([PropTypes$1.object, PropTypes$1.string, PropTypes$1.number, PropTypes$1.instanceOf(Date)]),
        minDate: DomainPropTypes.date,
        maxDate: DomainPropTypes.date,
        disablePast: PropTypes$1.bool,
        disableFuture: PropTypes$1.bool,
        format: PropTypes$1.string,
        onBlur: PropTypes$1.func,
        onChange: PropTypes$1.func.isRequired,
        onClear: PropTypes$1.func,
        onClick: PropTypes$1.func.isRequired,
        clearable: PropTypes$1.bool,
        utils: PropTypes$1.object.isRequired,
        InputProps: PropTypes$1.shape({}),
        mask: PropTypes$1.any,
        minDateMessage: PropTypes$1.node,
        maxDateMessage: PropTypes$1.node,
        invalidLabel: PropTypes$1.string,
        emptyLabel: PropTypes$1.string,
        labelFunc: PropTypes$1.func,
        keyboard: PropTypes$1.bool,
        keyboardIcon: PropTypes$1.node,
        disableOpenOnEnter: PropTypes$1.bool,
        invalidDateMessage: PropTypes$1.node,
        TextFieldComponent: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.func, PropTypes$1.node]),
        InputAdornmentProps: PropTypes$1.object,
        KeyboardButtonProps: PropTypes$1.object,
        adornmentPosition: PropTypes$1.oneOf(['start', 'end']),
        onError: PropTypes$1.func,
        onInputChange: PropTypes$1.func,
        pipe: PropTypes$1.func,
        keepCharPositions: PropTypes$1.bool
      };
      DateTextField.defaultProps = {
        disabled: false,
        invalidLabel: 'Unknown',
        emptyLabel: '',
        keyboard: false,
        keyboardIcon: React.createElement(KeyboardIcon, null),
        disableOpenOnEnter: false,
        invalidDateMessage: 'Invalid Date Format',
        clearable: false,
        disablePast: false,
        disableFuture: false,
        minDate: new Date('1900-01-01'),
        maxDate: new Date('2100-01-01'),
        minDateMessage: 'Date should not be before minimal date',
        maxDateMessage: 'Date should not be after maximal date',
        TextFieldComponent: TextField,
        InputAdornmentProps: {},
        KeyboardButtonProps: {},
        adornmentPosition: 'end',
        keepCharPositions: false
      };

      DateTextField.getStateFromProps = function (props) {
        return {
          value: props.value,
          displayValue: getDisplayDate(props),
          error: getError(props.utils.date(props.value), props)
        };
      };

      return DateTextField;
    }(React.PureComponent);
    var DateTextField$1 = withUtils()(DateTextField);

    function toVal(mix) {
    	var k, y, str='';
    	if (mix) {
    		if (typeof mix === 'object') {
    			for (k in mix) {
    				if (mix[k] && (y = toVal(!!mix.push ? mix[k] : k))) {
    					str && (str += ' ');
    					str += y;
    				}
    			}
    		} else if (typeof mix !== 'boolean') {
    			str && (str += ' ');
    			str += mix;
    		}
    	}
    	return str;
    }

    function clsx () {
    	var i=0, x, str='';
    	while (i < arguments.length) {
    		if (x = toVal(arguments[i++])) {
    			str && (str += ' ');
    			str += x;
    		}
    	}
    	return str;
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    var classCallCheck = _classCallCheck;

    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }

    var createClass = _createClass;

    var _typeof_1 = createCommonjsModule(function (module) {
    function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

    function _typeof(obj) {
      if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
        module.exports = _typeof = function _typeof(obj) {
          return _typeof2(obj);
        };
      } else {
        module.exports = _typeof = function _typeof(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
        };
      }

      return _typeof(obj);
    }

    module.exports = _typeof;
    });

    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return self;
    }

    var assertThisInitialized = _assertThisInitialized;

    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
        return call;
      }

      return assertThisInitialized(self);
    }

    var possibleConstructorReturn = _possibleConstructorReturn;

    var getPrototypeOf = createCommonjsModule(function (module) {
    function _getPrototypeOf(o) {
      module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
      return _getPrototypeOf(o);
    }

    module.exports = _getPrototypeOf;
    });

    var setPrototypeOf = createCommonjsModule(function (module) {
    function _setPrototypeOf(o, p) {
      module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };

      return _setPrototypeOf(o, p);
    }

    module.exports = _setPrototypeOf;
    });

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass) setPrototypeOf(subClass, superClass);
    }

    var inherits = _inherits;

    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null) return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;

      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
      }

      return target;
    }

    var objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose;

    function _objectWithoutProperties(source, excluded) {
      if (source == null) return {};
      var target = objectWithoutPropertiesLoose(source, excluded);
      var key, i;

      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

        for (i = 0; i < sourceSymbolKeys.length; i++) {
          key = sourceSymbolKeys[i];
          if (excluded.indexOf(key) >= 0) continue;
          if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
          target[key] = source[key];
        }
      }

      return target;
    }

    var objectWithoutProperties = _objectWithoutProperties;

    var _extends_1 = createCommonjsModule(function (module) {
    function _extends() {
      module.exports = _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      return _extends.apply(this, arguments);
    }

    module.exports = _extends;
    });

    /**
     * Copyright (c) 2014-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    var warning = function() {};

    {
      var printWarning = function printWarning(format, args) {
        var len = arguments.length;
        args = new Array(len > 1 ? len - 1 : 0);
        for (var key = 1; key < len; key++) {
          args[key - 1] = arguments[key];
        }
        var argIndex = 0;
        var message = 'Warning: ' +
          format.replace(/%s/g, function() {
            return args[argIndex++];
          });
        if (typeof console !== 'undefined') {
          console.error(message);
        }
        try {
          // --- Welcome to debugging React ---
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
        } catch (x) {}
      };

      warning = function(condition, format, args) {
        var len = arguments.length;
        args = new Array(len > 2 ? len - 2 : 0);
        for (var key = 2; key < len; key++) {
          args[key - 2] = arguments[key];
        }
        if (format === undefined) {
          throw new Error(
              '`warning(condition, format, ...args)` requires a warning ' +
              'message argument'
          );
        }
        if (!condition) {
          printWarning.apply(null, [format].concat(args));
        }
      };
    }

    var warning_1 = warning;

    var reactEventListener_cjs = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, '__esModule', { value: true });

    function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

    var _classCallCheck = _interopDefault(classCallCheck);
    var _createClass = _interopDefault(createClass);
    var _possibleConstructorReturn = _interopDefault(possibleConstructorReturn);
    var _getPrototypeOf = _interopDefault(getPrototypeOf);
    var _inherits = _interopDefault(inherits);
    var _typeof = _interopDefault(_typeof_1);
    var _objectWithoutProperties = _interopDefault(objectWithoutProperties);
    var _extends = _interopDefault(_extends_1);
    var React = _interopDefault(React__default);
    var PropTypes = _interopDefault(PropTypes$1__default);
    var warning = _interopDefault(warning_1);

    function defineProperty(object, property, attr) {
      return Object.defineProperty(object, property, attr);
    } // Passive options
    // Inspired by https://github.com/Modernizr/Modernizr/blob/master/feature-detects/dom/passiveeventlisteners.js


    var passiveOption = function () {
      var cache = null;
      return function () {
        if (cache !== null) {
          return cache;
        }

        var supportsPassiveOption = false;

        try {
          window.addEventListener('test', null, defineProperty({}, 'passive', {
            get: function get() {
              supportsPassiveOption = true;
            }
          }));
        } catch (err) {//
        }

        cache = supportsPassiveOption;
        return supportsPassiveOption;
      }();
    }();

    var defaultEventOptions = {
      capture: false,
      passive: false
    };

    function mergeDefaultEventOptions(options) {
      return _extends({}, defaultEventOptions, options);
    }

    function getEventListenerArgs(eventName, callback, options) {
      var args = [eventName, callback];
      args.push(passiveOption ? options : options.capture);
      return args;
    }

    function on(target, eventName, callback, options) {
      // eslint-disable-next-line prefer-spread
      target.addEventListener.apply(target, getEventListenerArgs(eventName, callback, options));
    }

    function off(target, eventName, callback, options) {
      // eslint-disable-next-line prefer-spread
      target.removeEventListener.apply(target, getEventListenerArgs(eventName, callback, options));
    }

    function forEachListener(props, iteratee) {
      var children = props.children,
          target = props.target,
          eventProps = _objectWithoutProperties(props, ["children", "target"]);

      Object.keys(eventProps).forEach(function (name) {
        if (name.substring(0, 2) !== 'on') {
          return;
        }

        var prop = eventProps[name];

        var type = _typeof(prop);

        var isObject = type === 'object';
        var isFunction = type === 'function';

        if (!isObject && !isFunction) {
          return;
        }

        var capture = name.substr(-7).toLowerCase() === 'capture';
        var eventName = name.substring(2).toLowerCase();
        eventName = capture ? eventName.substring(0, eventName.length - 7) : eventName;

        if (isObject) {
          iteratee(eventName, prop.handler, prop.options);
        } else {
          iteratee(eventName, prop, mergeDefaultEventOptions({
            capture: capture
          }));
        }
      });
    }

    function withOptions(handler, options) {
      warning(options, 'react-event-listener: should be specified options in withOptions.');
      return {
        handler: handler,
        options: mergeDefaultEventOptions(options)
      };
    }

    var EventListener =
    /*#__PURE__*/
    function (_React$PureComponent) {
      _inherits(EventListener, _React$PureComponent);

      function EventListener() {
        _classCallCheck(this, EventListener);

        return _possibleConstructorReturn(this, _getPrototypeOf(EventListener).apply(this, arguments));
      }

      _createClass(EventListener, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.applyListeners(on);
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          this.applyListeners(off, prevProps);
          this.applyListeners(on);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.applyListeners(off);
        }
      }, {
        key: "applyListeners",
        value: function applyListeners(onOrOff) {
          var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props;
          var target = props.target;

          if (target) {
            var element = target;

            if (typeof target === 'string') {
              element = window[target];
            }

            forEachListener(props, onOrOff.bind(null, element));
          }
        }
      }, {
        key: "render",
        value: function render() {
          return this.props.children || null;
        }
      }]);

      return EventListener;
    }(React.PureComponent);

    EventListener.propTypes = {
      /**
       * You can provide a single child too.
       */
      children: PropTypes.node,

      /**
       * The DOM target to listen to.
       */
      target: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired
    };

    exports.withOptions = withOptions;
    exports.default = EventListener;
    });

    var EventListener = unwrapExports(reactEventListener_cjs);
    var reactEventListener_cjs_1 = reactEventListener_cjs.withOptions;

    var DIALOG_WIDTH = 310;
    var DIALOG_WIDTH_WIDER = 325;

    var ModalDialog = function (_a) {
      var children = _a.children,
          classes = _a.classes,
          onKeyDownInner = _a.onKeyDownInner,
          onAccept = _a.onAccept,
          onDismiss = _a.onDismiss,
          onClear = _a.onClear,
          onSetToday = _a.onSetToday,
          okLabel = _a.okLabel,
          cancelLabel = _a.cancelLabel,
          clearLabel = _a.clearLabel,
          todayLabel = _a.todayLabel,
          clearable = _a.clearable,
          showTodayButton = _a.showTodayButton,
          showTabs = _a.showTabs,
          wider = _a.wider,
          other = __rest(_a, ["children", "classes", "onKeyDownInner", "onAccept", "onDismiss", "onClear", "onSetToday", "okLabel", "cancelLabel", "clearLabel", "todayLabel", "clearable", "showTodayButton", "showTabs", "wider"]);

      var _b, _c, _d;

      return React.createElement(Dialog, __assign({
        role: "dialog",
        onClose: onDismiss,
        classes: {
          paper: clsx(classes.dialogRoot, (_b = {}, _b[classes.dialogRootWider] = wider, _b[classes.dialogWithTabs] = showTabs, _b))
        }
      }, other), React.createElement(EventListener, {
        target: "window",
        onKeyDown: onKeyDownInner
      }), React.createElement(DialogContent, {
        children: children,
        className: clsx(classes.dialog, (_c = {}, _c[classes.dialogWithTabs] = showTabs, _c))
      }), React.createElement(DialogActions, {
        classes: {
          root: clearable || showTodayButton ? classes.dialogActions : undefined,
          action: clsx(classes.dialogAction, (_d = {}, _d[classes.clearableDialogAction] = clearable, _d[classes.todayDialogAction] = !clearable && showTodayButton, _d))
        }
      }, clearable && React.createElement(Button, {
        color: "primary",
        onClick: onClear
      }, clearLabel), !clearable && showTodayButton && React.createElement(Button, {
        color: "primary",
        onClick: onSetToday
      }, todayLabel), React.createElement(Button, {
        color: "primary",
        onClick: onDismiss
      }, cancelLabel), React.createElement(Button, {
        color: "primary",
        onClick: onAccept
      }, okLabel)));
    };
    ModalDialog.displayName = 'ModalDialog';
    var dialogHeight = 405;
    var dialogHeightWithTabs = 455;
    var styles = styles$j.createStyles({
      dialogRoot: {
        minWidth: DIALOG_WIDTH,
        minHeight: dialogHeight
      },
      dialogRootWider: {
        minWidth: DIALOG_WIDTH_WIDER
      },
      dialog: {
        minHeight: dialogHeight,
        overflow: 'hidden',
        '&:first-child': {
          padding: 0
        }
      },
      dialogWithTabs: {
        minHeight: dialogHeightWithTabs
      },
      dialogActions: {
        // set justifyContent to default value to fix IE11 layout bug
        // see https://github.com/dmtrKovalenko/material-ui-pickers/pull/267
        justifyContent: 'flex-start'
      },
      clearableDialogAction: {
        '&:first-child': {
          marginRight: 'auto'
        }
      },
      todayDialogAction: {
        '&:first-child': {
          marginRight: 'auto'
        }
      },
      dialogAction: {// empty but may be needed for override
      }
    });
    var ModalDialog$1 = styles$j.withStyles(styles, {
      name: 'MuiPickersModal'
    })(ModalDialog);

    var ModalWrapper =
    /** @class */
    function (_super) {
      __extends(ModalWrapper, _super);

      function ModalWrapper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.state = {
          open: false
        };

        _this.handleKeyDown = function (event) {
          switch (event.key) {
            case 'Enter':
              _this.handleAccept();

              break;

            default:
              // if key is not handled, stop execution
              return;
          } // if event was handled prevent other side effects


          event.preventDefault();
        };

        _this.handleSetTodayDate = function () {
          if (_this.props.onSetToday) {
            _this.props.onSetToday();
          }
        };

        _this.open = function () {
          _this.setState({
            open: true
          });

          if (_this.props.onOpen) {
            _this.props.onOpen();
          }
        };

        _this.close = function () {
          _this.setState({
            open: false
          });

          if (_this.props.onClose) {
            _this.props.onClose();
          }
        };

        _this.handleAccept = function () {
          _this.close();

          if (_this.props.onAccept) {
            _this.props.onAccept();
          }
        };

        _this.handleDismiss = function () {
          _this.close();

          if (_this.props.onDismiss) {
            _this.props.onDismiss();
          }
        };

        _this.handleClear = function () {
          _this.close();

          if (_this.props.onClear) {
            _this.props.onClear();
          }
        };

        return _this;
      }

      ModalWrapper.getDerivedStateFromProps = function (nextProps) {
        // only if accept = true close the dialog
        if (nextProps.isAccepted) {
          if (nextProps.onClose) {
            nextProps.onClose();
          }

          return {
            open: false
          };
        }

        return null;
      };

      ModalWrapper.prototype.render = function () {
        var _a = this.props,
            value = _a.value,
            format = _a.format,
            children = _a.children,
            onAccept = _a.onAccept,
            onDismiss = _a.onDismiss,
            invalidLabel = _a.invalidLabel,
            labelFunc = _a.labelFunc,
            okLabel = _a.okLabel,
            cancelLabel = _a.cancelLabel,
            clearLabel = _a.clearLabel,
            clearable = _a.clearable,
            todayLabel = _a.todayLabel,
            showTodayButton = _a.showTodayButton,
            onOpen = _a.onOpen,
            onClose = _a.onClose,
            onSetToday = _a.onSetToday,
            isAccepted = _a.isAccepted,
            DialogProps = _a.DialogProps,
            showTabs = _a.showTabs,
            wider = _a.wider,
            other = __rest(_a, ["value", "format", "children", "onAccept", "onDismiss", "invalidLabel", "labelFunc", "okLabel", "cancelLabel", "clearLabel", "clearable", "todayLabel", "showTodayButton", "onOpen", "onClose", "onSetToday", "isAccepted", "DialogProps", "showTabs", "wider"]);

        return React.createElement(React.Fragment, null, React.createElement(DateTextField$1, __assign({
          value: value,
          format: format,
          onClick: this.open,
          invalidLabel: invalidLabel,
          labelFunc: labelFunc,
          clearable: clearable
        }, other)), React.createElement(ModalDialog$1, __assign({
          wider: wider,
          showTabs: showTabs,
          open: this.state.open,
          onKeyDownInner: this.handleKeyDown,
          onClear: this.handleClear,
          onAccept: this.handleAccept,
          onDismiss: this.handleDismiss,
          onSetToday: this.handleSetTodayDate,
          clearLabel: clearLabel,
          todayLabel: todayLabel,
          okLabel: okLabel,
          cancelLabel: cancelLabel,
          clearable: clearable,
          showTodayButton: showTodayButton,
          children: children
        }, DialogProps)));
      };

      ModalWrapper.propTypes = {
        okLabel: PropTypes$1.node,
        cancelLabel: PropTypes$1.node,
        clearLabel: PropTypes$1.node,
        clearable: PropTypes$1.bool,
        todayLabel: PropTypes$1.node,
        showTodayButton: PropTypes$1.bool,
        onOpen: PropTypes$1.func,
        DialogProps: PropTypes$1.object,
        onClose: PropTypes$1.func
      };
      ModalWrapper.defaultProps = {
        value: new Date(),
        okLabel: 'OK',
        cancelLabel: 'Cancel',
        clearLabel: 'Clear',
        todayLabel: 'Today',
        clearable: false,
        showTodayButton: false,
        isAccepted: false
      };
      return ModalWrapper;
    }(React.PureComponent);

    var PickerToolbar = function (_a) {
      var children = _a.children,
          _b = _a.className,
          className = _b === void 0 ? null : _b,
          classes = _a.classes,
          other = __rest(_a, ["children", "className", "classes"]);

      return React.createElement(Toolbar, __assign({
        className: clsx(classes.toolbar, className)
      }, other), children);
    };

    PickerToolbar.propTypes = {
      children: PropTypes$1.arrayOf(PropTypes$1.node).isRequired,
      className: PropTypes$1.string,
      classes: PropTypes$1.any.isRequired,
      innerRef: PropTypes$1.any
    };
    PickerToolbar.defaultProps = {
      className: ''
    };
    var styles$1 = function (theme) {
      return createStyles({
        toolbar: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          height: 100,
          backgroundColor: theme.palette.type === 'light' ? theme.palette.primary.main : theme.palette.background.default
        }
      });
    };
    var PickerToolbar$1 = withStyles(styles$1, {
      name: 'MuiPickersToolbar'
    })(PickerToolbar);

    var ToolbarButton = function (_a) {
      var classes = _a.classes,
          selected = _a.selected,
          label = _a.label,
          _b = _a.className,
          className = _b === void 0 ? null : _b,
          other = __rest(_a, ["classes", "selected", "label", "className"]);

      var _c;

      return React.createElement(Typography, __assign({
        className: clsx(classes.toolbarBtn, className, (_c = {}, _c[classes.toolbarBtnSelected] = selected, _c))
      }, other), label);
    };

    ToolbarButton.propTypes = {
      selected: PropTypes$1.bool.isRequired,
      label: PropTypes$1.string.isRequired,
      classes: PropTypes$1.any.isRequired,
      className: PropTypes$1.string,
      innerRef: PropTypes$1.any
    };
    ToolbarButton.defaultProps = {
      className: ''
    };
    var styles$2 = function (theme) {
      return {
        toolbarBtn: {
          cursor: 'pointer',
          color: 'rgba(255, 255, 255, 0.54)'
        },
        toolbarBtnSelected: {
          color: theme.palette.common.white
        }
      };
    };
    var ToolbarButton$1 = withStyles(styles$2, {
      name: 'MuiPickersToolbarButton'
    })(ToolbarButton);

    var ArrowLeftIcon = function (props) {
      return React__default.createElement(SvgIcon, __assign({}, props), React__default.createElement("path", {
        d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
      }), React__default.createElement("path", {
        fill: "none",
        d: "M0 0h24v24H0V0z"
      }));
    };

    var ArrowRightIcon = function (props) {
      return React__default.createElement(SvgIcon, __assign({}, props), React__default.createElement("path", {
        d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
      }), React__default.createElement("path", {
        fill: "none",
        d: "M0 0h24v24H0V0z"
      }));
    };

    var interopRequireDefault = createCommonjsModule(function (module) {
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    module.exports = _interopRequireDefault;
    });

    unwrapExports(interopRequireDefault);

    var hasClass_1 = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports.default = hasClass;

    function hasClass(element, className) {
      if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
    }

    module.exports = exports["default"];
    });

    unwrapExports(hasClass_1);

    var addClass_1 = createCommonjsModule(function (module, exports) {



    exports.__esModule = true;
    exports.default = addClass;

    var _hasClass = interopRequireDefault(hasClass_1);

    function addClass(element, className) {
      if (element.classList) element.classList.add(className);else if (!(0, _hasClass.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
    }

    module.exports = exports["default"];
    });

    unwrapExports(addClass_1);

    function replaceClassName(origClass, classToRemove) {
      return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
    }

    var removeClass = function removeClass(element, className) {
      if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
    };

    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    function componentWillMount() {
      // Call this.constructor.gDSFP to support sub-classes.
      var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
      if (state !== null && state !== undefined) {
        this.setState(state);
      }
    }

    function componentWillReceiveProps(nextProps) {
      // Call this.constructor.gDSFP to support sub-classes.
      // Use the setState() updater to ensure state isn't stale in certain edge cases.
      function updater(prevState) {
        var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
        return state !== null && state !== undefined ? state : null;
      }
      // Binding "this" is important for shallow renderer support.
      this.setState(updater.bind(this));
    }

    function componentWillUpdate(nextProps, nextState) {
      try {
        var prevProps = this.props;
        var prevState = this.state;
        this.props = nextProps;
        this.state = nextState;
        this.__reactInternalSnapshotFlag = true;
        this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
          prevProps,
          prevState
        );
      } finally {
        this.props = prevProps;
        this.state = prevState;
      }
    }

    // React may warn about cWM/cWRP/cWU methods being deprecated.
    // Add a flag to suppress these warnings for this special case.
    componentWillMount.__suppressDeprecationWarning = true;
    componentWillReceiveProps.__suppressDeprecationWarning = true;
    componentWillUpdate.__suppressDeprecationWarning = true;

    function polyfill(Component) {
      var prototype = Component.prototype;

      if (!prototype || !prototype.isReactComponent) {
        throw new Error('Can only polyfill class components');
      }

      if (
        typeof Component.getDerivedStateFromProps !== 'function' &&
        typeof prototype.getSnapshotBeforeUpdate !== 'function'
      ) {
        return Component;
      }

      // If new component APIs are defined, "unsafe" lifecycles won't be called.
      // Error if any of these lifecycles are present,
      // Because they would work differently between older and newer (16.3+) versions of React.
      var foundWillMountName = null;
      var foundWillReceivePropsName = null;
      var foundWillUpdateName = null;
      if (typeof prototype.componentWillMount === 'function') {
        foundWillMountName = 'componentWillMount';
      } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
        foundWillMountName = 'UNSAFE_componentWillMount';
      }
      if (typeof prototype.componentWillReceiveProps === 'function') {
        foundWillReceivePropsName = 'componentWillReceiveProps';
      } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
        foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
      }
      if (typeof prototype.componentWillUpdate === 'function') {
        foundWillUpdateName = 'componentWillUpdate';
      } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
        foundWillUpdateName = 'UNSAFE_componentWillUpdate';
      }
      if (
        foundWillMountName !== null ||
        foundWillReceivePropsName !== null ||
        foundWillUpdateName !== null
      ) {
        var componentName = Component.displayName || Component.name;
        var newApiName =
          typeof Component.getDerivedStateFromProps === 'function'
            ? 'getDerivedStateFromProps()'
            : 'getSnapshotBeforeUpdate()';

        throw Error(
          'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
            componentName +
            ' uses ' +
            newApiName +
            ' but also contains the following legacy lifecycles:' +
            (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
            (foundWillReceivePropsName !== null
              ? '\n  ' + foundWillReceivePropsName
              : '') +
            (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
            '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
            'https://fb.me/react-async-component-lifecycle-hooks'
        );
      }

      // React <= 16.2 does not support static getDerivedStateFromProps.
      // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
      // Newer versions of React will ignore these lifecycles if gDSFP exists.
      if (typeof Component.getDerivedStateFromProps === 'function') {
        prototype.componentWillMount = componentWillMount;
        prototype.componentWillReceiveProps = componentWillReceiveProps;
      }

      // React <= 16.2 does not support getSnapshotBeforeUpdate.
      // As a workaround, use cWU to invoke the new lifecycle.
      // Newer versions of React will ignore that lifecycle if gSBU exists.
      if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
        if (typeof prototype.componentDidUpdate !== 'function') {
          throw new Error(
            'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
          );
        }

        prototype.componentWillUpdate = componentWillUpdate;

        var componentDidUpdate = prototype.componentDidUpdate;

        prototype.componentDidUpdate = function componentDidUpdatePolyfill(
          prevProps,
          prevState,
          maybeSnapshot
        ) {
          // 16.3+ will not execute our will-update method;
          // It will pass a snapshot value to did-update though.
          // Older versions will require our polyfilled will-update value.
          // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
          // Because for <= 15.x versions this might be a "prevContext" object.
          // We also can't just check "__reactInternalSnapshot",
          // Because get-snapshot might return a falsy value.
          // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
          var snapshot = this.__reactInternalSnapshotFlag
            ? this.__reactInternalSnapshot
            : maybeSnapshot;

          componentDidUpdate.call(this, prevProps, prevState, snapshot);
        };
      }

      return Component;
    }

    var reactLifecyclesCompat_es = /*#__PURE__*/Object.freeze({
        polyfill: polyfill
    });

    var PropTypes = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports.classNamesShape = exports.timeoutsShape = void 0;

    var _propTypes = _interopRequireDefault(PropTypes$1__default);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    var timeoutsShape = _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
      enter: _propTypes.default.number,
      exit: _propTypes.default.number,
      appear: _propTypes.default.number
    }).isRequired]);
    exports.timeoutsShape = timeoutsShape;
    var classNamesShape = _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.shape({
      enter: _propTypes.default.string,
      exit: _propTypes.default.string,
      active: _propTypes.default.string
    }), _propTypes.default.shape({
      enter: _propTypes.default.string,
      enterDone: _propTypes.default.string,
      enterActive: _propTypes.default.string,
      exit: _propTypes.default.string,
      exitDone: _propTypes.default.string,
      exitActive: _propTypes.default.string
    })]);
    exports.classNamesShape = classNamesShape;
    });

    unwrapExports(PropTypes);
    var PropTypes_1 = PropTypes.classNamesShape;
    var PropTypes_2 = PropTypes.timeoutsShape;

    var Transition_1 = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports.default = exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = void 0;

    var PropTypes$1 = _interopRequireWildcard(PropTypes$1__default);

    var _react = _interopRequireDefault(React__default);

    var _reactDom = _interopRequireDefault(reactDom__default);





    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

    function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

    function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

    var UNMOUNTED = 'unmounted';
    exports.UNMOUNTED = UNMOUNTED;
    var EXITED = 'exited';
    exports.EXITED = EXITED;
    var ENTERING = 'entering';
    exports.ENTERING = ENTERING;
    var ENTERED = 'entered';
    exports.ENTERED = ENTERED;
    var EXITING = 'exiting';
    /**
     * The Transition component lets you describe a transition from one component
     * state to another _over time_ with a simple declarative API. Most commonly
     * it's used to animate the mounting and unmounting of a component, but can also
     * be used to describe in-place transition states as well.
     *
     * By default the `Transition` component does not alter the behavior of the
     * component it renders, it only tracks "enter" and "exit" states for the components.
     * It's up to you to give meaning and effect to those states. For example we can
     * add styles to a component when it enters or exits:
     *
     * ```jsx
     * import Transition from 'react-transition-group/Transition';
     *
     * const duration = 300;
     *
     * const defaultStyle = {
     *   transition: `opacity ${duration}ms ease-in-out`,
     *   opacity: 0,
     * }
     *
     * const transitionStyles = {
     *   entering: { opacity: 0 },
     *   entered:  { opacity: 1 },
     * };
     *
     * const Fade = ({ in: inProp }) => (
     *   <Transition in={inProp} timeout={duration}>
     *     {(state) => (
     *       <div style={{
     *         ...defaultStyle,
     *         ...transitionStyles[state]
     *       }}>
     *         I'm a fade Transition!
     *       </div>
     *     )}
     *   </Transition>
     * );
     * ```
     *
     * As noted the `Transition` component doesn't _do_ anything by itself to its child component.
     * What it does do is track transition states over time so you can update the
     * component (such as by adding styles or classes) when it changes states.
     *
     * There are 4 main states a Transition can be in:
     *  - `'entering'`
     *  - `'entered'`
     *  - `'exiting'`
     *  - `'exited'`
     *
     * Transition state is toggled via the `in` prop. When `true` the component begins the
     * "Enter" stage. During this stage, the component will shift from its current transition state,
     * to `'entering'` for the duration of the transition and then to the `'entered'` stage once
     * it's complete. Let's take the following example:
     *
     * ```jsx
     * state = { in: false };
     *
     * toggleEnterState = () => {
     *   this.setState({ in: true });
     * }
     *
     * render() {
     *   return (
     *     <div>
     *       <Transition in={this.state.in} timeout={500} />
     *       <button onClick={this.toggleEnterState}>Click to Enter</button>
     *     </div>
     *   );
     * }
     * ```
     *
     * When the button is clicked the component will shift to the `'entering'` state and
     * stay there for 500ms (the value of `timeout`) before it finally switches to `'entered'`.
     *
     * When `in` is `false` the same thing happens except the state moves from `'exiting'` to `'exited'`.
     *
     * ## Timing
     *
     * Timing is often the trickiest part of animation, mistakes can result in slight delays
     * that are hard to pin down. A common example is when you want to add an exit transition,
     * you should set the desired final styles when the state is `'exiting'`. That's when the
     * transition to those styles will start and, if you matched the `timeout` prop with the
     * CSS Transition duration, it will end exactly when the state changes to `'exited'`.
     *
     * > **Note**: For simpler transitions the `Transition` component might be enough, but
     * > take into account that it's platform-agnostic, while the `CSSTransition` component
     * > [forces reflows](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
     * > in order to make more complex transitions more predictable. For example, even though
     * > classes `example-enter` and `example-enter-active` are applied immediately one after
     * > another, you can still transition from one to the other because of the forced reflow
     * > (read [this issue](https://github.com/reactjs/react-transition-group/issues/159#issuecomment-322761171)
     * > for more info). Take this into account when choosing between `Transition` and
     * > `CSSTransition`.
     */

    exports.EXITING = EXITING;

    var Transition =
    /*#__PURE__*/
    function (_React$Component) {
      _inheritsLoose(Transition, _React$Component);

      function Transition(props, context) {
        var _this;

        _this = _React$Component.call(this, props, context) || this;
        var parentGroup = context.transitionGroup; // In the context of a TransitionGroup all enters are really appears

        var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
        var initialStatus;
        _this.appearStatus = null;

        if (props.in) {
          if (appear) {
            initialStatus = EXITED;
            _this.appearStatus = ENTERING;
          } else {
            initialStatus = ENTERED;
          }
        } else {
          if (props.unmountOnExit || props.mountOnEnter) {
            initialStatus = UNMOUNTED;
          } else {
            initialStatus = EXITED;
          }
        }

        _this.state = {
          status: initialStatus
        };
        _this.nextCallback = null;
        return _this;
      }

      var _proto = Transition.prototype;

      _proto.getChildContext = function getChildContext() {
        return {
          transitionGroup: null // allows for nested Transitions

        };
      };

      Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
        var nextIn = _ref.in;

        if (nextIn && prevState.status === UNMOUNTED) {
          return {
            status: EXITED
          };
        }

        return null;
      }; // getSnapshotBeforeUpdate(prevProps) {
      //   let nextStatus = null
      //   if (prevProps !== this.props) {
      //     const { status } = this.state
      //     if (this.props.in) {
      //       if (status !== ENTERING && status !== ENTERED) {
      //         nextStatus = ENTERING
      //       }
      //     } else {
      //       if (status === ENTERING || status === ENTERED) {
      //         nextStatus = EXITING
      //       }
      //     }
      //   }
      //   return { nextStatus }
      // }


      _proto.componentDidMount = function componentDidMount() {
        this.updateStatus(true, this.appearStatus);
      };

      _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
        var nextStatus = null;

        if (prevProps !== this.props) {
          var status = this.state.status;

          if (this.props.in) {
            if (status !== ENTERING && status !== ENTERED) {
              nextStatus = ENTERING;
            }
          } else {
            if (status === ENTERING || status === ENTERED) {
              nextStatus = EXITING;
            }
          }
        }

        this.updateStatus(false, nextStatus);
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        this.cancelNextCallback();
      };

      _proto.getTimeouts = function getTimeouts() {
        var timeout = this.props.timeout;
        var exit, enter, appear;
        exit = enter = appear = timeout;

        if (timeout != null && typeof timeout !== 'number') {
          exit = timeout.exit;
          enter = timeout.enter; // TODO: remove fallback for next major

          appear = timeout.appear !== undefined ? timeout.appear : enter;
        }

        return {
          exit: exit,
          enter: enter,
          appear: appear
        };
      };

      _proto.updateStatus = function updateStatus(mounting, nextStatus) {
        if (mounting === void 0) {
          mounting = false;
        }

        if (nextStatus !== null) {
          // nextStatus will always be ENTERING or EXITING.
          this.cancelNextCallback();

          var node = _reactDom.default.findDOMNode(this);

          if (nextStatus === ENTERING) {
            this.performEnter(node, mounting);
          } else {
            this.performExit(node);
          }
        } else if (this.props.unmountOnExit && this.state.status === EXITED) {
          this.setState({
            status: UNMOUNTED
          });
        }
      };

      _proto.performEnter = function performEnter(node, mounting) {
        var _this2 = this;

        var enter = this.props.enter;
        var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;
        var timeouts = this.getTimeouts();
        var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
        // if we are mounting and running this it means appear _must_ be set

        if (!mounting && !enter) {
          this.safeSetState({
            status: ENTERED
          }, function () {
            _this2.props.onEntered(node);
          });
          return;
        }

        this.props.onEnter(node, appearing);
        this.safeSetState({
          status: ENTERING
        }, function () {
          _this2.props.onEntering(node, appearing);

          _this2.onTransitionEnd(node, enterTimeout, function () {
            _this2.safeSetState({
              status: ENTERED
            }, function () {
              _this2.props.onEntered(node, appearing);
            });
          });
        });
      };

      _proto.performExit = function performExit(node) {
        var _this3 = this;

        var exit = this.props.exit;
        var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

        if (!exit) {
          this.safeSetState({
            status: EXITED
          }, function () {
            _this3.props.onExited(node);
          });
          return;
        }

        this.props.onExit(node);
        this.safeSetState({
          status: EXITING
        }, function () {
          _this3.props.onExiting(node);

          _this3.onTransitionEnd(node, timeouts.exit, function () {
            _this3.safeSetState({
              status: EXITED
            }, function () {
              _this3.props.onExited(node);
            });
          });
        });
      };

      _proto.cancelNextCallback = function cancelNextCallback() {
        if (this.nextCallback !== null) {
          this.nextCallback.cancel();
          this.nextCallback = null;
        }
      };

      _proto.safeSetState = function safeSetState(nextState, callback) {
        // This shouldn't be necessary, but there are weird race conditions with
        // setState callbacks and unmounting in testing, so always make sure that
        // we can cancel any pending setState callbacks after we unmount.
        callback = this.setNextCallback(callback);
        this.setState(nextState, callback);
      };

      _proto.setNextCallback = function setNextCallback(callback) {
        var _this4 = this;

        var active = true;

        this.nextCallback = function (event) {
          if (active) {
            active = false;
            _this4.nextCallback = null;
            callback(event);
          }
        };

        this.nextCallback.cancel = function () {
          active = false;
        };

        return this.nextCallback;
      };

      _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
        this.setNextCallback(handler);

        if (node) {
          if (this.props.addEndListener) {
            this.props.addEndListener(node, this.nextCallback);
          }

          if (timeout != null) {
            setTimeout(this.nextCallback, timeout);
          }
        } else {
          setTimeout(this.nextCallback, 0);
        }
      };

      _proto.render = function render() {
        var status = this.state.status;

        if (status === UNMOUNTED) {
          return null;
        }

        var _this$props = this.props,
            children = _this$props.children,
            childProps = _objectWithoutPropertiesLoose(_this$props, ["children"]); // filter props for Transtition


        delete childProps.in;
        delete childProps.mountOnEnter;
        delete childProps.unmountOnExit;
        delete childProps.appear;
        delete childProps.enter;
        delete childProps.exit;
        delete childProps.timeout;
        delete childProps.addEndListener;
        delete childProps.onEnter;
        delete childProps.onEntering;
        delete childProps.onEntered;
        delete childProps.onExit;
        delete childProps.onExiting;
        delete childProps.onExited;

        if (typeof children === 'function') {
          return children(status, childProps);
        }

        var child = _react.default.Children.only(children);

        return _react.default.cloneElement(child, childProps);
      };

      return Transition;
    }(_react.default.Component);

    Transition.contextTypes = {
      transitionGroup: PropTypes$1.object
    };
    Transition.childContextTypes = {
      transitionGroup: function transitionGroup() {}
    };
    Transition.propTypes = {
      /**
       * A `function` child can be used instead of a React element.
       * This function is called with the current transition status
       * ('entering', 'entered', 'exiting', 'exited', 'unmounted'), which can be used
       * to apply context specific props to a component.
       *
       * ```jsx
       * <Transition timeout={150}>
       *   {(status) => (
       *     <MyComponent className={`fade fade-${status}`} />
       *   )}
       * </Transition>
       * ```
       */
      children: PropTypes$1.oneOfType([PropTypes$1.func.isRequired, PropTypes$1.element.isRequired]).isRequired,

      /**
       * Show the component; triggers the enter or exit states
       */
      in: PropTypes$1.bool,

      /**
       * By default the child component is mounted immediately along with
       * the parent `Transition` component. If you want to "lazy mount" the component on the
       * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
       * mounted, even on "exited", unless you also specify `unmountOnExit`.
       */
      mountOnEnter: PropTypes$1.bool,

      /**
       * By default the child component stays mounted after it reaches the `'exited'` state.
       * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
       */
      unmountOnExit: PropTypes$1.bool,

      /**
       * Normally a component is not transitioned if it is shown when the `<Transition>` component mounts.
       * If you want to transition on the first mount set `appear` to `true`, and the
       * component will transition in as soon as the `<Transition>` mounts.
       *
       * > Note: there are no specific "appear" states. `appear` only adds an additional `enter` transition.
       */
      appear: PropTypes$1.bool,

      /**
       * Enable or disable enter transitions.
       */
      enter: PropTypes$1.bool,

      /**
       * Enable or disable exit transitions.
       */
      exit: PropTypes$1.bool,

      /**
       * The duration of the transition, in milliseconds.
       * Required unless `addEndListener` is provided
       *
       * You may specify a single timeout for all transitions like: `timeout={500}`,
       * or individually like:
       *
       * ```jsx
       * timeout={{
       *  enter: 300,
       *  exit: 500,
       *  appear: 500,
       * }}
       * ```
       *
       * If the value of appear is not set, then the value from enter is taken.
       *
       * @type {number | { enter?: number, exit?: number }}
       */
      timeout: function timeout(props) {
        var pt = PropTypes.timeoutsShape;    if (!props.addEndListener) pt = pt.isRequired;

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        return pt.apply(void 0, [props].concat(args));
      },

      /**
       * Add a custom transition end trigger. Called with the transitioning
       * DOM node and a `done` callback. Allows for more fine grained transition end
       * logic. **Note:** Timeouts are still used as a fallback if provided.
       *
       * ```jsx
       * addEndListener={(node, done) => {
       *   // use the css transitionend event to mark the finish of a transition
       *   node.addEventListener('transitionend', done, false);
       * }}
       * ```
       */
      addEndListener: PropTypes$1.func,

      /**
       * Callback fired before the "entering" status is applied. An extra parameter
       * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
       *
       * @type Function(node: HtmlElement, isAppearing: bool) -> void
       */
      onEnter: PropTypes$1.func,

      /**
       * Callback fired after the "entering" status is applied. An extra parameter
       * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
       *
       * @type Function(node: HtmlElement, isAppearing: bool)
       */
      onEntering: PropTypes$1.func,

      /**
       * Callback fired after the "entered" status is applied. An extra parameter
       * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
       *
       * @type Function(node: HtmlElement, isAppearing: bool) -> void
       */
      onEntered: PropTypes$1.func,

      /**
       * Callback fired before the "exiting" status is applied.
       *
       * @type Function(node: HtmlElement) -> void
       */
      onExit: PropTypes$1.func,

      /**
       * Callback fired after the "exiting" status is applied.
       *
       * @type Function(node: HtmlElement) -> void
       */
      onExiting: PropTypes$1.func,

      /**
       * Callback fired after the "exited" status is applied.
       *
       * @type Function(node: HtmlElement) -> void
       */
      onExited: PropTypes$1.func // Name the function so it is clearer in the documentation

    };

    function noop() {}

    Transition.defaultProps = {
      in: false,
      mountOnEnter: false,
      unmountOnExit: false,
      appear: false,
      enter: true,
      exit: true,
      onEnter: noop,
      onEntering: noop,
      onEntered: noop,
      onExit: noop,
      onExiting: noop,
      onExited: noop
    };
    Transition.UNMOUNTED = 0;
    Transition.EXITED = 1;
    Transition.ENTERING = 2;
    Transition.ENTERED = 3;
    Transition.EXITING = 4;

    var _default = (0, reactLifecyclesCompat_es.polyfill)(Transition);

    exports.default = _default;
    });

    unwrapExports(Transition_1);
    var Transition_2 = Transition_1.EXITING;
    var Transition_3 = Transition_1.ENTERED;
    var Transition_4 = Transition_1.ENTERING;
    var Transition_5 = Transition_1.EXITED;
    var Transition_6 = Transition_1.UNMOUNTED;

    var CSSTransition_1 = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports.default = void 0;

    var PropTypes$1 = _interopRequireWildcard(PropTypes$1__default);

    var _addClass = _interopRequireDefault(addClass_1);

    var _removeClass = _interopRequireDefault(removeClass);

    var _react = _interopRequireDefault(React__default);

    var _Transition = _interopRequireDefault(Transition_1);



    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

    function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

    function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

    var addClass = function addClass(node, classes) {
      return node && classes && classes.split(' ').forEach(function (c) {
        return (0, _addClass.default)(node, c);
      });
    };

    var removeClass$1 = function removeClass(node, classes) {
      return node && classes && classes.split(' ').forEach(function (c) {
        return (0, _removeClass.default)(node, c);
      });
    };
    /**
     * A `Transition` component using CSS transitions and animations.
     * It's inspired by the excellent [ng-animate](http://www.nganimate.org/) library.
     *
     * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
     * and `exit` stages of the transition. The first class is applied and then a
     * second "active" class in order to activate the css animation. After the animation,
     * matching `done` class names are applied to persist the animation state.
     *
     * When the `in` prop is toggled to `true` the Component will get
     * the `example-enter` CSS class and the `example-enter-active` CSS class
     * added in the next tick. This is a convention based on the `classNames` prop.
     */


    var CSSTransition =
    /*#__PURE__*/
    function (_React$Component) {
      _inheritsLoose(CSSTransition, _React$Component);

      function CSSTransition() {
        var _this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

        _this.onEnter = function (node, appearing) {
          var _this$getClassNames = _this.getClassNames(appearing ? 'appear' : 'enter'),
              className = _this$getClassNames.className;

          _this.removeClasses(node, 'exit');

          addClass(node, className);

          if (_this.props.onEnter) {
            _this.props.onEnter(node, appearing);
          }
        };

        _this.onEntering = function (node, appearing) {
          var _this$getClassNames2 = _this.getClassNames(appearing ? 'appear' : 'enter'),
              activeClassName = _this$getClassNames2.activeClassName;

          _this.reflowAndAddClass(node, activeClassName);

          if (_this.props.onEntering) {
            _this.props.onEntering(node, appearing);
          }
        };

        _this.onEntered = function (node, appearing) {
          var _this$getClassNames3 = _this.getClassNames('enter'),
              doneClassName = _this$getClassNames3.doneClassName;

          _this.removeClasses(node, appearing ? 'appear' : 'enter');

          addClass(node, doneClassName);

          if (_this.props.onEntered) {
            _this.props.onEntered(node, appearing);
          }
        };

        _this.onExit = function (node) {
          var _this$getClassNames4 = _this.getClassNames('exit'),
              className = _this$getClassNames4.className;

          _this.removeClasses(node, 'appear');

          _this.removeClasses(node, 'enter');

          addClass(node, className);

          if (_this.props.onExit) {
            _this.props.onExit(node);
          }
        };

        _this.onExiting = function (node) {
          var _this$getClassNames5 = _this.getClassNames('exit'),
              activeClassName = _this$getClassNames5.activeClassName;

          _this.reflowAndAddClass(node, activeClassName);

          if (_this.props.onExiting) {
            _this.props.onExiting(node);
          }
        };

        _this.onExited = function (node) {
          var _this$getClassNames6 = _this.getClassNames('exit'),
              doneClassName = _this$getClassNames6.doneClassName;

          _this.removeClasses(node, 'exit');

          addClass(node, doneClassName);

          if (_this.props.onExited) {
            _this.props.onExited(node);
          }
        };

        _this.getClassNames = function (type) {
          var classNames = _this.props.classNames;
          var className = typeof classNames !== 'string' ? classNames[type] : classNames + '-' + type;
          var activeClassName = typeof classNames !== 'string' ? classNames[type + 'Active'] : className + '-active';
          var doneClassName = typeof classNames !== 'string' ? classNames[type + 'Done'] : className + '-done';
          return {
            className: className,
            activeClassName: activeClassName,
            doneClassName: doneClassName
          };
        };

        return _this;
      }

      var _proto = CSSTransition.prototype;

      _proto.removeClasses = function removeClasses(node, type) {
        var _this$getClassNames7 = this.getClassNames(type),
            className = _this$getClassNames7.className,
            activeClassName = _this$getClassNames7.activeClassName,
            doneClassName = _this$getClassNames7.doneClassName;

        className && removeClass$1(node, className);
        activeClassName && removeClass$1(node, activeClassName);
        doneClassName && removeClass$1(node, doneClassName);
      };

      _proto.reflowAndAddClass = function reflowAndAddClass(node, className) {
        // This is for to force a repaint,
        // which is necessary in order to transition styles when adding a class name.
        if (className) {
          /* eslint-disable no-unused-expressions */
          node && node.scrollTop;
          /* eslint-enable no-unused-expressions */

          addClass(node, className);
        }
      };

      _proto.render = function render() {
        var props = _extends({}, this.props);

        delete props.classNames;
        return _react.default.createElement(_Transition.default, _extends({}, props, {
          onEnter: this.onEnter,
          onEntered: this.onEntered,
          onEntering: this.onEntering,
          onExit: this.onExit,
          onExiting: this.onExiting,
          onExited: this.onExited
        }));
      };

      return CSSTransition;
    }(_react.default.Component);

    CSSTransition.propTypes = _extends({}, _Transition.default.propTypes, {
      /**
       * The animation classNames applied to the component as it enters, exits or has finished the transition.
       * A single name can be provided and it will be suffixed for each stage: e.g.
       *
       * `classNames="fade"` applies `fade-enter`, `fade-enter-active`, `fade-enter-done`,
       * `fade-exit`, `fade-exit-active`, `fade-exit-done`, `fade-appear`, and `fade-appear-active`.
       * Each individual classNames can also be specified independently like:
       *
       * ```js
       * classNames={{
       *  appear: 'my-appear',
       *  appearActive: 'my-active-appear',
       *  enter: 'my-enter',
       *  enterActive: 'my-active-enter',
       *  enterDone: 'my-done-enter',
       *  exit: 'my-exit',
       *  exitActive: 'my-active-exit',
       *  exitDone: 'my-done-exit',
       * }}
       * ```
       *
       * If you want to set these classes using CSS Modules:
       *
       * ```js
       * import styles from './styles.css';
       * ```
       *
       * you might want to use camelCase in your CSS file, that way could simply spread
       * them instead of listing them one by one:
       *
       * ```js
       * classNames={{ ...styles }}
       * ```
       *
       * @type {string | {
       *  appear?: string,
       *  appearActive?: string,
       *  enter?: string,
       *  enterActive?: string,
       *  enterDone?: string,
       *  exit?: string,
       *  exitActive?: string,
       *  exitDone?: string,
       * }}
       */
      classNames: PropTypes.classNamesShape,

      /**
       * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
       * applied.
       *
       * @type Function(node: HtmlElement, isAppearing: bool)
       */
      onEnter: PropTypes$1.func,

      /**
       * A `<Transition>` callback fired immediately after the 'enter-active' or
       * 'appear-active' class is applied.
       *
       * @type Function(node: HtmlElement, isAppearing: bool)
       */
      onEntering: PropTypes$1.func,

      /**
       * A `<Transition>` callback fired immediately after the 'enter' or
       * 'appear' classes are **removed** and the `done` class is added to the DOM node.
       *
       * @type Function(node: HtmlElement, isAppearing: bool)
       */
      onEntered: PropTypes$1.func,

      /**
       * A `<Transition>` callback fired immediately after the 'exit' class is
       * applied.
       *
       * @type Function(node: HtmlElement)
       */
      onExit: PropTypes$1.func,

      /**
       * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
       *
       * @type Function(node: HtmlElement)
       */
      onExiting: PropTypes$1.func,

      /**
       * A `<Transition>` callback fired immediately after the 'exit' classes
       * are **removed** and the `exit-done` class is added to the DOM node.
       *
       * @type Function(node: HtmlElement)
       */
      onExited: PropTypes$1.func
    });
    var _default = CSSTransition;
    exports.default = _default;
    module.exports = exports["default"];
    });

    unwrapExports(CSSTransition_1);

    var ChildMapping = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports.getChildMapping = getChildMapping;
    exports.mergeChildMappings = mergeChildMappings;
    exports.getInitialChildMapping = getInitialChildMapping;
    exports.getNextChildMapping = getNextChildMapping;



    /**
     * Given `this.props.children`, return an object mapping key to child.
     *
     * @param {*} children `this.props.children`
     * @return {object} Mapping of key to child
     */
    function getChildMapping(children, mapFn) {
      var mapper = function mapper(child) {
        return mapFn && (0, React__default.isValidElement)(child) ? mapFn(child) : child;
      };

      var result = Object.create(null);
      if (children) React__default.Children.map(children, function (c) {
        return c;
      }).forEach(function (child) {
        // run the map function here instead so that the key is the computed one
        result[child.key] = mapper(child);
      });
      return result;
    }
    /**
     * When you're adding or removing children some may be added or removed in the
     * same render pass. We want to show *both* since we want to simultaneously
     * animate elements in and out. This function takes a previous set of keys
     * and a new set of keys and merges them with its best guess of the correct
     * ordering. In the future we may expose some of the utilities in
     * ReactMultiChild to make this easy, but for now React itself does not
     * directly have this concept of the union of prevChildren and nextChildren
     * so we implement it here.
     *
     * @param {object} prev prev children as returned from
     * `ReactTransitionChildMapping.getChildMapping()`.
     * @param {object} next next children as returned from
     * `ReactTransitionChildMapping.getChildMapping()`.
     * @return {object} a key set that contains all keys in `prev` and all keys
     * in `next` in a reasonable order.
     */


    function mergeChildMappings(prev, next) {
      prev = prev || {};
      next = next || {};

      function getValueForKey(key) {
        return key in next ? next[key] : prev[key];
      } // For each key of `next`, the list of keys to insert before that key in
      // the combined list


      var nextKeysPending = Object.create(null);
      var pendingKeys = [];

      for (var prevKey in prev) {
        if (prevKey in next) {
          if (pendingKeys.length) {
            nextKeysPending[prevKey] = pendingKeys;
            pendingKeys = [];
          }
        } else {
          pendingKeys.push(prevKey);
        }
      }

      var i;
      var childMapping = {};

      for (var nextKey in next) {
        if (nextKeysPending[nextKey]) {
          for (i = 0; i < nextKeysPending[nextKey].length; i++) {
            var pendingNextKey = nextKeysPending[nextKey][i];
            childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
          }
        }

        childMapping[nextKey] = getValueForKey(nextKey);
      } // Finally, add the keys which didn't appear before any key in `next`


      for (i = 0; i < pendingKeys.length; i++) {
        childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
      }

      return childMapping;
    }

    function getProp(child, prop, props) {
      return props[prop] != null ? props[prop] : child.props[prop];
    }

    function getInitialChildMapping(props, onExited) {
      return getChildMapping(props.children, function (child) {
        return (0, React__default.cloneElement)(child, {
          onExited: onExited.bind(null, child),
          in: true,
          appear: getProp(child, 'appear', props),
          enter: getProp(child, 'enter', props),
          exit: getProp(child, 'exit', props)
        });
      });
    }

    function getNextChildMapping(nextProps, prevChildMapping, onExited) {
      var nextChildMapping = getChildMapping(nextProps.children);
      var children = mergeChildMappings(prevChildMapping, nextChildMapping);
      Object.keys(children).forEach(function (key) {
        var child = children[key];
        if (!(0, React__default.isValidElement)(child)) return;
        var hasPrev = key in prevChildMapping;
        var hasNext = key in nextChildMapping;
        var prevChild = prevChildMapping[key];
        var isLeaving = (0, React__default.isValidElement)(prevChild) && !prevChild.props.in; // item is new (entering)

        if (hasNext && (!hasPrev || isLeaving)) {
          // console.log('entering', key)
          children[key] = (0, React__default.cloneElement)(child, {
            onExited: onExited.bind(null, child),
            in: true,
            exit: getProp(child, 'exit', nextProps),
            enter: getProp(child, 'enter', nextProps)
          });
        } else if (!hasNext && hasPrev && !isLeaving) {
          // item is old (exiting)
          // console.log('leaving', key)
          children[key] = (0, React__default.cloneElement)(child, {
            in: false
          });
        } else if (hasNext && hasPrev && (0, React__default.isValidElement)(prevChild)) {
          // item hasn't changed transition states
          // copy over the last transition props;
          // console.log('unchanged', key)
          children[key] = (0, React__default.cloneElement)(child, {
            onExited: onExited.bind(null, child),
            in: prevChild.props.in,
            exit: getProp(child, 'exit', nextProps),
            enter: getProp(child, 'enter', nextProps)
          });
        }
      });
      return children;
    }
    });

    unwrapExports(ChildMapping);
    var ChildMapping_1 = ChildMapping.getChildMapping;
    var ChildMapping_2 = ChildMapping.mergeChildMappings;
    var ChildMapping_3 = ChildMapping.getInitialChildMapping;
    var ChildMapping_4 = ChildMapping.getNextChildMapping;

    var TransitionGroup_1 = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports.default = void 0;

    var _propTypes = _interopRequireDefault(PropTypes$1__default);

    var _react = _interopRequireDefault(React__default);





    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

    function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

    function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

    function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

    var values = Object.values || function (obj) {
      return Object.keys(obj).map(function (k) {
        return obj[k];
      });
    };

    var defaultProps = {
      component: 'div',
      childFactory: function childFactory(child) {
        return child;
      }
      /**
       * The `<TransitionGroup>` component manages a set of transition components
       * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
       * components, `<TransitionGroup>` is a state machine for managing the mounting
       * and unmounting of components over time.
       *
       * Consider the example below. As items are removed or added to the TodoList the
       * `in` prop is toggled automatically by the `<TransitionGroup>`.
       *
       * Note that `<TransitionGroup>`  does not define any animation behavior!
       * Exactly _how_ a list item animates is up to the individual transition
       * component. This means you can mix and match animations across different list
       * items.
       */

    };

    var TransitionGroup =
    /*#__PURE__*/
    function (_React$Component) {
      _inheritsLoose(TransitionGroup, _React$Component);

      function TransitionGroup(props, context) {
        var _this;

        _this = _React$Component.call(this, props, context) || this;

        var handleExited = _this.handleExited.bind(_assertThisInitialized(_assertThisInitialized(_this))); // Initial children should all be entering, dependent on appear


        _this.state = {
          handleExited: handleExited,
          firstRender: true
        };
        return _this;
      }

      var _proto = TransitionGroup.prototype;

      _proto.getChildContext = function getChildContext() {
        return {
          transitionGroup: {
            isMounting: !this.appeared
          }
        };
      };

      _proto.componentDidMount = function componentDidMount() {
        this.appeared = true;
        this.mounted = true;
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        this.mounted = false;
      };

      TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
        var prevChildMapping = _ref.children,
            handleExited = _ref.handleExited,
            firstRender = _ref.firstRender;
        return {
          children: firstRender ? (0, ChildMapping.getInitialChildMapping)(nextProps, handleExited) : (0, ChildMapping.getNextChildMapping)(nextProps, prevChildMapping, handleExited),
          firstRender: false
        };
      };

      _proto.handleExited = function handleExited(child, node) {
        var currentChildMapping = (0, ChildMapping.getChildMapping)(this.props.children);
        if (child.key in currentChildMapping) return;

        if (child.props.onExited) {
          child.props.onExited(node);
        }

        if (this.mounted) {
          this.setState(function (state) {
            var children = _extends({}, state.children);

            delete children[child.key];
            return {
              children: children
            };
          });
        }
      };

      _proto.render = function render() {
        var _this$props = this.props,
            Component = _this$props.component,
            childFactory = _this$props.childFactory,
            props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

        var children = values(this.state.children).map(childFactory);
        delete props.appear;
        delete props.enter;
        delete props.exit;

        if (Component === null) {
          return children;
        }

        return _react.default.createElement(Component, props, children);
      };

      return TransitionGroup;
    }(_react.default.Component);

    TransitionGroup.childContextTypes = {
      transitionGroup: _propTypes.default.object.isRequired
    };
    TransitionGroup.propTypes = {
      /**
       * `<TransitionGroup>` renders a `<div>` by default. You can change this
       * behavior by providing a `component` prop.
       * If you use React v16+ and would like to avoid a wrapping `<div>` element
       * you can pass in `component={null}`. This is useful if the wrapping div
       * borks your css styles.
       */
      component: _propTypes.default.any,

      /**
       * A set of `<Transition>` components, that are toggled `in` and out as they
       * leave. the `<TransitionGroup>` will inject specific transition props, so
       * remember to spread them through if you are wrapping the `<Transition>` as
       * with our `<Fade>` example.
       */
      children: _propTypes.default.node,

      /**
       * A convenience prop that enables or disables appear animations
       * for all children. Note that specifying this will override any defaults set
       * on individual children Transitions.
       */
      appear: _propTypes.default.bool,

      /**
       * A convenience prop that enables or disables enter animations
       * for all children. Note that specifying this will override any defaults set
       * on individual children Transitions.
       */
      enter: _propTypes.default.bool,

      /**
       * A convenience prop that enables or disables exit animations
       * for all children. Note that specifying this will override any defaults set
       * on individual children Transitions.
       */
      exit: _propTypes.default.bool,

      /**
       * You may need to apply reactive updates to a child as it is exiting.
       * This is generally done by using `cloneElement` however in the case of an exiting
       * child the element has already been removed and not accessible to the consumer.
       *
       * If you do need to update a child as it leaves you can provide a `childFactory`
       * to wrap every child, even the ones that are leaving.
       *
       * @type Function(child: ReactElement) -> ReactElement
       */
      childFactory: _propTypes.default.func
    };
    TransitionGroup.defaultProps = defaultProps;

    var _default = (0, reactLifecyclesCompat_es.polyfill)(TransitionGroup);

    exports.default = _default;
    module.exports = exports["default"];
    });

    unwrapExports(TransitionGroup_1);

    var ReplaceTransition_1 = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports.default = void 0;

    var _propTypes = _interopRequireDefault(PropTypes$1__default);

    var _react = _interopRequireDefault(React__default);



    var _TransitionGroup = _interopRequireDefault(TransitionGroup_1);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

    function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

    /**
     * The `<ReplaceTransition>` component is a specialized `Transition` component
     * that animates between two children.
     *
     * ```jsx
     * <ReplaceTransition in>
     *   <Fade><div>I appear first</div></Fade>
     *   <Fade><div>I replace the above</div></Fade>
     * </ReplaceTransition>
     * ```
     */
    var ReplaceTransition =
    /*#__PURE__*/
    function (_React$Component) {
      _inheritsLoose(ReplaceTransition, _React$Component);

      function ReplaceTransition() {
        var _this;

        for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
          _args[_key] = arguments[_key];
        }

        _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

        _this.handleEnter = function () {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          return _this.handleLifecycle('onEnter', 0, args);
        };

        _this.handleEntering = function () {
          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }

          return _this.handleLifecycle('onEntering', 0, args);
        };

        _this.handleEntered = function () {
          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }

          return _this.handleLifecycle('onEntered', 0, args);
        };

        _this.handleExit = function () {
          for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            args[_key5] = arguments[_key5];
          }

          return _this.handleLifecycle('onExit', 1, args);
        };

        _this.handleExiting = function () {
          for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            args[_key6] = arguments[_key6];
          }

          return _this.handleLifecycle('onExiting', 1, args);
        };

        _this.handleExited = function () {
          for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
            args[_key7] = arguments[_key7];
          }

          return _this.handleLifecycle('onExited', 1, args);
        };

        return _this;
      }

      var _proto = ReplaceTransition.prototype;

      _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
        var _child$props;

        var children = this.props.children;

        var child = _react.default.Children.toArray(children)[idx];

        if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);
        if (this.props[handler]) this.props[handler]((0, reactDom__default.findDOMNode)(this));
      };

      _proto.render = function render() {
        var _this$props = this.props,
            children = _this$props.children,
            inProp = _this$props.in,
            props = _objectWithoutPropertiesLoose(_this$props, ["children", "in"]);

        var _React$Children$toArr = _react.default.Children.toArray(children),
            first = _React$Children$toArr[0],
            second = _React$Children$toArr[1];

        delete props.onEnter;
        delete props.onEntering;
        delete props.onEntered;
        delete props.onExit;
        delete props.onExiting;
        delete props.onExited;
        return _react.default.createElement(_TransitionGroup.default, props, inProp ? _react.default.cloneElement(first, {
          key: 'first',
          onEnter: this.handleEnter,
          onEntering: this.handleEntering,
          onEntered: this.handleEntered
        }) : _react.default.cloneElement(second, {
          key: 'second',
          onEnter: this.handleExit,
          onEntering: this.handleExiting,
          onEntered: this.handleExited
        }));
      };

      return ReplaceTransition;
    }(_react.default.Component);

    ReplaceTransition.propTypes = {
      in: _propTypes.default.bool.isRequired,
      children: function children(props, propName) {
        if (_react.default.Children.count(props[propName]) !== 2) return new Error("\"" + propName + "\" must be exactly two transition components.");
        return null;
      }
    };
    var _default = ReplaceTransition;
    exports.default = _default;
    module.exports = exports["default"];
    });

    unwrapExports(ReplaceTransition_1);

    var reactTransitionGroup = createCommonjsModule(function (module) {

    var _CSSTransition = _interopRequireDefault(CSSTransition_1);

    var _ReplaceTransition = _interopRequireDefault(ReplaceTransition_1);

    var _TransitionGroup = _interopRequireDefault(TransitionGroup_1);

    var _Transition = _interopRequireDefault(Transition_1);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    module.exports = {
      Transition: _Transition.default,
      TransitionGroup: _TransitionGroup.default,
      ReplaceTransition: _ReplaceTransition.default,
      CSSTransition: _CSSTransition.default
    };
    });

    unwrapExports(reactTransitionGroup);
    var reactTransitionGroup_1 = reactTransitionGroup.Transition;
    var reactTransitionGroup_2 = reactTransitionGroup.TransitionGroup;
    var reactTransitionGroup_3 = reactTransitionGroup.ReplaceTransition;
    var reactTransitionGroup_4 = reactTransitionGroup.CSSTransition;

    var animationDuration = 350;
    var styles$3 = function (theme) {
      var slideTransition = theme.transitions.create('transform', {
        duration: animationDuration,
        easing: 'cubic-bezier(0.35, 0.8, 0.4, 1)'
      });
      return createStyles({
        transitionContainer: {
          display: 'block',
          position: 'relative',
          '& > *': {
            position: 'absolute',
            top: 0,
            right: 0,
            left: 0
          }
        },
        'slideEnter-left': {
          willChange: 'transform',
          transform: 'translate(100%)'
        },
        'slideEnter-right': {
          willChange: 'transform',
          transform: 'translate(-100%)'
        },
        slideEnterActive: {
          transform: 'translate(0%)',
          transition: slideTransition
        },
        slideExit: {
          transform: 'translate(0%)'
        },
        'slideExitActiveLeft-left': {
          willChange: 'transform',
          transform: 'translate(-200%)',
          transition: slideTransition
        },
        'slideExitActiveLeft-right': {
          willChange: 'transform',
          transform: 'translate(200%)',
          transition: slideTransition
        }
      });
    };

    var SlideTransition = function (_a) {
      var classes = _a.classes,
          _b = _a.className,
          className = _b === void 0 ? null : _b,
          children = _a.children,
          transKey = _a.transKey,
          slideDirection = _a.slideDirection;
      var transitionClasses = {
        enter: classes['slideEnter-' + slideDirection],
        enterActive: classes.slideEnterActive,
        exit: classes.slideExit,
        exitActive: classes['slideExitActiveLeft-' + slideDirection]
      };
      return React.createElement(reactTransitionGroup_2, {
        className: clsx(classes.transitionContainer, className),
        childFactory: function (element) {
          return React.cloneElement(element, {
            classNames: transitionClasses
          });
        }
      }, React.createElement(reactTransitionGroup_4, {
        key: transKey + slideDirection,
        mountOnEnter: true,
        unmountOnExit: true,
        timeout: animationDuration,
        children: children,
        classNames: transitionClasses
      }));
    };

    SlideTransition.propTypes = {
      children: PropTypes$1.node.isRequired,
      className: PropTypes$1.string,
      slideDirection: PropTypes$1.oneOf(['left', 'right']).isRequired,
      transKey: PropTypes$1.string.isRequired,
      innerRef: PropTypes$1.any
    };
    var SlideTransition$1 = withStyles(styles$3, {
      name: 'MuiPickersSlideTransition'
    })(SlideTransition);

    var CalendarHeader = function (_a) {
      var classes = _a.classes,
          theme = _a.theme,
          currentMonth = _a.currentMonth,
          onMonthChange = _a.onMonthChange,
          leftArrowIcon = _a.leftArrowIcon,
          rightArrowIcon = _a.rightArrowIcon,
          disablePrevMonth = _a.disablePrevMonth,
          disableNextMonth = _a.disableNextMonth,
          utils = _a.utils,
          slideDirection = _a.slideDirection;
      var rtl = theme.direction === 'rtl';

      var selectNextMonth = function () {
        return onMonthChange(utils.getNextMonth(currentMonth), 'left');
      };

      var selectPreviousMonth = function () {
        return onMonthChange(utils.getPreviousMonth(currentMonth), 'right');
      };

      return React.createElement("div", null, React.createElement("div", {
        className: classes.switchHeader
      }, React.createElement(IconButton, {
        disabled: disablePrevMonth,
        onClick: selectPreviousMonth,
        className: classes.iconButton
      }, rtl ? rightArrowIcon : leftArrowIcon), React.createElement(SlideTransition$1, {
        slideDirection: slideDirection,
        transKey: currentMonth.toString(),
        className: classes.transitionContainer
      }, React.createElement(Typography, {
        align: "center",
        variant: "body1"
      }, utils.getCalendarHeaderText(currentMonth))), React.createElement(IconButton, {
        disabled: disableNextMonth,
        onClick: selectNextMonth,
        className: classes.iconButton
      }, rtl ? leftArrowIcon : rightArrowIcon)), React.createElement("div", {
        className: classes.daysHeader
      }, utils.getWeekdays().map(function (day, index) {
        return React.createElement(Typography, {
          key: index,
          variant: "caption",
          className: classes.dayLabel
        }, day);
      })));
    };
    CalendarHeader.propTypes = {
      currentMonth: PropTypes$1.object.isRequired,
      onMonthChange: PropTypes$1.func.isRequired,
      leftArrowIcon: PropTypes$1.node,
      rightArrowIcon: PropTypes$1.node,
      disablePrevMonth: PropTypes$1.bool,
      disableNextMonth: PropTypes$1.bool,
      slideDirection: PropTypes$1.oneOf(['right', 'left']).isRequired,
      innerRef: PropTypes$1.any
    };
    CalendarHeader.displayName = 'CalendarHeader';
    CalendarHeader.defaultProps = {
      leftArrowIcon: React.createElement(ArrowLeftIcon, null),
      rightArrowIcon: React.createElement(ArrowRightIcon, null),
      disablePrevMonth: false,
      disableNextMonth: false
    };
    var styles$4 = function (theme) {
      return createStyles({
        switchHeader: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: theme.spacing.unit / 2,
          marginBottom: theme.spacing.unit
        },
        transitionContainer: {
          width: '100%',
          height: 20
        },
        iconButton: {
          zIndex: 2,
          backgroundColor: theme.palette.background.paper,
          '& > *': {
            // label
            backgroundColor: theme.palette.background.paper,
            '& > *': {
              // icon
              zIndex: 1,
              overflow: 'visible'
            }
          }
        },
        daysHeader: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          maxHeight: 16
        },
        dayLabel: {
          width: 36,
          margin: '0 2px',
          textAlign: 'center',
          color: theme.palette.text.hint
        }
      });
    };
    var CalendarHeader$1 = withUtils()(withStyles(styles$4, {
      withTheme: true,
      name: 'MuiPickersCalendarHeader'
    })(CalendarHeader));

    var Day =
    /** @class */
    function (_super) {
      __extends(Day, _super);

      function Day() {
        return _super !== null && _super.apply(this, arguments) || this;
      }

      Day.prototype.render = function () {
        var _a;

        var _b = this.props,
            children = _b.children,
            classes = _b.classes,
            disabled = _b.disabled,
            hidden = _b.hidden,
            current = _b.current,
            selected = _b.selected,
            other = __rest(_b, ["children", "classes", "disabled", "hidden", "current", "selected"]);

        var className = clsx(classes.day, (_a = {}, _a[classes.hidden] = hidden, _a[classes.current] = current, _a[classes.isSelected] = selected, _a[classes.isDisabled] = disabled, _a));
        return React.createElement(IconButton, __assign({
          className: className,
          tabIndex: hidden || disabled ? -1 : 0
        }, other), children);
      };

      Day.propTypes = {
        children: PropTypes$1.node.isRequired,
        classes: PropTypes$1.object.isRequired,
        current: PropTypes$1.bool,
        disabled: PropTypes$1.bool,
        hidden: PropTypes$1.bool,
        selected: PropTypes$1.bool,
        innerRef: PropTypes$1.any
      };
      Day.defaultProps = {
        disabled: false,
        hidden: false,
        current: false,
        selected: false
      };
      return Day;
    }(React.PureComponent);

    var styles$5 = function (theme) {
      return createStyles({
        day: {
          width: 36,
          height: 36,
          fontSize: theme.typography.caption.fontSize,
          margin: '0 2px',
          color: theme.palette.text.primary,
          fontWeight: theme.typography.fontWeightMedium,
          padding: 0
        },
        hidden: {
          opacity: 0,
          pointerEvents: 'none'
        },
        current: {
          color: theme.palette.primary.main,
          fontWeight: 600
        },
        isSelected: {
          color: theme.palette.common.white,
          backgroundColor: theme.palette.primary.main,
          fontWeight: theme.typography.fontWeightMedium,
          '&:hover': {
            backgroundColor: theme.palette.primary.main
          }
        },
        isDisabled: {
          pointerEvents: 'none',
          color: theme.palette.text.hint
        }
      });
    };
    var Day$1 = withStyles(styles$5, {
      name: 'MuiPickersDay'
    })(Day);

    var DayWrapper =
    /** @class */
    function (_super) {
      __extends(DayWrapper, _super);

      function DayWrapper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.handleClick = function () {
          _this.props.onSelect(_this.props.value);
        };

        return _this;
      }

      DayWrapper.prototype.render = function () {
        var _a = this.props,
            children = _a.children,
            value = _a.value,
            dayInCurrentMonth = _a.dayInCurrentMonth,
            disabled = _a.disabled,
            onSelect = _a.onSelect,
            other = __rest(_a, ["children", "value", "dayInCurrentMonth", "disabled", "onSelect"]);

        return React.createElement("div", __assign({
          onClick: dayInCurrentMonth && !disabled ? this.handleClick : undefined,
          onKeyPress: dayInCurrentMonth && !disabled ? this.handleClick : undefined,
          role: "presentation"
        }, other), children);
      };

      DayWrapper.propTypes = {
        children: PropTypes$1.node.isRequired,
        dayInCurrentMonth: PropTypes$1.bool,
        disabled: PropTypes$1.bool,
        onSelect: PropTypes$1.func.isRequired,
        value: PropTypes$1.any.isRequired
      };
      DayWrapper.defaultProps = {
        dayInCurrentMonth: true,
        disabled: false
      };
      return DayWrapper;
    }(React.PureComponent);

    var Calendar =
    /** @class */
    function (_super) {
      __extends(Calendar, _super);

      function Calendar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.state = {
          slideDirection: 'left',
          currentMonth: _this.props.utils.startOfMonth(_this.props.date)
        };

        _this.onDateSelect = function (day, isFinish) {
          if (isFinish === void 0) {
            isFinish = true;
          }

          var _a = _this.props,
              date = _a.date,
              utils = _a.utils;

          _this.props.onChange(utils.mergeDateAndTime(day, date), isFinish);
        };

        _this.handleChangeMonth = function (newMonth, slideDirection) {
          if (_this.props.onMonthChange) {
            _this.props.onMonthChange(newMonth);
          }

          _this.setState({
            currentMonth: newMonth,
            slideDirection: slideDirection
          });
        };

        _this.validateMinMaxDate = function (day) {
          var _a = _this.props,
              minDate = _a.minDate,
              maxDate = _a.maxDate,
              utils = _a.utils,
              disableFuture = _a.disableFuture,
              disablePast = _a.disablePast;
          var now = utils.date();
          return Boolean(disableFuture && utils.isAfterDay(day, now) || disablePast && utils.isBeforeDay(day, now) || minDate && utils.isBeforeDay(day, utils.date(minDate)) || maxDate && utils.isAfterDay(day, utils.date(maxDate)));
        };

        _this.shouldDisablePrevMonth = function () {
          var _a = _this.props,
              utils = _a.utils,
              disablePast = _a.disablePast,
              minDate = _a.minDate;
          var now = utils.date();
          var firstEnabledMonth = utils.startOfMonth(disablePast && utils.isAfter(now, minDate) ? now : utils.date(minDate));
          return !utils.isBefore(firstEnabledMonth, _this.state.currentMonth);
        };

        _this.shouldDisableNextMonth = function () {
          var _a = _this.props,
              utils = _a.utils,
              disableFuture = _a.disableFuture,
              maxDate = _a.maxDate;
          var now = utils.date();
          var lastEnabledMonth = utils.startOfMonth(disableFuture && utils.isBefore(now, maxDate) ? now : utils.date(maxDate));
          return !utils.isAfter(lastEnabledMonth, _this.state.currentMonth);
        };

        _this.shouldDisableDate = function (day) {
          var shouldDisableDate = _this.props.shouldDisableDate;
          return _this.validateMinMaxDate(day) || Boolean(shouldDisableDate && shouldDisableDate(day));
        };

        _this.moveToDay = function (day) {
          if (day && !_this.shouldDisableDate(day)) {
            _this.onDateSelect(day, false);
          }
        };

        _this.handleKeyDown = function (event) {
          var _a = _this.props,
              theme = _a.theme,
              date = _a.date,
              utils = _a.utils;

          switch (event.key) {
            case 'ArrowUp':
              _this.moveToDay(utils.addDays(date, -7));

              break;

            case 'ArrowDown':
              _this.moveToDay(utils.addDays(date, 7));

              break;

            case 'ArrowLeft':
              theme.direction === 'ltr' ? _this.moveToDay(utils.addDays(date, -1)) : _this.moveToDay(utils.addDays(date, 1));
              break;

            case 'ArrowRight':
              theme.direction === 'ltr' ? _this.moveToDay(utils.addDays(date, 1)) : _this.moveToDay(utils.addDays(date, -1));
              break;

            default:
              // if key is not handled, stop execution
              return;
          } // if event was handled prevent other side effects (e.g. page scroll)


          event.preventDefault();
        };

        _this.renderWeeks = function () {
          var _a = _this.props,
              utils = _a.utils,
              classes = _a.classes;
          var weeks = utils.getWeekArray(_this.state.currentMonth);
          return weeks.map(function (week) {
            return React.createElement("div", {
              key: "week-" + week[0].toString(),
              className: classes.week
            }, _this.renderDays(week));
          });
        };

        _this.renderDays = function (week) {
          var _a = _this.props,
              date = _a.date,
              renderDay = _a.renderDay,
              utils = _a.utils;
          var now = utils.date();
          var selectedDate = utils.startOfDay(date);
          var currentMonthNumber = utils.getMonth(_this.state.currentMonth);
          return week.map(function (day) {
            var disabled = _this.shouldDisableDate(day);

            var isDayInCurrentMonth = utils.getMonth(day) === currentMonthNumber;
            var dayComponent = React.createElement(Day$1, {
              disabled: disabled,
              current: utils.isSameDay(day, now),
              hidden: !isDayInCurrentMonth,
              selected: utils.isSameDay(selectedDate, day)
            }, utils.getDayText(day));

            if (renderDay) {
              dayComponent = renderDay(day, selectedDate, isDayInCurrentMonth, dayComponent);
            }

            return React.createElement(DayWrapper, {
              value: day,
              key: day.toString(),
              disabled: disabled,
              dayInCurrentMonth: isDayInCurrentMonth,
              onSelect: _this.onDateSelect
            }, dayComponent);
          });
        };

        return _this;
      }

      Calendar.getDerivedStateFromProps = function (nextProps, state) {
        var utils = nextProps.utils,
            nextDate = nextProps.date;

        if (!utils.isEqual(nextDate, state.lastDate)) {
          var nextMonth = utils.getMonth(nextDate);
          var lastMonth = utils.getMonth(state.lastDate || nextDate);
          return {
            lastDate: nextDate,
            currentMonth: nextProps.utils.startOfMonth(nextDate),
            // prettier-ignore
            slideDirection: nextMonth === lastMonth ? state.slideDirection : nextMonth > lastMonth ? 'left' : 'right'
          };
        }

        return null;
      };

      Calendar.prototype.componentDidMount = function () {
        var _a = this.props,
            date = _a.date,
            minDate = _a.minDate,
            maxDate = _a.maxDate,
            utils = _a.utils,
            disablePast = _a.disablePast,
            disableFuture = _a.disableFuture;

        if (this.shouldDisableDate(date)) {
          var closestEnabledDate = findClosestEnabledDate({
            date: date,
            utils: utils,
            minDate: minDate,
            maxDate: maxDate,
            disablePast: Boolean(disablePast),
            disableFuture: Boolean(disableFuture),
            shouldDisableDate: this.shouldDisableDate
          });
          this.onDateSelect(closestEnabledDate || minDate, false);
        }
      };

      Calendar.prototype.render = function () {
        var _a = this.state,
            currentMonth = _a.currentMonth,
            slideDirection = _a.slideDirection;
        var _b = this.props,
            classes = _b.classes,
            allowKeyboardControl = _b.allowKeyboardControl;
        return React.createElement(React.Fragment, null, allowKeyboardControl && React.createElement(EventListener, {
          target: "window",
          onKeyDown: this.handleKeyDown
        }), React.createElement(CalendarHeader$1, {
          slideDirection: slideDirection,
          currentMonth: currentMonth,
          onMonthChange: this.handleChangeMonth,
          leftArrowIcon: this.props.leftArrowIcon,
          rightArrowIcon: this.props.rightArrowIcon,
          disablePrevMonth: this.shouldDisablePrevMonth(),
          disableNextMonth: this.shouldDisableNextMonth()
        }), React.createElement(SlideTransition$1, {
          slideDirection: slideDirection,
          transKey: currentMonth.toString(),
          className: classes.transitionContainer
        }, React.createElement("div", null, this.renderWeeks())));
      };

      Calendar.propTypes = {
        date: PropTypes$1.object.isRequired,
        minDate: DomainPropTypes.date,
        maxDate: DomainPropTypes.date,
        onChange: PropTypes$1.func.isRequired,
        disablePast: PropTypes$1.bool,
        disableFuture: PropTypes$1.bool,
        renderDay: PropTypes$1.func,
        shouldDisableDate: PropTypes$1.func,
        utils: PropTypes$1.object.isRequired,
        allowKeyboardControl: PropTypes$1.bool,
        innerRef: PropTypes$1.any
      };
      Calendar.defaultProps = {
        minDate: new Date('1900-01-01'),
        maxDate: new Date('2100-01-01'),
        disablePast: false,
        disableFuture: false,
        allowKeyboardControl: true
      };
      return Calendar;
    }(React.Component);
    var styles$6 = function (theme) {
      return {
        transitionContainer: {
          minHeight: 36 * 6,
          marginTop: theme.spacing.unit * 1.5
        },
        week: {
          display: 'flex',
          justifyContent: 'center'
        }
      };
    };
    var Calendar$1 = withStyles(styles$6, {
      name: 'MuiPickersCalendar',
      withTheme: true
    })(withUtils()(Calendar));

    var Month =
    /** @class */
    function (_super) {
      __extends(Month, _super);

      function Month() {
        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.handleClick = function () {
          _this.props.onSelect(_this.props.value);
        };

        return _this;
      }

      Month.prototype.render = function () {
        var _a;

        var _b = this.props,
            classes = _b.classes,
            selected = _b.selected,
            disabled = _b.disabled,
            value = _b.value,
            children = _b.children,
            other = __rest(_b, ["classes", "selected", "disabled", "value", "children"]);

        return React.createElement(Typography, __assign({
          role: "button",
          component: "div",
          className: clsx(classes.root, (_a = {}, _a[classes.selected] = selected, _a[classes.disabled] = disabled, _a)),
          tabIndex: disabled ? -1 : 0,
          onClick: this.handleClick,
          onKeyPress: this.handleClick,
          color: selected ? 'primary' : 'default',
          variant: selected ? 'h5' : 'subtitle1',
          children: children
        }, other));
      };

      Month.defaultProps = {
        selected: false,
        disabled: false
      };
      return Month;
    }(React.PureComponent);
    var styles$7 = function (theme) {
      return createStyles({
        root: {
          flex: '1 0 33.33%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          outline: 'none',
          height: 75,
          transition: theme.transitions.create('font-size', {
            duration: '100ms'
          }),
          '&:focus': {
            color: theme.palette.primary.main,
            fontWeight: theme.typography.fontWeightMedium
          }
        },
        selected: {
          color: theme.palette.primary.main,
          fontWeight: theme.typography.fontWeightMedium
        },
        disabled: {
          pointerEvents: 'none',
          color: theme.palette.text.hint
        }
      });
    };
    var Month$1 = withStyles(styles$7, {
      name: 'MuiPickersMonth'
    })(Month);

    var MonthSelection =
    /** @class */
    function (_super) {
      __extends(MonthSelection, _super);

      function MonthSelection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.onMonthSelect = function (month) {
          var _a = _this.props,
              date = _a.date,
              onChange = _a.onChange,
              utils = _a.utils;
          var newDate = utils.setMonth(date, month);
          onChange(newDate);
        };

        _this.shouldDisableMonth = function (month) {
          var _a = _this.props,
              utils = _a.utils,
              disablePast = _a.disablePast,
              disableFuture = _a.disableFuture,
              minDate = _a.minDate,
              maxDate = _a.maxDate;
          var now = utils.date();
          var utilMinDate = utils.date(minDate);
          var utilMaxDate = utils.date(maxDate);
          var firstEnabledMonth = utils.startOfMonth(disablePast && utils.isAfter(now, utilMinDate) ? now : utilMinDate);
          var lastEnabledMonth = utils.startOfMonth(disableFuture && utils.isBefore(now, utilMaxDate) ? now : utilMaxDate);
          var isBeforeFirstEnabled = utils.isBefore(month, firstEnabledMonth);
          var isAfterLastEnabled = utils.isAfter(month, lastEnabledMonth);
          return isBeforeFirstEnabled || isAfterLastEnabled;
        };

        return _this;
      }

      MonthSelection.prototype.render = function () {
        var _this = this;

        var _a = this.props,
            date = _a.date,
            classes = _a.classes,
            utils = _a.utils;
        var currentMonth = utils.getMonth(date);
        return React.createElement("div", {
          className: classes.container
        }, utils.getMonthArray(date).map(function (month) {
          var monthNumber = utils.getMonth(month);
          var monthText = utils.format(month, 'MMM');
          return React.createElement(Month$1, {
            key: monthText,
            value: monthNumber,
            selected: monthNumber === currentMonth,
            onSelect: _this.onMonthSelect,
            disabled: _this.shouldDisableMonth(month)
          }, monthText);
        }));
      };

      MonthSelection.defaultProps = {
        minDate: new Date('1900-01-01'),
        maxDate: new Date('2100-01-01')
      };
      return MonthSelection;
    }(React.PureComponent);
    var styles$8 = styles$j.createStyles({
      container: {
        width: 310,
        display: 'flex',
        flexWrap: 'wrap',
        alignContent: 'stretch'
      }
    });
    var MonthSelection$1 = styles$j.withStyles(styles$8, {
      name: 'MuiPickersMonthSelection'
    })(withUtils()(MonthSelection));

    var Year =
    /** @class */
    function (_super) {
      __extends(Year, _super);

      function Year() {
        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.handleClick = function () {
          _this.props.onSelect(_this.props.value);
        };

        return _this;
      }

      Year.prototype.render = function () {
        var _a;

        var _b = this.props,
            classes = _b.classes,
            selected = _b.selected,
            disabled = _b.disabled,
            value = _b.value,
            children = _b.children,
            other = __rest(_b, ["classes", "selected", "disabled", "value", "children"]);

        return React.createElement(Typography, __assign({
          role: "button",
          component: "div",
          className: clsx(classes.root, (_a = {}, _a[classes.selected] = selected, _a[classes.disabled] = disabled, _a)),
          tabIndex: disabled ? -1 : 0,
          onClick: this.handleClick,
          onKeyPress: this.handleClick,
          color: selected ? 'primary' : 'default',
          variant: selected ? 'h5' : 'subtitle1',
          children: children
        }, other));
      };

      Year.propTypes = {
        children: PropTypes$1.node.isRequired,
        classes: PropTypes$1.object.isRequired,
        disabled: PropTypes$1.bool,
        onSelect: PropTypes$1.func.isRequired,
        selected: PropTypes$1.bool,
        value: PropTypes$1.any.isRequired,
        innerRef: PropTypes$1.any
      };
      Year.defaultProps = {
        selected: false,
        disabled: false
      };
      return Year;
    }(React.PureComponent);
    var styles$9 = function (theme) {
      return createStyles({
        root: {
          height: theme.spacing.unit * 5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          outline: 'none',
          '&:focus': {
            color: theme.palette.primary.main,
            fontWeight: theme.typography.fontWeightMedium
          }
        },
        selected: {
          margin: '10px 0',
          fontWeight: theme.typography.fontWeightMedium
        },
        disabled: {
          pointerEvents: 'none',
          color: theme.palette.text.hint
        }
      });
    };
    var Year$1 = withStyles(styles$9, {
      name: 'MuiPickersYear'
    })(Year);

    var YearSelection =
    /** @class */
    function (_super) {
      __extends(YearSelection, _super);

      function YearSelection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.selectedYearRef = undefined;

        _this.getSelectedYearRef = function (ref) {
          _this.selectedYearRef = ref;
        };

        _this.scrollToCurrentYear = function (domNode) {
          var animateYearScrolling = _this.props.animateYearScrolling;
          var currentYearElement = reactDom.findDOMNode(domNode);

          if (currentYearElement && currentYearElement.scrollIntoView) {
            if (animateYearScrolling) {
              setTimeout(function () {
                return currentYearElement.scrollIntoView({
                  behavior: 'smooth'
                });
              }, 100);
            } else {
              currentYearElement.scrollIntoView();
            }
          }
        };

        _this.onYearSelect = function (year) {
          var _a = _this.props,
              date = _a.date,
              onChange = _a.onChange,
              utils = _a.utils,
              onYearChange = _a.onYearChange;
          var newDate = utils.setYear(date, year);

          if (onYearChange) {
            onYearChange(newDate);
          }

          onChange(newDate);
        };

        return _this;
      }

      YearSelection.prototype.componentDidMount = function () {
        if (this.selectedYearRef) {
          this.scrollToCurrentYear(this.selectedYearRef);
        }
      };

      YearSelection.prototype.render = function () {
        var _this = this;

        var _a = this.props,
            minDate = _a.minDate,
            maxDate = _a.maxDate,
            date = _a.date,
            classes = _a.classes,
            disablePast = _a.disablePast,
            disableFuture = _a.disableFuture,
            utils = _a.utils;
        var currentYear = utils.getYear(date);
        return React.createElement("div", {
          className: classes.container
        }, utils.getYearRange(minDate, maxDate).map(function (year) {
          var yearNumber = utils.getYear(year);
          var selected = yearNumber === currentYear;
          return React.createElement(Year$1, {
            key: utils.getYearText(year),
            selected: selected,
            value: yearNumber,
            onSelect: _this.onYearSelect,
            ref: selected ? _this.getSelectedYearRef : undefined,
            disabled: disablePast && utils.isBeforeYear(year, utils.date()) || disableFuture && utils.isAfterYear(year, utils.date())
          }, utils.getYearText(year));
        }));
      };

      YearSelection.propTypes = {
        date: PropTypes$1.shape({}).isRequired,
        minDate: DomainPropTypes.date,
        maxDate: DomainPropTypes.date,
        onChange: PropTypes$1.func.isRequired,
        animateYearScrolling: PropTypes$1.bool,
        innerRef: PropTypes$1.any
      };
      YearSelection.defaultProps = {
        animateYearScrolling: false,
        minDate: new Date('1900-01-01'),
        maxDate: new Date('2100-01-01')
      };
      return YearSelection;
    }(React.PureComponent);
    var styles$a = createStyles({
      container: {
        maxHeight: 300,
        overflowY: 'auto',
        justifyContent: 'center'
      }
    });
    var YearSelection$1 = withStyles(styles$a, {
      name: 'MuiPickersYearSelection'
    })(withUtils()(YearSelection));

    var DatePicker =
    /** @class */
    function (_super) {
      __extends(DatePicker, _super);

      function DatePicker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.state = {
          // TODO in v3 remove openToYearSelection
          openView: _this.props.openTo ? _this.props.openTo : _this.props.openToYearSelection ? 'year' : _this.props.views[_this.props.views.length - 1]
        };

        _this.handleYearSelect = function (date) {
          _this.props.onChange(date, _this.isYearOnly);

          if (_this.isYearOnly) {
            return;
          }

          if (_this.props.views.includes('month')) {
            return _this.openMonthSelection();
          }

          _this.openCalendar();
        };

        _this.handleMonthSelect = function (date) {
          if (_this.props.onMonthChange) {
            _this.props.onMonthChange(date);
          }

          var isFinish = !_this.props.views.includes('day');

          _this.props.onChange(date, isFinish);

          if (!isFinish) {
            _this.openCalendar();
          }
        };

        _this.openYearSelection = function () {
          _this.setState({
            openView: 'year'
          });
        };

        _this.openCalendar = function () {
          _this.setState({
            openView: 'day'
          });
        };

        _this.openMonthSelection = function () {
          _this.setState({
            openView: 'month'
          });
        };

        return _this;
      }

      Object.defineProperty(DatePicker.prototype, "date", {
        get: function () {
          return this.props.date;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(DatePicker.prototype, "minDate", {
        get: function () {
          return this.props.utils.date(this.props.minDate);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(DatePicker.prototype, "maxDate", {
        get: function () {
          return this.props.utils.date(this.props.maxDate);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(DatePicker.prototype, "isYearOnly", {
        get: function () {
          return isYearOnlyView(this.props.views);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(DatePicker.prototype, "isYearAndMonth", {
        get: function () {
          return isYearAndMonthViews(this.props.views);
        },
        enumerable: true,
        configurable: true
      });

      DatePicker.prototype.render = function () {
        var _a;

        var openView = this.state.openView;
        var _b = this.props,
            disablePast = _b.disablePast,
            disableFuture = _b.disableFuture,
            onChange = _b.onChange,
            animateYearScrolling = _b.animateYearScrolling,
            leftArrowIcon = _b.leftArrowIcon,
            rightArrowIcon = _b.rightArrowIcon,
            renderDay = _b.renderDay,
            utils = _b.utils,
            shouldDisableDate = _b.shouldDisableDate,
            allowKeyboardControl = _b.allowKeyboardControl,
            classes = _b.classes,
            onMonthChange = _b.onMonthChange,
            onYearChange = _b.onYearChange;
        return React.createElement(React.Fragment, null, React.createElement(PickerToolbar$1, {
          className: clsx((_a = {}, _a[classes.toolbarCenter] = this.isYearOnly, _a))
        }, React.createElement(ToolbarButton$1, {
          variant: this.isYearOnly ? 'h3' : 'subtitle1',
          onClick: this.isYearOnly ? undefined : this.openYearSelection,
          selected: openView === 'year',
          label: utils.getYearText(this.date)
        }), !this.isYearOnly && !this.isYearAndMonth && React.createElement(ToolbarButton$1, {
          variant: "h4",
          onClick: this.openCalendar,
          selected: openView === 'day',
          label: utils.getDatePickerHeaderText(this.date)
        }), this.isYearAndMonth && React.createElement(ToolbarButton$1, {
          variant: "h4",
          onClick: this.openMonthSelection,
          selected: openView === 'month',
          label: utils.getMonthText(this.date)
        })), this.props.children, openView === 'year' && React.createElement(YearSelection$1, {
          date: this.date,
          onChange: this.handleYearSelect,
          minDate: this.minDate,
          maxDate: this.maxDate,
          disablePast: disablePast,
          disableFuture: disableFuture,
          onYearChange: onYearChange,
          animateYearScrolling: animateYearScrolling
        }), openView === 'month' && React.createElement(MonthSelection$1, {
          date: this.date,
          onChange: this.handleMonthSelect,
          minDate: this.minDate,
          maxDate: this.maxDate,
          disablePast: disablePast,
          disableFuture: disableFuture
        }), openView === 'day' && React.createElement(Calendar$1, {
          date: this.date,
          onChange: onChange,
          onMonthChange: onMonthChange,
          disablePast: disablePast,
          disableFuture: disableFuture,
          minDate: this.minDate,
          maxDate: this.maxDate,
          leftArrowIcon: leftArrowIcon,
          rightArrowIcon: rightArrowIcon,
          renderDay: renderDay,
          shouldDisableDate: shouldDisableDate,
          allowKeyboardControl: allowKeyboardControl
        }));
      };

      DatePicker.propTypes = {
        views: PropTypes$1.arrayOf(DomainPropTypes.datePickerView),
        openTo: DomainPropTypes.datePickerView,
        openToYearSelection: PropTypes$1.bool
      };
      DatePicker.defaultProps = {
        openToYearSelection: false,
        minDate: new Date('1900-01-01'),
        maxDate: new Date('2100-01-01'),
        views: ['year', 'day']
      };
      return DatePicker;
    }(React.PureComponent);
    var styles$b = function () {
      return createStyles({
        toolbarCenter: {
          flexDirection: 'row',
          alignItems: 'center'
        }
      });
    };
    var DatePicker$1 = withStyles(styles$b)(withUtils()(DatePicker));

    var DatePickerModal = function (props) {
      var allowKeyboardControl = props.allowKeyboardControl,
          animateYearScrolling = props.animateYearScrolling,
          autoOk = props.autoOk,
          disableFuture = props.disableFuture,
          disablePast = props.disablePast,
          format = props.format,
          forwardedRef = props.forwardedRef,
          labelFunc = props.labelFunc,
          leftArrowIcon = props.leftArrowIcon,
          maxDate = props.maxDate,
          minDate = props.minDate,
          initialFocusedDate = props.initialFocusedDate,
          onChange = props.onChange,
          openToYearSelection = props.openToYearSelection,
          renderDay = props.renderDay,
          rightArrowIcon = props.rightArrowIcon,
          shouldDisableDate = props.shouldDisableDate,
          value = props.value,
          views = props.views,
          openTo = props.openTo,
          onMonthChange = props.onMonthChange,
          onYearChange = props.onYearChange,
          other = __rest(props, ["allowKeyboardControl", "animateYearScrolling", "autoOk", "disableFuture", "disablePast", "format", "forwardedRef", "labelFunc", "leftArrowIcon", "maxDate", "minDate", "initialFocusedDate", "onChange", "openToYearSelection", "renderDay", "rightArrowIcon", "shouldDisableDate", "value", "views", "openTo", "onMonthChange", "onYearChange"]);

      return React.createElement(BasePicker$1, __assign({}, props), function (_a) {
        var date = _a.date,
            utils = _a.utils,
            handleAccept = _a.handleAccept,
            handleChange = _a.handleChange,
            handleClear = _a.handleClear,
            handleDismiss = _a.handleDismiss,
            handleSetTodayDate = _a.handleSetTodayDate,
            handleTextFieldChange = _a.handleTextFieldChange,
            isAccepted = _a.isAccepted;
        return React.createElement(ModalWrapper, __assign({
          disableFuture: disableFuture,
          disablePast: disablePast,
          format: format || getFormatByViews(views, utils),
          labelFunc: labelFunc,
          maxDate: maxDate,
          minDate: minDate,
          onAccept: handleAccept,
          onChange: handleTextFieldChange,
          onClear: handleClear,
          onDismiss: handleDismiss,
          onSetToday: handleSetTodayDate,
          ref: forwardedRef,
          value: value,
          isAccepted: isAccepted
        }, other), React.createElement(DatePicker$1, {
          date: date,
          allowKeyboardControl: allowKeyboardControl,
          animateYearScrolling: animateYearScrolling,
          disableFuture: disableFuture,
          disablePast: disablePast,
          leftArrowIcon: leftArrowIcon,
          maxDate: maxDate,
          minDate: minDate,
          onChange: handleChange,
          openToYearSelection: openToYearSelection,
          renderDay: renderDay,
          rightArrowIcon: rightArrowIcon,
          shouldDisableDate: shouldDisableDate,
          views: views,
          openTo: openTo,
          onMonthChange: onMonthChange,
          onYearChange: onYearChange
        }));
      });
    };
    DatePickerModal.defaultProps = {
      views: ['year', 'day']
    };
    var DatePickerModal$1 = React.forwardRef(function (props, ref) {
      return React.createElement(DatePickerModal, __assign({}, props, {
        forwardedRef: ref
      }));
    });

    var InlineWrapper =
    /** @class */
    function (_super) {
      __extends(InlineWrapper, _super);

      function InlineWrapper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.state = {
          anchorEl: null
        };

        _this.open = function (e) {
          _this.setState({
            anchorEl: e.currentTarget
          });

          if (_this.props.onOpen) {
            _this.props.onOpen();
          }
        };

        _this.close = function () {
          _this.setState({
            anchorEl: null
          });

          _this.props.handleAccept();

          if (_this.props.onClose) {
            _this.props.onClose();
          }
        };

        _this.handleKeyDown = function (event) {
          switch (event.key) {
            case 'Enter':
              {
                _this.props.handleAccept();

                _this.close();

                break;
              }

            default:
              // if key is not handled, stop execution
              return;
          } // if event was handled prevent other side effects


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
            anchorEl: null
          };
        }

        return null;
      };

      InlineWrapper.prototype.render = function () {
        var _a;

        var _b = this.props,
            value = _b.value,
            format = _b.format,
            children = _b.children,
            onOpen = _b.onOpen,
            onClose = _b.onClose,
            PopoverProps = _b.PopoverProps,
            isAccepted = _b.isAccepted,
            keyboard = _b.keyboard,
            onlyCalendar = _b.onlyCalendar,
            classes = _b.classes,
            handleAccept = _b.handleAccept,
            wider = _b.wider,
            other = __rest(_b, ["value", "format", "children", "onOpen", "onClose", "PopoverProps", "isAccepted", "keyboard", "onlyCalendar", "classes", "handleAccept", "wider"]);

        var isOpen = Boolean(this.state.anchorEl);
        return React.createElement(React.Fragment, null, isOpen && React.createElement(EventListener, {
          target: "window",
          onKeyDown: this.handleKeyDown
        }), React.createElement(DateTextField$1, __assign({
          value: value,
          format: format,
          onClick: this.open,
          keyboard: keyboard
        }, other)), React.createElement(Popover, __assign({
          id: "picker-popover",
          open: isOpen,
          anchorEl: this.state.anchorEl,
          onClose: this.close,
          classes: {
            paper: clsx(classes.popoverPaper, (_a = {}, _a[classes.popoverPaperWider] = wider, _a))
          },
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: keyboard ? 'right' : 'center'
          },
          transformOrigin: {
            vertical: 'top',
            horizontal: keyboard ? 'right' : 'center'
          },
          children: children
        }, PopoverProps)));
      };

      InlineWrapper.propTypes = {
        onlyCalendar: PropTypes$1.bool,
        onOpen: PropTypes$1.func,
        onClose: PropTypes$1.func,
        PopoverProps: PropTypes$1.object
      };
      InlineWrapper.defaultProps = {
        value: new Date(),
        onlyCalendar: false,
        isAccepted: false
      };
      return InlineWrapper;
    }(React.PureComponent);
    var styles$c = {
      popoverPaper: {
        width: DIALOG_WIDTH,
        paddingBottom: 8
      },
      popoverPaperWider: {
        width: DIALOG_WIDTH_WIDER
      }
    };
    var InlineWrapper$1 = withStyles(styles$c)(InlineWrapper);

    var DatePickerInline = function (props) {
      var allowKeyboardControl = props.allowKeyboardControl,
          animateYearScrolling = props.animateYearScrolling,
          disableFuture = props.disableFuture,
          disablePast = props.disablePast,
          format = props.format,
          forwardedRef = props.forwardedRef,
          labelFunc = props.labelFunc,
          leftArrowIcon = props.leftArrowIcon,
          maxDate = props.maxDate,
          minDate = props.minDate,
          initialFocusedDate = props.initialFocusedDate,
          onChange = props.onChange,
          openToYearSelection = props.openToYearSelection,
          renderDay = props.renderDay,
          rightArrowIcon = props.rightArrowIcon,
          shouldDisableDate = props.shouldDisableDate,
          value = props.value,
          autoOk = props.autoOk,
          onlyCalendar = props.onlyCalendar,
          views = props.views,
          openTo = props.openTo,
          other = __rest(props, ["allowKeyboardControl", "animateYearScrolling", "disableFuture", "disablePast", "format", "forwardedRef", "labelFunc", "leftArrowIcon", "maxDate", "minDate", "initialFocusedDate", "onChange", "openToYearSelection", "renderDay", "rightArrowIcon", "shouldDisableDate", "value", "autoOk", "onlyCalendar", "views", "openTo"]);

      var ComponentToShow = onlyCalendar ? Calendar$1 : DatePicker$1;
      return React.createElement(BasePicker$1, __assign({}, props, {
        autoOk: true
      }), function (_a) {
        var date = _a.date,
            utils = _a.utils,
            isAccepted = _a.isAccepted,
            handleChange = _a.handleChange,
            handleClear = _a.handleClear,
            handleTextFieldChange = _a.handleTextFieldChange,
            handleAccept = _a.handleAccept;
        return React.createElement(InlineWrapper$1, __assign({
          disableFuture: disableFuture,
          disablePast: disablePast,
          format: format || utils.dateFormat,
          labelFunc: labelFunc,
          maxDate: maxDate,
          minDate: minDate,
          onChange: handleTextFieldChange,
          innerRef: forwardedRef,
          value: value,
          isAccepted: isAccepted,
          handleAccept: handleAccept,
          onClear: handleClear
        }, other), React.createElement(ComponentToShow, {
          date: date,
          views: views,
          openTo: openTo,
          allowKeyboardControl: allowKeyboardControl,
          animateYearScrolling: animateYearScrolling,
          disableFuture: disableFuture,
          disablePast: disablePast,
          leftArrowIcon: leftArrowIcon,
          maxDate: maxDate,
          minDate: minDate,
          onChange: handleChange,
          openToYearSelection: openToYearSelection,
          renderDay: renderDay,
          rightArrowIcon: rightArrowIcon,
          shouldDisableDate: shouldDisableDate
        }));
      });
    };
    DatePickerInline.defaultProps = {
      views: ['year', 'day']
    };
    var DatePickerInline$1 = React.forwardRef(function (props, ref) {
      return React.createElement(DatePickerInline, __assign({}, props, {
        forwardedRef: ref
      }));
    });

    var center = {
      x: 260 / 2,
      y: 260 / 2
    };
    var basePoint = {
      x: center.x,
      y: 0
    };
    var cx = basePoint.x - center.x;
    var cy = basePoint.y - center.y;

    var rad2deg = function (rad) {
      return rad * 57.29577951308232;
    };

    var getAngleValue = function (step, offsetX, offsetY) {
      var x = offsetX - center.x;
      var y = offsetY - center.y;
      var atan = Math.atan2(cx, cy) - Math.atan2(x, y);
      var deg = rad2deg(atan);
      deg = Math.round(deg / step) * step;
      deg %= 360;
      var value = Math.floor(deg / step) || 0;
      var delta = Math.pow(x, 2) + Math.pow(y, 2);
      var distance = Math.sqrt(delta);
      return {
        value: value,
        distance: distance
      };
    };

    var getHours = function (offsetX, offsetY, ampm) {
      // tslint:disable-next-line
      var _a = getAngleValue(30, offsetX, offsetY),
          value = _a.value,
          distance = _a.distance;

      value = value || 12;

      if (!ampm) {
        if (distance < 90) {
          value += 12;
          value %= 24;
        }
      } else {
        value %= 12;
      }

      return value;
    };
    var getMinutes = function (offsetX, offsetY, step) {
      if (step === void 0) {
        step = 1;
      }

      var angleStep = step * 6;
      var value = getAngleValue(angleStep, offsetX, offsetY).value;
      value = value * step % 60;
      return value;
    };
    var convertToMeridiem = function (time, meridiem, ampm, utils) {
      if (ampm) {
        var currentMeridiem = utils.getHours(time) >= 12 ? 'pm' : 'am';

        if (currentMeridiem !== meridiem) {
          var hours = meridiem === 'am' ? utils.getHours(time) - 12 : utils.getHours(time) + 12;
          return utils.setHours(time, hours);
        }
      }

      return time;
    };

    var ClockType;

    (function (ClockType) {
      ClockType["HOURS"] = "hours";
      ClockType["MINUTES"] = "minutes";
      ClockType["SECONDS"] = "seconds";
    })(ClockType || (ClockType = {}));

    var ClockType$1 = ClockType;

    var ClockPointer =
    /** @class */
    function (_super) {
      __extends(ClockPointer, _super);

      function ClockPointer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.state = {
          toAnimateTransform: false,
          previousType: undefined
        };

        _this.getAngleStyle = function () {
          var _a = _this.props,
              value = _a.value,
              isInner = _a.isInner,
              type = _a.type;
          var max = type === ClockType$1.HOURS ? 12 : 60;
          var angle = 360 / max * value;

          if (type === ClockType$1.HOURS && value > 12) {
            angle -= 360; // round up angle to max 360 degrees
          }

          return {
            height: isInner ? '26%' : '40%',
            transform: "rotateZ(" + angle + "deg)"
          };
        };

        return _this;
      }

      ClockPointer.prototype.render = function () {
        var _a, _b;

        var _c = this.props,
            classes = _c.classes,
            hasSelected = _c.hasSelected;
        return React.createElement("div", {
          style: this.getAngleStyle(),
          className: clsx(classes.pointer, (_a = {}, _a[classes.animateTransform] = this.state.toAnimateTransform, _a))
        }, React.createElement("div", {
          className: clsx(classes.thumb, (_b = {}, _b[classes.noPoint] = hasSelected, _b))
        }));
      };

      ClockPointer.propTypes = {
        value: PropTypes$1.number.isRequired,
        hasSelected: PropTypes$1.bool.isRequired,
        isInner: PropTypes$1.bool.isRequired,
        type: PropTypes$1.oneOf(Object.keys(ClockType$1).map(function (key) {
          return ClockType$1[key];
        })).isRequired
      };

      ClockPointer.getDerivedStateFromProps = function (nextProps, state) {
        if (nextProps.type !== state.previousType) {
          return {
            toAnimateTransform: true,
            previousType: nextProps.type
          };
        }

        return {
          toAnimateTransform: false,
          previousType: nextProps.type
        };
      };

      return ClockPointer;
    }(React.Component);
    var styles$d = function (theme) {
      return createStyles({
        pointer: {
          width: 2,
          backgroundColor: theme.palette.primary.main,
          position: 'absolute',
          left: 'calc(50% - 1px)',
          bottom: '50%',
          transformOrigin: 'center bottom 0px'
        },
        animateTransform: {
          transition: theme.transitions.create(['transform', 'height'])
        },
        thumb: {
          width: 4,
          height: 4,
          backgroundColor: theme.palette.common.white,
          borderRadius: '100%',
          position: 'absolute',
          top: -21,
          left: -15,
          border: "14px solid " + theme.palette.primary.main,
          boxSizing: 'content-box'
        },
        noPoint: {
          backgroundColor: theme.palette.primary.main
        }
      });
    };
    var ClockPointer$1 = withStyles(styles$d, {
      name: 'MuiPickersClockPointer'
    })(ClockPointer);

    var Clock =
    /** @class */
    function (_super) {
      __extends(Clock, _super);

      function Clock() {
        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.isMoving = false;

        _this.handleTouchMove = function (e) {
          _this.isMoving = true;

          _this.setTime(e);
        };

        _this.handleTouchEnd = function (e) {
          if (_this.isMoving) {
            _this.setTime(e, true);

            _this.isMoving = false;
          }
        };

        _this.handleMove = function (e) {
          e.preventDefault();
          e.stopPropagation(); // MouseEvent.which is deprecated, but MouseEvent.buttons is not supported in Safari

          var isButtonPressed = typeof e.buttons === 'undefined' ? e.nativeEvent.which === 1 : e.buttons === 1;

          if (isButtonPressed) {
            _this.setTime(e.nativeEvent, false);
          }
        };

        _this.handleMouseUp = function (e) {
          if (_this.isMoving) {
            _this.isMoving = false;
          }

          _this.setTime(e.nativeEvent, true);
        };

        _this.hasSelected = function () {
          var _a = _this.props,
              type = _a.type,
              value = _a.value;

          if (type === ClockType$1.HOURS) {
            return true;
          }

          return value % 5 === 0;
        };

        return _this;
      }

      Clock.prototype.setTime = function (e, isFinish) {
        if (isFinish === void 0) {
          isFinish = false;
        }

        var offsetX = e.offsetX,
            offsetY = e.offsetY;

        if (typeof offsetX === 'undefined') {
          var rect = e.target.getBoundingClientRect();
          offsetX = e.changedTouches[0].clientX - rect.left;
          offsetY = e.changedTouches[0].clientY - rect.top;
        }

        var value = this.props.type === ClockType$1.SECONDS || this.props.type === ClockType$1.MINUTES ? getMinutes(offsetX, offsetY, this.props.minutesStep) : getHours(offsetX, offsetY, Boolean(this.props.ampm));
        this.props.onChange(value, isFinish);
      };

      Clock.prototype.render = function () {
        var _a = this.props,
            classes = _a.classes,
            value = _a.value,
            children = _a.children,
            type = _a.type,
            ampm = _a.ampm;
        var isPointerInner = !ampm && type === ClockType$1.HOURS && (value < 1 || value > 12);
        return React.createElement("div", {
          className: classes.container
        }, React.createElement("div", {
          className: classes.clock
        }, React.createElement("div", {
          role: "menu",
          tabIndex: -1,
          className: classes.squareMask,
          onTouchMove: this.handleTouchMove,
          onTouchEnd: this.handleTouchEnd,
          onMouseUp: this.handleMouseUp,
          onMouseMove: this.handleMove
        }), React.createElement("div", {
          className: classes.pin
        }), React.createElement(ClockPointer$1, {
          type: type,
          value: value,
          isInner: isPointerInner,
          hasSelected: this.hasSelected()
        }), children));
      };

      Clock.propTypes = {
        type: PropTypes$1.oneOf(Object.keys(ClockType$1).map(function (key) {
          return ClockType$1[key];
        })).isRequired,
        value: PropTypes$1.number.isRequired,
        onChange: PropTypes$1.func.isRequired,
        children: PropTypes$1.arrayOf(PropTypes$1.node).isRequired,
        ampm: PropTypes$1.bool,
        minutesStep: PropTypes$1.number,
        innerRef: PropTypes$1.any
      };
      Clock.defaultProps = {
        ampm: false,
        minutesStep: 1
      };
      return Clock;
    }(React.Component);
    var styles$e = function (theme) {
      return createStyles({
        container: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          margin: theme.spacing.unit * 4 + "px 0 " + theme.spacing.unit + "px"
        },
        clock: {
          backgroundColor: 'rgba(0,0,0,.07)',
          borderRadius: '50%',
          height: 260,
          width: 260,
          position: 'relative',
          pointerEvents: 'none',
          zIndex: 1
        },
        squareMask: {
          width: '100%',
          height: '100%',
          position: 'absolute',
          pointerEvents: 'auto',
          outline: 'none',
          touchActions: 'none',
          userSelect: 'none',
          '&:active': {
            cursor: 'move'
          }
        },
        pin: {
          width: 6,
          height: 6,
          borderRadius: '50%',
          backgroundColor: theme.palette.primary.main,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }
      });
    };
    var Clock$1 = withStyles(styles$e, {
      name: 'MuiPickersClock'
    })(Clock);

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
      23: [-37, 50]
    };

    var ClockNumber =
    /** @class */
    function (_super) {
      __extends(ClockNumber, _super);

      function ClockNumber() {
        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.getTransformStyle = function (index) {
          var position = positions[index];
          return {
            transform: "translate(" + position[0] + "px, " + position[1] + "px"
          };
        };

        return _this;
      }

      ClockNumber.prototype.render = function () {
        var _a;

        var _b = this.props,
            selected = _b.selected,
            label = _b.label,
            index = _b.index,
            classes = _b.classes,
            isInner = _b.isInner;
        var className = clsx(classes.clockNumber, (_a = {}, _a[classes.selected] = selected, _a));
        return React.createElement(Typography, {
          component: "span",
          className: className,
          variant: isInner ? 'body2' : 'body1',
          style: this.getTransformStyle(index)
        }, label);
      };

      ClockNumber.propTypes = {
        index: PropTypes$1.number.isRequired,
        label: PropTypes$1.string.isRequired,
        selected: PropTypes$1.bool.isRequired,
        classes: PropTypes$1.object.isRequired,
        isInner: PropTypes$1.bool,
        innerRef: PropTypes$1.any
      };
      ClockNumber.defaultProps = {
        isInner: false
      };
      return ClockNumber;
    }(React.Component);
    var styles$f = function (theme) {
      var size = theme.spacing.unit * 4;
      return createStyles({
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
          color: theme.palette.type === 'light' ? theme.palette.text.primary : theme.palette.text.hint
        },
        selected: {
          color: theme.palette.common.white
        }
      });
    };
    var ClockNumber$1 = withStyles(styles$f, {
      name: 'MuiPickersClockNumber'
    })(ClockNumber);

    var getHourNumbers = function (_a) {
      var ampm = _a.ampm,
          utils = _a.utils,
          date = _a.date;
      var currentHours = utils.getHours(date);
      var hourNumbers = [];
      var startHour = ampm ? 1 : 0;
      var endHour = ampm ? 12 : 23;

      var isSelected = function (hour) {
        if (ampm) {
          if (hour === 12) {
            return currentHours === 12 || currentHours === 0;
          }

          return currentHours === hour || currentHours - 12 === hour;
        }

        return currentHours === hour;
      };

      for (var hour = startHour; hour <= endHour; hour += 1) {
        var label = hour.toString();

        if (hour === 0) {
          label = '00';
        }

        var props = {
          index: hour,
          label: utils.formatNumber(label),
          selected: isSelected(hour),
          isInner: !ampm && (hour === 0 || hour > 12)
        };
        hourNumbers.push(React.createElement(ClockNumber$1, __assign({
          key: hour
        }, props)));
      }

      return hourNumbers;
    };
    var getMinutesNumbers = function (_a) {
      var value = _a.value,
          utils = _a.utils;
      var f = utils.formatNumber;
      return [React.createElement(ClockNumber$1, {
        label: f('00'),
        selected: value === 0,
        index: 12,
        key: 12
      }), React.createElement(ClockNumber$1, {
        label: f('05'),
        selected: value === 5,
        index: 1,
        key: 1
      }), React.createElement(ClockNumber$1, {
        label: f('10'),
        selected: value === 10,
        index: 2,
        key: 2
      }), React.createElement(ClockNumber$1, {
        label: f('15'),
        selected: value === 15,
        index: 3,
        key: 3
      }), React.createElement(ClockNumber$1, {
        label: f('20'),
        selected: value === 20,
        index: 4,
        key: 4
      }), React.createElement(ClockNumber$1, {
        label: f('25'),
        selected: value === 25,
        index: 5,
        key: 5
      }), React.createElement(ClockNumber$1, {
        label: f('30'),
        selected: value === 30,
        index: 6,
        key: 6
      }), React.createElement(ClockNumber$1, {
        label: f('35'),
        selected: value === 35,
        index: 7,
        key: 7
      }), React.createElement(ClockNumber$1, {
        label: f('40'),
        selected: value === 40,
        index: 8,
        key: 8
      }), React.createElement(ClockNumber$1, {
        label: f('45'),
        selected: value === 45,
        index: 9,
        key: 9
      }), React.createElement(ClockNumber$1, {
        label: f('50'),
        selected: value === 50,
        index: 10,
        key: 10
      }), React.createElement(ClockNumber$1, {
        label: f('55'),
        selected: value === 55,
        index: 11,
        key: 11
      })];
    };

    var TimePickerView =
    /** @class */
    function (_super) {
      __extends(TimePickerView, _super);

      function TimePickerView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.getViewProps = function () {
          var _a = _this.props,
              type = _a.type,
              ampm = _a.ampm,
              date = _a.date,
              utils = _a.utils;

          switch (type) {
            case ClockType$1.HOURS:
              return {
                value: utils.getHours(date),
                children: getHourNumbers({
                  date: date,
                  ampm: Boolean(ampm),
                  utils: utils
                }),
                onChange: _this.handleHourChange
              };

            case ClockType$1.MINUTES:
              var minutesValue = utils.getMinutes(date);
              return {
                value: minutesValue,
                children: getMinutesNumbers({
                  value: minutesValue,
                  utils: utils
                }),
                onChange: _this.handleMinutesChange
              };

            case ClockType$1.SECONDS:
              var secondsValue = utils.getSeconds(date);
              return {
                value: secondsValue,
                children: getMinutesNumbers({
                  value: secondsValue,
                  utils: utils
                }),
                onChange: _this.handleSecondsChange
              };

            default:
              throw new Error('You must provide the type for TimePickerView');
          }
        };

        _this.handleHourChange = function (hours, isFinish) {
          var _a = _this.props,
              date = _a.date,
              utils = _a.utils;
          var updatedTime = utils.setHours(date, hours);

          _this.props.onHourChange(updatedTime, isFinish);
        };

        _this.handleMinutesChange = function (minutes, isFinish) {
          var _a = _this.props,
              date = _a.date,
              utils = _a.utils;
          var updatedTime = utils.setMinutes(date, minutes);

          _this.props.onMinutesChange(updatedTime, isFinish);
        };

        _this.handleSecondsChange = function (seconds, isFinish) {
          var _a = _this.props,
              date = _a.date,
              utils = _a.utils;
          var updatedTime = utils.setSeconds(date, seconds);

          _this.props.onSecondsChange(updatedTime, isFinish);
        };

        return _this;
      }

      TimePickerView.prototype.render = function () {
        var _a = this.props,
            ampm = _a.ampm,
            type = _a.type,
            minutesStep = _a.minutesStep;
        var viewProps = this.getViewProps();
        return React.createElement(Clock$1, __assign({
          type: type,
          ampm: ampm,
          minutesStep: minutesStep
        }, viewProps));
      };

      TimePickerView.propTypes = {
        date: PropTypes$1.object.isRequired,
        onHourChange: PropTypes$1.func.isRequired,
        onMinutesChange: PropTypes$1.func.isRequired,
        onSecondsChange: PropTypes$1.func.isRequired,
        ampm: PropTypes$1.bool,
        minutesStep: PropTypes$1.number,
        type: PropTypes$1.oneOf(Object.keys(ClockType$1).map(function (key) {
          return ClockType$1[key];
        })).isRequired
      };
      TimePickerView.defaultProps = {
        ampm: true,
        minutesStep: 1
      };
      return TimePickerView;
    }(React.PureComponent);
    var TimePickerView$1 = withUtils()(TimePickerView);

    var TimePicker =
    /** @class */
    function (_super) {
      __extends(TimePicker, _super);

      function TimePicker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.state = {
          openView: ClockType$1.HOURS,
          meridiemMode: _this.props.utils.getHours(_this.props.date) >= 12 ? 'pm' : 'am'
        };

        _this.setMeridiemMode = function (mode) {
          return function () {
            _this.setState({
              meridiemMode: mode
            }, function () {
              return _this.handleChange({
                time: _this.props.date,
                isFinish: false,
                openMinutes: false,
                openSeconds: false
              });
            });
          };
        };

        _this.handleChange = function (_a) {
          var time = _a.time,
              isFinish = _a.isFinish,
              openMinutes = _a.openMinutes,
              openSeconds = _a.openSeconds;
          var withMeridiem = convertToMeridiem(time, _this.state.meridiemMode, Boolean(_this.props.ampm), _this.props.utils);

          if (isFinish) {
            if (!openMinutes && !openSeconds) {
              _this.props.onChange(withMeridiem, isFinish);

              return;
            }

            if (openMinutes) {
              _this.openMinutesView();
            }

            if (openSeconds) {
              _this.openSecondsView();
            }
          }

          _this.props.onChange(withMeridiem, false);
        };

        _this.handleHourChange = function (time, isFinish) {
          _this.handleChange({
            time: time,
            isFinish: isFinish,
            openMinutes: true,
            openSeconds: false
          });
        };

        _this.handleMinutesChange = function (time, isFinish) {
          _this.handleChange({
            time: time,
            isFinish: isFinish,
            openMinutes: false,
            openSeconds: Boolean(_this.props.seconds)
          });
        };

        _this.handleSecondsChange = function (time, isFinish) {
          _this.handleChange({
            time: time,
            isFinish: isFinish,
            openMinutes: false,
            openSeconds: false
          });
        };

        _this.openSecondsView = function () {
          _this.setState({
            openView: ClockType$1.SECONDS
          });
        };

        _this.openMinutesView = function () {
          _this.setState({
            openView: ClockType$1.MINUTES
          });
        };

        _this.openHourView = function () {
          _this.setState({
            openView: ClockType$1.HOURS
          });
        };

        return _this;
      }

      TimePicker.prototype.render = function () {
        var _a;

        var _b = this.props,
            classes = _b.classes,
            theme = _b.theme,
            date = _b.date,
            utils = _b.utils,
            ampm = _b.ampm,
            seconds = _b.seconds,
            minutesStep = _b.minutesStep;
        var _c = this.state,
            meridiemMode = _c.meridiemMode,
            openView = _c.openView;
        var rtl = theme.direction === 'rtl';
        var hourMinuteClassName = rtl ? classes.hourMinuteLabelReverse : classes.hourMinuteLabel;
        return React.createElement(React.Fragment, null, React.createElement(PickerToolbar$1, {
          className: clsx(classes.toolbar, (_a = {}, _a[classes.toolbarLeftPadding] = ampm, _a))
        }, React.createElement("div", {
          className: hourMinuteClassName
        }, React.createElement(ToolbarButton$1, {
          variant: "h2",
          onClick: this.openHourView,
          selected: openView === ClockType$1.HOURS,
          label: utils.getHourText(date, Boolean(ampm))
        }), React.createElement(ToolbarButton$1, {
          variant: "h2",
          label: ":",
          selected: false,
          className: classes.separator
        }), React.createElement(ToolbarButton$1, {
          variant: "h2",
          onClick: this.openMinutesView,
          selected: openView === ClockType$1.MINUTES,
          label: utils.getMinuteText(date)
        }), seconds && React.createElement(React.Fragment, null, React.createElement(ToolbarButton$1, {
          variant: "h2",
          label: ":",
          selected: false,
          className: classes.separator
        }), React.createElement(ToolbarButton$1, {
          variant: "h2",
          onClick: this.openSecondsView,
          selected: openView === ClockType$1.SECONDS,
          label: utils.getSecondText(date)
        }))), ampm && React.createElement("div", {
          className: seconds ? classes.ampmSelectionWithSeconds : classes.ampmSelection
        }, React.createElement(ToolbarButton$1, {
          className: classes.ampmLabel,
          selected: meridiemMode === 'am',
          variant: "subtitle1",
          label: utils.getMeridiemText('am'),
          onClick: this.setMeridiemMode('am')
        }), React.createElement(ToolbarButton$1, {
          className: classes.ampmLabel,
          selected: meridiemMode === 'pm',
          variant: "subtitle1",
          label: utils.getMeridiemText('pm'),
          onClick: this.setMeridiemMode('pm')
        }))), this.props.children, React.createElement(TimePickerView$1, {
          date: date,
          type: this.state.openView,
          ampm: ampm,
          minutesStep: minutesStep,
          onHourChange: this.handleHourChange,
          onMinutesChange: this.handleMinutesChange,
          onSecondsChange: this.handleSecondsChange
        }));
      };

      TimePicker.propTypes = {
        date: PropTypes$1.object.isRequired,
        onChange: PropTypes$1.func.isRequired,
        utils: PropTypes$1.object.isRequired,
        ampm: PropTypes$1.bool,
        seconds: PropTypes$1.bool,
        minutesStep: PropTypes$1.number,
        innerRef: PropTypes$1.any
      };
      TimePicker.defaultProps = {
        children: null,
        ampm: true,
        seconds: false,
        minutesStep: 1
      };
      return TimePicker;
    }(React.Component);
    var styles$g = function () {
      return createStyles({
        toolbar: {
          flexDirection: 'row',
          alignItems: 'center'
        },
        toolbarLeftPadding: {
          paddingLeft: 50
        },
        separator: {
          margin: '0 4px 0 2px',
          cursor: 'default'
        },
        ampmSelection: {
          marginLeft: 20,
          marginRight: -20
        },
        ampmSelectionWithSeconds: {
          marginLeft: 15,
          marginRight: 10
        },
        ampmLabel: {
          fontSize: 18
        },
        hourMinuteLabel: {
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-end'
        },
        hourMinuteLabelReverse: {
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          flexDirection: 'row-reverse'
        }
      });
    };
    var TimePicker$1 = withStyles(styles$g, {
      withTheme: true,
      name: 'MuiPickersTimePicker'
    })(withUtils()(TimePicker));

    var TimePickerModal = function (props) {
      var ampm = props.ampm,
          autoOk = props.autoOk,
          format = props.format,
          forwardedRef = props.forwardedRef,
          initialFocusedDate = props.initialFocusedDate,
          minutesStep = props.minutesStep,
          onChange = props.onChange,
          seconds = props.seconds,
          value = props.value,
          other = __rest(props, ["ampm", "autoOk", "format", "forwardedRef", "initialFocusedDate", "minutesStep", "onChange", "seconds", "value"]);

      return React.createElement(BasePicker$1, __assign({
        mergePreviousDateOnChange: true
      }, props), function (_a) {
        var date = _a.date,
            utils = _a.utils,
            handleAccept = _a.handleAccept,
            handleChange = _a.handleChange,
            handleClear = _a.handleClear,
            handleDismiss = _a.handleDismiss,
            handleSetTodayDate = _a.handleSetTodayDate,
            handleTextFieldChange = _a.handleTextFieldChange,
            isAccepted = _a.isAccepted,
            pick12hOr24hFormat = _a.pick12hOr24hFormat;
        return React.createElement(ModalWrapper, __assign({
          ref: forwardedRef,
          value: value,
          onClear: handleClear,
          onAccept: handleAccept,
          onChange: handleTextFieldChange,
          onDismiss: handleDismiss,
          onSetToday: handleSetTodayDate,
          isAccepted: isAccepted,
          format: pick12hOr24hFormat(utils.time12hFormat, utils.time24hFormat)
        }, other), React.createElement(TimePicker$1, {
          date: date,
          onChange: handleChange,
          ampm: ampm,
          seconds: seconds,
          minutesStep: minutesStep
        }));
      });
    };
    var TimePickerModal$1 = React.forwardRef(function (props, ref) {
      return React.createElement(TimePickerModal, __assign({}, props, {
        forwardedRef: ref
      }));
    });

    var TimePickerInline = function (props) {
      var ampm = props.ampm,
          format = props.format,
          forwardedRef = props.forwardedRef,
          initialFocusedDate = props.initialFocusedDate,
          minutesStep = props.minutesStep,
          onChange = props.onChange,
          seconds = props.seconds,
          value = props.value,
          other = __rest(props, ["ampm", "format", "forwardedRef", "initialFocusedDate", "minutesStep", "onChange", "seconds", "value"]);

      return React.createElement(BasePicker$1, __assign({
        mergePreviousDateOnChange: true,
        autoOk: true
      }, props), function (_a) {
        var date = _a.date,
            utils = _a.utils,
            handleChange = _a.handleChange,
            handleTextFieldChange = _a.handleTextFieldChange,
            isAccepted = _a.isAccepted,
            pick12hOr24hFormat = _a.pick12hOr24hFormat,
            handleAccept = _a.handleAccept,
            handleClear = _a.handleClear;
        return React.createElement(InlineWrapper$1, __assign({
          innerRef: forwardedRef,
          value: value,
          onChange: handleTextFieldChange,
          isAccepted: isAccepted,
          onClear: handleClear,
          handleAccept: handleAccept,
          format: pick12hOr24hFormat(utils.time12hFormat, utils.time24hFormat)
        }, other), React.createElement(TimePicker$1, {
          date: date,
          onChange: handleChange,
          ampm: ampm,
          seconds: seconds,
          minutesStep: minutesStep
        }));
      });
    };
    var TimePickerInline$1 = React.forwardRef(function (props, ref) {
      return React.createElement(TimePickerInline, __assign({}, props, {
        forwardedRef: ref
      }));
    });

    var DateTimePickerView;

    (function (DateTimePickerView) {
      DateTimePickerView["YEAR"] = "year";
      DateTimePickerView["DATE"] = "date";
      DateTimePickerView["HOUR"] = "hours";
      DateTimePickerView["MINUTES"] = "minutes";
    })(DateTimePickerView || (DateTimePickerView = {}));

    var DateTimePickerView$1 = DateTimePickerView;

    var styles$h = function (theme) {
      return createStyles({
        toolbar: {
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: 16,
          paddingRight: 16,
          justifyContent: 'space-around'
        },
        toolBar24h: {
          paddingLeft: 32
        },
        separator: {
          margin: '0 4px 0 2px',
          cursor: 'default'
        },
        hourMinuteLabel: {
          top: 10,
          position: 'relative',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          flexDirection: theme.direction === 'rtl' ? 'row-reverse' : 'row'
        },
        dateHeader: {
          height: 60,
          minWidth: 110,
          marginRight: 4
        },
        timeHeader: {
          height: 65,
          minWidth: 155,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end'
        },
        ampmSelection: {
          top: 11,
          position: 'relative',
          marginLeft: 10,
          marginRight: -10
        },
        ampmLabel: {
          fontSize: 18
        }
      });
    };
    var DateTimePickerHeader = function (_a) {
      var date = _a.date,
          classes = _a.classes,
          openView = _a.openView,
          meridiemMode = _a.meridiemMode,
          onOpenViewChange = _a.onOpenViewChange,
          setMeridiemMode = _a.setMeridiemMode,
          utils = _a.utils,
          ampm = _a.ampm;

      var _b;

      return React.createElement(PickerToolbar$1, {
        className: clsx(classes.toolbar, (_b = {}, _b[classes.toolBar24h] = !ampm, _b))
      }, React.createElement("div", {
        className: classes.dateHeader
      }, React.createElement(ToolbarButton$1, {
        variant: "subtitle1",
        onClick: function () {
          return onOpenViewChange(DateTimePickerView$1.YEAR);
        },
        selected: openView === DateTimePickerView$1.YEAR,
        label: utils.getYearText(date)
      }), React.createElement(ToolbarButton$1, {
        variant: "h4",
        onClick: function () {
          return onOpenViewChange(DateTimePickerView$1.DATE);
        },
        selected: openView === DateTimePickerView$1.DATE,
        label: utils.getDateTimePickerHeaderText(date)
      })), React.createElement("div", {
        className: classes.timeHeader
      }, React.createElement("div", {
        className: classes.hourMinuteLabel
      }, React.createElement(ToolbarButton$1, {
        variant: "h3",
        onClick: function () {
          return onOpenViewChange(DateTimePickerView$1.HOUR);
        },
        selected: openView === DateTimePickerView$1.HOUR,
        label: utils.getHourText(date, ampm)
      }), React.createElement(ToolbarButton$1, {
        variant: "h3",
        label: ":",
        selected: false,
        className: classes.separator
      }), React.createElement(ToolbarButton$1, {
        variant: "h3",
        onClick: function () {
          return onOpenViewChange(DateTimePickerView$1.MINUTES);
        },
        selected: openView === DateTimePickerView$1.MINUTES,
        label: utils.getMinuteText(date)
      })), ampm && React.createElement("div", {
        className: classes.ampmSelection
      }, React.createElement(ToolbarButton$1, {
        className: classes.ampmLabel,
        selected: meridiemMode === 'am',
        variant: "subtitle1",
        label: utils.getMeridiemText('am'),
        onClick: setMeridiemMode('am')
      }), React.createElement(ToolbarButton$1, {
        className: classes.ampmLabel,
        selected: meridiemMode === 'pm',
        variant: "subtitle1",
        label: utils.getMeridiemText('pm'),
        onClick: setMeridiemMode('pm')
      }))));
    };
    DateTimePickerHeader.propTypes = {
      date: PropTypes$1.object.isRequired,
      classes: PropTypes$1.object.isRequired,
      meridiemMode: PropTypes$1.string.isRequired,
      utils: PropTypes$1.object.isRequired,
      ampm: PropTypes$1.bool,
      innerRef: PropTypes$1.any
    };
    var DatetimePickerHeader = withStyles(styles$h, {
      name: 'MuiPickerDTHeader'
    })(withUtils()(DateTimePickerHeader));

    var DateRangeIcon = function (props) {
      return React__default.createElement(SvgIcon, __assign({}, props), React__default.createElement("path", {
        d: "M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"
      }), React__default.createElement("path", {
        fill: "none",
        d: "M0 0h24v24H0z"
      }));
    };

    var TimeIcon = function (props) {
      return React__default.createElement(SvgIcon, __assign({}, props), React__default.createElement("path", {
        d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
      }), React__default.createElement("path", {
        fill: "none",
        d: "M0 0h24v24H0z"
      }), React__default.createElement("path", {
        d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
      }));
    };

    var viewToTabIndex = function (openView) {
      if (openView === DateTimePickerView$1.DATE || openView === DateTimePickerView$1.YEAR) {
        return 'date';
      }

      return 'time';
    };

    var tabIndexToView = function (tab) {
      if (tab === 'date') {
        return DateTimePickerView$1.DATE;
      }

      return DateTimePickerView$1.HOUR;
    };

    var DateTimePickerTabs = function (props) {
      var view = props.view,
          onChange = props.onChange,
          classes = props.classes,
          theme = props.theme,
          dateRangeIcon = props.dateRangeIcon,
          timeIcon = props.timeIcon;
      var indicatorColor = theme.palette.type === 'light' ? 'secondary' : 'primary';

      var handleChange = function (e, value) {
        if (value !== viewToTabIndex(view)) {
          onChange(tabIndexToView(value));
        }
      };

      return React.createElement(Paper, null, React.createElement(Tabs, {
        variant: "fullWidth",
        value: viewToTabIndex(view),
        onChange: handleChange,
        className: classes.tabs,
        indicatorColor: indicatorColor
      }, React.createElement(Tab, {
        value: "date",
        icon: React.createElement(React.Fragment, null, dateRangeIcon)
      }), React.createElement(Tab, {
        value: "time",
        icon: React.createElement(React.Fragment, null, timeIcon)
      })));
    };
    DateTimePickerTabs.propTypes = {
      view: PropTypes$1.string.isRequired,
      dateRangeIcon: PropTypes$1.node.isRequired,
      timeIcon: PropTypes$1.node.isRequired
    };
    DateTimePickerTabs.defaultProps = {
      dateRangeIcon: React.createElement(DateRangeIcon, null),
      timeIcon: React.createElement(TimeIcon, null)
    };
    var styles$i = function (theme) {
      return {
        tabs: {
          color: theme.palette.common.white,
          backgroundColor: theme.palette.type === 'light' ? theme.palette.primary.main : theme.palette.background.default
        }
      };
    };
    var DateTimePickerTabs$1 = withStyles(styles$i, {
      name: 'MuiPickerDTTabs',
      withTheme: true
    })(DateTimePickerTabs);

    var DateTimePickerView$2 = function (_a) {
      var selected = _a.selected,
          children = _a.children;

      if (!selected) {
        return null;
      }

      return React.createElement("div", {
        children: children
      });
    };

    var DateTimePicker =
    /** @class */
    function (_super) {
      __extends(DateTimePicker, _super);

      function DateTimePicker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.state = {
          openView: _this.props.openTo,
          meridiemMode: _this.props.utils.getHours(_this.props.date) >= 12 ? 'pm' : 'am'
        };

        _this.onChange = function (time, isFinish, nextView) {
          if (isFinish === void 0) {
            isFinish = true;
          }

          _this.handleChange(time);

          if (isFinish && _this.props.autoSubmit) {
            _this.handleViewChange(nextView);
          }
        };

        _this.setMeridiemMode = function (mode) {
          return function () {
            _this.setState({
              meridiemMode: mode
            }, function () {
              return _this.handleChange(_this.props.date, false);
            });
          };
        };

        _this.handleViewChange = function (view) {
          _this.setState({
            openView: view
          });
        };

        _this.handleChange = function (time, isFinish) {
          if (isFinish === void 0) {
            isFinish = false;
          }

          var withMeridiem = convertToMeridiem(time, _this.state.meridiemMode, Boolean(_this.props.ampm), _this.props.utils);

          _this.props.onChange(withMeridiem, isFinish);
        };

        _this.handleYearChange = function (date) {
          _this.onChange(date, true, DateTimePickerView$1.DATE);
        };

        _this.handleDayChange = function (date, isFinish) {
          _this.onChange(date, isFinish, DateTimePickerView$1.HOUR);
        };

        _this.handleHourChange = function (time, isFinish) {
          _this.onChange(time, isFinish, DateTimePickerView$1.MINUTES);
        };

        return _this;
      }

      DateTimePicker.prototype.render = function () {
        var _a = this.state,
            openView = _a.openView,
            meridiemMode = _a.meridiemMode;
        var _b = this.props,
            date = _b.date,
            minDate = _b.minDate,
            maxDate = _b.maxDate,
            showTabs = _b.showTabs,
            disablePast = _b.disablePast,
            disableFuture = _b.disableFuture,
            leftArrowIcon = _b.leftArrowIcon,
            rightArrowIcon = _b.rightArrowIcon,
            dateRangeIcon = _b.dateRangeIcon,
            timeIcon = _b.timeIcon,
            renderDay = _b.renderDay,
            ampm = _b.ampm,
            minutesStep = _b.minutesStep,
            shouldDisableDate = _b.shouldDisableDate,
            animateYearScrolling = _b.animateYearScrolling,
            allowKeyboardControl = _b.allowKeyboardControl,
            ViewContainerComponent = _b.ViewContainerComponent,
            onMonthChange = _b.onMonthChange,
            onYearChange = _b.onYearChange;
        var Container = ViewContainerComponent;
        var ViewContainerComponentProps = typeof ViewContainerComponent === 'string' ? {} : {
          openView: openView,
          onChange: this.onChange
        };
        return React.createElement(React.Fragment, null, React.createElement(DatetimePickerHeader, {
          date: date,
          openView: openView,
          meridiemMode: meridiemMode,
          setMeridiemMode: this.setMeridiemMode,
          onOpenViewChange: this.handleViewChange,
          ampm: ampm
        }), showTabs && React.createElement(DateTimePickerTabs$1, {
          view: openView,
          onChange: this.handleViewChange,
          dateRangeIcon: dateRangeIcon,
          timeIcon: timeIcon
        }), React.createElement(Container, __assign({}, ViewContainerComponentProps), React.createElement(DateTimePickerView$2, {
          selected: openView === DateTimePickerView$1.YEAR
        }, React.createElement(YearSelection$1, {
          date: date,
          minDate: minDate,
          maxDate: maxDate,
          onYearChange: onYearChange,
          onChange: this.handleYearChange,
          disablePast: disablePast,
          disableFuture: disableFuture,
          animateYearScrolling: animateYearScrolling
        })), React.createElement(DateTimePickerView$2, {
          selected: openView === DateTimePickerView$1.DATE
        }, React.createElement(Calendar$1, {
          allowKeyboardControl: allowKeyboardControl,
          date: date,
          minDate: minDate,
          maxDate: maxDate,
          onChange: this.handleDayChange,
          disablePast: disablePast,
          disableFuture: disableFuture,
          leftArrowIcon: leftArrowIcon,
          rightArrowIcon: rightArrowIcon,
          renderDay: renderDay,
          shouldDisableDate: shouldDisableDate,
          onMonthChange: onMonthChange
        })), React.createElement(DateTimePickerView$2, {
          selected: openView === DateTimePickerView$1.HOUR || openView === DateTimePickerView$1.MINUTES
        }, React.createElement(TimePickerView$1, {
          date: date,
          type: openView,
          onHourChange: this.handleHourChange,
          onMinutesChange: this.handleChange,
          onSecondsChange: this.handleChange,
          ampm: ampm,
          minutesStep: minutesStep
        }))));
      };

      DateTimePicker.propTypes = {
        autoSubmit: PropTypes$1.bool,
        openTo: PropTypes$1.oneOf(Object.keys(DateTimePickerView$1).map(function (key) {
          return DateTimePickerView$1[key];
        })),
        showTabs: PropTypes$1.bool,
        ViewContainerComponent: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.func, PropTypes$1.object]),
        minutesStep: PropTypes$1.number
      };
      DateTimePicker.defaultProps = {
        autoSubmit: true,
        showTabs: true,
        ampm: true,
        minutesStep: 1,
        openTo: 'date',
        ViewContainerComponent: 'div'
      };
      return DateTimePicker;
    }(React.Component);
    var DateTimePicker$1 = withUtils()(DateTimePicker);

    var DateTimePickerModal = function (props) {
      var value = props.value,
          format = props.format,
          autoOk = props.autoOk,
          openTo = props.openTo,
          minDate = props.minDate,
          maxDate = props.maxDate,
          initialFocusedDate = props.initialFocusedDate,
          showTabs = props.showTabs,
          autoSubmit = props.autoSubmit,
          disablePast = props.disablePast,
          disableFuture = props.disableFuture,
          leftArrowIcon = props.leftArrowIcon,
          rightArrowIcon = props.rightArrowIcon,
          dateRangeIcon = props.dateRangeIcon,
          timeIcon = props.timeIcon,
          renderDay = props.renderDay,
          ampm = props.ampm,
          minutesStep = props.minutesStep,
          shouldDisableDate = props.shouldDisableDate,
          animateYearScrolling = props.animateYearScrolling,
          forwardedRef = props.forwardedRef,
          allowKeyboardControl = props.allowKeyboardControl,
          onMonthChange = props.onMonthChange,
          onYearChange = props.onYearChange,
          other = __rest(props, ["value", "format", "autoOk", "openTo", "minDate", "maxDate", "initialFocusedDate", "showTabs", "autoSubmit", "disablePast", "disableFuture", "leftArrowIcon", "rightArrowIcon", "dateRangeIcon", "timeIcon", "renderDay", "ampm", "minutesStep", "shouldDisableDate", "animateYearScrolling", "forwardedRef", "allowKeyboardControl", "onMonthChange", "onYearChange"]); // do not show tabs for small screens


      var toShowTabs = Boolean(showTabs && typeof window !== 'undefined' && window.innerHeight > 667);
      return React.createElement(BasePicker$1, __assign({}, props), function (_a) {
        var date = _a.date,
            utils = _a.utils,
            handleAccept = _a.handleAccept,
            handleChange = _a.handleChange,
            handleClear = _a.handleClear,
            handleDismiss = _a.handleDismiss,
            handleSetTodayDate = _a.handleSetTodayDate,
            handleTextFieldChange = _a.handleTextFieldChange,
            isAccepted = _a.isAccepted,
            pick12hOr24hFormat = _a.pick12hOr24hFormat;
        return React.createElement(ModalWrapper, __assign({
          wider: true,
          showTabs: toShowTabs,
          ref: forwardedRef,
          disableFuture: disableFuture,
          disablePast: disablePast,
          maxDate: maxDate,
          minDate: minDate,
          onAccept: handleAccept,
          onChange: handleTextFieldChange,
          onClear: handleClear,
          onDismiss: handleDismiss,
          onSetToday: handleSetTodayDate,
          value: value,
          isAccepted: isAccepted,
          format: pick12hOr24hFormat(utils.dateTime12hFormat, utils.dateTime24hFormat)
        }, other), React.createElement(DateTimePicker$1, {
          allowKeyboardControl: allowKeyboardControl,
          ampm: ampm,
          minutesStep: minutesStep,
          animateYearScrolling: animateYearScrolling,
          autoSubmit: autoSubmit,
          date: date,
          dateRangeIcon: dateRangeIcon,
          disableFuture: disableFuture,
          disablePast: disablePast,
          leftArrowIcon: leftArrowIcon,
          maxDate: maxDate,
          minDate: minDate,
          onChange: handleChange,
          onMonthChange: onMonthChange,
          onYearChange: onYearChange,
          openTo: openTo,
          renderDay: renderDay,
          rightArrowIcon: rightArrowIcon,
          shouldDisableDate: shouldDisableDate,
          showTabs: toShowTabs,
          timeIcon: timeIcon
        }));
      });
    };
    DateTimePickerModal.defaultProps = {
      showTabs: true
    };
    var DateTimePickerModal$1 = React.forwardRef(function (props, ref) {
      return React.createElement(DateTimePickerModal, __assign({}, props, {
        forwardedRef: ref
      }));
    });

    var DateTimePickerInline = function (props) {
      var value = props.value,
          format = props.format,
          autoOk = props.autoOk,
          openTo = props.openTo,
          minDate = props.minDate,
          maxDate = props.maxDate,
          initialFocusedDate = props.initialFocusedDate,
          showTabs = props.showTabs,
          autoSubmit = props.autoSubmit,
          disablePast = props.disablePast,
          disableFuture = props.disableFuture,
          leftArrowIcon = props.leftArrowIcon,
          rightArrowIcon = props.rightArrowIcon,
          dateRangeIcon = props.dateRangeIcon,
          timeIcon = props.timeIcon,
          renderDay = props.renderDay,
          ampm = props.ampm,
          minutesStep = props.minutesStep,
          shouldDisableDate = props.shouldDisableDate,
          animateYearScrolling = props.animateYearScrolling,
          forwardedRef = props.forwardedRef,
          allowKeyboardControl = props.allowKeyboardControl,
          other = __rest(props, ["value", "format", "autoOk", "openTo", "minDate", "maxDate", "initialFocusedDate", "showTabs", "autoSubmit", "disablePast", "disableFuture", "leftArrowIcon", "rightArrowIcon", "dateRangeIcon", "timeIcon", "renderDay", "ampm", "minutesStep", "shouldDisableDate", "animateYearScrolling", "forwardedRef", "allowKeyboardControl"]);

      return React.createElement(BasePicker$1, __assign({}, props, {
        autoOk: true
      }), function (_a) {
        var date = _a.date,
            utils = _a.utils,
            handleChange = _a.handleChange,
            handleTextFieldChange = _a.handleTextFieldChange,
            isAccepted = _a.isAccepted,
            pick12hOr24hFormat = _a.pick12hOr24hFormat,
            handleClear = _a.handleClear,
            handleAccept = _a.handleAccept;
        return React.createElement(InlineWrapper$1, __assign({
          wider: true,
          innerRef: forwardedRef,
          disableFuture: disableFuture,
          disablePast: disablePast,
          maxDate: maxDate,
          minDate: minDate,
          onChange: handleTextFieldChange,
          value: value,
          isAccepted: isAccepted,
          handleAccept: handleAccept,
          onClear: handleClear,
          format: pick12hOr24hFormat(utils.dateTime12hFormat, utils.dateTime24hFormat)
        }, other), React.createElement(DateTimePicker$1, {
          allowKeyboardControl: allowKeyboardControl,
          ampm: ampm,
          minutesStep: minutesStep,
          animateYearScrolling: animateYearScrolling,
          autoSubmit: autoSubmit,
          date: date,
          dateRangeIcon: dateRangeIcon,
          disableFuture: disableFuture,
          disablePast: disablePast,
          leftArrowIcon: leftArrowIcon,
          maxDate: maxDate,
          minDate: minDate,
          onChange: handleChange,
          openTo: openTo,
          renderDay: renderDay,
          rightArrowIcon: rightArrowIcon,
          shouldDisableDate: shouldDisableDate,
          showTabs: showTabs,
          timeIcon: timeIcon
        }));
      });
    };
    var DateTimePickerInline$1 = React.forwardRef(function (props, ref) {
      return React.createElement(DateTimePickerInline, __assign({}, props, {
        forwardedRef: ref
      }));
    });

    exports.DatePicker = DatePickerModal$1;
    exports.InlineDatePicker = DatePickerInline$1;
    exports.TimePicker = TimePickerModal$1;
    exports.InlineTimePicker = TimePickerInline$1;
    exports.DateTimePicker = DateTimePickerModal$1;
    exports.InlineDateTimePicker = DateTimePickerInline$1;
    exports.BasePicker = BasePicker$1;
    exports.Calendar = Calendar$1;
    exports.Day = Day$1;
    exports.TimePickerView = TimePickerView$1;
    exports.Clock = Clock$1;
    exports.MuiPickersUtilsProvider = MuiPickersUtilsProvider;
    exports.MuiPickersContext = MuiPickersContext;
    exports.MuiPickersContextConsumer = MuiPickersContextConsumer;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
