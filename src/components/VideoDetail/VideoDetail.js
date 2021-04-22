import React, { useState } from 'react';
import styled from 'styled-components';
import './VideoDetail.styles.css';
import { useVideoContext } from '../../state/VideosContext';
import { useThemeContext } from '../../state/ThemeContext';
import { storage } from '../../utils/storage';
import { USER_FAVORITE_VIDEOS } from '../../utils/constants';

const VideoDetailsContainer = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-gap: 20px;
    position: relative;
`;

const VideoPlayer = styled.iframe`
    min-width: 100%;
    height: 600px;
`;

function VideoDetail({ videoList }){
    const { state, dispatch } = useVideoContext();
    const { id, title, description } = state;
    const { theme } = useThemeContext();
    
    const isAlreadyFavorite = (current) =>{
        let favorites = storage.get(USER_FAVORITE_VIDEOS);
        if(favorites !== null){
            return favorites.findIndex(item => JSON.stringify(item) === JSON.stringify(current)) !== -1;
        }

        return false;
    }
    const [isFavorite, setFavorite] = useState(isAlreadyFavorite(state))

    const addToFavorites = () => {
        let favorites = storage.get(USER_FAVORITE_VIDEOS);
        if(favorites !== null)
            favorites.push(state);
        else
            favorites = [state];

        storage.set(USER_FAVORITE_VIDEOS, favorites);
        setFavorite(true);
    }

    const removeFromFavorites = () => {
        let favorites = storage.get(USER_FAVORITE_VIDEOS);
        let current = favorites.findIndex(item => JSON.stringify(item) === JSON.stringify(state));
        favorites = current === 0 && favorites.length === 1 ? [] : favorites.slice(current, 1);
        storage.set(USER_FAVORITE_VIDEOS, favorites);
        setFavorite(false);
    }

    const selectVideo = (video) => {
        dispatch(video);
        setFavorite(isAlreadyFavorite(video));
    }

    const videoSrc = `https://www.youtube.com/embed/${id}`;
    
    return(
        <VideoDetailsContainer style={{color: theme.fontcolor, backgroundColor: theme.backgroundcolor }}>
            <div>
                <VideoPlayer src={videoSrc} allowFullScreen title='Video player'/>
                <h4>{title}</h4>
                <p>{description}</p>
                { !isFavorite ? 
                <input type="button" value="Agregar a favoritos" onClick={() => addToFavorites()} /> :
                <input type="button" value="Eliminar de favoritos" onClick={() => removeFromFavorites()} />
                }
            </div>
            <div>
                {videoList.map((video, index) => {
                    const { id, title, description, thumbnail, shortthumbnail} = video;
                    return(
                        id !== undefined &&
                        <div onClick={() => selectVideo({ id: id, title: title, description: description, thumbnail: thumbnail, shortthumbnail: shortthumbnail })} key={`video-item-container-${id}`}>
                            <div className="listItem" style={{ backgroundColor: theme.backgroundcolor }} id={id} key={`video-item-card-${id}`}>
                                <div>
                                    <img className="listItemThumbnail" key={`video-thumbnail-${id}`} src={shortthumbnail} alt={description} />
                                </div>
                                <div>
                                    <p className="listItemTitle">{title}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </VideoDetailsContainer>
    )
}

export default VideoDetail;
