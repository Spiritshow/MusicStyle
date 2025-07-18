import { useState } from "react";
import "./CompChangePassword.css";
import axios from "axios";

interface ICompChangePassword{
    handleClickChangePassword: () => void
}

const CompChangePassword = ({handleClickChangePassword}: ICompChangePassword) => {
    const [value, setValue] = useState<string>("");
    const [error, setError] = useState<string>();

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    }
    
    const handleChangePassword = async() => {
        try {
            const response = await axios.post(
                "http://localhost:3000/changePassword",
                { newPassword: value },
                { withCredentials: true }
            );

            handleClickChangePassword()
            setValue("");
        } catch (err: any) {
            if (err.response) {
                setError(err.response.data.message);
                alert(err.response.data.message)
            } else {
                setError("Ошибка запроса");
                alert("Ошибка запроса")
            }
        }
    }

    return(
        <div className="DivChangePassword">
            <div className="CardChangePassword">
                <div className="textChangePassword">Изменение пароля</div>
                <input onChange={(e)=>handleChangeInput(e)} value={value} placeholder="Введите новый пароль" className="InputChangePassword"></input>
                <div className="DivButtonChangePassword">
                    <button onClick={handleChangePassword} className="ButtonChangePassword">Сменить</button>
                </div>
            </div>
            <div className="Background" onClick={handleClickChangePassword}></div>
        </div>
    )
}

export default CompChangePassword;