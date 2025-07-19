import ButtonInProduct from "../../../PageProducts/component/CardProduct/components/ButtonInProduct";
import "./SectorInBasket.css";


const SectorInBasket = ({id, price, name}:{id: number | undefined, price: number | undefined, name: string | undefined}) => {


    return(
        id && <div className="DivSectorInBasket">
            <div className="CardInBasket">
                <div className="TextNameProduct">
                    {name}
                </div>
                <div className="TextPrice">
                    {price}₽
                </div>
                <div className="DivButtonInBasket">
                    <ButtonInProduct id_product={id}/>
                </div>
            </div>
        </div>
    )
}

export default SectorInBasket;