import { useEffect, useState, type FC } from "react";
import type { ICardButton, ICategory } from "../../../../Types/Types";
import CardButton from "./CardButton/CardButton";
import "./PopCategory.css";
import ListPopCategory from "./ListCategory/ListPopCategory";



const PopCategory: FC = () => {

    const [categories, setCategories] = useState<ICategory[]>([])

    useEffect(()=>{
        setCategories([{id: 1, img:"Gitars.png", text: "Gitars", count: 1542},{id: 3, img:"AccusticSustem.png", text: "AccusticSustem", count: 902},
                        {id: 2, img:"Piano.png", text: "Piano", count: 1004},{id: 4, img:"Sintezatory.png", text: "Sintezatory", count: 2042},
                        {id: 5, img:"Gitars.png", text: "Gitars", count: 1542},{id: 6, img:"AccusticSustem.png", text: "AccusticSustem", count: 902},
                        {id: 7, img:"Piano.png", text: "Piano", count: 1004},{id: 8, img:"Sintezatory.png", text: "Sintezatory", count: 2042}
        ])
    },[])

    return (
        <div className="DivPopCategory">
            <div className="DivHeaderPopCategory">
                Популярные категории
            </div>
            <div className="DivListCategory">
                <ListPopCategory item={categories} renderItem={(category: ICategory) => <CardButton key={category.id} img={category.img} text={category.text} count={category.count}/> }/>
            </div>
        </div>
    )
}

export default PopCategory;