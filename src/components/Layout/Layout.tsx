import { createContext, useContext, useState } from "react";
import Header from "./component/Header/Header";
import { Outlet } from "react-router";
import "./Layout.css";
import { ThemeContext } from "../../router/router";
import Catalog from "./component/Catalog/Catalog";

interface IToggleCataloge {
    toggleCataloge: boolean,
    ToggleCataloge: () => void;
}

export const toggleCatalogeContext = createContext<IToggleCataloge>({
    toggleCataloge: false,
    ToggleCataloge: () => {}
})

const Layout = () =>{
    const [toggleCataloge, setToggleCataloge] = useState<boolean>(false)
     
    const context = useContext(ThemeContext);

    const handleToggleCataloge = () => {
        setToggleCataloge(!toggleCataloge);
    }

    return(
        <>
            <toggleCatalogeContext.Provider value={{toggleCataloge: toggleCataloge, ToggleCataloge: handleToggleCataloge}}>
                <Header toggleCataloge={toggleCataloge} setToggleCataloge={setToggleCataloge}/>
                <div className={`DivOutlet ${context.theme}`}>
                    {!toggleCataloge && <Outlet/>}
                    {toggleCataloge && <Catalog/>}
                </div>
            </toggleCatalogeContext.Provider>
        </>
    )
}

export default Layout;