import "./LabelPersanalInfo.css";

interface ILabelPersanalInfo {
    label: string;
    name: string;
    type?: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LabelPersanalInfo: React.FC<ILabelPersanalInfo> = ({label,name,type = "text",value,onChange}) => {
  return (
    <label className="CLabel">
      {label}:
      <input className="InputCLabel"
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default LabelPersanalInfo;