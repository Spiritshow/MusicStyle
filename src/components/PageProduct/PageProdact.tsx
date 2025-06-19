import { useParams } from "react-router";
import SectorImage from "./components/SectorImage/SectorImage";
import SectorInBasket from "./components/SectorInBasket/SectorInBasket";
import SectorSpec from "./components/SectorSpec/SectorSpec";
import { useEffect, useState } from "react";
import type { IProduct } from "../../Types/Types";
import type { CategoryMap, CategoryName } from "../../Types/TypesSpec/MapSpec";
import { RequestProduct } from "../RequestApi/RequestProduct";


const PageProduct = () => {
    const idProduct = useParams().idProduct;

    const [product, setProduct] = useState<IProduct<CategoryMap[CategoryName]>>();

    useEffect(() => {
        if (idProduct){
            RequestProduct({idProduct, setProduct});
        }
    },[])

    return(
        <div className="DivPageProduct">
            <SectorImage image={product?.img}/>
            <SectorSpec spec={product?.specifications}/>
            <SectorInBasket id={product?.id} price={product?.price}/>
        </div>
    )
}

export default PageProduct;