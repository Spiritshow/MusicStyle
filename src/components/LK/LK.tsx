import { useState } from "react";
import "./LK.css";
import SidebarLK from "./components/SidebarLK/SidebarLK";
import type { TControlSidebar } from "../../Types/Types";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";



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
            </div>
        </div>
    )
}

export default LK;