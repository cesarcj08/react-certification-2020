import React, { createContext, useContext, useState, useReducer } from 'react';
import reducer from './ThemeReducer';

const defaultTheme = {
    fontcolor: "black",
    navbarcolor: "red",
    cardbackgroundcolor: "white",
    backgroundcolor: "white"
}

const darkTheme = {
    fontcolor: "white",
    navbarcolor: "darkred",
    cardbackgroundcolor: "#4c4c4c",
    backgroundcolor: "#333232"
}

const ThemeContext = createContext(defaultTheme);

const initialState = {
    theme: defaultTheme
}

function useThemeContext(){
    const context = useContext(ThemeContext);
    if(!context)
        throw new Error();

    return context;
}

function ThemeContextProvider({ children }){
    const [theme, setTheme] = useState(defaultTheme);
    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <ThemeContext.Provider value={{ theme, setTheme, state, dispatch }}>
            {children}
        </ThemeContext.Provider>
    );
}

export { useThemeContext, defaultTheme, darkTheme };
export default ThemeContextProvider;