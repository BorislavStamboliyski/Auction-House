import * as requester from './requester'



const baseUrl = "http://localhost:3030/data/bids"

export const postBid = async (auctionId, data, token) => {

    const bid = await requester.post(`${baseUrl}`, data, token );

    return bid;
}


export const getBids = async (token) => {
    const bids = await requester.get(baseUrl, null , token);

    return bids;
}