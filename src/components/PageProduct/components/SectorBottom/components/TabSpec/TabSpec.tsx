import { useContext } from "react";
import "./TabSpec.css"
import { ProductContext } from "../../../../PageProdact";


const TabSpec = () => {

    const spec = useContext(ProductContext).product?.specifications;
    return(
        <div className="DivTabSpec">
            {spec && spec.map((s) => {
                    return(
                        <div key={s.name} className="TabSpec">
                            <div className="DivHeaderTabSpec">
                                {s.name}:
                            </div>
                            <div className="DivValueTabSpec">
                                {s.value}
                            </div>
                        </div>
                    )})
                }
        </div>
    )
}

export default TabSpec;