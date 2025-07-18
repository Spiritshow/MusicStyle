import { useContext, useEffect, useState } from "react";
import ControlCount from "./compoments/ControlCount/ControlCount";
import SumPricePosition from "./helpers/SumPricePosition";
import DeletePosition from "./helpers/DeletePosition";
import { FlagContext, type IPositionBasket } from "../../../../PageBasket";



const CardProduct = ({position}: {position: IPositionBasket}) => {
    const {flag, setFlag} = useContext(FlagContext)
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
        <div className="DivCardPositionBasket">
            <div className="DivImgCardPositionBasket">
                <img src={`http://localhost:3000/uploads/${position.img}`} 
                    alt={position.name_product} 
                    className="ImgCardPositionBasket"
                />
            </div>
            <div className="TextCardPositionBasket">
                {position.name_product}
            </div>
            <ControlCount initCount={position.count} id_position={position.id}/>
            <div className="TextSumPrice">
                {sumPrice}₽
            </div>
            <button onClick={handleClickDelet} className="ButtonCardPositionBasket">
                <img src="/src/assets/Delete.png" alt="Delete"/>
            </button>
        </div>
    )
}

export default CardProduct;