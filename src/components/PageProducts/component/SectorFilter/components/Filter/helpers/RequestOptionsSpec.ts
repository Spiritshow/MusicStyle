import axios from "axios";
import type { IOptions} from "../Filter";
import type { ISpecValues } from "../../../SectorFilter";

interface IConfSpec {
    id: number,
    name: string,
    name_db: string,
    subcategory: number
}

export const RequestOptionsSpec = async(subcategory: number, setOptionsSpec: (option: IOptions[]) => void) => {
    try {
        const resultGetNameSpec = await axios.get<IConfSpec[]>(`http://localhost:3000/nameSpec/${subcategory}`)
        const options:IOptions[] = []; 
        for (const NameSpec of resultGetNameSpec.data){
            const resultGetValueSpec = await axios.get<ISpecValues[]>(`http://localhost:3000/valuesSpec/${NameSpec.name_db}`)
            
            options.push({name: NameSpec.name, name_db: NameSpec.name_db, value: resultGetValueSpec.data})
        }

        setOptionsSpec(options);
    } catch (error) {
        alert("ошибка в RequestOptionsSpec:" + error);
    }
}