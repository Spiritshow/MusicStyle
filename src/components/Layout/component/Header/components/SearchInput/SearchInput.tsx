import { useState, type ChangeEvent, type FC } from "react";
import "./SearchInput.css";


const SearchInput: FC = () =>{
    const [searchText, setSearchText] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    }

    const handleClick = () => {
        /* логика отправка отправки текста в бэк */
    }

    return(
        <div className="DivSearchInput">
            <input type="text" onChange={handleChange} value={searchText} className="InputSearchInput"/>
            <button onClick={handleClick} className="ButtonSearchInput"><img src="/assets/imgSearch.png" className="ImgSearchInput"/></button>
        </div>
    )
}

export default SearchInput;