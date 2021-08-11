import { IUtils } from '@date-io/core/IUtils';
import * as React from 'react';
export declare const MuiPickersContext: React.Context<IUtils<any> | null>;
export declare const MuiPickersContextConsumer: React.ExoticComponent<React.ConsumerProps<IUtils<any> | null>>;
export interface MuiPickersUtilsProviderProps {
    utils: any;
    children: React.ReactNode;
    locale?: any;
    moment?: any;
}
export default class MuiPickersUtilsProvider extends React.Component<MuiPickersUtilsProviderProps> {
    static propTypes: any;
    static getDerivedStateFromProps({ utils: Utils, locale, moment, }: MuiPickersUtilsProviderProps): {
        utils: any;
    };
    state: {
        utils: null;
    };
    render(): JSX.Element;
}
