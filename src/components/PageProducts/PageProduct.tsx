import { useEffect, useState } from "react";
import type { ICardProduct } from "../../Types/Types";
import { useParams } from "react-router";
import type { CategoryName } from "../../Types/TypesSpec/MapSpec";
import ListProduct from "./component/ListProduct/ListProduct";
import CardProduct from "./component/CardProduct/CardProduct";
import "./PageProduct.css";
import SectorFilter from "./component/SectorFilter/SectorFilter";
import { RequestProducts } from "../RequestApi/RequestProducts";

const PageProducts = () => {
    
    const params = useParams();
    
    const cat = params.category as CategoryName

    const [products, setProducts] = useState<ICardProduct[]>([]);
    
    useEffect(() => {
        if (!cat) return;
        RequestProducts({cat, setProducts});
    }, [cat]);

    return(
        <div className="DivPageProduct">
            <div className="DivSectorFilter">
                <SectorFilter category={cat}/>
            </div>
            <div className="DivSectorProduct">
                <div>
                    {/* Название категории*/}
                </div>
                <div className="DivListProdacts">
                    <ListProduct item={products} renderItem={(product:ICardProduct) => <CardProduct key={product.id} product={product}/>}/>
                </div>
            </div>
        </div>
    )
} 

export default PageProducts;