import React from 'react';
import { useState, useEffect, createContext } from 'react';

const GlobalContext = () => {
    interface IDefaultValue {
        isOk: boolean
    }
    
    const [defaultValue, setDefaultValue] = useState<IDefaultValue | undefined>({
        isOk: false
    })
    
    return (
        defaultValue
    );
};

export default GlobalContext;