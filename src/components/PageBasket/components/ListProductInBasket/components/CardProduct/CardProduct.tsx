import { useContext, useEffect, useState } from "react";
import ControlCount from "./compoments/ControlCount/ControlCount";
import SumPricePosition from "./helpers/SumPricePosition";
import DeletePosition from "./helpers/DeletePosition";
import { FlagContext, type IPositionBasket } from "../../../../PageBasket";
import "./CardProduct.css";
import { ThemeContext } from "../../../../../../router/router";


const CardProduct = ({position}: {position: IPositionBasket}) => {
    const {flag, setFlag} = useContext(FlagContext);
    const context = useContext(ThemeContext)
    const [sumPrice, setSumPrice] = useState<number>(0);

    useEffect(() => {
        SumPricePosition(position.id)
        .then((res) => setSumPrice(res));
    },[flag])

    const handleClickDelet = () => {
        DeletePosition(position.id);
        setFlag(flag);
    }

    return(
        <div className={`DivCardPositionBasket CardPositionBasket${context.theme}`}>
            <div className="DivImgCardPositionBasket">
                <img src={`http://localhost:3000/uploads/${position.img}`} 
                    alt={position.name_product} 
                    className="ImgCardPositionBasket"
                />
            </div>
            <div className="DivTextCardPositionBasket">
                <div className="HeaderTextCardPositionBasket">
                    Название продукта:
                </div>
                <div className="TextCardPositionBasket">
                    {position.name_product}
                </div>
            </div>
            <div className="SectorControlCount">
            <ControlCount initCount={position.count} id_position={position.id}/>
            </div>
            <div className="DivTextSumPrice">
                <div className="HeaderTextSumPrice">
                    Цена:
                </div>
                <div className="TextSumPrice">
                    {sumPrice}₽
                </div>
            </div>
            <div className="DivButtonCardPositionBasket">
            <button onClick={handleClickDelet} className={`ButtonCardPositionBasket  ButtonCardPosition${context.theme}`}>
                <img src="/src/assets/Delete.png" alt="Delete" className="ImgButtonCardPositionBasket"/>
            </button>
            </div>
        </div>
    )
}

export default CardProduct;