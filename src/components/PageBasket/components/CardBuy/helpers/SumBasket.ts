import axios from "axios"

interface ISumBasket{
    sum: number;
    countproducts: number
}

const SumBasket = async() => {
    try {
        const res = await axios.get<ISumBasket>('http://localhost:3000/getsumbasket', { withCredentials: true })
        return(res.data);
    } catch (error) {
        console.log("Ошибка при попытке достать сумму корзины")
        const Empty: ISumBasket = {sum: 0, countproducts: 0};
        return(Empty)
    }
    
}

export default SumBasket;