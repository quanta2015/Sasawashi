### site
系统构架采用 REact + SpringBoot,其优势包括下面几点

1. 通过 React 拆分网站页面，动态加载提高了网站的运行速度
2. 高效率的逻辑结构，比如从列表数据切换到详情数据都无需任何等待，比如新闻页面和产品页面
3. 人性化的操作设计，比如产品详情可以自动返回到原来的列表界面
4. 增加了后端的数据库，可以方面的扩展网站的功能
5. 为了获取原网站的数据，开发了数据收集引擎，不需要手工处理数据
6. 通过 CSS 实现所有特效，提高网站的加载速度，比如首页的竖排文字


### data

爬取GUIDE数据
```
let result = []
document.querySelectorAll(".contents-section").forEach((item)=> {
  let name = item.querySelector(".contents-section-header-title").innerText
  let list = item.querySelectorAll(".contents-section-list .contents-section-item")
  let ret = []

  list.forEach((o)=>{
    let title = o.querySelector(".contents-section-item-title").innerText
    let detail = o.querySelector(".contents-section-item-detail").innerText
    detail = detail.replaceAll('\t','').split('\n')
    ret.push({title,detail})
    
  })

  result.push({ name, ret })
})
console.log(result)
```


爬取新闻数据
```
document.querySelectorAll(".news-list-item a").forEach((item)=> {
  let url = item.getAttribute("href")
  console.log(url)
})
```




爬取产品数据
```
document.querySelectorAll(".product-list-item").forEach((item)=> {
  let url = item.querySelector("a").getAttribute("href")
  let img = item.querySelector(".product-image-wrap img").getAttribute("src")
  let name = item.querySelector(".product-list-item-name").innerText
  let price = item.querySelector(".product-price").innerText
  console.log(`\{"name":"${name}", "price":"${price}", "img":"${img}", "url":"${url}"  \},`)
})
```



爬取产品详情数据（无法使用 axios，动态模拟 chrome 浏览器爬取）
```
await driver.get(url)
await delay(5000)

let imgList =await els('.detail-image-list li img','src')
let type = await el(".product-name-category")
let name = await el(".product-name-jp")
let price = await el(".product-detail-price")
let desc = await el(".product-description")
let clrList = await els(".js-colorList img",'src')
let cltList = await els(".js-colorList span")
let sizeList = await els(".js-sizeList li")

let intr = []
let list  = await  driver.findElements(By.css('.introduce-product *')) 
let index = -1
let mark  = 0
let trs   = 0

for(let e of list) {
  let tag = await e.getTagName()
  let val = await e.getText()
  switch(tag) {
    case 'h2':
      intr.push({key: val, val: null});
      index++
      mark = 0
      break;
    case 'p':
      if (mark ===0) {
        intr[index].val = val;
      }else{
        let len = intr[index].val.length
        intr[index].val[len-1].p =val
      }
      break;
    case 'h3':
      if (mark === 0) {
        intr[index].val = []
        mark = 1;
      }
      intr[index].val.push({t:val, p: null});
      break;
    case 'table':
      if (mark === 0) {
        intr[index].val = []
        mark = 2;
      }
      break;
    case 'tr':
      intr[index].val.push({key:null,val:null})
      break;
    case 'td':
      let len = intr[index].val.length-1
      if (trs===0) {
        intr[index].val[len].key = val
        trs = 1
      }else if (trs===1) {
        intr[index].val[len].val = val
        trs = 0
      }
  }
}
```



```
document.querySelectorAll(".company-dealers-area ").forEach((item)=> {
  let area = item.querySelector(".company-dealers-area-title").innerText
  console.log(area)
  console.log("\n")
  let list = item.querySelectorAll(".company-dealers-shopitem")
  
  list.forEach((o)=>{
      let name = o.querySelector(".company-dealers-link").innerText
      let addr = o.querySelector(".company-dealers-info-item-discription-inner").innerText
      let tel = o.querySelector(".company-dealers-info-item-discription").innerText
      let gps = o.querySelector(".company-dealers-info-item-discription a").getAttribute("href")
      console.log(`\{name:"${name}", addr:"${addr}", tel:"${tel}", gps:"${gps}"  \}`)
  })
})
```



爬取公司介绍数据
```
document.querySelectorAll(".header-nav-menu-item").forEach((item)=> {
  let list = item.querySelectorAll(".header-nav-menu-item-inner a")
  list.forEach((o)=>{
      let name = o.innerHTML
      let url = o.getAttribute("href")
      console.log(`\{name:"${name}", url:"${url}"  \}`)
  })
  console.log("\n")
})
```