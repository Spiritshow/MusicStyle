import type { FC } from "react";
import "./CustomButton.css";

interface IButton{
    img: string;
    text: string;
    onClick: () => void
}

const Button: FC<IButton> = ({img, text, onClick}) => {
    return(
        <button onClick={onClick} className={"Button"}>
            <img className="imgButton" src={img}/>
            <div className="TextButton">{text}</div>
        </button>
    )
}

export default Button;