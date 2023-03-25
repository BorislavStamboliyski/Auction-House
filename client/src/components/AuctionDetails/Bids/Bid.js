import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useForm } from '../../../hooks/useForm'

export const Bid = ({
    onBidSubmit
}) => {

    const { formValues, onChangeHandler } = useForm({
        bid: ''
    })

  

    return (
        <Form onSubmit={(e) => onBidSubmit(e, formValues)}>
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