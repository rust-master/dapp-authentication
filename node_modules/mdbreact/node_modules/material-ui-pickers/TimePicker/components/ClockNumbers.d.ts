/// <reference types="react" />
import { IUtils } from '@date-io/core/IUtils';
export declare const getHourNumbers: ({ ampm, utils, date, }: {
    ampm: boolean;
    utils: IUtils<any>;
    date: any;
}) => JSX.Element[];
export declare const getMinutesNumbers: ({ value, utils, }: {
    value: number;
    utils: IUtils<any>;
}) => JSX.Element[];
