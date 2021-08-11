import * as React from 'react';
export interface DayWrapperProps {
    children: React.ReactNode;
    dayInCurrentMonth?: boolean;
    disabled?: boolean;
    onSelect: (value: any) => void;
    value: any;
}
declare class DayWrapper extends React.PureComponent<DayWrapperProps> {
    static propTypes: any;
    static defaultProps: {
        dayInCurrentMonth: boolean;
        disabled: boolean;
    };
    handleClick: () => void;
    render(): JSX.Element;
}
export default DayWrapper;
