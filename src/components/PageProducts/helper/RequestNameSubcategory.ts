import axios from "axios";



const RequestNameSubcategory = async (subcategory: number, setNameSubcategory: (name: string) => void) => {
    try {
        await axios.get<string>(`http://localhost:3000/getNameSubcategory/${subcategory}`)
        .then((res) =>setNameSubcategory(res.data));
    } catch (error) {
        if(axios.isAxiosError(error)){
            alert(error.response?.data);
        }else{
            alert(error);
        }
    }

}

export default RequestNameSubcategory;