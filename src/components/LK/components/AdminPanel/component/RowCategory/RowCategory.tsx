import axios from "axios"
import { useEffect, useState } from "react"

interface IRowCategory {
    selectCategory: string | undefined,
    setSelectCategory: (e: string) => void,
    newCategory: string,
    setNewCategory: (e: string) => void
}

interface ICategory {
    id: number,
    name: string
}

const RowCategory = ({selectCategory, setSelectCategory, newCategory, setNewCategory}: IRowCategory) => {
    
    const [optionsCategory, setOptionsCategory] = useState<ICategory[]>([]);

    useEffect(() => {
        axios.get('http://localhost:3000/getCategors')
        .then((res)=> {
            setOptionsCategory(res.data)})
        .catch((err) => console.log('Ошибка при получении категорий', err))
    },[])

    const handleSelectCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectCategory(e.target.value);
    }

    const handleChangeNewCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewCategory(e.target.value);
    }
    
    return(
        <div className="RowAdminPanel">
            <div className="TextAdminPanel">Категория</div>
            <select onChange={handleSelectCategory} value={selectCategory ?? ''}>
                <option value="">Выберите значение</option>
                <option key="0" value="0">Другое значение</option>
                {optionsCategory.map((optCat) => (
                    <option key={optCat.id} value={optCat.id}>{optCat.name}</option>
                ))}
            </select>
            {selectCategory === "0" && <input type="text" onChange={handleChangeNewCategory} value={newCategory} placeholder="Введите название"></input>}
        </div>
    )
}

export default RowCategory;