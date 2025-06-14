import { useEffect, useState } from "react";
import type { ICardProduct } from "../../Types/Types";
import { useParams } from "react-router";
import type { CategoryMap, CategoryName } from "../../Types/TypesSpec/MapSpec";
import ListProduct from "./component/ListProduct/ListProduct";
import CardProduct from "./component/CardProduct/CardProduct";


const PageProducts = () => {
    
    const params = useParams();
    
    const cat = params.category as CategoryName

    const [products, setProducts] = useState<ICardProduct[]>([]);
    
    useEffect(() => {
        if (!cat) return;

        // Пример запроса, замени на реальный fetch
        const fetchData = async () => {
            const res = await fetch(`/api/products?category=${cat}`);
            const data = await res.json();

            setProducts(data); // data должен быть ICardProduct[]
        };

        fetchData();
    }, [cat]);

    return(
        <div className="DivPageProduct">
            <div>
                {/* Название категории*/}
            </div>
            <div className="DivListProdacts">
                <ListProduct item={products} renderItem={(product:ICardProduct) => <CardProduct key={product.id} product={product}/>}/>
            </div>
        </div>
    )
} 

export default PageProducts;