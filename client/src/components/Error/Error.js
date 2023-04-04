import { Button } from "react-bootstrap";
import { useAuctionContext } from "../../contexts/auctionContext";

export const Error = () => {

    const { onOkClick } = useAuctionContext();

    return (
        <div className="error_overlay">
            <div className="error_overlay_content">
                <div className="error_message">All fields are required!
                    <div className="error-bidding-button" >
                        <Button variant="primary" type="button" onClick={onOkClick}>
                            OK
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}