import React from 'react';
import './VideoItem.styles.css';
import { useThemeContext } from '../../state/ThemeContext';
import { useVideoContext } from '../../state/VideosContext';
import { useHistory } from 'react-router-dom';

function VideoItem({id, title, thumbnail, description, shortthumbnail}){
    const { dispatch, isFavoriteRoute } = useVideoContext();
    const { theme } = useThemeContext();
    let history = useHistory();

    const goToVideoDetails = () =>{
        dispatch({ id: id, title: title, description: description, thumbnail: thumbnail, shortthumbnail: shortthumbnail })
        let route = isFavoriteRoute ? '/detallevideofavoritos' : '/detallevideo';
        history.push(route);
    }

    return(
        <>
            {
                id !== undefined &&
               <div onClick={() =>  goToVideoDetails()} className="column" key={`video-item-container-${id}`}>
                    <div className="card" style={{ backgroundColor: theme.cardbackgroundcolor }} id={id} key={`video-item-card-${id}`}>
                        <img key={`video-thumbnail-${id}`} className="thumbnail" src={thumbnail} alt={description} />
                        <h3 className="text">{title}</h3>
                        <p className="text">{description}</p>
                    </div>
                </div>
            }
        </>
    );
}

export default VideoItem;