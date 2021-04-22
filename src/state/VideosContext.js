import React, { useContext, createContext, useState, useReducer } from 'react';
import { getMockVideoList } from '../mock/mockedData';
import reducer from './VideosReducer';

const initialState = {
    searchValue: "",
    setSearchValue: () => {},
    videoList: { },
    setVideoList: () => {},
    state: {},
    dispatch: () => {},
    isFavoriteRoute: false.id,
    setFavoriteRoute: () => {}
}

const videosInitialState = { 
    id: 0, 
    title: "", 
    description: "",
    thumbnail: "", 
    shortthumbnail: ""
}

const VideosContext = createContext(initialState);
function useVideoContext(){
    const context = useContext(VideosContext);
    if(!context){
        throw new Error();
    }
    
    return context;
}

function VideosContextProvider({ children }){
    const [searchValue, setSearchValue] = useState("Wizeline");
    const [videoList, setVideoList] = useState(getMockVideoList());
    const [state, dispatch] = useReducer(reducer, videosInitialState);
    const [isFavoriteRoute, setFavoriteRoute] = useState(false);

    return(
        <VideosContext.Provider value={{searchValue, setSearchValue, videoList, setVideoList, state, dispatch, isFavoriteRoute, setFavoriteRoute}}>
            {children}
        </VideosContext.Provider>
    );
}


export { useVideoContext };
export default VideosContextProvider;