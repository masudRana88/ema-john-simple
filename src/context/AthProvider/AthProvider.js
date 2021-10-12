
import React, { createContext } from 'react';
import useFirebase from '../../Hooks/useFirebase';
export const AuthContext = createContext();

const AthProvider = ({children}) => {
    const allAuth = useFirebase()
    return (
        <AuthContext.Provider value={allAuth}>
            {children}
        </AuthContext.Provider>
    );
};

export default AthProvider;