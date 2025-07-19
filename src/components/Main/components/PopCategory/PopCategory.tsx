import { useEffect, useState, type FC } from "react";
import type { ICardButton, ICategory } from "../../../../Types/Types";
import CardButton from "./CardButton/CardButton";
import "./PopCategory.css";
import ListPopCategory from "./ListCategory/ListPopCategory";
import { catalogConf } from "../../../../Config/CatalogConf";



const PopCategory: FC = () => {

    const [categories, setCategories] = useState<ICategory[]>([])

    useEffect(()=>{
        setCategories(catalogConf)
    },[])

    return (
        <div className="DivPopCategory">
            <div className="DivHeaderPopCategory">
                Популярные категории
            </div>
            <div className="DivListCategory">
                <ListPopCategory item={categories} renderItem={(category: ICategory) => <CardButton key={category.id} img={category.img} text={category.text} count={category.count} path={category.path}/> }/>
            </div>
        </div>
    )
}

export default PopCategory;