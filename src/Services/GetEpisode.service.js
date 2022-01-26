import axios from "axios";

export default function getEpisode(ep, anime){
  const data = axios
  .get(`https://api.aniapi.com/v1/episodes?anime_id=${anime}&number=1&source=dreamsub&locale=it`)
  .then(res => res.data)
  return data
}