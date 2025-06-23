import { useState } from "react";
import TabDescription from "./components/TabDescription/TabDescription";
import type { СonditionBottom } from "../../../../Types/Types";
import TabSpec from "./components/TabSpec/TabSpec";
import ControlTab from "./components/ControlTab/ControlTab";




const SectorBottom = () => {

    const [toggleBottom, setToggleBottom] = useState<СonditionBottom>("Description")

    return(
        <div className="SectorBottom">
            <ControlTab toggleBottom={toggleBottom} setToggleBottom={setToggleBottom}/>
            {toggleBottom == "Description" && <TabDescription/>}
            {toggleBottom == "Specification" && <TabSpec/>}
        </div>
    )
}

export default SectorBottom;