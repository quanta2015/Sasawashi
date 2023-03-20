### site



### data



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


```
document.querySelectorAll(".header-nav-menu-item").forEach((item)=> {
  let v1 = item.querySelector(".header-nav-menu-link-en").innerHTML
  let v2 = item.querySelector(".header-nav-menu-link-jp").innerHTML.split('<svg')[0]
  console.log(v1,v2)
  
  let list = item.querySelectorAll(".header-nav-menu-item-inner a")
  list.forEach((o)=>{
      let name = o.innerHTML
      let url = o.getAttribute("href")
      console.log(`\{name:"${name}", url:"${url}"  \}`)
  })
  console.log("\n")
})
```


```
document.querySelectorAll(".news-list-item").forEach((item)=> {
  let list = item.querySelectorAll(".news-list-link")
  list.forEach((o)=>{
  let date = o.querySelector(".news-list-data").innerHTML
  let title = o.querySelector(".news-list-descripton ").innerHTML.split('<svg')[0]
  console.log(`\{date:"${date}", title:"${title}"  \}`)
  })
})
```