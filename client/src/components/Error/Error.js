import { Button } from "react-bootstrap";

export const Error = ({
    onOkClick
}) => {
    return (
        <div className="overlay">
            <div className="error-bidding">All fields are required!
                <div className="error-bidding-button" >
                    <Button variant="primary" type="button" onClick={() => onOkClick()}>
                        OK
                    </Button>
                </div>
            </div>
        </div>
    );
}