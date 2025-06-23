import { useParams } from "react-router";
import SectorImage from "./components/SectorImage/SectorImage";
import SectorInBasket from "./components/SectorInBasket/SectorInBasket";
import SectorSpec from "./components/SectorSpec/SectorSpec";
import { createContext, useEffect, useState } from "react";
import type { IProduct } from "../../Types/Types";
import type { CategoryMap, CategoryName } from "../../Types/TypesSpec/MapSpec";
import { RequestProduct } from "../RequestApi/RequestProduct";
import SectorBottom from "./components/SectorBottom/SectorBottom";
import "./PageProduct.css"


interface ContextProduct {
    product: IProduct<CategoryMap[CategoryName]> | undefined
}

export const ProductContext = createContext<ContextProduct>({product: undefined})

const PageProduct = () => {
    const idProduct = useParams().idProduct;

    const [product, setProduct] = useState<IProduct<CategoryMap[CategoryName]>>();

    useEffect(() => {
        if (idProduct){
            RequestProduct({idProduct, setProduct});
        }
    },[])

    return(
        <ProductContext.Provider value={{product: product}}>
            <div className="DivPage">
                <div className="DivProduct">
                    <SectorImage image={product?.img}/>
                    <SectorSpec spec={product?.specifications}/>
                    <SectorInBasket id={product?.id} price={product?.price}/>
                </div>
                <SectorBottom/>
            </div>
        </ProductContext.Provider>
    )
}

export default PageProduct;