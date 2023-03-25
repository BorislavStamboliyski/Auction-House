import * as requester from './requester'



const baseUrl = "http://localhost:3030/data/bids"

export const postBid = async (auctionId, bid, token) => {
  
    const newBid = await requester.post(baseUrl, {auctionId, bid}, token);
    return newBid;
}


export const getBids = async (auctionId) => {



    const searchQuery = encodeURIComponent(`auctionId="${auctionId}"`);
    const relationQuery = encodeURIComponent(`bidder=_ownerId:users`);

    const bids = await requester.get(`${baseUrl}?where=${searchQuery}&load=${relationQuery}`);

    return bids;
}