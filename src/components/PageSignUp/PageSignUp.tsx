import { useContext, useState } from "react";
import "./PageSignUp.css";
import { fields } from "../../Config/ConfigProfile";
import LabelPersanalInfo from "../LK/components/PersonalInfo/components/CompEditPersonalInfo/components/LablePersanalInfo/LabelPersanalInfo";
import { useNavigate } from "react-router";
import axios from "axios";
import { ThemeContext } from "../../router/router";

interface ISignUpUser {
    FIO: string;
    nickname: string;
    numberPhone: Number;
    address: string;
    email: string;
    birthday: Date;
    password: string;
}

const PageSignUp = () => {
    const constext = useContext(ThemeContext);

    const [formData, setFormData] = useState<ISignUpUser>({
        FIO: "",
        nickname: "",
        numberPhone: 0,
        address: "",
        email: "",
        birthday: new Date,
        password: ""
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
        axios.post("http://localhost:3000/SignUp", formData, {withCredentials: true})
        .then(() => navigate("/"))
        .catch((err) => setError(err.message))
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
                                : String(formData[field.name as keyof ISignUpUser])
                            }
                            onChange={handleChange}
                        />
                    ))}
                </div>
                <div>{error}</div>
                <div className="ControlButtonSignUp">
                    <button className={`ButtonInMain Background${constext.theme}`} onClick={handleMain}>На главную</button>
                    <button className={`ButtonSignUp Background${constext.theme}`} onClick={handleSubmit}>Зарегистрироваться</button>
                </div>
            </div>
        </div>
    )
}

export default PageSignUp;