import React from 'react';

interface NumberProps {
    value: number;
}

const AssignElement =(props:NumberProps) => {
    let selectElement;
    if (props.value % 2 === 0) {
        selectElement = <strong>even number</strong>
    }
    else{
        selectElement = <strong>odd number</strong>
    }
    return (
        <div>
            Properties number is {selectElement}
            My JavaScript variable is <b>{String(props.value)}</b>
        </div>
    );
};

export default AssignElement;