import axios from 'axios'

export default function getAnimeFacts() {
  let data = axios
  .get('https://anime-facts-rest-api.herokuapp.com/api/v1')
  .then(response => {
    return response.data
  } )
  return data
}