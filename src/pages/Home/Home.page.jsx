import React from 'react';
import './Home.styles.css';
import VideoItem from '../../components/VideoItem/VideoItem';
import styled from 'styled-components';
import { useVideoContext } from '../../state/VideosContext';
import { useThemeContext } from '../../state/ThemeContext';

const VideoContainer = styled.div`
  margin: 25px 0 0 0;
  text-align: center;
`;

function HomePage() {
  const { videoList } = useVideoContext();
  const { theme } = useThemeContext();

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

  return (
      <VideoContainer key={`video-container`} style={{color: theme.fontcolor, backgroundColor: theme.backgroundcolor, marginTop: "-25px"}}>
      <h1 key={`video-list-title`} style={{backgroundColor: theme.backgroundcolor}}>Video List</h1>
          <div style={{marginLeft: "10%", display: "inline-block", backgroundColor: theme.backgroundcolor}}>
          {
          getVideoList(videoList)
          .map((video, index) => {
              const { id, title, thumbnail, description} = video;
              return(
                <VideoItem 
                  key={`video-item-${index}`} 
                  id={id} 
                  title={title} 
                  thumbnail={thumbnail} 
                  description={description} />)
              })
          }
          </div>
      </VideoContainer>
  );
}

export default HomePage;
