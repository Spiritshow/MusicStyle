import { useState, type FC } from "react";
import ListProp from "../../../../componentsControl/ListProp/ListProp";
import { catalogConf } from "../../../../Config/CatalogConf";
import type { ICategory } from "../../../../Types/Types";
import "./Catalog.css";
import ButtonCategory from "./Components/ButtonCategory/ButtonCategory";
import SectorListTypes from "./Components/SectorListTypes/SectorListTypes";


const Catalog: FC = () => {
    const [items, setItem] = useState<ICategory>();

    return(
        <div className="DivCatalog">
            <div className="DivSectorListCatalog">
                <ListProp item={catalogConf} renderItem={(chapter: ICategory) => <ButtonCategory prop={chapter} func={setItem}/>}/>
            </div>
            <div className="DivSectorListTypes">
                <SectorListTypes prop={items}/>
            </div>
        </div>
    )
}

export default Catalog;