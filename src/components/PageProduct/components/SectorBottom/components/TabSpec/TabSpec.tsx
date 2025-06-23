import { useContext } from "react";
import "./TabSpec.css"
import { ProductContext } from "../../../../PageProdact";


const TabSpec = () => {

    const spec = useContext(ProductContext).product?.specifications;
    return(
        <div className="DivTabSpec">
            {spec && Object.keys(spec).map((key) => {
                    const typeKey = key as keyof typeof spec;
                    return(
                        <div key={typeKey} className="TabSpec">
                            <div className="DivHeaderTabSpec">
                                {typeKey}:
                            </div>
                            <div className="DivValueTabSpec">
                                {spec[typeKey]}
                            </div>
                        </div>
                    )})
                }
        </div>
    )
}

export default TabSpec;