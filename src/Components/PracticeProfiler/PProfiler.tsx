import React, { useState } from 'react';
import Goal from './Goal';
import PracticeWithLanguage from './PracticeWithLanguage';

const PProfiler = () => {
    const [done, setDone] = useState<boolean>(false);
    const goals = [
        {name:"MD",id:1},
        {name:"Rakib",id:2},
        {name:"Hasan",id:3}
    ]
    const handleStatusChange = () => {
        console.log("number")
    }
    return (
        <div>
            {
               goals.map(information=><Goal key = {information.id} handleStatusChange = {handleStatusChange} information={information}></Goal>)
            }
            <PracticeWithLanguage></PracticeWithLanguage>
        </div>
    );
};

export default PProfiler;