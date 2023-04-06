import { Button } from "react-bootstrap";
import { useUserContext } from "../../contexts/userContext";

export const Error = () => {

    const { error, serverError, onOkClick } = useUserContext();
    return (
        <div className="error_overlay">
            <div className="error_overlay_content">

                <div className="error_message">
                    {error && <p>All fields are required!</p>}
                    {serverError && <p>{serverError}</p>}
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