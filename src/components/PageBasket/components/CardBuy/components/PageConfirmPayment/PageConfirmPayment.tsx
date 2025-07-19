import { useLocation } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe, type Appearance, type StripeElementsOptions } from '@stripe/stripe-js';
import FormPayment from './components/FormPayment/FormPayment';
import "./PageConfirmPayment.css";

const stripePromise = loadStripe('pk_test_51RmKFNR4RNyFDs71YZQzgAqBDn5QxQ6Uh0OLa35Fdh1HbZ7DMlRe783SFJ3oINqKHJ3tCcZGQrBtsr0k4w6GqHtP000g4s0RCD');

const ConfirmPaymentPage = () => {  
    const location = useLocation();

    const clientSecret = (location.state as { clientSecret: string })?.clientSecret;

    const appearance: Appearance = {
        theme: "stripe",
    };

    const options: StripeElementsOptions = {
        clientSecret,
        appearance,
    };

    return (
        <div className="ConfirmPaymentPage">
            <div className="DivConfirmPayment">
                <div className="TextConfirmPayment">
                    Выберите способ оплаты
                </div>
                {clientSecret && (
                    <Elements stripe={stripePromise} options={options}>
                        <FormPayment/>
                    </Elements>
                )}
            </div>
        </div>
    );
};

export default ConfirmPaymentPage;