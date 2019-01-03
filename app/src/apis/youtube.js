import axios from 'axios';

const KEY = 'AIzaSyD7n_rS8LNr6lAhVlj-AUPUEVswFcEh-Ww';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
