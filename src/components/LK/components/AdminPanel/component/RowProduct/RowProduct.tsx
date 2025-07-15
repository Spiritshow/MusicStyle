import { useEffect, useState } from "react";

interface IRowProduct {
    type?: React.HTMLInputTypeAttribute,
    text: string,
    selectSubcategory: string | undefined,
    setValue: (e: string) => void,
    value: string
}

const RowProduct = ({type="text" ,text, selectSubcategory, setValue, value}: IRowProduct) => {
    
    const [disabled, setDisabled] = useState<boolean>(true)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    useEffect(() => {
        if(selectSubcategory){
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [selectSubcategory])

    return(
        <div className="RowProduct">
            <div className="TextRowProduct">{text}</div>
            <input type={type} disabled={disabled} onChange={handleChange} value={value}></input>
        </div>
    )
}

export default RowProduct;