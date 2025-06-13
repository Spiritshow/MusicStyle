import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import type { ThemWebsite } from "./Them/Them";
import Layout from "../components/Layout/Layout";
import Main from "../components/Main/Main";


export interface Context{
    theme: ThemWebsite;
    ToggleTheme: (theme: ThemWebsite) => void
}

const GetTheme = (): ThemWebsite => {
    switch (localStorage.getItem("theme")) {
        case "dark":
            return "dark";
        case "light":
            return "light";
        default:
            return "light";
    }
}

export const ThemeContext = createContext<Context>({
    theme: GetTheme(),
    ToggleTheme: () => {}
});

const Router = () => {

    const [theme,setTheme] = useState<ThemWebsite>(GetTheme);

    const handleToggleTheme = () => {
        switch (theme) {
            case "light":
                setTheme("dark")
                break;
            case "dark":
                setTheme("light")
                break;
        }
    }

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    return(
        <ThemeContext.Provider value={{theme: theme, ToggleTheme: handleToggleTheme}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route path="/" element={<Main/>}/>
                        <Route path="/category/:category" />
                        <Route path="/brend/:brend" />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeContext.Provider>
    )
}

export default Router;