
import * as requester from "./requester"

const baseUrl = 'http://localhost:3030/data/auctions'




export const getAll = async () => {

    try {
        const auctions = await requester.get(baseUrl);

        return auctions;
    } catch (err) {
        throw err
    }


}


export const getAuction = async (auctionId) => {

    try {
        const auction = await requester.get(`${baseUrl}/${auctionId}`);

        return auction;
    } catch (err) {
        throw err
    }


}


export const createAuction = async (data, token) => {

    try {
        const auction = await requester.post(baseUrl, data, token);

        return auction;
    } catch (err) {
        throw err
    }

    
}


export const editAuction = async (data, auctionId, token) => {

    try {
        const auction = await requester.put(`${baseUrl}/${auctionId}`, data, token);

        return auction;
    } catch (err) {
        throw err
    }


}



export const closeAuction = async (auctionId, token) => {

    try {
        await requester.del(`${baseUrl}/${auctionId}`, null, token);
    } catch (err) {
        throw err
    }
}

