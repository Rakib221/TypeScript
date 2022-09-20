import React from 'react';
interface IMouse{
    x: number;
    y:number;
}
const Cat = ({mouse}:{mouse:IMouse}) => {
    return (
        <div>
            <img src="persiankitten-lede.jpg" style={{ position: 'absolute', left: mouse.x, top: mouse.y, width:'100px', height:'100px' }} />
        </div>
    );
};

export default Cat;