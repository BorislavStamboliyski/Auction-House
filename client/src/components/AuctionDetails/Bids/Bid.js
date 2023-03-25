import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useForm } from '../../../hooks/useForm'
import { useUserContext } from '../../../contexts/userContext';

import * as bidService from '../../../services/bidService';


export const Bid = ({
    auctionId,
    onBidSubmit
}) => {

    const { token } = useUserContext();

    const { formValues, onChangeHandler } = useForm({
        bid: ''
    })

    const onSubmitClick = async (e) => {
        e.preventDefault();

       const bid = await bidService.postBid(auctionId, formValues.bid, token)
       onBidSubmit(bid);
    }

    return (
        <Form onSubmit={onSubmitClick}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Input you Bid!</Form.Label>
                <Form.Control type="text" name="bid" placeholder="Make the Bid!" value={formValues.bid} onChange={onChangeHandler} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Bid
            </Button>
        </Form>
    );
}