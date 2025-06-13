import type { FC } from "react";
import "./SectorListTypes.css";
import type { ICategory, ITypes } from "../../../../../../Types/Types";
import TextLink from "../TextLink/TextLink";

interface SectorListTypes{
    prop: ICategory | undefined;
}

const SectorListTypes: FC<SectorListTypes> = ({prop}) => {
    if(typeof prop === "undefined") return(<div className="SectorEmpty"></div>)
    return(
        <div className="SectorListTypes">
            {prop.types.map((itemtype: ITypes) => <TextLink text={itemtype.text} path={itemtype.path}/>)}
        </div>
    )
}

export default SectorListTypes;