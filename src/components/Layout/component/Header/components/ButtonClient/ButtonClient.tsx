import { useContext, type FC } from "react";
import "./ButtonClient.css";
import { ThemeContext } from "../../../../../../router/router";

interface IButtonClient{
    img: string;
    text: string;
    onClick: () => void
}

const ButtonClient: FC<IButtonClient> = ({img, text, onClick}) => {
    const context = useContext(ThemeContext);

    return(
        <button onClick={onClick} className={`ButtonClient Header${context.theme}`}>
            <img src={img} className={`imgButtonClient Header${context.theme}`}/>
            <div className={`textButtonClient Header${context.theme}`}>{text}</div>
        </button>
    )
}

export default ButtonClient;