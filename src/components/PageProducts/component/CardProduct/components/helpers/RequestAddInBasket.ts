import axios from "axios"


const RequestAddinBasket = async (id_product: number) => {
    try {
        const res = await axios.post(`http://localhost:3000/addinbasket/`, {id_product: id_product}, {
                withCredentials: true,
            })
        return(true);
    } catch (error) {
        console.log("Ошибка при добавлении продукта в корзину");
        return(false);
    }
}

export default RequestAddinBasket;