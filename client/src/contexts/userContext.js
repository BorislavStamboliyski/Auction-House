import { createContext, useContext, useState } from "react";

import * as authService from '../services/authService'
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = ({
    children,
}) => {

    const [user, setUser] = useState({});
    const [error, setError] = useState(false);
    const [serverError, setServerError] = useState(false);
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();

    const onLoginSubmitClick = async (data) => {

        if (data.email && data.password) {
            try {
               onLoading();
                const result = await authService.loginUser(data);
                setUser(result);
                onLoading();
                navigate('/');
            } catch (err) {
                onLoading();
                errorHandler(err);
            }

        } else {
            errorHandler();
        }

    }

    const onRegisterSubmitClick = async (values) => {
        if (values.username.length !== 0 &&
            values.email.length !== 0 &&
            values.password.length !== 0 &&
            values.repeatPassword !== 0 &&
            values.password === values.repeatPassword) {
            const { repeatPassword, ...data } = values
            try {
                onLoading();
                const user = await authService.registerUser(data);
                setUser(user);
                onLoading();
                navigate('/');
            } catch (err) {
                onLoading();
                errorHandler(err)
            }
        } else {
            errorHandler();
        }
    }

    const onLogout = () => {
        authService.logoutUser(user.accessToken);
        setUser({});
    }

    const onLoading = () => {
        setLoader(state => !state)
    }

    const errorHandler = (err) => {
        if(err) {
            return setServerError(err.message);
        } 
        return setError(true);
    }



    const onOkClick = () => {
        setError(false);
        setServerError(false);
    }


    const contextValues = {
        onLoginSubmitClick,
        onRegisterSubmitClick,
        onLogout,
        errorHandler,
        onOkClick,
        onLoading,
        loader,
        error,
        serverError,
        userId: user._id,
        token: user.accessToken,
        username: user.username,
        isAuthenticated: !!user.accessToken,
    }

    return (
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