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