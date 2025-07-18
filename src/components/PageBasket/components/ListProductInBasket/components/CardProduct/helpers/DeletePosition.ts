import axios from "axios";



const DeletePosition = async (id_position: number) => {
    const Result = await axios.delete(`http://localhost:3000/deleteposition/${id_position}`)
    return(Result.status);
}

export default DeletePosition;