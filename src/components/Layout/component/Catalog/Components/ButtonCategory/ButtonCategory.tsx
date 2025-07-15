import type { FC } from "react";

import "./ButtonCategory.css";
import type { ICategory, ISubcategory } from "../helpers/Types";
import ResponseGetSubcategors from "../helpers/ResponseGetSubcategors";

interface IButtonCategory{
    category: ICategory,
    setSubcategory: (subcategory: ISubcategory[]) => void;
}


const ButtonCategory: FC<IButtonCategory> = ({category, setSubcategory}) =>{
    const id_category = category.id;
    const handleClick = () => {
        ResponseGetSubcategors({id_category, setSubcategory})
    } 

    return(
        <div onClick={handleClick} className="DivButtonCategory">
            <div className="TextLink">{category.name}</div>
        </div>
    )
} 

export default ButtonCategory;