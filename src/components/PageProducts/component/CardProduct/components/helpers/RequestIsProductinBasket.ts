import axios from "axios"



const RequestIsProductinBasket = async (id_product: number) => {
    try {
        const res = await axios.get<boolean>(`http://localhost:3000/isproductinbasket/${id_product}`,{
                withCredentials: true,
            })
        return(Boolean(res.data));
    } catch (error) {
        console.log("Ошибка при проверке корзины");
        return(false);
    }
}

export default RequestIsProductinBasket;