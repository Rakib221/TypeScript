import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const addition = () => {
    import("./addition").then(addition => {
        console.log(addition.add(5,6));
    })
}

const TypeScriptPractice = ({practice}:{practice:string}) => {
    return (
        <div>
            <h1>{practice}</h1>
            <h1>Addition with TypeScript</h1>
            <button onClick = {addition} type="button">Add</button>
            <div>
                <ul>
                    <Link to="comments">
                        <li>Comments</li>
                    </Link>
                    <Link to="essay">
                        <li>Essay</li>
                    </Link>
                </ul>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default TypeScriptPractice;