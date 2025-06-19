import { useState } from "react";
import type { CategoryName } from "../../../../../../Types/TypesSpec/MapSpec";
import Filter from "../Filter/Filter";
import FilterConf from "../../../../../../Config/FilterConf";
import type { StringLiteralKeys } from "../HelperType/StringLiteralKeys";
import "./DivFilter.css";




const DivFilter = <T extends object>({category}: {category: CategoryName}) => {
    const [filters, setFilters] = useState<Partial<T>>({});
    const options = FilterConf[category] as { [K in StringLiteralKeys<T>]: readonly T[K][] }

    const handleClick = () => {
        console.log(filters);
        /* отправка POST запроса */
    }
    
    return(
        <div className="DivBlockFilter">
            <div className="DivHeaderBlockFilter">{category}</div>
            <Filter<T> values={filters} onChange={setFilters} options={options} />
            <button className="ButtonFilter" onClick={handleClick}>Принять</button>   
        </div>
    )
}

export default DivFilter;