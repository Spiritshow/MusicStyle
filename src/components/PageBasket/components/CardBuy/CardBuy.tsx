import { useContext, useEffect, useState } from "react";
import SumBasket from "./helpers/SumBasket";
import TextCount from "./helpers/TextCount";
import "./CardBuy.css";
import { FlagContext } from "../../PageBasket";


const CardBuy = () => {
    const {flag, setFlag} = useContext(FlagContext);
    const [sum,setSum] = useState<number>(0);
    const [count,setCount] = useState<number>(0);

    useEffect(() => {
        SumBasket()
        .then((res) => {
            setSum(res.sum);
            setCount(res.countproducts);
        })
    },[flag])

    const handleClickBuy = () => {

    }

    return(
        <div className="DivCardBuy">
            <div className="TextHeaderCardBuy">
                ВАШ ЗАКАЗ
            </div>
            <div className="TextCount">
                {TextCount(count)}
            </div>
            <div className="DivTotalSumBasket">
                <div className="TextTotalSumBasket">
                    Итого:
                </div>
                <div className="ValueTotalSumBasket">
                    {Number(sum)} ₽
                </div>
            </div>
            <button onClick={handleClickBuy} className="ButtonCardBuy">Оплатить</button>
        </div>
    )
}

export default CardBuy;