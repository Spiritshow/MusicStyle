import axios from "axios";
import type { IProduct } from "../../Types/Types";


interface IRequestProduct{
    idProduct: string, 
    setProduct: (product:IProduct) => void
}

export const RequestProduct = async ({idProduct, setProduct}:IRequestProduct) => {
        try {
                const res = await axios.get<IProduct>(`http://localhost:3000/product/${idProduct}`)
                setProduct(res.data);
            } catch (error) {
                if(axios.isAxiosError(error)){
                    alert(error.response?.data);
                }else{
                    alert(error);
                }
            }
    }