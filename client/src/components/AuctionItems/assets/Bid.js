import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from '../../../hooks/useForm';
import * as bidService from '../../../services/bidService';
import { useContext, useState } from 'react';
import { userContext } from '../../../contexts/userContext';

export const Bid = ({
    auctionId,
}) => {

    // Need to sort bids from higher rank
    const[bids, setBids] = useState([]);
    const {user} = useContext(userContext);

    const {formValues, onChangeHandler} = useForm({
            'auctionId' : auctionId,  
            bid : ''
    })

    const onSubmitClick = (e) => {
        e.preventDefault();

        bidService.postBid(auctionId, formValues, user.accessToken )
    }


    const getBids = async () => {
        const result = await bidService.getBids(user.accessToken);
    
        
        setBids(result.filter(x => x.auctionId === auctionId ? x : null ))
        console.log(bids);
    }

  return (
    <Form onSubmit={onSubmitClick}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Input you Bid!</Form.Label>
        <Form.Control type="text" name="bid" placeholder="Make the Bid!" value={formValues.bid} onChange={onChangeHandler}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Bid
      </Button>
      <Button variant="primary" type="button" onClick={getBids}>
        Show bids
      </Button>
    </Form>
  );
}