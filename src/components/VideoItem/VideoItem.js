import React from 'react';
import './VideoItem.styles.css';

function VideoItem({id, title, thumbnail, description, setSelectedVideo}){
    const selectVideo = (video) => setSelectedVideo(video);
    return(
        <>
            {
                id !== undefined &&
               <div onClick={(event) => selectVideo([{ id: id, title: title, description: description }])} className="column" key={`video-item-container-${id}`}>
                    <div className="card" id={id} key={`video-item-card-${id}`}>
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