
import * as request from "./requester"

const baseurl = "http://localhost:3030/users"

export const registerUser = async (data) => {

    const user = await request.post(`${baseurl}/register`, data);
    
    return user;
}

export const loginUser = async (data) => {

    const user = await request.post(`${baseurl}/login`, data);
    
    return user;
}


export const logoutUser = () => {

    request.get(`${baseurl}/logout`);
}