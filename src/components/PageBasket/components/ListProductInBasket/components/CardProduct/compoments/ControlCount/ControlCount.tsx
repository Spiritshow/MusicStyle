import { useContext, useState, type ChangeEvent } from "react";
import UpdateCountProduct from "./helpers/UpdateCountProduct";
import { FlagContext } from "../../../../../../PageBasket";



const ControlCount = ({initCount, id_position}: {initCount: number, id_position: number}) => {
    const {flag, setFlag} = useContext(FlagContext);
    const [count, setCount] = useState<number>(initCount)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCount(Number(e.target.value));
        UpdateCountProduct({count: initCount, typeUpdate: "0", newCount: count, id_position: id_position})
        .then((res) => {
            setCount(res);
            setFlag(flag);
        });
    }

    const handleClickIncrement =  () => {
        UpdateCountProduct({count: initCount, typeUpdate: "+", id_position: id_position})
        .then((res) => {
            setCount(res)
            setFlag(flag);
        });
    }

    const handleClickDecrement = () => {
        UpdateCountProduct({count: initCount, typeUpdate: "-", id_position: id_position})
        .then((res) => {
            setCount(res)
            setFlag(flag);
        });
    }

    return(
        <div className="DivControlCount">
            <button onClick={handleClickDecrement} className="ButtonControlCount">-</button>
            <input type="number" className="InputControlCount" onChange={handleChange} value={count}></input>
            <button onClick={handleClickIncrement} className="ButtonControlCount">+</button>
        </div>
    )
}

export default ControlCount;