import React, { useState } from 'react';
import Home from '../../pages/Home/index';
import NavigationBar from '../NavigationBar/NavigationBar';
import callYoutubeApi from '../../services/youtubeapi';
import VideoDetail from '../../components/VideoDetail/VideoDetail';
import { videos } from '../../mock/mockedData';

function App() {
  const [searchValue, setSearchValue] = useState("Wizeline");
  const [videoList, setVideoList] = useState(videos.data);
  const [selectedVideo, setSelectedVideo] = useState([]);

  const searchVideoEvent = async (event) => {
      event.preventDefault();
      const response = await callYoutubeApi()
      setVideoList(response.data);
      setSelectedVideo([]);
    
  }
  return (
    <React.Fragment>
      <NavigationBar setSearchValue={setSearchValue} searchValue={searchValue} searchVideoEvent={searchVideoEvent}></NavigationBar>
      {selectedVideo.length === 0
        ? <Home videoList={videoList} setSelectedVideo={setSelectedVideo}></Home>   
        : <VideoDetail video={selectedVideo[0]} videoList={videoList} setSelectedVideo={setSelectedVideo} />
      }
    </React.Fragment> 
  );
}

export default App;
