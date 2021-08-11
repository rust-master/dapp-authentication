/// <reference types="react" />
/// <reference types="styled-jsx" />
import { DateTextFieldProps } from '../_shared/DateTextField';
export declare const getDisplayDate: ({ utils, value, format, invalidLabel, emptyLabel, labelFunc, }: DateTextFieldProps) => string | undefined;
export declare const getError: (value: any, props: DateTextFieldProps) => import("react").ReactNode;
