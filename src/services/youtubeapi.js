import axios from 'axios';
import { videos } from '../mock/mockedData';

function getVideos(searchValue){
    const apiKey = 'AIzaSyBk36jjzQ-WpYrzz5e4JnQZ56KB_keHtxk';
    const mock = false;
    return(
        !mock
            ? axios.create({
                baseURL: 'https://www.googleapis.com/youtube/v3/',
                params: {
                    part: 'snippet',
                    maxResults: 15,
                    key: apiKey
                }
            }).get('/search', {
                params: {
                    q: searchValue
                }
            })
        : videos
    )
}

export default getVideos;