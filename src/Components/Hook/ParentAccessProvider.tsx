import React from 'react';
import { createContext } from 'react';
import GlobalContext from './GlobalContext';

export const AuthContext = createContext(GlobalContext());

const ParentAccessProvider = ({children}:{children:React.ReactNode}) => {
    const AllContext = GlobalContext();
    return (
        <AuthContext.Provider value = {AllContext}>
        {children}
    </AuthContext.Provider>
    );
};

export default ParentAccessProvider;
