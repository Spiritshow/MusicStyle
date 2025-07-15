import { useContext, useEffect, useState } from "react";
import { NewSpecsContext } from "../../../AdminPanel";


interface INewSpecifications{
    selectSubcategory: string | undefined
}

const NewSpecifications = ({selectSubcategory}: INewSpecifications) => {
    const {newSpecs, setNewSpecs} = useContext(NewSpecsContext);
    
    const [disabled, setDisabled] = useState<boolean>(true)

    useEffect(() => {
        if(selectSubcategory){
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [selectSubcategory])

    const handleAddNewSpec = () => {
        setNewSpecs((prev) => [...prev, { name: "", value: "" }]);
    };

    const handleChangeNewSpec = (index: number, field: "name" | "value", value: string) => {
        setNewSpecs((prev) =>
            prev.map((spec, i) =>
                i === index ? { ...spec, [field]: value } : spec
            )
        );
    };

    const handleRemoveNewSpec = (index: number) => {
        setNewSpecs((prev) => prev.filter((_, i) => i !== index));
    };

    return(
        <>
            {newSpecs.map((spec, index) => (
                <div key={index} style={{ marginTop: "10px", display: "flex", alignItems: "center", gap: "8px" }}>
                    <input
                        type="text"
                        placeholder="Название характеристики"
                        value={spec.name}
                        onChange={(e) => handleChangeNewSpec(index, "name", e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Значение"
                        value={spec.value}
                        onChange={(e) => handleChangeNewSpec(index, "value", e.target.value)}
                    />
                    <button onClick={() => handleRemoveNewSpec(index)}>Удалить</button>
                </div>
            ))}

            <button disabled={disabled} onClick={handleAddNewSpec}>Добавить характеристику</button>
        </>
    )
}

export default NewSpecifications;