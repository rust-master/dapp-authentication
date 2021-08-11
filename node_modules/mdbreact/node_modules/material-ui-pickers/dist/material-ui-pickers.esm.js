import { __extends, __assign, __rest } from 'tslib';
import React__default, { createContext, createElement, Component, PureComponent, Fragment, cloneElement, forwardRef } from 'react';
import { oneOfType, object, string, number, instanceOf, oneOf, func, element, arrayOf, bool, any, shape, node } from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SvgIcon from '@material-ui/core/SvgIcon';
import MaskedInput from 'react-text-mask';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { createStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import EventListener from 'react-event-listener';
import createStyles$1 from '@material-ui/core/styles/createStyles';
import withStyles$1 from '@material-ui/core/styles/withStyles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { findDOMNode } from 'react-dom';
import Popover from '@material-ui/core/Popover';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

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

var date = oneOfType([object, string, number, instanceOf(Date)]);
var datePickerView = oneOf(['year', 'month', 'day']);
var DomainPropTypes = {
  date: date,
  datePickerView: datePickerView
};

var MuiPickersContext = createContext(null); // TODO remove in v3.0

var MuiPickersContextConsumer = MuiPickersContext.Consumer;

var MuiPickersUtilsProvider =
/*@__PURE__*/
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
    return createElement(MuiPickersContext.Provider, {
      value: this.state.utils,
      children: this.props.children
    });
  };

  process.env.NODE_ENV !== "production" ? MuiPickersUtilsProvider.propTypes = {
    utils: func.isRequired,
    locale: oneOfType([object, string]),
    children: oneOfType([element.isRequired, arrayOf(element.isRequired)]).isRequired,
    moment: func
  } : void 0;
  return MuiPickersUtilsProvider;
}(Component);

var checkUtils = function (utils) {
  if (!utils) {
    // tslint:disable-next-line
    throw new Error('Can not find utils in context. You either a) forgot to wrap your component tree in MuiPickersUtilsProvider; or b) mixed named and direct file imports.  Recommendation: use named imports from the module index.');
  }
};

