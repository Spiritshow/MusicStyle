import type { FC } from "react";
import { useNavigate } from "react-router";
import "./BrendButton.css";

interface IBrendButton {
    img: string;
    name: string;
}


const BrendButton: FC<IBrendButton> = ({img, name}) => {
    
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/brend/${name}`);
    }

    return(
        <div onClick={handleClick} className="DivBreandButton">
            <img src={`/src/assets/${img}`} className="imgBrendButton" alt={name}/>
        </div>
    )
} 

export default BrendButton;
