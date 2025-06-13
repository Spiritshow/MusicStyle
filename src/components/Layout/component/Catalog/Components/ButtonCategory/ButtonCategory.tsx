import type { FC } from "react";
import type { ICategory } from "../../../../../../Types/Types";
import "./ButtonCategory.css";

interface IButtonCategory{
    prop: ICategory,
    func: (prop:ICategory) => void;
}


const ButtonCategory: FC<IButtonCategory> = ({prop, func}) =>{
    
    const handleClick = () => {
        func(prop);
    } 

    return(
        <div onClick={handleClick} className="DivButtonCategory">
            <div className="TextLink">{prop.text}</div>
        </div>
    )
} 

export default ButtonCategory;