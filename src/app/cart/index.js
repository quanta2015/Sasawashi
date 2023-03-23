import React,{useState,useEffect} from 'react';import classnames from 'classnames';import {API_SERVER} from '@/constant/apis'import s from './index.module.less';import { isN,getFilter,toOpt } from '@/util/fn'import { InputNumber,message } from 'antd'import { useNavigate } from "react-router-dom"import Slide from '@/component/Slide'const Cart = () => {  const navigate = useNavigate();  const [cart,setCart] = useState([])  useEffect(() => {    let _cart = localStorage.getItem('sasawashi_key')    _cart = isN(cart)?[]:JSON.parse(_cart)    setCart(_cart)    window.scrollTo({ top: 0 });  },[])  const doChgNum =(e,i)=>{    cart[i].num = e    setCart([...cart])  }  const doDel =(i)=>{    cart.splice(i,1)    setCart([...cart])    localStorage.setItem('sasawashi_key',JSON.stringify(cart))  }  const saveCart=()=>{    localStorage.setItem('sasawashi_key',JSON.stringify(cart))    message.info('更新购物车成功！')  }  const calPrice=(list)=>{    let sum = 0    list.map((item,i)=>{      let v = item.price.replaceAll('￥','')          .replaceAll('（税込）','')          .replaceAll(',','')      sum += parseFloat(v) *item.num    })    return sum  }  const doShop =()=>{    navigate(`/prod?sub=all&name=すべての商品`)  }    return (    <div className={s.cart}>            <div className={s.wrap}>        <div className={s.row}>          <div>   </div>          <div>商品</div>          <div>数量</div>          <div>価格</div>          <div>削除</div>        </div>        {cart.map((item,i)=>          <div className={s.row} key={i}>            <div className={s.img}>              <img src={item.img} />            </div>            <div className={s.desc}>              <h1>{item.name}</h1>              <li><span>カラー：</span><span>{item.clr}</span></li>              <li><span>サイズ：</span><span>{item.size}</span></li>            </div>            <div className={s.form}>              <InputNumber                  className={s.num}                style ={{width: '100%'}}                value={item.num}                  size = {'large'}                min = {1}                onChange={(e)=>doChgNum(e,i)}                />              <span className={s.btn} onClick={saveCart}>更新する</span>            </div>            <div className={s.price}>{item.price}</div>            <div className={s.del}>              <span onClick={()=>doDel(i)}>×</span>              <label onClick={()=>doDel(i)}>削除</label>            </div>          </div>        )}        <div className={s.ret}>          <div className={s.all}>            <em>合計金額</em>            <span>￥{calPrice(cart)}</span>            <i>（税込）</i>          </div>          <div className={s.fun}>            <span className={s.btn} onClick ={doShop}>お買い物を続ける</span>            <span className={s.btn}>レジに進む</span>          </div>        </div>      </div>          </div>  )}export default Cart