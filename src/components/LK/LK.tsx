import { useEffect, useState } from "react";
import "./LK.css";
import SidebarLK from "./components/SidebarLK/SidebarLK";
import type { TControlSidebar } from "../../Types/Types";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import axios from "axios";




const LK = () => {
    const [controlSidebar,setControlSidebar] = useState<TControlSidebar>("PersonalInfo")
    const [auth, setAuth] = useState<boolean>(false)

    useEffect(() => {
        axios.get<boolean>('http://localhost:3000/isAdmin',{withCredentials: true})
        .then((res) => {setAuth(res.data)})
    },[])

    return(
        <div className="DivLK">
            <div className="DivSidebarLK">
                <SidebarLK controlSidebar={controlSidebar} setControlSidebar={setControlSidebar}/>
            </div>
            <div className="Info">
                {controlSidebar == "PersonalInfo" && <PersonalInfo/>}
                {controlSidebar == "HistoryBuy"}
                {controlSidebar == "AdminPanel" && auth && <AdminPanel/>}
            </div>
        </div>
    )
}

export default LK;