import axios from "axios";
import { createContext, useEffect, useState } from "react";
import RowCategory from "./component/RowCategory/RowCategory";
import RowSubcategory from "./component/RowSubcategory/RowSubcategory";
import RowProduct from "./component/RowProduct/RowProduct";
import Specifications from "./component/Specifications/Specifications";
import AddImage from "./component/AddImage/AddImage";


interface INewSpec {
  name: string;
  value: string;
}

export interface INewSpecsContext {
  newSpecs: INewSpec[];
  setNewSpecs: React.Dispatch<React.SetStateAction<INewSpec[]>>;
}

export const NewSpecsContext = createContext<INewSpecsContext>({
    newSpecs: [],
    setNewSpecs: () => [] 
});

const AdminPanel = () => {
    const [selectCategory, setSelectCategory] = useState<string>();
    const [newCategory, setNewCategory] = useState<string>("");
    const [selectSubcategory, setSelectSubcategory] = useState<string>();
    const [newSubcategory, setNewSubcategory] = useState<string>("");
    const [nameProduct, setNameProduct] = useState<string>("");
    const [priceProduct, setPriceProduct] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [count, setCount] = useState<string>("");
    const [specs, setSpecs] = useState({});
    const [newSpecs, setNewSpecs] = useState<INewSpec[]>([]);
    const [images, setImages] = useState<File[]>([]);

    useEffect(() => {
        if(!selectCategory) setSelectSubcategory('')
    }, [selectCategory])

    const handleSubmit = async () => {
        try {
            const formData = new FormData();
            formData.append("name", nameProduct);
            formData.append("price", priceProduct);
            formData.append("description", description);
            formData.append("count", count);
            formData.append("category", selectCategory || "");
            formData.append("newcategory", newCategory || "")
            formData.append("subcategory", selectSubcategory || "");
            formData.append("newsubcategory", newSubcategory || "")
            formData.append("specs", JSON.stringify(specs));
            formData.append("newSpecs", JSON.stringify(newSpecs));

            images.forEach((image) => {
                formData.append("images", image);
            });

            const res = await axios.post("http://localhost:3000/addproduct", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
            });

            console.log("Успешно добавлено:", res.data);
            alert("Продукт успешно добавлен!");

            setSelectCategory("");
            setNewCategory("");
            setSelectSubcategory("");
            setNewSubcategory("");
            setNameProduct("");
            setPriceProduct("");
            setDescription("");
            setCount("");
            setSpecs({});
            setNewSpecs([]);
            setImages([]);
        } catch (error) {
            console.error("Ошибка при отправки данных:", error);
            alert("Ошибка при отправки данных");
        }
    };

    return(
        <>
        <NewSpecsContext.Provider value={{ newSpecs, setNewSpecs }}>
            <div className="DivAdminPanel">
                <RowCategory selectCategory={selectCategory} setSelectCategory={setSelectCategory} newCategory={newCategory} setNewCategory={setNewCategory}/>
                <RowSubcategory selectCategory={selectCategory} selectSubcategory={selectSubcategory} setSelectSubcategory={setSelectSubcategory} newSubcategory={newSubcategory} setNewSubcategory={setNewSubcategory}/>
                <RowProduct text="Название продукта" selectSubcategory={selectSubcategory} setValue={setNameProduct} value={nameProduct}/>
                <RowProduct type="number" text="Цена" selectSubcategory={selectSubcategory} setValue={setPriceProduct} value={priceProduct}/>
                <RowProduct text="Описание" selectSubcategory={selectSubcategory} setValue={setDescription} value={description}/>
                <RowProduct type="number" text="Количество:" selectSubcategory={selectSubcategory} setValue={setCount} value={count}/>
                <AddImage images={images} setImages={setImages} />
                <Specifications selectSubcategory={selectSubcategory} specs={specs} setSpecs={setSpecs}/>
                <button onClick={handleSubmit}>Добавить продукт</button>
            </div>
        </NewSpecsContext.Provider>
        </>
    )
}

export default AdminPanel;