const { default: axios } = require('axios')
const cheerio = require('cheerio')

export function getTop250(){
  let dataList = []
  const datas = axios
  .get('https://www.imdb.com/chart/top/?ref_=nv_mv_250',
  {
    headers: {
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      'accept-encoding': 'gzip, deflate, br',
      'accept-language': 'en-US,en;q=0.9,hi-IN;q=0.8,hi;q=0.7',
      'cache-control': 'max-age=0',
      'dnt': 1,
      'referer': 'https://www.imdb.com/',
      'sec-ch-ua' : '"Not;A Brand";v="99", "Google Chrome";v="97", "Chromium";v="97"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'sec-fetch-dest': 'document',
      'sec-fetch-mode': 'navigate',
      'sec-fetch-site': 'same-origin',
      'sec-fetch-user': '?1',
      'upgrade-insecure-requests': '1',
      'user-agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36'
    },
    gzip: true
  })
  .then( res => {
    const htmlData = res.data
    let $ = cheerio.load(htmlData)
    const _base = '.lister-list > tr'
    $(_base).each((i, elem) => {
      let title = $(elem).find(' .titleColumn > a').text().trim()
      let rating = $(elem).find(' .ratingColumn.imdbRating > strong').text().trim()
      dataList.push({
        title,
        rating,
      })
    })
    return dataList
  })
  .then(res => res)
  console.log(datas)
  return datas
}
