import axios from "axios";
import type { ICategory } from "./Types";


const Responsegetcategors = async (setCategory: (category: ICategory[]) => void) => {
    try {
        const res = await axios.get<ICategory[]>(`http://localhost:3000/getCategors`)
        setCategory(res.data);
    } catch (error) {
        if(axios.isAxiosError(error)){
            alert(error.response?.data);
        }else{
            alert(error);
        }
    }
}

export default Responsegetcategors;