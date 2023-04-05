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
    const [serverError, setServerError] = useState(false);

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

            try {
                const newAuction = await auctionService.createAuction(data, token);
                setAuctions(state => [...state, newAuction])

                navigate('/auctions');
            } catch (err) {
                setServerError(err.message)
            }

        } else {
            setError(true)
        }

    }

    const onEditAuctionSubmit = async (data) => {

        if (data.name !== '' && data.category !== '' && data.price !== '' && data.imageUrl !== '' && data.summary !== '') {

            try {
                const result = await auctionService.editAuction(data, data._id, token);
                setAuctions(state => state.map(x => x._id === data._id ? result : x))
                navigate(`/auctions/${data._id}`);
            } catch (err) {
                setServerError(err.message)
            }

        } else {
            setError(true);
        }
    }

    const onDeleteAuctionSubmit = async (data) => {

        try {
            await auctionService.closeAuction(data._id, token);
            setAuctions(state => state.filter(auction => auction._id !== data._id))
            navigate(`/auctions`);
        } catch (err) {
            setServerError(err.message)
        }
        
    }


    const onOkClick = () => {
        setError(false)
        setServerError(false)
    }

    const contextValues = {
        auctions,
        serverError,
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