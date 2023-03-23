
import * as requester from "./requester"

const baseUrl = 'http://localhost:3030/data/auctions'

export const getAll = async () => {

    const auctions = await requester.get(baseUrl);

    
    return auctions;

}


export const getAuction = async (auctionId) => {
   
    const auction = await requester.get(`${baseUrl}/${auctionId}`);

    return auction;
}


export const createAuction = async (data, token) => {
   
    const auction = await requester.post(baseUrl, data, token);

    return auction;
}


export const editAuction = async (data, auctionId ,token) => {

    const auction = await requester.put(`${baseUrl}/${auctionId}`, data, token);

    return auction;

}



export const closeAuction = async (auctionId, token) => {

    console.log(auctionId)
    console.log(token)
    await requester.del(`${baseUrl}/${auctionId}`,null, token);

}