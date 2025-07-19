import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState, type FormEvent } from "react";
import "./FormPayment.css";
import Confirm from "./helpers/Confirm";

const FormPayment = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!stripe || !elements) return;

        setLoading(true);
        Confirm(stripe, elements);
        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <PaymentElement />
            <button disabled={!stripe || loading} className="ButtonFormPayment">
                {loading ? "Подтверждение..." : "Подтвердить"}
            </button>
        </form>
    );
    
}

export default FormPayment;