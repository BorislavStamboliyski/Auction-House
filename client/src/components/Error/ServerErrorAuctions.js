import { Button } from "react-bootstrap";
import { useAuctionContext } from "../../contexts/auctionContext";


export const ServerErrorAuctions = () => {

    const { serverError, onOkClick } = useAuctionContext();

    return (
        <div className="error_overlay">
            <div className="error_overlay_content">
                <div className="error_message"><p>{serverError}</p>
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