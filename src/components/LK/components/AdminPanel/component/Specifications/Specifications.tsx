import axios, { type AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import NewSpecifications from "./NewSpecifications/NewSpecifications";

interface ISpecifications {
    selectSubcategory: string | undefined,
    specs: Record<string, string>,
    setSpecs: React.Dispatch<React.SetStateAction<Record<string, string>>>
}

interface IConfSpec {
    id: number,
    name: string,
    name_db: string,
    subcategory: number
}

interface ISpecValues {
    id: number,
    name: string
}

const Specifications = ({selectSubcategory, specs, setSpecs}: ISpecifications) => {
    const [confSpec, setConfSpec] = useState<IConfSpec[]>()
    const [allSpecs,setAllSpecs] = useState<Record<string,ISpecValues[]>>({})
    const [customFields, setCustomFields] = useState<Record<string, boolean>>({});

    useEffect(() => {
        if(selectSubcategory && selectSubcategory != "0"){
            axios.get(`http://localhost:3000/nameSpec/${selectSubcategory}`)
            .then((resName: AxiosResponse<IConfSpec[]>) => {
                setConfSpec(resName.data);
                resName.data.map((spec) => {
                    axios.get(`http://localhost:3000/valuesSpec/${spec.name_db}`)
                    .then((resValue: AxiosResponse<ISpecValues[]>) => {
                        setAllSpecs(prev => ({
                            ...prev,[spec.name_db]: resValue.data
                        }))
                    })
                    .catch((err) => console.log('Ошибка при получении значений характеристики', err))
                })
            })
            .catch((err) => console.log('Ошибка при получении названий характеристик', err))
        }
    },[selectSubcategory])

    const handleChangeSpec = (nameSpec: IConfSpec, e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    if (value === "0") {
      setCustomFields((prev) => ({
        ...prev,
        [nameSpec.name_db]: true,
      }));
      setSpecs((prev) => ({
        ...prev,
        [nameSpec.name_db]: "",
      }));
    } else {
      setCustomFields((prev) => ({
        ...prev,
        [nameSpec.name_db]: false,
      }));
      setSpecs((prev) => ({
        ...prev,
        [nameSpec.name_db]: value,
      }));
    }
  };

    const handleCustomInputChange = (name_db: string, value: string) => {
        setSpecs((prev) => ({
            ...prev,
            [name_db]: value,
        }))
    };

    return(
        <div className="DivSpecifications">
            <div className="HeaderDivSpecificationsAdminPanel">Характеристики:</div>
            {confSpec && confSpec.map((nameSpec) => (
                <div className="DivSpecAdminPanel">
                    <div className="TextAdminPanel">{nameSpec.name}</div>
                    <select key={nameSpec.id} onChange={(e) => handleChangeSpec(nameSpec, e)} value={specs[nameSpec.name_db] || ""}>
                        <option value="">Выберите значение</option>
                        <option key="0" value="0">Другое значение</option>
                        {allSpecs[nameSpec.name_db] && allSpecs[nameSpec.name_db].map((specValue) => (
                            <option key={specValue.id} value={specValue.name}>{specValue.name}</option>
                        ))}
                    </select>
                    {customFields[nameSpec.name_db] && (
                        <input
                            type="text"
                            placeholder="Введите значение"
                            value={specs[nameSpec.name_db] || ""}
                            onChange={(e) => handleCustomInputChange(nameSpec.name_db, e.target.value)}
                        />
                    )}
                </div>
            ))}

            <NewSpecifications selectSubcategory={selectSubcategory}/> 
        </div>
    )
}

export default Specifications;