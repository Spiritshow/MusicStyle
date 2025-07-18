import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import RequestIsProductinBasket from "./helpers/RequestIsProductinBasket";
import RequestAddinBasket from "./helpers/RequestAddInBasket";
import RequestCheckAuth from "./helpers/RequestCheckAuth";



const ButtonInProduct = ({id_product}: {id_product: number}) => {
    const navigate = useNavigate();
    const [isProductinBasket,setIsProductinBasket] = useState<boolean>(false);
    const [loading, setIsLoading] =useState<boolean>(false);
    useEffect(() => {
        const IsInBasket = async () => {
            const resIsInBasket = await RequestIsProductinBasket(id_product)
            setIsProductinBasket(resIsInBasket);
        }
        IsInBasket();
    },[id_product])


    const handleClickInBasket = async () => {
        const auth = await RequestCheckAuth();
        if(auth) {
            setIsLoading(true);
            try {
                const added = await RequestAddinBasket(id_product);
                setIsProductinBasket(added);
            } finally {
                setIsLoading(false);
            }}
        else{
            navigate("/login");
        }
    };


    const handleClickMoveBasket = () => {
        navigate("/basket");
    }

    return(
        <>
        { isProductinBasket ? (
            <div className="DivButtonInBasket">
                <button onClick={handleClickMoveBasket} className="ButtonMoveBasket">В корзине{"->"}</button>
            </div>
            ) : (
            <div className="DivButtonInBasket">
                <button onClick={handleClickInBasket} className="ButtonInBasket" disabled={loading}>
                    {loading ? "Добавляем..." : "В корзину"}
                </button>
            </div>
            )
        }
        </>
    )
}

export default ButtonInProduct;