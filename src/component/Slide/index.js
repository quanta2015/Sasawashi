import React,{useState,useEffect,useRef} from 'react';import classnames from 'classnames';import {API_SERVER} from '@/constant/apis'import { useNavigate } from "react-router-dom"import s from './index.module.less';const Slide = ({list}) => {  const childRef = useRef()  const navigate = useNavigate();  const width = childRef?.current?.offsetWidth    const [sel,setSel] = useState(0)    useEffect(()=>{    const interval = setInterval(()=>{      setSel( sel<2?sel+1:0 )    },5000)     return ()=>{      if (interval) {        clearInterval(interval)      }    }  },[sel])  const doNav=(item) => {    // console.log(item)    navigate(`/prod?id=${item.id}&sub=${item.f.val}&name=${item.f.name}`)  }    return (    <div className={s.slide}  >      <div className={s.slideMain} ref = {childRef} style={{ width: `${width}px` }}>        <div className={s.inner}>          {list.map((item,i)=>            <div key={i} className={classnames(s.item,{sel:sel===i})}               style={{                width: `${width}px`,                 transform: `translate3d(-${width*i}px, 0px, 0px)`,                'zIndex': `${sel===i?1:-1}`              }}>              <a href="#">                <img src={item.img} />              </a>              <div className={s.desc}>                <label>{item.spec}</label>                <span>{item.name}</span>              </div>              <div className={s.btn} onClick={()=>doNav(item)}>{item.btn}</div>            </div>          )}        </div>      </div>      <div className={s.slideTips}>        {list.map((item,i)=>          <span key={i} className={classnames(s.tip,{sel:sel===i})}  >            <svg className={s.circle} width="14" height="14" viewBox="0 0 14 14">              <circle className="circle2" cx="7" cy="7" r="6.5" stroke="#ccc" strokeWidth="1" fill="none"></circle>              <circle className="circle1" cx="7" cy="7" r="6.5" stroke="#333" strokeWidth="1" fill="none"></circle>            </svg>          </span>          )}      </div>    </div>  )}export default Slide