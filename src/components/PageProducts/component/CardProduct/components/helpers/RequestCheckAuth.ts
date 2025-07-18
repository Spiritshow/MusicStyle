import axios from "axios";

interface IIsAuth{
    auth: boolean;
}

const RequestCheckAuth = async () => {
    try {
        const res = await axios.get<IIsAuth>("http://localhost:3000/checkCookie", { withCredentials: true })
        return(res.data.auth);
    } catch (error) {
        return(false);
    }
    
}

export default RequestCheckAuth;