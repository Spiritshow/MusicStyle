import { useEffect, useState, type FC } from "react";
import type { IBrend } from "../../../../Types/Types";
import BrendButton from "./components/BrendButton/BrendButton";
import "./Brends.css";
import ListPopBrends from "./components/ListBrends/ListPopBrends";



const Brends: FC = () => {

    const [brends, setBrends] = useState<IBrend[]>([]);

    useEffect(() => {
        setBrends([{id: 1 , name: "Yamaha", img: "Yamaha.png"},{id: 2 , name: "Casio", img: "Casio.png"}, 
                {id: 3 , name: "JBL", img: "JBL.png"}, {id: 4 , name: "Fender", img: "Fender.png"},
                {id: 5 , name: "Korg", img: "Korg.png"}, {id: 6 , name: "Ibanez", img: "Ibanez.png"}    
            ])
    },[])

    return(
        <div className="DivPopBrends">
            <div className="TextPopBrends">Попуяртые бренды</div>
            <div className="DivListPopBrends">
                <ListPopBrends item={brends} renderItem={(brend: IBrend) => <BrendButton img={brend.img} name={brend.name} key={brend.id}/>}/>
            </div>
        </div>
    )
}

export default Brends;