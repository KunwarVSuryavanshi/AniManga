import axios from "axios";

export default function getAniApi(payload){
  let data = axios
  .get('https://api.aniapi.com/v1/anime')
  .then(res => res.data)
  .catch(err => err.message)
  return data
}