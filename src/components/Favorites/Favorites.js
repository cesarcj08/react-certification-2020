import React from 'react';
import VideoCardList from '../VideoCardList/VideoCardList';
import { useVideoContext } from '../../state/VideosContext';

function Favorites({ videoList }) {
  const { setFavoriteRoute } = useVideoContext();

  return (
    <>
      {setFavoriteRoute(true)}
      <VideoCardList videoList={videoList} />
    </>
  );
}

export default Favorites;