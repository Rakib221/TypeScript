import React from 'react';

interface IInformation {
    name: string;
    id: number;
}
const Goal = ({ key,handleStatusChange, information }: { key: number,handleStatusChange:()=>void, information: IInformation }) => {
    return (
        <div className="information-card">
            <div>
                <h1>{information.name}</h1>
                <h4>{information.id}</h4>
                <button onClick={handleStatusChange}>Done</button>
            </div>
        </div>
    );
};

export default Goal;