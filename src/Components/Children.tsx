import React from 'react';

const Children = ({children}: {children:string}) => {
    return (
        <div>
            <b>{children}</b>
        </div>
    );
};

export default Children;