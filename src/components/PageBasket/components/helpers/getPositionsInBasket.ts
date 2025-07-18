import axios from "axios";
import type { IPositionBasket } from "../../PageBasket";


const getPositionsInBasket = async() => {
    try {
        const Result = await axios.get<IPositionBasket[]>('http://localhost:3000/getpositionsinbasket', { withCredentials: true })
        return(Result.data)
    } catch (error) {
        console.log("Ошибка при получении позиций корзины")
        return([]); 
    }
}

export default getPositionsInBasket;