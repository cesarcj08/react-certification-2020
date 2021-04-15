import React, { useContext, createContext, useState, useReducer } from 'react';
import { videos } from '../mock/mockedData';
import reducer from './VideosReducer';

const initialState = {
    searchValue: "",
    setSearchValue: () => {},
    videoList: { },
    setVideoList: () => {}
}

const videosInitialState = { 
    id: 0, 
    title: "", 
    description: ""
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
    const [videoList, setVideoList] = useState(videos.data);
    const [state, dispatch] = useReducer(reducer, videosInitialState);

    return(
        <VideosContext.Provider value={{searchValue, setSearchValue, videoList, setVideoList, state, dispatch}}>
            {children}
        </VideosContext.Provider>
    );
}


export { useVideoContext };
export default VideosContextProvider;