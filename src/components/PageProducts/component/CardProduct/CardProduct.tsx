import { useContext, type FC } from "react";
import type { ICardProduct} from "../../../../Types/Types";
import { useNavigate } from "react-router";
import "./CardProduct.css";
import { ThemeContext } from "../../../../router/router";
import ButtonInProduct from "./components/ButtonInProduct";

interface ICompCardProduct{
    product: ICardProduct;
}

const CardProduct:FC<ICompCardProduct> = ({product}) => {
    const navigete = useNavigate()
    const context = useContext(ThemeContext);

    const handleClickProduct = () => {
        navigete(`/product/${product.id}`);
    }
    
    return(
        <div className={`DivCardProduct BackgroundCardProduct${context.theme}`}>
            <div onClick={handleClickProduct} className="DivImgCardProduct">
                <img src={`http://localhost:3000/uploads/${product.img}`} alt={product.name} className="ImgCardProduct"/>
            </div>
            <div className="DivPriceCardProduct">
                <div className="PriceCardProduct">{product.price}₽</div>
            </div>
            <div className="DivCategoryCardProduct">
                <div className="NameCardProduct">{product.name}</div>
            </div>
            <ButtonInProduct id_product={product.id}/>
        </div>
    )
} 

export default CardProduct;