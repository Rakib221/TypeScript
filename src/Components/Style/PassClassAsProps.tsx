import React from 'react';
import FunctionAsProps from '../FunctionAsProps/FunctionAsProps';

interface propsTypes {
    kind?: string;
    price?: number;
}

const PassClassAsProps = (props:propsTypes) => {
    const {kind, ...others} = props;
    const className = kind === 'styleForButton'?'stylePrimary':'styleSecondary';
    return (
        <div>
            <button className={className} {...others}>Click Me</button>
            <FunctionAsProps numTimes={10}>
                {/* {(index:number) => <div key={index}>This is item {index} in this list</div>} */}
            </FunctionAsProps>
        </div>
    );
};

export default PassClassAsProps;