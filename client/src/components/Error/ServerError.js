import { Button } from "react-bootstrap";
import { useUserContext } from "../../contexts/userContext";


export const ServerError = () => {

    const { serverError, onOkClick } = useUserContext();

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