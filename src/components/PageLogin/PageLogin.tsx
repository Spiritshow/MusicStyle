import { useContext, useState } from "react";
import "./PageLogin.css";
import { useNavigate } from "react-router";
import axios from "axios";
import { ThemeContext } from "../../router/router";

interface IAuth {
    username: string,
    password: string
}

const PageLogin = () => {
    const [auth, setAuth] = useState<IAuth>({username: "", password: ""})
    const [error, setError] = useState();
    const navigate = useNavigate();
    const context = useContext(ThemeContext);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        setAuth((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSignUp = () => {
        navigate("/signUp");
    }

    const handleLogin = () => {
        axios.post("http://localhost:3000/login",auth,{ withCredentials: true })
        .then(() => navigate("/LK"))
        .catch((err) => {setError(err)})
    } 

    return(
        <div className={`PageLogin Background${context.theme}`}>
            <div className={`CardLogin Card${context.theme}`}>
                <div className="LabelLogin">
                    <div className="TextLogin">Login:</div>
                    <input className="InputLogin" name="username" value={auth.username} onChange={handleChange}></input>
                </div>
                <div className="LabelLogin">
                    <div className="TextLogin">Пароль:</div>
                    <input className="InputLogin" name="password" value={auth.password} onChange={handleChange}></input>
                </div>
                <button onClick={handleSignUp} className={`ButtonSignUp Background${context.theme}`}>Зарегистрироваться</button>
                <button onClick={handleLogin} className={`ButtonLogin Background${context.theme}`}>Войти</button>
            </div>
        </div>
    )
}

export default PageLogin;