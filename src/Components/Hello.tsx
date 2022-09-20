import React from 'react';

const Hello = ({title}:{title:string}) => {
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};

export default Hello;