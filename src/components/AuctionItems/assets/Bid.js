import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from '../../../hooks/useForm';
import * as bidService from '../../../services/bidService';
import { useContext } from 'react';
import { userContext } from '../../../contexts/userContext';

export const Bid = ({
    auctionId,
}) => {

    const {user} = useContext(userContext);

    const {formValues, onChangeHandler} = useForm({
        [auctionId] : {
            bid : ''}
    })

    const onSubmitClick = (e) => {
        e.preventDefault();

        bidService.postBid(auctionId, formValues, user.accessToken )
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
    </Form>
  );
}