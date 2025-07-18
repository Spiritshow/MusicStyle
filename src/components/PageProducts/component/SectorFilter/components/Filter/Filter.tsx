import { useEffect, useState } from "react";
import "./Filter.css";
import { RequestOptionsSpec } from "./helpers/RequestOptionsSpec";
import type { IFilterSpec, ISpecValues } from "../../SectorFilter";

interface IFilter {
  values: IFilterSpec[];
  onChange: React.Dispatch<React.SetStateAction<IFilterSpec[]>>;
  subcategory: number; 
}

export interface IOptions {
  name: string;
  name_db: string;
  value: ISpecValues[]
}

const Filter = ({ values, onChange, subcategory}: IFilter) => {
    const [optionsSpec, setOptionsSpec] = useState<IOptions[]>([]);
  

    useEffect(() => {
        RequestOptionsSpec(subcategory, setOptionsSpec);
    },[])

    const handleSelect = (option: IOptions, selectedValue: ISpecValues) => {
        onChange(prev => {
            const filtered = prev.filter(item => item.name_db !== option.name_db);
            
            return [...filtered, { 
                name: option.name, 
                name_db: option.name_db, 
                value: selectedValue 
            }];
        });
    };

    const handleRemoveFilter = (name_db: string) => {
        onChange(prev => prev.filter(item => item.name_db !== name_db));
    };

    const getSelectedValue = (name_db: string) => {
        return values.find(item => item.name_db === name_db)?.value;
    };

  return(
    <div className="DivFilter">
        {optionsSpec.length > 0 && optionsSpec.map((option) => (
            <div key={option.name_db} className="FieldFilter">
                <div className="DivHeaderFieldFilter">
                    <label className="HeaderFieldFilter">{option.name}</label>
                </div>
                <select className="Select"
                    value={getSelectedValue(option.name_db)?.id || ''}
                    onChange={(e) => {
                        const selectedId = Number(e.target.value);
                        const selectedValue = option.value.find(v => v.id === selectedId);
                        if (selectedValue) {
                            handleSelect(option, selectedValue);
                        }
                    }}>
                    <option value="">Не выбрано</option>
                    {option.value.map((val) => (
                        <option key={val.id} value={val.id} className="OptionFilter">{val.name}</option>
                    ))}
                </select>
                {getSelectedValue(option.name_db) && (
                    <button onClick={() => handleRemoveFilter(option.name_db)} className="ButtonRemoveFilter">х</button>
                )}
            </div>
        ))}
    </div>
  )
}

export default Filter;