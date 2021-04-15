import React from 'react';
import './VideoItem.styles.css';
import { useThemeContext } from '../../state/ThemeContext';
import { useVideoContext } from '../../state/VideosContext';

function VideoItem({id, title, thumbnail, description}){
    const { dispatch } = useVideoContext();
    const { theme } = useThemeContext();
    return(
        <>
            {
                id !== undefined &&
               <div onClick={(event) => dispatch({ id: id, title: title, description: description })} className="column" key={`video-item-container-${id}`}>
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