import React from 'react';
import VideoItem from '../../components/VideoItem/VideoItem';
import { useThemeContext } from '../../state/ThemeContext';

function VideoCardList({ videoList }){
    const { theme } = useThemeContext();

    return(
        <>
            <div style={{marginLeft: "10%", display: "inline-block", backgroundColor: theme.backgroundcolor}}>
            {videoList.map((video, index) => {
                const { id, title, thumbnail, description, shortthumbnail } = video;
                return(
                <VideoItem 
                    key={`video-item-${index}`} 
                    id={id} 
                    title={title} 
                    thumbnail={thumbnail} 
                    description={description}
                    shortthumbnail={shortthumbnail} />)
                })
            }
            </div>
        </>
    );
}

export default VideoCardList;