import { useEffect, useState } from "react";
import type { ICardProduct } from "../../Types/Types";
import { useParams } from "react-router";
import type { CategoryMap, CategoryName } from "../../Types/TypesSpec/MapSpec";
import ListProduct from "./component/ListProduct/ListProduct";
import CardProduct from "./component/CardProduct/CardProduct";
import "./PageProduct.css";
import axios from "axios";
import SectorFilter from "./component/SectorFilter/SectorFilter";

const PageProducts = () => {
    
    const params = useParams();
    
    const cat = params.category as CategoryName

    const [products, setProducts] = useState<ICardProduct[]>([]);
    
    useEffect(() => {
        if (!cat) return;

        const GetProduct = async () => {
            try {
                const res = await axios.get<ICardProduct[]>(`http://localhost:3000/products/${cat}`)
                console.log(res);
                setProducts(res.data);
            } catch (error) {
                if(axios.isAxiosError(error)){
                    alert(error.response?.data);
                }else{
                    alert(error);
                }
            }
        }

        GetProduct();
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