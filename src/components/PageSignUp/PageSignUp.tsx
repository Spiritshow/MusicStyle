import { useContext, useState } from "react";
import "./PageSignUp.css";
import type { IPersonalInfo } from "../../Types/Types";
import { fields } from "../../Config/ConfigProfile";
import LabelPersanalInfo from "../LK/components/PersonalInfo/components/CompEditPersonalInfo/components/LablePersanalInfo/LabelPersanalInfo";
import { useNavigate } from "react-router";
import axios from "axios";
import { ThemeContext } from "../../router/router";

const PageSignUp = () => {
    const constext = useContext(ThemeContext);

    const [formData, setFormData] = useState<IPersonalInfo>({
        FIO: "",
        nickname: "",
        numberPhone: 0,
        address: "",
        email: "",
        birthday: new Date
    });
    const navigate = useNavigate();
    const [error, setError] = useState();
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]:
            name === "numberPhone"
                ? Number(value)
                : name === "birthday"
                ? new Date(value)
                : value,
        }));
    };
    
    const handleSubmit = () => {
        axios.post("/api/SignUp", formData, {withCredentials: true})
        .then(() => navigate("/"))
        .catch((err) => setError(err))
    };

    const handleMain = () => {
        navigate("/");
    }

    return(
        <div className={`DivPageSignUp Background${constext.theme}`}>
            <div className={`PageSignUp Card${constext.theme}`}>
                <div className="HeaderSignUp">Регистрация</div>
                <div className="ListSignUp">
                    {fields.map((field) => (
                        <LabelPersanalInfo
                            key={field.name}
                            name={field.name}
                            label={field.label}
                            type={field.type}
                            value={
                                field.name === "birthday"
                                ? formData.birthday.toISOString().split("T")[0]
                                : String(formData[field.name as keyof IPersonalInfo])
                            }
                            onChange={handleChange}
                        />
                    ))}
                </div>
                <div className="ControlButtonSignUp">
                    <button className={`ButtonInMain Background${constext.theme}`} onClick={handleMain}>На главную</button>
                    <button className={`ButtonSignUp Background${constext.theme}`} onClick={handleSubmit}>Зарегистрироваться</button>
                </div>
            </div>
        </div>
    )
}

export default PageSignUp;