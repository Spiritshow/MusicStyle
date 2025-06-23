import "./ControlTab.css";
import type { СonditionBottom } from "../../../../../../Types/Types";

interface IControlTab{
    toggleBottom: СonditionBottom
    setToggleBottom: (toggleBottom:СonditionBottom) => void
}

const ControlTab = ({toggleBottom, setToggleBottom}:IControlTab) => {

    const handleControlTab = (e: React.MouseEvent<HTMLButtonElement>) => {
        const name = e.currentTarget.name;
        switch (name) {
            case "Description":
                setToggleBottom("Description")
                break;
            case "Specification":
                setToggleBottom("Specification")
                break;
        }
    } 

    return(
        <div className="DivControlTab">
            <button name="Description" className={`ButtonControlTabDiscription ${toggleBottom == "Description"? "active" : ""}`} onClick={handleControlTab}>Описание</button>
            <button name="Specification" className={`ButtonControlTabSpec ${toggleBottom == "Specification"? "active" : ""}`} onClick={handleControlTab}>Характеристики</button>
        </div>
    )
}

export default ControlTab;