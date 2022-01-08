import axios from 'axios'

export default function getAnimeDetails(payload){
  let data =
  axios
  .get(`https://api.aniapi.com/v1/anime/${payload.id}`)
  .then(res => res.data.data)
  .catch(err => err.message)

  return data
}