import * as requester from './requester'



const baseUrl = "http://localhost:3030/data/bids"

export const postBid = async (auctionId, data, token) => {

    const bid = await requester.post(`${baseUrl}`, data, token );

    console.log(bid);
}