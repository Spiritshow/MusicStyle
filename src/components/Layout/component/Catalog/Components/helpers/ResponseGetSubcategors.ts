import axios from "axios";
import type { ISubcategory } from "./Types";

interface IResponseGetSubcategors {
    id_category: string,
    setSubcategory: (subcategory: ISubcategory[]) => void
}

const ResponseGetSubcategors = async ({id_category,setSubcategory}: IResponseGetSubcategors) => {
    try {
        const res = await axios.get<ISubcategory[]>(`http://localhost:3000/getSubcategors/${id_category}`)
        setSubcategory(res.data);
    } catch (error) {
        if(axios.isAxiosError(error)){
            alert(error.response?.data);
        }else{
            alert(error);
        }
    }
}

export default ResponseGetSubcategors;
