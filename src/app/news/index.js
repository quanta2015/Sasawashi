import React,{useState,useEffect} from 'react';
import { inject,observer,MobXProviderContext } from 'mobx-react'
import classnames from 'classnames';
import {API_SERVER} from '@/constant/apis'
import { NEWS_LIST} from '@/constant/data'

import s from './index.module.less';

import TitleLine from '@/component/TitleLine'
import ToTop     from '@/component/ToTop'

import right from '@/img/right.svg'


const News = () => {

  const [detail,setDetail] = useState(false)
  const [sel,setSel]= useState(0)

  const doShowDetail =(index)=>{
    window.scrollTo({ top: 0 });
    setSel(index)
    setDetail(true)
  }


  const doHideDetail =()=>{
    window.scrollTo({ top: 0 });
    setDetail(false)
  }
  

  const RenderNewsList = (list)=>(
    <>
    {list.map((item,i)=> 
      <div key={i} className={s.newItem} onClick={()=>doShowDetail(i)}>
        <h1>{item.date}</h1>
        <p>{item.title}</p>
        <img src={right} />
      </div>
    )}
    </>
  )

  

  return (
    <section>

      {!detail &&
      <div className={s.newsList}>
        <div className={s.header}>
        <div className={s.main}>
          <div className={s.title}>
            <h1>News</h1>
            <span>お知らせ</span>
          </div>
          <div className={s.content}>
            {RenderNewsDetail(newsList)}
            <div className={s.pager}>
              <span>1</span>
            </div> 
          </div> 
        
        </div>


        <ToTop />
      </div>}



      {detail &&
      <div className={s.newsDetail}>
        <div className={s.date}>{NEWS_LIST[sel].date}</div>
        <TitleLine title={NEWS_LIST[sel].title} type={'all'}/>
        <p className={s.detail}>
          {NEWS_LIST[sel].content}
        </p>

        <div className={s.return} onClick={doHideDetail}>News 一覧に戻る</div>
      </div>}

    </section>
  )
}


export default  inject('store')(observer(News))