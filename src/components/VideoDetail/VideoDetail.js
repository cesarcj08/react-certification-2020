import React from 'react';
import styled from 'styled-components';
import './VideoDetail.styles.css';

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

function VideoDetail({ video, videoList, setSelectedVideo }){
    const selectVideo = (video) => setSelectedVideo(video);
    const videoSrc = `https://www.youtube.com/embed/${video.id}`;
    const getVideoList = (item) => {
        return (item.items.map((video, index) => {
              return {
                id:video.id.videoId,
                title:video.snippet.title,
                thumbnail:video.snippet.thumbnails.medium.url,
                description:video.snippet.description,
                shortthumbnail:video.snippet.thumbnails.default.url,
              };
        }));
      }

    return(
        <VideoDetailsContainer>
            <div>
                <VideoPlayer src={videoSrc} allowFullScreen title='Video player'/>
                <h4>{video.title}</h4>
                <p>{video.description}</p>
            </div>
            <div>
                {getVideoList(videoList).map((video, index) => {
                    const { id, title, description, shortthumbnail} = video;
                    return(
                        id !== undefined &&
                        <div onClick={(event) => selectVideo([{ id: id, title: title, description: description }])} key={`video-item-container-${id}`}>
                            <div className="listItem" id={id} key={`video-item-card-${id}`}>
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



/**
 * const VideoDetailsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
`;

const VideoPlayer = styled.iframe`
    height: 600px;
`;

const VideoPlayerContainer = styled.div`
    width: 70%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
`;

const VideoListContainer = styled.div`
    width: 30%;
    height: 100%;
    overflow: scroll;
`;
 */