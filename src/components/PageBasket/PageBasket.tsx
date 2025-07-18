import { createContext, useEffect, useState } from "react";
import getPositionsInBasket from "./components/helpers/getPositionsInBasket";
import ListProductInBasket from "./components/ListProductInBasket/ListProductInBasket";
import CardProduct from "./components/ListProductInBasket/components/CardProduct/CardProduct";
import CardBuy from "./components/CardBuy/CardBuy";
import AllCleaning from "./components/helpers/AllCleaning";



export interface IPositionBasket{
    id: number,
    id_product: number,
    name_product: string,
    img: string,
    count: number
}

export interface ContextFlag{
    flag: boolean;
    setFlag: (flag: boolean) => void
}

export const FlagContext = createContext<ContextFlag>({
    flag: true,
    setFlag: () => {}
});

const PageBasket = () => {
    const [flag, setFlag] = useState<boolean>(true)
    const [positions, setPositions] = useState<IPositionBasket[]>([]);

    useEffect(() => {
        getPositionsInBasket()
        .then((res) => setPositions(res));
    },[flag])

    const handleToggleFlag = () =>{
        setFlag(!flag);
    }

    const handleClickAllCleaning = () => {
        AllCleaning();
        setFlag(!flag);
    }

    return(
        <FlagContext.Provider value={{flag: flag, setFlag: handleToggleFlag}}>
        <div className="DivPageBasket">
            <div className="SectorListPosition">
                <div className="ButtonPageBasket">
                    <button onClick={handleClickAllCleaning} className="ButtonAllCleaning">Очистить всю корзину</button>
                </div>
                <ListProductInBasket positions={positions} renderPosition={(position: IPositionBasket) => <CardProduct position={position}/>}/>
            </div>
            <div className="SectorCardBuy">
                <CardBuy/>
            </div>
        </div>
        </FlagContext.Provider>
    )
}

export default PageBasket;