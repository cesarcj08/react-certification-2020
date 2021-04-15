import { defaultTheme, darkTheme } from '../state/ThemeContext';

export default function reducer(state, action){
    switch(action.theme){
        case "DARK_THEME":{
            return { theme: darkTheme };
        }
        case "DEFAULT_THEME":{
            return { theme: defaultTheme };
        }
        default:{
            return { theme: defaultTheme };
        }
    }
}