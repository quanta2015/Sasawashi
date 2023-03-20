var superagent = require('superagent');
var cheerio = require('cheerio')
var axios = require('axios') 
var fs = require('fs');
const server = `http://sasawashi.com`


let list = ["/view/news/20230130160622","/view/news/20230116161758","/view/news/20221221162552","/view/news/20221028135204","/view/news/20220804155235","/view/news/20220428161741","/view/news/20220428161246","/view/news/20220428161016","/view/news/20220415134236","/view/news/20220308123224","/view/news/20211220141118","/view/news/20210810142526","/view/news/20210803113008","/view/news/20210803112940"]


const main =async()=> {
  let ret = []
  for await (let item of list) {
    let url = `${server}${item}`
    let {data} = await axios.get(url)
    var $ = cheerio.load(data);

    let date = $('.news-detail-data').text()
    let title = $('.news-detail-title').text()
    let content = $('.news-detail-content').text()

    ret.push({ date, title, content })
  }

  fs.writeFileSync('news.json',JSON.stringify(ret,null,2))
}


main()