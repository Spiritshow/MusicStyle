import { useEffect, useState } from "react";
import "./PersonalInfo.css";
import axios from "axios";
import type { IPersonalInfo } from "../../../../Types/Types";
import CompChangePassword from "./components/CompChangePassword/CompChangePassword";
import CompEditPersonalInfo from "./components/CompEditPersonalInfo/CompEditPersonalInfo";


const PersonalInfo = () => {
    
    const [userInfo, setUserInfo] = useState<IPersonalInfo>(() => ({
        FIO: "",
        nickname: "",
        numberPhone: 0,
        address: "",
        email: "",
        birthday: new Date(),
    }));
    const [changePassword ,setChangePassword] = useState<boolean>(false);
    const [editPersonalInfo, setEditPersonalInfo] = useState<boolean>(false);
    const [error, setError] = useState<string>();
    useEffect(() => {
        axios
            .get<IPersonalInfo>("http://localhost:3000/userInfo", {
                withCredentials: true,
            })
            .then((res) => {
                setUserInfo(res.data);
            })
            .catch((err) => {
                if (err.response) {
                setError(err.response.data.message);
                alert(err.response.data.message)
                } else {
                setError("Ошибка запроса");
                alert("Ошибка запроса")
                }
            });
    },[])
    
    const handleClickChangePassword = () => {
        setChangePassword(!changePassword);
    }

    const handleClickEdit = () => {
        setEditPersonalInfo(!editPersonalInfo);
    }

    return(
        <>
            {changePassword && <CompChangePassword handleClickChangePassword={handleClickChangePassword}/>}
            {editPersonalInfo && <CompEditPersonalInfo handleClickEdit={handleClickEdit} initialInfo={userInfo}/>}
            <div className="DivPersonalInfo">
                <div className="DivHeaderPersonalInfo">
                    <div className="HeaderPersonalInfo">Личная информация</div>
                    <div className="ControlButtonLK">
                        <div className="ChangePassword" onClick={handleClickChangePassword}>Изменить пароль</div>
                        <div className="EditPersonalInfo" onClick={handleClickEdit}>Редактировать</div>
                    </div>
                </div>
                <div className="ListPersonalInfo">
                    {userInfo && Object.entries(userInfo).map(([key, value]) => {
                        if(key === "id") return;
                        else{ 
                            return(     
                                <div key={key} className="RowInfo">
                                    <div className="KeyInfo"><strong>{key}:</strong></div> 
                                    <div className="ValueInfo">{value instanceof Date ? value.toLocaleDateString() : value.toString()}</div>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        </>
    )
}

export default PersonalInfo;