import { useNavigate } from "react-router";
import "./TextLink.css";

interface ITextLink {
    text: string,
    path: string,
}

export default function TextLink ({text, path}:ITextLink) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/category/${path}`);
    }
    
    return(
        <div className="DivTextLink">
            <div onClick={handleClick} className="TextLink">{text}</div>
        </div>
    )
} 

