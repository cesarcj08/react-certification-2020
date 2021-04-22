import React from 'react';
import styled from 'styled-components';
import './VideoDetail.styles.css';
import { useVideoContext } from '../../state/VideosContext';
import { useThemeContext } from '../../state/ThemeContext';

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

function VideoDetail(){
    const { videoList, state, dispatch } = useVideoContext();
    const { id, title, description } = state;
    const { theme } = useThemeContext();

    const videoSrc = `https://www.youtube.com/embed/${id}`;
    const getVideoList = (item) => {
        return (item.items.map((videoItem, index) => {
            const { id, snippet } = videoItem;
            const { title, thumbnails, description } = snippet;
            
              return {
                id: id.videoId,
                title: title,
                thumbnail: thumbnails.medium.url,
                description: description,
                shortthumbnail: thumbnails.default.url,
              };
        }));
      }

    return(
        <VideoDetailsContainer style={{color: theme.fontcolor, backgroundColor: theme.backgroundcolor }}>
            <div>
                <VideoPlayer src={videoSrc} allowFullScreen title='Video player'/>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
            <div>
                {getVideoList(videoList).map((video, index) => {
                    const { id, title, description, shortthumbnail} = video;
                    return(
                        id !== undefined &&
                        <div onClick={(event) => dispatch({ id: id, title: title, description: description })} key={`video-item-container-${id}`}>
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
