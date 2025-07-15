import { useState } from "react";
import "./LK.css";
import SidebarLK from "./components/SidebarLK/SidebarLK";
import type { TControlSidebar } from "../../Types/Types";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import AdminPanel from "./components/AdminPanel/AdminPanel";



const LK = () => {
    const [controlSidebar,setControlSidebar] = useState<TControlSidebar>("PersonalInfo")
    
    return(
        <div className="DivLK">
            <div className="DivSidebarLK">
                <SidebarLK controlSidebar={controlSidebar} setControlSidebar={setControlSidebar}/>
            </div>
            <div className="Info">
                {controlSidebar == "PersonalInfo" && <PersonalInfo/>}
                {controlSidebar == "HistoryBuy"}
                {controlSidebar == "AdminPanel" && <AdminPanel/>}
            </div>
        </div>
    )
}

export default LK;