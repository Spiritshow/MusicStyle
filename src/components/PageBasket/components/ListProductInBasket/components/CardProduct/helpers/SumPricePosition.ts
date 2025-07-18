import axios from "axios";


const SumPricePosition = async (id_position: number) => {
    const Result = await axios.get<number>(`http://localhost:3000/sumpriceposition/${id_position}`)
    return(Result.data);
}

export default SumPricePosition;