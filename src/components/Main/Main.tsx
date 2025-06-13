import type { FC } from "react";
import PopCategory from "./components/PopCategory/PopCategory";
import Brends from "./components/Brends/Brends";



const Main: FC = () => {
    return(
        <div className="DivMain">
            <PopCategory/>
            <Brends/>
        </div>
    )
}

export default Main;