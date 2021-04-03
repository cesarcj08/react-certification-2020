import React from 'react';
import './Home.styles.css';
import VideoItem from '../../components/VideoItem/VideoItem';
import styled from 'styled-components';

const VideoContainer = styled.div`
  margin: 25px 0 0 0;
  text-align: center;
`;


function HomePage({ videoList, setSelectedVideo }) {
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
      <VideoContainer key={`video-container`}>
      <h1 key={`video-list-title`}>Video List</h1>
          {/* {console.log(videoList)} */}
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
                  description={description} 
                  setSelectedVideo={setSelectedVideo}/>)
              })
          }
      </VideoContainer>
  );
}

export default HomePage;
