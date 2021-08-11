import * as React from 'react';
import { Theme } from '@material-ui/core';
import { WithStyles } from '@material-ui/core/styles/withStyles';
import DateTimePickerView, { DateTimePickerViewType } from '../../constants/DateTimePickerView';
export interface DateTimePickerTabsProps extends WithStyles<typeof styles, true> {
    view: DateTimePickerViewType;
    onChange: (view: DateTimePickerView) => void;
    dateRangeIcon: React.ReactNode;
    timeIcon: React.ReactNode;
}
export declare const DateTimePickerTabs: React.SFC<DateTimePickerTabsProps>;
export declare const styles: (theme: Theme) => {
    tabs: {
        color: string;
        backgroundColor: string;
    };
};
declare const _default: React.ComponentType<Pick<React.PropsWithChildren<DateTimePickerTabsProps>, "view" | "children" | "onChange" | "dateRangeIcon" | "timeIcon"> & import("@material-ui/core").StyledComponentProps<"tabs">>;
export default _default;
