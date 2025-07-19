import axios from "axios";
import type { ICardProduct } from "../../Types/Types";




interface RequestProducts {
    subcategory: number, 
    setProducts: React.Dispatch<React.SetStateAction<ICardProduct[]>>
}

export const RequestProducts = async ({subcategory, setProducts}: RequestProducts ) => {
    try {
        await axios.get<ICardProduct[]>(`http://localhost:3000/products/${subcategory}`)
        .then((res) => setProducts(res.data));
    } catch (error) {
        if(axios.isAxiosError(error)){
            alert(error.response?.data);
        }else{
            alert(error);
        }
    }
}