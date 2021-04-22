import React from 'react';
import Home from '../Home/index';
import VideoDetail from '../../components/VideoDetail/VideoDetail';
import { Route, Switch } from 'react-router-dom';
import { useVideoContext } from '../../state/VideosContext';
import { storage } from '../../utils/storage';
import Favorites from '../../components/Favorites/Favorites';
import { USER_FAVORITE_VIDEOS } from '../../utils/constants';

function MainPage(){
    const { videoList } = useVideoContext();
    let favorites = storage.get(USER_FAVORITE_VIDEOS) !== null? storage.get(USER_FAVORITE_VIDEOS) : [];
    return(
        <>
            <Switch>
                <Route exact path="/" component={() => <Home videoList={videoList}  />} ></Route>
                <Route path="/detallevideo" component={() => <VideoDetail videoList={videoList} />}></Route>
                <Route path="/detallevideofavoritos" component={() => <VideoDetail videoList={favorites} />}></Route>
                <Route exact path="/favoritos" component={() => <Favorites videoList={favorites} />} ></Route>
            </Switch>
        </>
    );
}

export default MainPage;