

export const auctionReducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_AUCTION' : 
            return  { ...action.payload };
        case 'ADD_BID' :
            return {
                ...state,
                bids: [
                    ...state.bids,
                    {
                        ...action.payload,
                        bidder: {
                          username : action.username,  
                        } 
                    }
                ],
            }
            default:
                return state;
    }
}