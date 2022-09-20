import React from 'react';

const MyErrorBoundary = () => {
    return (
        <div>
            <h1 style={{color: 'red'}}>Network Error</h1>
        </div>
    );
};

export default MyErrorBoundary;