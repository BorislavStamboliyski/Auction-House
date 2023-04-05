import { Button } from "react-bootstrap";
import { useUserContext } from "../../contexts/userContext";


export const AuthError = () => {

    const { onOkClick } = useUserContext();

    return (
        <div className="error_overlay">
            <div className="error_overlay_content">
                <div className="error_message"><p>All fields are required!</p>
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