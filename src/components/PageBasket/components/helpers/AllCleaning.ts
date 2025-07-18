import axios from "axios";


const AllCleaning = async () => {
    try {
        const Result = await axios.delete('http://localhost:3000/cleaningbasket', { withCredentials: true })
        return(Result.data)
    } catch (error) {
        console.log("Ошибка при очистке корзины")
    }
}

export default AllCleaning;