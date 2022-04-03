import axios from "axios";

export default function getEpisode(ep, anime){
  const data = axios
  .get(`https://api.aniapi.com/v1/episode?anime_id=${anime}`)
  .then(res => res.data)
  return data
}