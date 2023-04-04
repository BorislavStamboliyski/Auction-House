import { createContext, useContext, useEffect, useState } from "react";

import * as auctionService from '../services/auctionService'
import { useUserContext } from "./userContext";
import { useNavigate } from "react-router-dom";


export const AuctionContext = createContext();

export const AuctionProvider = ({
    children,
}) => {

    const [auctions, setAuctions] = useState([]);
    const [error, setError] = useState(false);
    const { token } = useUserContext();
    
    const navigate = useNavigate();

    useEffect(() => {
        auctionService.getAll()
            .then(result => {
                setAuctions(result)
            });
    }, []);

    const onCreateAuctionSubmit = async (data) => {
        if (data.name !== '' && data.category !== '' && data.price !== '' && data.imageUrl !== '' && data.summary !== '') {
            const newAuction = await auctionService.createAuction(data, token);
            setAuctions(state => [...state, newAuction])

            navigate('/auctions');
        } else {
            setError(true)
        }

    }

    const onEditAuctionSubmit = async (data) => {

        if (data.name !== '' && data.category !== '' && data.price !== '' && data.imageUrl !== '' && data.summary !== '') {
            const result = await auctionService.editAuction(data, data._id, token);
            setAuctions(state => state.map(x => x._id === data._id ? result : x))
            navigate(`/auctions/${data._id}`);
        } else {
            setError(true);
        }
    }

    const onDeleteAuctionSubmit = async (data) => {
         
        await auctionService.closeAuction(data._id, token);
        setAuctions(state => state.filter(auction => auction._id !== data._id))
        navigate(`/auctions`);
    }


    const onOkClick = () => {
        setError(false)
    }

    const contextValues = {
        auctions,
        error,
        onCreateAuctionSubmit,
        onEditAuctionSubmit,
        onDeleteAuctionSubmit,
        onOkClick
    }


    return <AuctionContext.Provider value={contextValues}>
        {children}
    </AuctionContext.Provider>
}

export const useAuctionContext = () => {
    const context = useContext(AuctionContext);

    return context;
}