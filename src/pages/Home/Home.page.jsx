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
    <VideoContainer key={Math.random()}>
      <h1 key={Math.random()}>Video List</h1>
        {getVideoList()
        .map((video, index) => (
          <VideoItem key={Math.random()} id={video.id} title={video.title} thumbnail={video.thumbnail} description={video.description}></VideoItem>
        ))}
    </VideoContainer>
  );
}

export default HomePage;
