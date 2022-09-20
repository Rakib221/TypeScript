import React from 'react';
import Cat from './Cat';
import Mouse from './Mouse';

const MousePosition = () => {
    return (
        <div>
            <Mouse render = {mouse => (<Cat mouse = {mouse}></Cat>)}></Mouse>
        </div>
    );
};

export default MousePosition;