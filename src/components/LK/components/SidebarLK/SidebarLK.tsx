import axios, { type AxiosResponse } from "axios";
import type { TControlSidebar } from "../../../../Types/Types";
import "./SidebarLK.css";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

interface ISidebarLK{
    controlSidebar: TControlSidebar;
    setControlSidebar: (controlSidebar: TControlSidebar) => void;
}

const SidebarLK = ({controlSidebar,setControlSidebar}: ISidebarLK) => {
    const [isAdmin,setIsAdmin] = useState<boolean>(false);
    const navigate = useNavigate();
    const handleClickSidebarLK = (e: React.MouseEvent<HTMLButtonElement>) => {
        const name = e.currentTarget.name as TControlSidebar;
        setControlSidebar(name);
    }

    const handleClickExit = () => {
        axios.get("http://localhost:3000/logout",{withCredentials: true})
        .then(() => navigate("/"))
        .catch((err) => alert(err))
    }

    useEffect(()=> {
        axios.get("http://localhost:3000/isAdmin",{withCredentials: true})
        .then((res:AxiosResponse<boolean>) => setIsAdmin(res.data))
    }, [])
    
    return(
        <div className="SidebarLK">
            <button name="PersonalInfo" className={`ButtonSidebarLK ${controlSidebar == "PersonalInfo"? "active" : ""}`} 
            onClick={handleClickSidebarLK}>Личная информация</button>
            <button name="HistoryBuy" className={`ButtonSidebarLK ${controlSidebar == "HistoryBuy"? "active" : ""}`} 
            onClick={handleClickSidebarLK}>История покупок</button>
            <button name="AdminPanel" className={`ButtonSidebarLK ${controlSidebar == "AdminPanel"? "active" : ""}`}
            onClick={handleClickSidebarLK}>Панель админа</button>
            <button name="Exit" className={`ButtonSidebarLK`} onClick={handleClickExit}>Выйти</button>
        </div>
    )
}

export default SidebarLK;