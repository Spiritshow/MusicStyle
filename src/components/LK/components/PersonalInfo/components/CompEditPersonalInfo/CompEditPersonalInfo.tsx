import { useState } from "react";
import "./CompEditPersonalInfo.css";
import LabelPersanalInfo from "./components/LablePersanalInfo/LabelPersanalInfo";
import type { IPersonalInfo } from "../../../../../../Types/Types";
import { fields } from "../../../../../../Config/ConfigProfile";

interface ICompEditPersonalInfo{
    handleClickEdit: () => void;
    initialInfo: IPersonalInfo;
}

const CompEditPersonalInfo = ({handleClickEdit,initialInfo}:ICompEditPersonalInfo) => {
    
    const [formData, setFormData] = useState<IPersonalInfo>({
        ...initialInfo,
        birthday: new Date(initialInfo.birthday),
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]:
            name === "numberPhone"
                ? Number(value)
                : name === "birthday"
                ? new Date(value)
                : value,
        }));
    };
    
    const handleSubmit = () => {
        console.log("Сохранённые данные:", formData);
        handleClickEdit();
    };

    return(
        <div className="DivEditPersonalInfo">
            <div className="CardEditPersonalInfo">
                <div className="HeaderEditPersonalInfo">
                    Редактирование профиля
                </div>
                <div className="ListEditPersonalInfo">
                    {fields.map((field) => (
                        <LabelPersanalInfo
                        key={field.name}
                        name={field.name}
                        label={field.label}
                        type={field.type}
                        value={
                            field.name === "birthday"
                            ? formData.birthday.toISOString().split("T")[0]
                            : String(formData[field.name as keyof IPersonalInfo])
                        }
                        onChange={handleChange}
                        />
                    ))}
                </div>
                <div className="DivButtonEditPersonalInfo">
                        <button className="ButtonEditPersonalInfo" onClick={handleSubmit}>Сохранить</button>
                </div>
            </div>
            <div className="Background" onClick={handleClickEdit}></div>
        </div>
    )
} 

export default CompEditPersonalInfo;