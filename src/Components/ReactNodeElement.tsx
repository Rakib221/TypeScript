import React, {ReactNode} from 'react';

const ReactNodeElement = ({children}:{children:ReactNode}) => {
    return (
        <h1>{children}</h1>
    );
};

export default ReactNodeElement;