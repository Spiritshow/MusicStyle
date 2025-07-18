import { useContext, useEffect, useState } from "react";
import type { ICardProduct } from "../../Types/Types";
import { useParams } from "react-router";
import ListProduct from "./component/ListProduct/ListProduct";
import CardProduct from "./component/CardProduct/CardProduct";
import "./PageProduct.css";
import SectorFilter from "./component/SectorFilter/SectorFilter";
import { RequestProducts } from "../RequestApi/RequestProducts";
import { ThemeContext } from "../../router/router";
import RequestNameSubcategory from "./helper/RequestNameSubcategory";

const PageProducts = () => {
    const context = useContext(ThemeContext);
    const params = useParams();

    const subcategory = Number(params.subcategory);
    const [products, setProducts] = useState<ICardProduct[]>([]);
    const [nameSubcategory, setNameSubcategory] = useState<string>();

    useEffect(() => {
        if (!subcategory) return;
        RequestProducts({subcategory, setProducts});
        RequestNameSubcategory(subcategory, setNameSubcategory);
    }, [subcategory]);

    return(
        <div className={`DivPageProduct BackgroundPageProduct${context.theme}`}>
            <div className="DivSectorFilter">
                <div className="DivNameSubcategory">
                    <div className="TextHeaderSubcategory">
                        Подкатегория:
                    </div>
                    <div className="TextNameSubcategory">
                        {nameSubcategory}
                    </div>
                </div>
                <SectorFilter subcategory={subcategory} setProducts={setProducts}/>
            </div>
            <div className="DivSectorProduct">
                <div className="DivListProdacts">
                    <ListProduct item={products} renderItem={(product:ICardProduct) => <CardProduct key={product.id} product={product}/>}/>
                </div>
            </div>
        </div>
    )
} 

export default PageProducts;