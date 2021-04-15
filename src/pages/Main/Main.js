import React from 'react';
import { useVideoContext } from '../../state/VideosContext';
import Home from '../../pages/Home/index';
import VideoDetail from '../../components/VideoDetail/VideoDetail';

function MainPage(){
    const { state } = useVideoContext();

    return(
        <>
            {
                state.id === 0
                ? <Home />
                : <VideoDetail />
            }
        </>
    );
}

export default MainPage;