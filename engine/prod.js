require("chromedriver");
var fs = require('fs');
var data = require('./data.js');
const {By,Builder,Browser,locateWith} = require('selenium-webdriver');
const delay = ms => new Promise(res => setTimeout(res, ms))

let webdriver = require('selenium-webdriver');
let chrome = require('selenium-webdriver/chrome');
let proxy = require('selenium-webdriver/proxy');
let opts = new chrome.Options();

const server = `http://sasawashi.com`

data = [
  {"url": "/view/item/000000000080?category_page_id=all_items"},
  {"url": "/view/item/000000000079?category_page_id=all_items"},
  {"url": "/view/item/000000000078?category_page_id=all_items"},
  {"url": "/view/item/000000000094?category_page_id=all_items"},
  {"url": "/view/item/000000000093?category_page_id=all_items"},
  {"url": "/view/item/000000000018?category_page_id=all_items"}
]

var ret = [];

(async function dataCollection() {

  const els =async(e,attr)=>{ 
    let ret = []
    let list = await driver.findElements(By.css(e)) 
    for(let e of list) {
      if (attr) {
        ret.push(await e.getAttribute(attr))
      }else{
        ret.push(await e.getText())
      }
    }
    return ret
  }
  const el  =async(e)=>{ return await driver.findElement(By.css(e)).getText() }

  opts.setProxy(proxy.manual({http: '127.0.0.1:7890'}));
  let driver = new webdriver.Builder()
  .forBrowser('chrome')
  .setChromeOptions(opts)
  .build();


  try {

    for await (const dataitem of data) {
      
      let url = `${server}${dataitem.url}`
      console.log(url)
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

      // for(let e of list) {
      //   let tag = await e.getTagName()
      //   let val = await e.getText()
      //   switch(tag) {
      //     case 'h2':
      //       intr.push({key: val, val: null});
      //       index++
      //       mark = 0
      //       break;
      //     case 'p':
      //       if (mark ===0) {
      //         intr[index].val = val;
      //       }else{
      //         let len = intr[index].val.length
      //         intr[index].val[len-1].p =val
      //       }
      //       break;
      //     case 'h3':
      //       if (mark === 0) {
      //         intr[index].val = []
      //         mark = 1;
      //       }
      //       intr[index].val.push({t:val, p: null});
      //       break;
      //     case 'table':
      //       if (mark === 0) {
      //         intr[index].val = []
      //         mark = 2;
      //       }
      //       break;
      //     case 'tr':
      //       intr[index].val.push({key:null,val:null})
      //       break;
      //     case 'td':
      //       let len = intr[index].val.length-1
      //       if (trs===0) {
      //         intr[index].val[len].key = val
      //         trs = 1
      //       }else if (trs===1) {
      //         intr[index].val[len].val = val
      //         trs = 0
      //       }
      //   }
      // }

      let item = {
        type,
        name,
        price,
        desc,
        imgList:JSON.stringify(imgList),
        clrList:JSON.stringify(clrList),
        cltList:JSON.stringify(cltList),
        sizeList:JSON.stringify(sizeList),
        // intr,
      }

      ret.push(item)
    }

    fs.writeFileSync('products.json',JSON.stringify(ret,null,2))

  }finally {
    await driver.quit();
  }



  
})();


