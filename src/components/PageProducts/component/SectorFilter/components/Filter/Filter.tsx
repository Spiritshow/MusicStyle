import type { StringLiteralKeys } from "../HelperType/StringLiteralKeys";
import "./Filter.css";

interface FilterProps<T> {
  values: Partial<T>;
  onChange: (updated: Partial<T>) => void;
  options: { [K in StringLiteralKeys<T>]: readonly T[K][] }; 
}

function Filter<T extends object>({ values, onChange, options }: FilterProps<T>) {
  const handleSelect = <K extends StringLiteralKeys<T>>(key: K, value: T[K]) => {
    onChange({ ...values, [key]: value });
  };

  return (
    <div className="DivFilter">
      {(Object.keys(options) as StringLiteralKeys<T>[]).map((key) => (
        <div key={String(key)} className="FieldFilter">
          <div className="DivHeaderFieldFilter">
            <label className="HeaderFieldFilter">{String(key)}</label>
          </div>
          <select className="Select"
            value={String(values[key] ?? '')}
            onChange={(e) => handleSelect(key, e.target.value as T[typeof key])}
          >
            <option value="">Не выбрано</option>
            {options[key].map((val) => (
              <option key={String(val)} value={String(val)} className="OptionFilter">{String(val)}</option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
}

export default Filter;