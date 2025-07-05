import axios from "axios";
import type { TControlSidebar } from "../../../../Types/Types";
import "./SidebarLK.css";
import { useNavigate } from "react-router";

interface ISidebarLK{
    controlSidebar: TControlSidebar;
    setControlSidebar: (controlSidebar: TControlSidebar) => void;
}

const SidebarLK = ({controlSidebar,setControlSidebar}: ISidebarLK) => {
    const navigate = useNavigate();
    const handleClickSidebarLK = (e: React.MouseEvent<HTMLButtonElement>) => {
        const name = e.currentTarget.name as TControlSidebar;
        setControlSidebar(name);
    }

    const handleClickExit = () => {
        axios.get("http://localhost:3000/api/logout",{withCredentials: true})
        .then(() => navigate("/"))
        .catch((err) => alert(err))
    }
    
    return(
        <div className="SidebarLK">
            <button name="PersonalInfo" className={`ButtonSidebarLK ${controlSidebar == "PersonalInfo"? "active" : ""}`} 
            onClick={handleClickSidebarLK}>Личная информация</button>
            <button name="HistoryBuy" className={`ButtonSidebarLK ${controlSidebar == "HistoryBuy"? "active" : ""}`} 
            onClick={handleClickSidebarLK}>История покупок</button>
            <button name="Exit" className={`ButtonSidebarLK`} onClick={handleClickExit}>Выйти</button>
        </div>
    )
}

export default SidebarLK;