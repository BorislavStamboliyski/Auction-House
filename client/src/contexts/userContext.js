import { createContext, useContext, useState } from "react";

import * as authService from '../services/authService' 

export const UserContext = createContext();

export const UserProvider = ({
    children,
}) => {

    const [user, setUser] = useState({});


    const onLogin =  (result) => {
      
        setUser(result);
    }

    const onLogout =  () =>{
        authService.logoutUser(user.accessToken);
        setUser({});
    }



    const contextValues = {
        onLogin,
        onLogout,
        userId: user._id,
        token: user.accessToken,
        username: user.username,
        isAuthenticated: !!user.accessToken, 
    }

    return(
        <>
        <UserContext.Provider value={contextValues}>
           {children} 
        </UserContext.Provider>
        </>
    );

}


export const useUserContext = () => {
    const context = useContext(UserContext);

    return context;
}