import type { FC } from "react";
import "./SectorListTypes.css";
import TextLink from "../TextLink/TextLink";
import type { ISubcategory } from "../helpers/Types";

interface ISectorListSubcategory{
    subcategory: ISubcategory[] | undefined;
}

const SectorListSubcategory: FC<ISectorListSubcategory> = ({subcategory}) => {
    if(typeof subcategory === "undefined") return(<div className="SectorEmpty"></div>)
    return(
        <div className="SectorListTypes">
            {subcategory.map((item: ISubcategory) => <TextLink text={item.name} path={item.id}/>)}
        </div>
    )
}

export default SectorListSubcategory;