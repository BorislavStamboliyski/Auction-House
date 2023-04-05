
import * as request from "./requester"

const baseurl = "http://localhost:3030/users"

export const registerUser = async (data) => {

    try {
        const user = await request.post(`${baseurl}/register`, data);
    
        return user;
    } catch(err) {
        throw err
    }   
}

export const loginUser = async (data) => {

        try{
            const user = await request.post(`${baseurl}/login`, data);
            return user;

        } catch(err) {
            throw err
        }

   
}


export const logoutUser = (token) => {
 
    request.get(`${baseurl}/logout`, null, token);
}