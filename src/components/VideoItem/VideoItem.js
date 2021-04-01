import React from 'react';
import styled from 'styled-components';

const VideoItemContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    text-align: center;

`;

const Thumbnail = styled.img`
    max-width: 200px;
    max-height: 250px ;
`;

function VideoItem({id, title, thumbnail, description}){
    return(
        <VideoItemContainer id={id} key={`video-item-container-${id}`}>
            <Thumbnail key={`video-thumbnail-${id}`} src={thumbnail} alt={description} />
            <div key={`video-title-container-${id}`}>
                <div key={`video-title-${id}`}>{title}</div>
            </div>
        </VideoItemContainer>
    );
}

export default VideoItem;