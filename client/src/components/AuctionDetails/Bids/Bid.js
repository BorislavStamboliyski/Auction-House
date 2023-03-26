import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useForm } from '../../../hooks/useForm'

export const Bid = ({
    onBidSubmit,
    onCancelClick
}) => {

    const { formValues, onChangeHandler } = useForm({
        bid: ''
    });

  

    return (
        <Form onSubmit={(e) => onBidSubmit(e, formValues)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Place your Bid:</Form.Label>
                <Form.Control type="text" name="bid" placeholder="Place your bid here" value={formValues.bid} onChange={onChangeHandler} />
            </Form.Group>
            <div className='button-container'>
            <Button variant="primary" type="submit">
                Place Bid
            </Button>
            <Button variant="primary" type="button" onClick={()=> onCancelClick()}>
                Cancel
            </Button>
            </div>
        </Form>
    );
}