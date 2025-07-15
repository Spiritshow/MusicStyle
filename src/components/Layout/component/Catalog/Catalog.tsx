import { useEffect, useState, type FC } from "react";
import ListProp from "../../../../componentsControl/ListProp/ListProp";
import "./Catalog.css";
import ButtonCategory from "./Components/ButtonCategory/ButtonCategory";
import SectorListSubcategory from "./Components/SectorListTypes/SectorListTypes";

import type { ICategory, ISubcategory } from "./Components/helpers/Types";
import Responsegetcategors from "./Components/helpers/ResponseGetCategors";



const Catalog: FC = () => {
    const [category, setCategory] = useState<ICategory[]>()
    const [subcategory, setSubcategory] = useState<ISubcategory[]>();

    useEffect(() => {
        Responsegetcategors(setCategory);
    }, []);

    return(
        <div className="DivCatalog">
            <div className="DivSectorListCatalog">
                {category && <ListProp item={category} renderItem={(chapter: ICategory) => <ButtonCategory category={chapter} setSubcategory={setSubcategory}/>}/>}
            </div>
            <div className="DivSectorListTypes">
                <SectorListSubcategory subcategory={subcategory}/>
            </div>
        </div>
    )
}

export default Catalog;