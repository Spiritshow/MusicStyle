import { useNavigate } from "react-router";
import "./TextLink.css";
import { useContext } from "react";
import { toggleCatalogeContext } from "../../../../Layout";

interface ITextLink {
    text: string,
    path: string,
}

export default function TextLink ({text, path}:ITextLink) {
    const navigate = useNavigate();

    const context = useContext(toggleCatalogeContext);

    const handleClick = () => {
        context.ToggleCataloge();
        navigate(`/category/${path}`);
    }
    
    return(
        <div className="DivTextLink">
            <div onClick={handleClick} className="TextLink">{text}</div>
        </div>
    )
} 

