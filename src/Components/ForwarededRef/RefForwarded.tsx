import React, { createRef, useEffect, useRef, useState } from 'react';
import REfForward from './REfForward';

const RefForwarded = () => {
    const [value, setValue] = useState('');
    const onInputChange = (e:any) => {
        // e.preventDefault();
        setValue(e.target.value);
        anotherInputRef.current?.focus();
    }
    // const inputRef = useRef<HTMLInputElement>(null);
    const inputRef = createRef<HTMLInputElement>();
    const anotherInputRef = useRef<HTMLInputElement>(null);
    const handleChange = () => {
        console.log("handle change on useRef");
    }

    // useEffect(() => {
    //     if(anotherInputRef.current){
    //         anotherInputRef.current.focus();
    //     }
    // },[])

    const onFocus = () => {
        anotherInputRef.current?.focus();
    }
    
    return (
        <div className="ref-border"> 
            <input
                ref={inputRef}
                onChange={handleChange}
            />
            <button
                onClick={() => inputRef.current?.focus()}
            >
                Focus
            </button>
            <REfForward key = {1} value = {value} change = {onInputChange} ref = {anotherInputRef}></REfForward>
            <button onClick={onFocus}>Focus</button>
        </div>
    );
};

export default RefForwarded;