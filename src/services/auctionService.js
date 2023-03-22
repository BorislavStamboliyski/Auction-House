
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


export const createAuction = async (data, user) => {
   
    const auction = await requester.post(baseUrl, data, user);

    return auction;
}