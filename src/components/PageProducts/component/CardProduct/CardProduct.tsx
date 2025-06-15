import type { FC } from "react";
import type { ICardProduct} from "../../../../Types/Types";
import { useNavigate } from "react-router";
import "./CardProduct.css";

interface ICompCardProduct{
    product: ICardProduct;
}

const CardProduct:FC<ICompCardProduct> = ({product}) => {
    const navigete = useNavigate()

    const handleClickProduct = () => {
        navigete(`/product/${product.id}`);
    }

    const handleClickInBasket = () => {

    }
    
    return(
        <div className="DivCardProduct">
            <div onClick={handleClickProduct} className="DivImgCardProduct">
                <img src={`/src/assets/${product.img}`} alt={product.name} className="ImgCardProduct"/>
            </div>
            <div className="DivPriceCardProduct">
                <div className="PriceCardProduct">{product.price}₽</div>
            </div>
            <div className="DivCategoryCardProduct">
                <div className="CategoryCardProduct">{product.category}</div>
                <div className="NameCardProduct">{product.name}</div>
            </div>
            <div className="DivButtonInBasket">
                <button onClick={handleClickInBasket} className="ButtonInBasket">В корзину</button>
            </div>
        </div>
    )
} 

export default CardProduct;