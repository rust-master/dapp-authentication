import * as React from 'react';
import MaskedInput, { MaskedInputProps } from 'react-text-mask';
export interface CustomMaskedInputProps extends MaskedInputProps {
    mask?: MaskedInputProps['mask'];
    inputRef: React.Ref<any>;
}
export default class Input extends React.PureComponent<CustomMaskedInputProps> {
    static propTypes: any;
    createInputRef: (ref: MaskedInput | null) => void;
    render(): JSX.Element;
}
