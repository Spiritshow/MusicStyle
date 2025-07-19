import type { Stripe, StripeElements } from "@stripe/stripe-js";


const Confirm = async (stripe: Stripe, elements: StripeElements) => {
    const result = await stripe.confirmPayment({
        elements,
        confirmParams: {
            return_url: "http://localhost:5173/success", // или твой домен
        },
    });

    if (result.error) {
        console.error(result.error.message);
    } 
}
export default Confirm;