import axios from 'axios'

export default async function getQuotes(){
  let data = await axios.
    get('https://animechan.vercel.app/api/random')
    .then((response) => {
        console.log(response)
        return response.data
    })
    .catch((error) => {
        return error
    })
    return data
}