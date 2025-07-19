import { useContext, useEffect, useState } from "react";
import SumBasket from "./helpers/SumBasket";
import TextCount from "./helpers/TextCount";
import "./CardBuy.css";
import { FlagContext } from "../../PageBasket";
import axios from "axios";
import { useNavigate } from "react-router";
import AllCleaning from "../helpers/AllCleaning";
import { ThemeContext } from "../../../../router/router";


const CardBuy = () => {
    const context = useContext(ThemeContext);

    const {flag, setFlag} = useContext(FlagContext);
    const [sum,setSum] = useState<number>(0);
    const [count,setCount] = useState<number>(0);

    const navigate = useNavigate();

    useEffect(() => {
        SumBasket()
        .then((res) => {
            setSum(res.sum);
            setCount(res.countproducts);
        })
    },[flag])

    const handleClickBuy = async () => {
        if(Number(count) > 0){
            const response = await axios.post('http://localhost:3000/create-payment-intent', {
                amount: Number(sum),
            });
            const clientSecret = response.data.clientSecret;
            navigate('/confirm', { state: { clientSecret } });
            AllCleaning();
            setFlag(flag);
        }
    }

    return(
        <div className="DivCardBuy">
            <div className="TextHeaderCardBuy">
                ВАШ ЗАКАЗ
            </div>
            <div className="HeaderCount">
                Кол-во позиций: 
            </div>
            <div className="TextCount">
                {TextCount(Number(count))}
            </div>
            <div className="DivTotalSumBasket">
                <div className="TextTotalSumBasket">
                    Итого:
                </div>
                <div className="ValueTotalSumBasket">
                    {Number(sum)} ₽
                </div>
            </div>
            <button onClick={handleClickBuy} className={`ButtonCardBuy ButtonCardBuy${context.theme}`}>Оплатить</button>
        </div>
    )
}

export default CardBuy;