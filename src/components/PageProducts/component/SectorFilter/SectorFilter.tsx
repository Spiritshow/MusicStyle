import { useEffect, useState } from "react";
import Filter from "./components/Filter/Filter";
import type { ICardProduct } from "../../../../Types/Types";
import axios from "axios";

interface ISectorFilter {
    subcategory: number;
    setProducts: React.Dispatch<React.SetStateAction<ICardProduct[]>>
}

export interface ISpecValues {
    id: number,
    name: string
}

export interface IFilterSpec {
  name: string;
  name_db: string;
  value: ISpecValues;
}

const SectorFilter = ({subcategory,setProducts}: ISectorFilter) => {
    const [filterSpec, setFilterSpec] = useState<IFilterSpec[]>([]);


    const handleClick = async () => {
        const ResultFilter = await axios.post<ICardProduct[]>(`http://localhost:3000/Filter`,{subcategory, filterSpec})
        await setProducts(ResultFilter.data);
    } 

    return(
        <div>
            <Filter key={subcategory} values={filterSpec} onChange={setFilterSpec} subcategory={subcategory}/>
            <button onClick={handleClick} className="ButtonFilterSelect">Применить</button>
        </div>
    )
}

export default SectorFilter;