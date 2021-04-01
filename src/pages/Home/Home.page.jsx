import React from 'react';
import './Home.styles.css';
import VideoItem from '../../components/VideoItem/VideoItem';
import getVideoList from '../../mock/mockedData';
import styled from 'styled-components';

const VideoContainer = styled.section`
  text-align: center;
`;

function HomePage() {
  return (
    <VideoContainer key={`video-container`}>
      <h1 key={`video-list-title`}>Video List</h1>
        {getVideoList()
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
    </VideoContainer>
  );
}

export default HomePage;
