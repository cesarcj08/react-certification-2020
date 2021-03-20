import React from 'react';
import styled from 'styled-components';

const VideoItemContainer = styled.div`
    display: flex !important;
    align-items: center !important;
    cursor: pointer;
    text-align: center;

`;

const Thumbnail = styled.img`
    max-width: 200px;
    max-height: 250px ;
`;

function VideoItem({id, title, thumbnail, description}){
    return(
        <VideoItemContainer id={id} key={Math.random()}>
            <Thumbnail key={Math.random()} src={thumbnail} alt={description} />
            <div key={Math.random()}>
                <div key={Math.random()}>{title}</div>
            </div>
        </VideoItemContainer>
    );
}

export default VideoItem;