import type { CategoryName } from "../../../../Types/TypesSpec/MapSpec";
import type { ISpecsAcousticGuitar } from "../../../../Types/TypesSpec/SpecAccusticGitar";
import type { ISpecElectricGuitar } from "../../../../Types/TypesSpec/SpecElectricGuitar";
import type { ISpecsClassicalGuitar } from "../../../../Types/TypesSpec/SpecClassicGuitar";
import DivFilter from "./components/DivFilter/DivFilter";



const SectorFilter = ({category}: {category: CategoryName}) => {

    if (category === 'akusticheskie-gitary') {
        return <DivFilter<ISpecsAcousticGuitar> category={category}/>;
    }

    if (category === "elektrogitary") {
        return <DivFilter<ISpecElectricGuitar> category={category}/>;
    }

    if (category === "klassicheskie-gitary") {
        return <DivFilter<ISpecsClassicalGuitar> category={category}/>;
    }
}

export default SectorFilter;