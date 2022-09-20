import React, { ReactNode } from 'react';

interface propsFunction {
    numTimes?:number;
    // children?:()=>number;
    children?:ReactNode;
}
const FunctionAsProps = (props?:propsFunction) => {
    // let items = [];
    // for (let i = 0; i < props?.numTimes;i++){
    //     items.push(props?.children(i));
    // }
    return (
        <div>
            {/* {items} */}
        </div>
    );
};

export default FunctionAsProps;