var withUtils = function () {
  return function (Component) {
    var WithUtils = function (props) {
      return createElement(MuiPickersContext.Consumer, null, function (utils) {
        checkUtils(utils);
        return createElement(Component, __assign({
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
/*@__PURE__*/
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

  process.env.NODE_ENV !== "production" ? BasePicker.propTypes = {
    value: DomainPropTypes.date,
    onChange: func.isRequired,
    autoOk: bool,
    initialFocusedDate: any
  } : void 0;
  BasePicker.defaultProps = {
    value: new Date(),
    autoOK: false,
    ampm: true
  };
  return BasePicker;
}(Component);
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

var Input =
/*@__PURE__*/
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

    return this.props.mask ? createElement(MaskedInput, __assign({}, rest, {
      ref: this.createInputRef,
      keepCharPositions: keepCharPositions
    })) : createElement("input", __assign({}, rest, {
      ref: inputRef
    }));
  };

  process.env.NODE_ENV !== "production" ? Input.propTypes = {
    mask: any,
    inputRef: func.isRequired
  } : void 0;
  return Input;
}(PureComponent);

var DateTextField =
/*@__PURE__*/
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
      localInputProps[adornmentPosition + "Adornment"] = createElement(InputAdornment, __assign({
        position: adornmentPosition
      }, InputAdornmentProps), createElement(IconButton, __assign({
        disabled: disabled,
        onClick: this.openPicker
      }, KeyboardButtonProps), keyboardIcon));
    }

    var Component = TextFieldComponent;

    var inputProps = __assign({}, localInputProps, InputProps);

    return createElement(Component, __assign({
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

  process.env.NODE_ENV !== "production" ? DateTextField.propTypes = {
    value: oneOfType([object, string, number, instanceOf(Date)]),
    minDate: DomainPropTypes.date,
    maxDate: DomainPropTypes.date,
    disablePast: bool,
    disableFuture: bool,
    format: string,
    onBlur: func,
    onChange: func.isRequired,
    onClear: func,
    onClick: func.isRequired,
    clearable: bool,
    utils: object.isRequired,
    InputProps: shape({}),
    mask: any,
    minDateMessage: node,
    maxDateMessage: node,
    invalidLabel: string,
    emptyLabel: string,
    labelFunc: func,
    keyboard: bool,
    keyboardIcon: node,
    disableOpenOnEnter: bool,
    invalidDateMessage: node,
    TextFieldComponent: oneOfType([string, func, node]),
    InputAdornmentProps: object,
    KeyboardButtonProps: object,
    adornmentPosition: oneOf(['start', 'end']),
    onError: func,
    onInputChange: func,
    pipe: func,
    keepCharPositions: bool
  } : void 0;
  DateTextField.defaultProps = {
    disabled: false,
    invalidLabel: 'Unknown',
    emptyLabel: '',
    keyboard: false,
    keyboardIcon: createElement(KeyboardIcon, null),
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
}(PureComponent);
var DateTextField$1 = withUtils()(DateTextField);

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

  return createElement(Dialog, __assign({
    role: "dialog",
    onClose: onDismiss,
    classes: {
      paper: clsx(classes.dialogRoot, (_b = {}, _b[classes.dialogRootWider] = wider, _b[classes.dialogWithTabs] = showTabs, _b))
    }
  }, other), createElement(EventListener, {
    target: "window",
    onKeyDown: onKeyDownInner
  }), createElement(DialogContent, {
    children: children,
    className: clsx(classes.dialog, (_c = {}, _c[classes.dialogWithTabs] = showTabs, _c))
  }), createElement(DialogActions, {
    classes: {
      root: clearable || showTodayButton ? classes.dialogActions : undefined,
      action: clsx(classes.dialogAction, (_d = {}, _d[classes.clearableDialogAction] = clearable, _d[classes.todayDialogAction] = !clearable && showTodayButton, _d))
    }
  }, clearable && createElement(Button, {
    color: "primary",
    onClick: onClear
  }, clearLabel), !clearable && showTodayButton && createElement(Button, {
    color: "primary",
    onClick: onSetToday
  }, todayLabel), createElement(Button, {
    color: "primary",
    onClick: onDismiss
  }, cancelLabel), createElement(Button, {
    color: "primary",
    onClick: onAccept
  }, okLabel)));
};
ModalDialog.displayName = 'ModalDialog';
var dialogHeight = 405;
var dialogHeightWithTabs = 455;
var styles = createStyles({
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
var ModalDialog$1 = withStyles(styles, {
  name: 'MuiPickersModal'
})(ModalDialog);

var ModalWrapper =
/*@__PURE__*/
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

    return createElement(Fragment, null, createElement(DateTextField$1, __assign({
      value: value,
      format: format,
      onClick: this.open,
      invalidLabel: invalidLabel,
      labelFunc: labelFunc,
      clearable: clearable
    }, other)), createElement(ModalDialog$1, __assign({
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

  process.env.NODE_ENV !== "production" ? ModalWrapper.propTypes = {
    okLabel: node,
    cancelLabel: node,
    clearLabel: node,
    clearable: bool,
    todayLabel: node,
    showTodayButton: bool,
    onOpen: func,
    DialogProps: object,
    onClose: func
  } : void 0;
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
}(PureComponent);

var PickerToolbar = function (_a) {
  var children = _a.children,
      _b = _a.className,
      className = _b === void 0 ? null : _b,
      classes = _a.classes,
      other = __rest(_a, ["children", "className", "classes"]);

  return createElement(Toolbar, __assign({
    className: clsx(classes.toolbar, className)
  }, other), children);
};

process.env.NODE_ENV !== "production" ? PickerToolbar.propTypes = {
  children: arrayOf(node).isRequired,
  className: string,
  classes: any.isRequired,
  innerRef: any
} : void 0;
PickerToolbar.defaultProps = {
  className: ''
};
var styles$1 = function (theme) {
  return createStyles$1({
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
var PickerToolbar$1 = withStyles$1(styles$1, {
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

  return createElement(Typography, __assign({
    className: clsx(classes.toolbarBtn, className, (_c = {}, _c[classes.toolbarBtnSelected] = selected, _c))
  }, other), label);
};

process.env.NODE_ENV !== "production" ? ToolbarButton.propTypes = {
  selected: bool.isRequired,
  label: string.isRequired,
  classes: any.isRequired,
  className: string,
  innerRef: any
} : void 0;
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
var ToolbarButton$1 = withStyles$1(styles$2, {
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

var animationDuration = 350;
var styles$3 = function (theme) {
  var slideTransition = theme.transitions.create('transform', {
    duration: animationDuration,
    easing: 'cubic-bezier(0.35, 0.8, 0.4, 1)'
  });
  return createStyles$1({
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
  return createElement(TransitionGroup, {
    className: clsx(classes.transitionContainer, className),
    childFactory: function (element) {
      return cloneElement(element, {
        classNames: transitionClasses
      });
    }
  }, createElement(CSSTransition, {
    key: transKey + slideDirection,
    mountOnEnter: true,
    unmountOnExit: true,
    timeout: animationDuration,
    children: children,
    classNames: transitionClasses
  }));
};

process.env.NODE_ENV !== "production" ? SlideTransition.propTypes = {
  children: node.isRequired,
  className: string,
  slideDirection: oneOf(['left', 'right']).isRequired,
  transKey: string.isRequired,
  innerRef: any
} : void 0;
var SlideTransition$1 = withStyles$1(styles$3, {
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

  return createElement("div", null, createElement("div", {
    className: classes.switchHeader
  }, createElement(IconButton, {
    disabled: disablePrevMonth,
    onClick: selectPreviousMonth,
    className: classes.iconButton
  }, rtl ? rightArrowIcon : leftArrowIcon), createElement(SlideTransition$1, {
    slideDirection: slideDirection,
    transKey: currentMonth.toString(),
    className: classes.transitionContainer
  }, createElement(Typography, {
    align: "center",
    variant: "body1"
  }, utils.getCalendarHeaderText(currentMonth))), createElement(IconButton, {
    disabled: disableNextMonth,
    onClick: selectNextMonth,
    className: classes.iconButton
  }, rtl ? leftArrowIcon : rightArrowIcon)), createElement("div", {
    className: classes.daysHeader
  }, utils.getWeekdays().map(function (day, index) {
    return createElement(Typography, {
      key: index,
      variant: "caption",
      className: classes.dayLabel
    }, day);
  })));
};
process.env.NODE_ENV !== "production" ? CalendarHeader.propTypes = {
  currentMonth: object.isRequired,
  onMonthChange: func.isRequired,
  leftArrowIcon: node,
  rightArrowIcon: node,
  disablePrevMonth: bool,
  disableNextMonth: bool,
  slideDirection: oneOf(['right', 'left']).isRequired,
  innerRef: any
} : void 0;
CalendarHeader.displayName = 'CalendarHeader';
CalendarHeader.defaultProps = {
  leftArrowIcon: createElement(ArrowLeftIcon, null),
  rightArrowIcon: createElement(ArrowRightIcon, null),
  disablePrevMonth: false,
  disableNextMonth: false
};
var styles$4 = function (theme) {
  return createStyles$1({
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
var CalendarHeader$1 = withUtils()(withStyles$1(styles$4, {
  withTheme: true,
  name: 'MuiPickersCalendarHeader'
})(CalendarHeader));

var Day =
/*@__PURE__*/
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
    return createElement(IconButton, __assign({
      className: className,
      tabIndex: hidden || disabled ? -1 : 0
    }, other), children);
  };

  process.env.NODE_ENV !== "production" ? Day.propTypes = {
    children: node.isRequired,
    classes: object.isRequired,
    current: bool,
    disabled: bool,
    hidden: bool,
    selected: bool,
    innerRef: any
  } : void 0;
  Day.defaultProps = {
    disabled: false,
    hidden: false,
    current: false,
    selected: false
  };
  return Day;
}(PureComponent);

var styles$5 = function (theme) {
  return createStyles$1({
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
var Day$1 = withStyles$1(styles$5, {
  name: 'MuiPickersDay'
})(Day);

var DayWrapper =
/*@__PURE__*/
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

    return createElement("div", __assign({
      onClick: dayInCurrentMonth && !disabled ? this.handleClick : undefined,
      onKeyPress: dayInCurrentMonth && !disabled ? this.handleClick : undefined,
      role: "presentation"
    }, other), children);
  };

  process.env.NODE_ENV !== "production" ? DayWrapper.propTypes = {
    children: node.isRequired,
    dayInCurrentMonth: bool,
    disabled: bool,
    onSelect: func.isRequired,
    value: any.isRequired
  } : void 0;
  DayWrapper.defaultProps = {
    dayInCurrentMonth: true,
    disabled: false
  };
  return DayWrapper;
}(PureComponent);

var Calendar =
/*@__PURE__*/
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
        return createElement("div", {
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
        var dayComponent = createElement(Day$1, {
          disabled: disabled,
          current: utils.isSameDay(day, now),
          hidden: !isDayInCurrentMonth,
          selected: utils.isSameDay(selectedDate, day)
        }, utils.getDayText(day));

        if (renderDay) {
          dayComponent = renderDay(day, selectedDate, isDayInCurrentMonth, dayComponent);
        }

        return createElement(DayWrapper, {
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
    return createElement(Fragment, null, allowKeyboardControl && createElement(EventListener, {
      target: "window",
      onKeyDown: this.handleKeyDown
    }), createElement(CalendarHeader$1, {
      slideDirection: slideDirection,
      currentMonth: currentMonth,
      onMonthChange: this.handleChangeMonth,
      leftArrowIcon: this.props.leftArrowIcon,
      rightArrowIcon: this.props.rightArrowIcon,
      disablePrevMonth: this.shouldDisablePrevMonth(),
      disableNextMonth: this.shouldDisableNextMonth()
    }), createElement(SlideTransition$1, {
      slideDirection: slideDirection,
      transKey: currentMonth.toString(),
      className: classes.transitionContainer
    }, createElement("div", null, this.renderWeeks())));
  };

  process.env.NODE_ENV !== "production" ? Calendar.propTypes = {
    date: object.isRequired,
    minDate: DomainPropTypes.date,
    maxDate: DomainPropTypes.date,
    onChange: func.isRequired,
    disablePast: bool,
    disableFuture: bool,
    renderDay: func,
    shouldDisableDate: func,
    utils: object.isRequired,
    allowKeyboardControl: bool,
    innerRef: any
  } : void 0;
  Calendar.defaultProps = {
    minDate: new Date('1900-01-01'),
    maxDate: new Date('2100-01-01'),
    disablePast: false,
    disableFuture: false,
    allowKeyboardControl: true
  };
  return Calendar;
}(Component);
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
var Calendar$1 = withStyles$1(styles$6, {
  name: 'MuiPickersCalendar',
  withTheme: true
})(withUtils()(Calendar));

var Month =
/*@__PURE__*/
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

    return createElement(Typography, __assign({
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
}(PureComponent);
var styles$7 = function (theme) {
  return createStyles$1({
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
var Month$1 = withStyles$1(styles$7, {
  name: 'MuiPickersMonth'
})(Month);

var MonthSelection =
/*@__PURE__*/
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
    return createElement("div", {
      className: classes.container
    }, utils.getMonthArray(date).map(function (month) {
      var monthNumber = utils.getMonth(month);
      var monthText = utils.format(month, 'MMM');
      return createElement(Month$1, {
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
}(PureComponent);
var styles$8 = createStyles({
  container: {
    width: 310,
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'stretch'
  }
});
var MonthSelection$1 = withStyles(styles$8, {
  name: 'MuiPickersMonthSelection'
})(withUtils()(MonthSelection));

var Year =
/*@__PURE__*/
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

    return createElement(Typography, __assign({
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

  process.env.NODE_ENV !== "production" ? Year.propTypes = {
    children: node.isRequired,
    classes: object.isRequired,
    disabled: bool,
    onSelect: func.isRequired,
    selected: bool,
    value: any.isRequired,
    innerRef: any
  } : void 0;
  Year.defaultProps = {
    selected: false,
    disabled: false
  };
  return Year;
}(PureComponent);
var styles$9 = function (theme) {
  return createStyles$1({
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
var Year$1 = withStyles$1(styles$9, {
  name: 'MuiPickersYear'
})(Year);

var YearSelection =
/*@__PURE__*/
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
      var currentYearElement = findDOMNode(domNode);

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
    return createElement("div", {
      className: classes.container
    }, utils.getYearRange(minDate, maxDate).map(function (year) {
      var yearNumber = utils.getYear(year);
      var selected = yearNumber === currentYear;
      return createElement(Year$1, {
        key: utils.getYearText(year),
        selected: selected,
        value: yearNumber,
        onSelect: _this.onYearSelect,
        ref: selected ? _this.getSelectedYearRef : undefined,
        disabled: disablePast && utils.isBeforeYear(year, utils.date()) || disableFuture && utils.isAfterYear(year, utils.date())
      }, utils.getYearText(year));
    }));
  };

  process.env.NODE_ENV !== "production" ? YearSelection.propTypes = {
    date: shape({}).isRequired,
    minDate: DomainPropTypes.date,
    maxDate: DomainPropTypes.date,
    onChange: func.isRequired,
    animateYearScrolling: bool,
    innerRef: any
  } : void 0;
  YearSelection.defaultProps = {
    animateYearScrolling: false,
    minDate: new Date('1900-01-01'),
    maxDate: new Date('2100-01-01')
  };
  return YearSelection;
}(PureComponent);
var styles$a = createStyles$1({
  container: {
    maxHeight: 300,
    overflowY: 'auto',
    justifyContent: 'center'
  }
});
var YearSelection$1 = withStyles$1(styles$a, {
  name: 'MuiPickersYearSelection'
})(withUtils()(YearSelection));

var DatePicker =
/*@__PURE__*/
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
    return createElement(Fragment, null, createElement(PickerToolbar$1, {
      className: clsx((_a = {}, _a[classes.toolbarCenter] = this.isYearOnly, _a))
    }, createElement(ToolbarButton$1, {
      variant: this.isYearOnly ? 'h3' : 'subtitle1',
      onClick: this.isYearOnly ? undefined : this.openYearSelection,
      selected: openView === 'year',
      label: utils.getYearText(this.date)
    }), !this.isYearOnly && !this.isYearAndMonth && createElement(ToolbarButton$1, {
      variant: "h4",
      onClick: this.openCalendar,
      selected: openView === 'day',
      label: utils.getDatePickerHeaderText(this.date)
    }), this.isYearAndMonth && createElement(ToolbarButton$1, {
      variant: "h4",
      onClick: this.openMonthSelection,
      selected: openView === 'month',
      label: utils.getMonthText(this.date)
    })), this.props.children, openView === 'year' && createElement(YearSelection$1, {
      date: this.date,
      onChange: this.handleYearSelect,
      minDate: this.minDate,
      maxDate: this.maxDate,
      disablePast: disablePast,
      disableFuture: disableFuture,
      onYearChange: onYearChange,
      animateYearScrolling: animateYearScrolling
    }), openView === 'month' && createElement(MonthSelection$1, {
      date: this.date,
      onChange: this.handleMonthSelect,
      minDate: this.minDate,
      maxDate: this.maxDate,
      disablePast: disablePast,
      disableFuture: disableFuture
    }), openView === 'day' && createElement(Calendar$1, {
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

  process.env.NODE_ENV !== "production" ? DatePicker.propTypes = {
    views: arrayOf(DomainPropTypes.datePickerView),
    openTo: DomainPropTypes.datePickerView,
    openToYearSelection: bool
  } : void 0;
  DatePicker.defaultProps = {
    openToYearSelection: false,
    minDate: new Date('1900-01-01'),
    maxDate: new Date('2100-01-01'),
    views: ['year', 'day']
  };
  return DatePicker;
}(PureComponent);
var styles$b = function () {
  return createStyles$1({
    toolbarCenter: {
      flexDirection: 'row',
      alignItems: 'center'
    }
  });
};
var DatePicker$1 = withStyles$1(styles$b)(withUtils()(DatePicker));

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

  return createElement(BasePicker$1, __assign({}, props), function (_a) {
    var date = _a.date,
        utils = _a.utils,
        handleAccept = _a.handleAccept,
        handleChange = _a.handleChange,
        handleClear = _a.handleClear,
        handleDismiss = _a.handleDismiss,
        handleSetTodayDate = _a.handleSetTodayDate,
        handleTextFieldChange = _a.handleTextFieldChange,
        isAccepted = _a.isAccepted;
    return createElement(ModalWrapper, __assign({
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
    }, other), createElement(DatePicker$1, {
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
var DatePickerModal$1 = forwardRef(function (props, ref) {
  return createElement(DatePickerModal, __assign({}, props, {
    forwardedRef: ref
  }));
});

var InlineWrapper =
/*@__PURE__*/
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
    return createElement(Fragment, null, isOpen && createElement(EventListener, {
      target: "window",
      onKeyDown: this.handleKeyDown
    }), createElement(DateTextField$1, __assign({
      value: value,
      format: format,
      onClick: this.open,
      keyboard: keyboard
    }, other)), createElement(Popover, __assign({
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

  process.env.NODE_ENV !== "production" ? InlineWrapper.propTypes = {
    onlyCalendar: bool,
    onOpen: func,
    onClose: func,
    PopoverProps: object
  } : void 0;
  InlineWrapper.defaultProps = {
    value: new Date(),
    onlyCalendar: false,
    isAccepted: false
  };
  return InlineWrapper;
}(PureComponent);
var styles$c = {
  popoverPaper: {
    width: DIALOG_WIDTH,
    paddingBottom: 8
  },
  popoverPaperWider: {
    width: DIALOG_WIDTH_WIDER
  }
};
var InlineWrapper$1 = withStyles$1(styles$c)(InlineWrapper);

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
  return createElement(BasePicker$1, __assign({}, props, {
    autoOk: true
  }), function (_a) {
    var date = _a.date,
        utils = _a.utils,
        isAccepted = _a.isAccepted,
        handleChange = _a.handleChange,
        handleClear = _a.handleClear,
        handleTextFieldChange = _a.handleTextFieldChange,
        handleAccept = _a.handleAccept;
    return createElement(InlineWrapper$1, __assign({
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
    }, other), createElement(ComponentToShow, {
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
var DatePickerInline$1 = forwardRef(function (props, ref) {
  return createElement(DatePickerInline, __assign({}, props, {
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
/*@__PURE__*/
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
    return createElement("div", {
      style: this.getAngleStyle(),
      className: clsx(classes.pointer, (_a = {}, _a[classes.animateTransform] = this.state.toAnimateTransform, _a))
    }, createElement("div", {
      className: clsx(classes.thumb, (_b = {}, _b[classes.noPoint] = hasSelected, _b))
    }));
  };

  process.env.NODE_ENV !== "production" ? ClockPointer.propTypes = {
    value: number.isRequired,
    hasSelected: bool.isRequired,
    isInner: bool.isRequired,
    type: oneOf(Object.keys(ClockType$1).map(function (key) {
      return ClockType$1[key];
    })).isRequired
  } : void 0;

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
}(Component);
var styles$d = function (theme) {
  return createStyles$1({
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
var ClockPointer$1 = withStyles$1(styles$d, {
  name: 'MuiPickersClockPointer'
})(ClockPointer);

var Clock =
/*@__PURE__*/
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
    return createElement("div", {
      className: classes.container
    }, createElement("div", {
      className: classes.clock
    }, createElement("div", {
      role: "menu",
      tabIndex: -1,
      className: classes.squareMask,
      onTouchMove: this.handleTouchMove,
      onTouchEnd: this.handleTouchEnd,
      onMouseUp: this.handleMouseUp,
      onMouseMove: this.handleMove
    }), createElement("div", {
      className: classes.pin
    }), createElement(ClockPointer$1, {
      type: type,
      value: value,
      isInner: isPointerInner,
      hasSelected: this.hasSelected()
    }), children));
  };

  process.env.NODE_ENV !== "production" ? Clock.propTypes = {
    type: oneOf(Object.keys(ClockType$1).map(function (key) {
      return ClockType$1[key];
    })).isRequired,
    value: number.isRequired,
    onChange: func.isRequired,
    children: arrayOf(node).isRequired,
    ampm: bool,
    minutesStep: number,
    innerRef: any
  } : void 0;
  Clock.defaultProps = {
    ampm: false,
    minutesStep: 1
  };
  return Clock;
}(Component);
var styles$e = function (theme) {
  return createStyles$1({
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
var Clock$1 = withStyles$1(styles$e, {
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
/*@__PURE__*/
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
    return createElement(Typography, {
      component: "span",
      className: className,
      variant: isInner ? 'body2' : 'body1',
      style: this.getTransformStyle(index)
    }, label);
  };

  process.env.NODE_ENV !== "production" ? ClockNumber.propTypes = {
    index: number.isRequired,
    label: string.isRequired,
    selected: bool.isRequired,
    classes: object.isRequired,
    isInner: bool,
    innerRef: any
  } : void 0;
  ClockNumber.defaultProps = {
    isInner: false
  };
  return ClockNumber;
}(Component);
var styles$f = function (theme) {
  var size = theme.spacing.unit * 4;
  return createStyles$1({
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
var ClockNumber$1 = withStyles$1(styles$f, {
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
    hourNumbers.push(createElement(ClockNumber$1, __assign({
      key: hour
    }, props)));
  }

  return hourNumbers;
};
var getMinutesNumbers = function (_a) {
  var value = _a.value,
      utils = _a.utils;
  var f = utils.formatNumber;
  return [createElement(ClockNumber$1, {
    label: f('00'),
    selected: value === 0,
    index: 12,
    key: 12
  }), createElement(ClockNumber$1, {
    label: f('05'),
    selected: value === 5,
    index: 1,
    key: 1
  }), createElement(ClockNumber$1, {
    label: f('10'),
    selected: value === 10,
    index: 2,
    key: 2
  }), createElement(ClockNumber$1, {
    label: f('15'),
    selected: value === 15,
    index: 3,
    key: 3
  }), createElement(ClockNumber$1, {
    label: f('20'),
    selected: value === 20,
    index: 4,
    key: 4
  }), createElement(ClockNumber$1, {
    label: f('25'),
    selected: value === 25,
    index: 5,
    key: 5
  }), createElement(ClockNumber$1, {
    label: f('30'),
    selected: value === 30,
    index: 6,
    key: 6
  }), createElement(ClockNumber$1, {
    label: f('35'),
    selected: value === 35,
    index: 7,
    key: 7
  }), createElement(ClockNumber$1, {
    label: f('40'),
    selected: value === 40,
    index: 8,
    key: 8
  }), createElement(ClockNumber$1, {
    label: f('45'),
    selected: value === 45,
    index: 9,
    key: 9
  }), createElement(ClockNumber$1, {
    label: f('50'),
    selected: value === 50,
    index: 10,
    key: 10
  }), createElement(ClockNumber$1, {
    label: f('55'),
    selected: value === 55,
    index: 11,
    key: 11
  })];
};

var TimePickerView =
/*@__PURE__*/
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
    return createElement(Clock$1, __assign({
      type: type,
      ampm: ampm,
      minutesStep: minutesStep
    }, viewProps));
  };

  process.env.NODE_ENV !== "production" ? TimePickerView.propTypes = {
    date: object.isRequired,
    onHourChange: func.isRequired,
    onMinutesChange: func.isRequired,
    onSecondsChange: func.isRequired,
    ampm: bool,
    minutesStep: number,
    type: oneOf(Object.keys(ClockType$1).map(function (key) {
      return ClockType$1[key];
    })).isRequired
  } : void 0;
  TimePickerView.defaultProps = {
    ampm: true,
    minutesStep: 1
  };
  return TimePickerView;
}(PureComponent);
var TimePickerView$1 = withUtils()(TimePickerView);

var TimePicker =
/*@__PURE__*/
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
    return createElement(Fragment, null, createElement(PickerToolbar$1, {
      className: clsx(classes.toolbar, (_a = {}, _a[classes.toolbarLeftPadding] = ampm, _a))
    }, createElement("div", {
      className: hourMinuteClassName
    }, createElement(ToolbarButton$1, {
      variant: "h2",
      onClick: this.openHourView,
      selected: openView === ClockType$1.HOURS,
      label: utils.getHourText(date, Boolean(ampm))
    }), createElement(ToolbarButton$1, {
      variant: "h2",
      label: ":",
      selected: false,
      className: classes.separator
    }), createElement(ToolbarButton$1, {
      variant: "h2",
      onClick: this.openMinutesView,
      selected: openView === ClockType$1.MINUTES,
      label: utils.getMinuteText(date)
    }), seconds && createElement(Fragment, null, createElement(ToolbarButton$1, {
      variant: "h2",
      label: ":",
      selected: false,
      className: classes.separator
    }), createElement(ToolbarButton$1, {
      variant: "h2",
      onClick: this.openSecondsView,
      selected: openView === ClockType$1.SECONDS,
      label: utils.getSecondText(date)
    }))), ampm && createElement("div", {
      className: seconds ? classes.ampmSelectionWithSeconds : classes.ampmSelection
    }, createElement(ToolbarButton$1, {
      className: classes.ampmLabel,
      selected: meridiemMode === 'am',
      variant: "subtitle1",
      label: utils.getMeridiemText('am'),
      onClick: this.setMeridiemMode('am')
    }), createElement(ToolbarButton$1, {
      className: classes.ampmLabel,
      selected: meridiemMode === 'pm',
      variant: "subtitle1",
      label: utils.getMeridiemText('pm'),
      onClick: this.setMeridiemMode('pm')
    }))), this.props.children, createElement(TimePickerView$1, {
      date: date,
      type: this.state.openView,
      ampm: ampm,
      minutesStep: minutesStep,
      onHourChange: this.handleHourChange,
      onMinutesChange: this.handleMinutesChange,
      onSecondsChange: this.handleSecondsChange
    }));
  };

  process.env.NODE_ENV !== "production" ? TimePicker.propTypes = {
    date: object.isRequired,
    onChange: func.isRequired,
    utils: object.isRequired,
    ampm: bool,
    seconds: bool,
    minutesStep: number,
    innerRef: any
  } : void 0;
  TimePicker.defaultProps = {
    children: null,
    ampm: true,
    seconds: false,
    minutesStep: 1
  };
  return TimePicker;
}(Component);
var styles$g = function () {
  return createStyles$1({
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
var TimePicker$1 = withStyles$1(styles$g, {
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

  return createElement(BasePicker$1, __assign({
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
    return createElement(ModalWrapper, __assign({
      ref: forwardedRef,
      value: value,
      onClear: handleClear,
      onAccept: handleAccept,
      onChange: handleTextFieldChange,
      onDismiss: handleDismiss,
      onSetToday: handleSetTodayDate,
      isAccepted: isAccepted,
      format: pick12hOr24hFormat(utils.time12hFormat, utils.time24hFormat)
    }, other), createElement(TimePicker$1, {
      date: date,
      onChange: handleChange,
      ampm: ampm,
      seconds: seconds,
      minutesStep: minutesStep
    }));
  });
};
var TimePickerModal$1 = forwardRef(function (props, ref) {
  return createElement(TimePickerModal, __assign({}, props, {
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

  return createElement(BasePicker$1, __assign({
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
    return createElement(InlineWrapper$1, __assign({
      innerRef: forwardedRef,
      value: value,
      onChange: handleTextFieldChange,
      isAccepted: isAccepted,
      onClear: handleClear,
      handleAccept: handleAccept,
      format: pick12hOr24hFormat(utils.time12hFormat, utils.time24hFormat)
    }, other), createElement(TimePicker$1, {
      date: date,
      onChange: handleChange,
      ampm: ampm,
      seconds: seconds,
      minutesStep: minutesStep
    }));
  });
};
var TimePickerInline$1 = forwardRef(function (props, ref) {
  return createElement(TimePickerInline, __assign({}, props, {
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
  return createStyles$1({
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

  return createElement(PickerToolbar$1, {
    className: clsx(classes.toolbar, (_b = {}, _b[classes.toolBar24h] = !ampm, _b))
  }, createElement("div", {
    className: classes.dateHeader
  }, createElement(ToolbarButton$1, {
    variant: "subtitle1",
    onClick: function () {
      return onOpenViewChange(DateTimePickerView$1.YEAR);
    },
    selected: openView === DateTimePickerView$1.YEAR,
    label: utils.getYearText(date)
  }), createElement(ToolbarButton$1, {
    variant: "h4",
    onClick: function () {
      return onOpenViewChange(DateTimePickerView$1.DATE);
    },
    selected: openView === DateTimePickerView$1.DATE,
    label: utils.getDateTimePickerHeaderText(date)
  })), createElement("div", {
    className: classes.timeHeader
  }, createElement("div", {
    className: classes.hourMinuteLabel
  }, createElement(ToolbarButton$1, {
    variant: "h3",
    onClick: function () {
      return onOpenViewChange(DateTimePickerView$1.HOUR);
    },
    selected: openView === DateTimePickerView$1.HOUR,
    label: utils.getHourText(date, ampm)
  }), createElement(ToolbarButton$1, {
    variant: "h3",
    label: ":",
    selected: false,
    className: classes.separator
  }), createElement(ToolbarButton$1, {
    variant: "h3",
    onClick: function () {
      return onOpenViewChange(DateTimePickerView$1.MINUTES);
    },
    selected: openView === DateTimePickerView$1.MINUTES,
    label: utils.getMinuteText(date)
  })), ampm && createElement("div", {
    className: classes.ampmSelection
  }, createElement(ToolbarButton$1, {
    className: classes.ampmLabel,
    selected: meridiemMode === 'am',
    variant: "subtitle1",
    label: utils.getMeridiemText('am'),
    onClick: setMeridiemMode('am')
  }), createElement(ToolbarButton$1, {
    className: classes.ampmLabel,
    selected: meridiemMode === 'pm',
    variant: "subtitle1",
    label: utils.getMeridiemText('pm'),
    onClick: setMeridiemMode('pm')
  }))));
};
process.env.NODE_ENV !== "production" ? DateTimePickerHeader.propTypes = {
  date: object.isRequired,
  classes: object.isRequired,
  meridiemMode: string.isRequired,
  utils: object.isRequired,
  ampm: bool,
  innerRef: any
} : void 0;
var DatetimePickerHeader = withStyles$1(styles$h, {
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

  return createElement(Paper, null, createElement(Tabs, {
    variant: "fullWidth",
    value: viewToTabIndex(view),
    onChange: handleChange,
    className: classes.tabs,
    indicatorColor: indicatorColor
  }, createElement(Tab, {
    value: "date",
    icon: createElement(Fragment, null, dateRangeIcon)
  }), createElement(Tab, {
    value: "time",
    icon: createElement(Fragment, null, timeIcon)
  })));
};
process.env.NODE_ENV !== "production" ? DateTimePickerTabs.propTypes = {
  view: string.isRequired,
  dateRangeIcon: node.isRequired,
  timeIcon: node.isRequired
} : void 0;
DateTimePickerTabs.defaultProps = {
  dateRangeIcon: createElement(DateRangeIcon, null),
  timeIcon: createElement(TimeIcon, null)
};
var styles$i = function (theme) {
  return {
    tabs: {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.type === 'light' ? theme.palette.primary.main : theme.palette.background.default
    }
  };
};
var DateTimePickerTabs$1 = withStyles$1(styles$i, {
  name: 'MuiPickerDTTabs',
  withTheme: true
})(DateTimePickerTabs);

var DateTimePickerView$2 = function (_a) {
  var selected = _a.selected,
      children = _a.children;

  if (!selected) {
    return null;
  }

  return createElement("div", {
    children: children
  });
};

var DateTimePicker =
/*@__PURE__*/
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
    return createElement(Fragment, null, createElement(DatetimePickerHeader, {
      date: date,
      openView: openView,
      meridiemMode: meridiemMode,
      setMeridiemMode: this.setMeridiemMode,
      onOpenViewChange: this.handleViewChange,
      ampm: ampm
    }), showTabs && createElement(DateTimePickerTabs$1, {
      view: openView,
      onChange: this.handleViewChange,
      dateRangeIcon: dateRangeIcon,
      timeIcon: timeIcon
    }), createElement(Container, __assign({}, ViewContainerComponentProps), createElement(DateTimePickerView$2, {
      selected: openView === DateTimePickerView$1.YEAR
    }, createElement(YearSelection$1, {
      date: date,
      minDate: minDate,
      maxDate: maxDate,
      onYearChange: onYearChange,
      onChange: this.handleYearChange,
      disablePast: disablePast,
      disableFuture: disableFuture,
      animateYearScrolling: animateYearScrolling
    })), createElement(DateTimePickerView$2, {
      selected: openView === DateTimePickerView$1.DATE
    }, createElement(Calendar$1, {
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
    })), createElement(DateTimePickerView$2, {
      selected: openView === DateTimePickerView$1.HOUR || openView === DateTimePickerView$1.MINUTES
    }, createElement(TimePickerView$1, {
      date: date,
      type: openView,
      onHourChange: this.handleHourChange,
      onMinutesChange: this.handleChange,
      onSecondsChange: this.handleChange,
      ampm: ampm,
      minutesStep: minutesStep
    }))));
  };

  process.env.NODE_ENV !== "production" ? DateTimePicker.propTypes = {
    autoSubmit: bool,
    openTo: oneOf(Object.keys(DateTimePickerView$1).map(function (key) {
      return DateTimePickerView$1[key];
    })),
    showTabs: bool,
    ViewContainerComponent: oneOfType([string, func, object]),
    minutesStep: number
  } : void 0;
  DateTimePicker.defaultProps = {
    autoSubmit: true,
    showTabs: true,
    ampm: true,
    minutesStep: 1,
    openTo: 'date',
    ViewContainerComponent: 'div'
  };
  return DateTimePicker;
}(Component);
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
  return createElement(BasePicker$1, __assign({}, props), function (_a) {
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
    return createElement(ModalWrapper, __assign({
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
    }, other), createElement(DateTimePicker$1, {
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
var DateTimePickerModal$1 = forwardRef(function (props, ref) {
  return createElement(DateTimePickerModal, __assign({}, props, {
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

  return createElement(BasePicker$1, __assign({}, props, {
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
    return createElement(InlineWrapper$1, __assign({
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
    }, other), createElement(DateTimePicker$1, {
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
var DateTimePickerInline$1 = forwardRef(function (props, ref) {
  return createElement(DateTimePickerInline, __assign({}, props, {
    forwardedRef: ref
  }));
});

export { DatePickerModal$1 as DatePicker, DatePickerInline$1 as InlineDatePicker, TimePickerModal$1 as TimePicker, TimePickerInline$1 as InlineTimePicker, DateTimePickerModal$1 as DateTimePicker, DateTimePickerInline$1 as InlineDateTimePicker, BasePicker$1 as BasePicker, Calendar$1 as Calendar, Day$1 as Day, TimePickerView$1 as TimePickerView, Clock$1 as Clock, MuiPickersUtilsProvider, MuiPickersContext, MuiPickersContextConsumer };
//# sourceMappingURL=material-ui-pickers.esm.js.map
