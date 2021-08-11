"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDisplayDate = function (_a) {
    var utils = _a.utils, value = _a.value, format = _a.format, invalidLabel = _a.invalidLabel, emptyLabel = _a.emptyLabel, labelFunc = _a.labelFunc;
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
exports.getError = function (value, props) {
    var utils = props.utils, maxDate = props.maxDate, minDate = props.minDate, disablePast = props.disablePast, disableFuture = props.disableFuture, maxDateMessage = props.maxDateMessage, minDateMessage = props.minDateMessage, invalidDateMessage = props.invalidDateMessage;
    // if null - do not show error
    if (utils.isNull(value)) {
        return '';
    }
    if (!utils.isValid(value)) {
        return invalidDateMessage;
    }
    if ((maxDate && utils.isAfter(value, utils.endOfDay(utils.date(maxDate)))) ||
        (disableFuture && utils.isAfter(value, utils.endOfDay(utils.date())))) {
        return maxDateMessage;
    }
    if ((minDate && utils.isBefore(value, utils.startOfDay(utils.date(minDate)))) ||
        (disablePast && utils.isBefore(value, utils.startOfDay(utils.date())))) {
        return minDateMessage;
    }
    return '';
};
