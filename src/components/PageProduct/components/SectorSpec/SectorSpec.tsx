import type { ISpecProduct } from "../../../../Types/Types";
import "./SectorSpec.css";

const SectorSpec = ({spec}: {spec: ISpecProduct[] | undefined}) => {
    return(
        <div className="DivSectorSpec">
            <div className="CardSpec">
                <div className="DivHeaderSpec">
                    Храрактеристики
                </div>
                {spec && spec.map((s) => {
                    return(
                        <div key={s.name} className="DivFieldSpec">
                            <div className="DivHeaderFieldSpec">
                                {s.name}: 
                            </div>
                            <div className="DivValueFieldSpec">
                                {s.value}
                            </div>
                        </div>
                    )})
                }
            </div>
        </div>
    )
}

export default SectorSpec;