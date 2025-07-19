import type { FC } from "react";
import "./CardButton.css";
import type { ICardButton } from "../../../../../Types/Types";
import { useNavigate } from "react-router";



const CardButton: FC<ICardButton> = ({img, text, count, path}) => {
    
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`${path}`);
    }
    
    return(
        <div onClick={handleClick} className="DivCardButton">
            <img src={`/src/assets/${img}`} className="imgCardButton"/>
            <div className="DivTextCardButton">
                <div className="TextCardButton">{text}</div>
                <div className="CountCardButton">{count} товаров</div>
            </div>
        </div>
    )
} 

export default CardButton;