import React from 'react';
import './Home.styles.css';
import { useThemeContext } from '../../state/ThemeContext';
import styled from 'styled-components';
import VideoCardList from '../../components/VideoCardList/VideoCardList';
import { useVideoContext } from '../../state/VideosContext';

const VideoContainer = styled.div`
  margin: 25px 0 0 0;
  text-align: center;
`;

function HomePage({ videoList }) {
  const { theme } = useThemeContext();
  const { setFavoriteRoute } = useVideoContext();

  return (
      <>
        {setFavoriteRoute(false)}
        <VideoContainer key={`video-container`} style={{color: theme.fontcolor, backgroundColor: theme.backgroundcolor, marginTop: "-25px"}}>
        <h1 key={`video-list-title`} style={{backgroundColor: theme.backgroundcolor}}>Video List</h1>
            <VideoCardList videoList={videoList} />
        </VideoContainer>
      </>
  );
}

export default HomePage;
