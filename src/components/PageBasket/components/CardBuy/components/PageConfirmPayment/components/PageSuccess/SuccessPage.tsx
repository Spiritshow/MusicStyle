import { useNavigate } from "react-router";
import "./SuccessPage.css";


const SuccessPage = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/");
    } 

    return (
        <div className="ConfirmPaymentPage">
            <div className="DivConfirmPayment">
                <h2>Оплата прошла успешно!</h2>
                <button onClick={handleClick} className="ButtonSuccessPage">Вернуться на сайт</button>
            </div>
        </div>
    );
};

export default SuccessPage;