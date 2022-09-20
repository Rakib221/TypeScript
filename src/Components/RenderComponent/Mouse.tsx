import React, {ReactNode, useState} from 'react';
import Cat from './Cat';

interface IMouse{
    x: number;
    y:number;
}

interface MouseProps {
    render(mousePosition: IMouse): ReactNode;
  }

const Mouse = (props: MouseProps) => {
    const [mousePosition, setMousePosition] = useState<IMouse>({
        x: 0,
        y: 0
    });

    const handleMouseMove = (event:any) => {
        const mouseSet = {...mousePosition};
        mouseSet.x = event.clientX;
        mouseSet.y = event.clientY;
        setMousePosition(mouseSet);
    }
    return (
        <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
        <h1>Move the mouse around!</h1>
        <p>The current mouse position is ({mousePosition.x}, {mousePosition.y})</p>
        {/* <Cat mouse={mousePosition}></Cat> */}
        {props.render(mousePosition)}
      </div>
    );
};

export default Mouse;