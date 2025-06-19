import type { CategoryMap, CategoryName } from "../../../../Types/TypesSpec/MapSpec";
import "./SectorSpec.css";

const SectorSpec = ({spec}: {spec:CategoryMap[CategoryName] | undefined}) => {
    return(
        <div className="DivSectorSpec">
            <div className="CardSpec">
                <div className="DivHeaderSpec">
                    Храрактеристики
                </div>
                {spec && Object.keys(spec).map((key) => {
                    const typeKey = key as keyof typeof spec;
                    return(
                    <div key={typeKey} className="DivFieldSpec">
                        <div className="DivHeaderFieldSpec">
                            {typeKey}:
                        </div>
                        <div className="DivValueFieldSpec">
                            {spec[typeKey]}
                        </div>
                    </div>
                    )})
                }
            </div>
        </div>
    )
}

export default SectorSpec;