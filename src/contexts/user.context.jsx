import {createContext, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {createUserDocumentFromAuth, onAuthStateChangedListener} from "../utils/firebase/Firebase.utils"

//as the actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null, 
});

export const UserProvider = ({ children }) =>{
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};

    useEffect(() => {
        return onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
                
            }
            setCurrentUser(user);
        });
    }, []); 

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};

UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

