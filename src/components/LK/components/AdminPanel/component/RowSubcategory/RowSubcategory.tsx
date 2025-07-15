import axios from "axios";
import { useEffect, useState } from "react";

interface IRowSubcategory {
    selectCategory: string | undefined,
    selectSubcategory: string | undefined,
    setSelectSubcategory: (e: string) => void,
    newSubcategory: string,
    setNewSubcategory: (e: string) => void
}

interface ISubcategory {
    id: number,
    id_category: number,
    name: string,
    name_db: string,
    img: string
}

const RowSubcategory = ({selectCategory, selectSubcategory, setSelectSubcategory, newSubcategory, setNewSubcategory}: IRowSubcategory) => {
    const [disabledSelect, setDisabledSelect] = useState<boolean>(true);
    const [optionsSubcategory, setOptionsSubcategory] = useState<ISubcategory[]>([]);

    useEffect(() => {
        if(selectCategory && selectCategory != "0") {
            axios.get(`http://localhost:3000/getSubcategors/${selectCategory}`)
            .then((res) => setOptionsSubcategory(res.data))
            .catch((err) => console.log('Ошибка при получении подкатегорий', err))
        }
    }, [selectCategory])

    useEffect(() => {
        if(selectCategory) {
            setDisabledSelect(false);
        }else{
            setDisabledSelect(true);
        }
    }, [selectCategory])

    const handleSelectSubcategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectSubcategory(e.target.value);
    }

    const handleChangeNewSubcategory = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewSubcategory(e.target.value);
    }

    return(
        <div className="RowAdminPanel">
            <div className="TextAdminPanel">Подкатегория</div>
            <select disabled={disabledSelect} onChange={handleSelectSubcategory} value={selectSubcategory ?? ''}>
                <option value="">Выберите значение</option>
                <option key="0" value="0">Другое значение</option>
                {optionsSubcategory.map((optCat) => (
                    <option key={optCat.id} value={optCat.id}>{optCat.name}</option>
                ))}
            </select>
            {selectSubcategory === "0" && <input type="text" onChange={handleChangeNewSubcategory} value={newSubcategory} placeholder="Введите название"></input>}
        </div>
    )
}

export default RowSubcategory;