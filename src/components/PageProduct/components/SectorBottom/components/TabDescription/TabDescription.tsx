import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../../../PageProdact";
import "./TabDescription.css";


const TabDescription = () => {
    
    const [description, setDescription] = useState<string | undefined>("");
    const context = useContext(ProductContext);

    useEffect(() => {
        setDescription(context.product?.description)
    }, [])

    return(
        <div className="TabDescription">
            <div className="TextDescription">
                {description}
            </div>
        </div>
    )
}

export default TabDescription;