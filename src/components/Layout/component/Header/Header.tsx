import { useContext, type FC } from "react";
import CustomButton from "../../../../componentsControl/CustomButton/CustomButton";
import SearchInput from "./components/SearchInput/SearchInput";
import ButtonClient from "./components/ButtonClient/ButtonClient";
import { useNavigate } from "react-router";
import { ThemeContext } from "../../../../router/router";
import imgCatalog from "../../../../assets/imgCataloge.png";
import imgProfile from "../../../../assets/imgProfile.png";
import imgTheme from "../../../../assets/imgTheme.png";
import imgBascet from "../../../../assets/imgBasket.png";
import imgLogo from "../../../../assets/imgLogo.png";
import "./Header.css";

interface IHeader{
    toggleCataloge: boolean;
    setToggleCataloge:(toggleCataloge: boolean) => void;
}

const Header: FC<IHeader> = ({toggleCataloge, setToggleCataloge}) => {
    const context = useContext(ThemeContext);

    const navigate = useNavigate();

    const handleClick = () => {
        setToggleCataloge(!toggleCataloge);
    }

    const handleClickProfile = () => {
        navigate("/LK");
    }

    const handleClickBasket = () => {
        navigate("/Basket");
    }

    return(
        <div className={`Header Header${context.theme}`}>
            <a href="/" className="linkMain">
                <img src={imgLogo} className="imgLogo" />
            </a>
            <CustomButton img={imgCatalog} text="Каталог" onClick={handleClick}/>
            <SearchInput/>
            <ButtonClient img={imgProfile} text="Профиль" onClick={handleClickProfile}/>
            <ButtonClient img={imgTheme} text="Тема" onClick={() => context.ToggleTheme(context.theme)}/>
            <ButtonClient img={imgBascet} text="Корзина" onClick={handleClickBasket}/>
        </div>
    )

}

export default Header;