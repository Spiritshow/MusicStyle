import { useContext, useState } from "react";
import Header from "./component/Header/Header";
import { Outlet } from "react-router";
import "./Layout.css";
import { ThemeContext } from "../../router/router";
import Catalog from "./component/Catalog/Catalog";

const Layout = () =>{
    const [toggleCataloge, setToggleCataloge] = useState<boolean>(false)
     
    const context = useContext(ThemeContext);

    return(
        <>
            <Header toggleCataloge={toggleCataloge} setToggleCataloge={setToggleCataloge}/>
            <div className={`DivOutlet ${context.theme}`}>
                {!toggleCataloge && <Outlet/>}
                {toggleCataloge && <Catalog/>}
            </div>
        </>
    )
}

export default Layout;