import axios from "axios";
import type { ICardProduct } from "../PageProducts/helper/Types";



interface RequestProducts {
    cat: string, 
    setProducts: (cardProdacts: ICardProduct[]) => void
}

export const RequestProducts = async ({cat, setProducts}: RequestProducts) => {
    try {
        const res = await axios.get<ICardProduct[]>(`http://localhost:3000/products/${cat}`)
        setProducts(res.data);
    } catch (error) {
        if(axios.isAxiosError(error)){
            alert(error.response?.data);
        }else{
            alert(error);
        }
    }
}