<<<<<<< HEAD
import React,{useState,useEffect} from 'react';import { inject,observer,MobXProviderContext } from 'mobx-react'import classnames from 'classnames';import {API_SERVER} from '@/constant/apis'import {ABOUT_CONCEPT,ABOUT_EVERYDAY_CONTENT,ABOUT_FEATURE,ABOUT_WASHIKUMAZASA,COMP_DESC,SHOP_LIST} from '@/constant/data'import s from './index.module.less';import bk_shop from '@/img/shop.jpg'import TitleLine from '@/component/TitleLine'const RenderHeader =(main,sub,size)=>(  <div className={classnames(s.hd, {big:size==='big'})}>    <label>{sub}</label>    <span>{main}</span>  </div>)const RenderConcept = (list) =>(  <div className={s.concept}>    {list.map((item,i)=>      <p key={i}>{item.content}</p>)    }  </div>  )const RenderContent = (list) =>(  <div className={s.content}>    {list.map((item,i)=>      <p key={i}>{item.content}</p>      )    }  </div>  )const RenderDetail = (item)=>(  <div className={s.shopDetail}>    <div className={s.row}>      <span>{item.content}</span>    </div>  </div>)const RenderList = (list)=>(  <>  {list.map((item,i)=>    <div key={i} className={s.shopitem}>      <div className={s.img}>        <picture>          <source media="(min-width: 769px)" srcSet={item.img} />          <img src={`${item.img.split('.jpg')[0]}_sp.jpg`} />        </picture>      </div>      <div className={s.detail}>        <i>{item.title}</i>        {RenderDetail(item)}      </div>    </div>  )}  </>)const RenderFeatureList = (list)=>(  <>  {list.map((item,i)=>    <div key={i} className={s.featureItem}>      <div className={s.img}>        <picture>          <source media="(min-width: 769px)" srcSet={item.img} />          <img src={`${item.img.split('.jpg')[0]}_sp.jpg`} />        </picture>      </div>      <div className={s.detail}>        <p>{item.en}          <span>{item.num}</span>        </p>        <h3>{item.title}</h3>        {RenderDetail(item)}      </div>    </div>  )}  </>)const About = () => {  const { store } = React.useContext(MobXProviderContext)  const [sel,setSel] = useState(0)    return (    <section>      <div className={s.about}>        <div className={s.header}>          <div className={s.info }>            <h1>About</h1>            <span>ささ和紙について</span>          </div>          <div className={s.bg}>            <picture>              <source media="(min-width: 769px)" srcSet="https://gigaplus.makeshop.jp/sasawashi/img/about/mv.jpg" />              <img src="https://gigaplus.makeshop.jp/sasawashi/img/about/mv.jpg" />            </picture>          </div>        </div>        <div className={s.sect}>          {RenderHeader('ものづくりへの想い','Concept')}          {RenderConcept(ABOUT_CONCEPT)}        </div>        <div className={s.gallery}>          <picture>            <source media="(min-width: 769px)" srcSet="https://gigaplus.makeshop.jp/sasawashi/img/about/gallery_01.jpg" />            <img src="https://gigaplus.makeshop.jp/sasawashi/img/about/gallery_01_sp.jpg" />          </picture>                  </div>        <div className={s.sect}>          {RenderHeader('ささ和紙がくれる心地よさ','Comfortable Everyday','big')}          {RenderContent(ABOUT_EVERYDAY_CONTENT)}        </div>        <div className={s.sect}>          {RenderFeatureList(ABOUT_FEATURE)}        </div>                <div className={s.gallery}>          <picture>            <source media="(min-width: 769px)" srcSet="https://gigaplus.makeshop.jp/sasawashi/img/about/gallery_02.jpg" />            <img src="https://gigaplus.makeshop.jp/sasawashi/img/about/gallery_02_sp.jpg" />          </picture>                      </div>        <div className={s.sect}>          {RenderHeader('和紙とくまざさ','Washi & Kumazasa')}          {RenderList(ABOUT_WASHIKUMAZASA)}        </div>        <div className={s.sect}>          {RenderHeader('ささ和紙ができるまで','SASAWASHI Until')}          {/*{RenderList(shopList)}*/}        </div>      </div>    </section>      )}export default  inject('store')(observer(About))
=======
import React,{useState,useEffect} from 'react';import { inject,observer,MobXProviderContext } from 'mobx-react'import classnames from 'classnames';import {API_SERVER} from '@/constant/apis'import {ABOUT_CONCEPT,ABOUT_EVERYDAY_CONTENT,ABOUT_FEATURE,ABOUT_WASHIKUMAZASA,COMP_DESC,SHOP_LIST} from '@/constant/data'import s from './index.module.less';import bk_shop from '@/img/shop.jpg'import TitleLine from '@/component/TitleLine'import FeatureItem from '@/component/FeatureItem'const RenderHeader =(main,sub,size)=>(  <div className={classnames(s.hd, {big:size==='big'})}>    <label>{sub}</label>    <span>{main}</span>  </div>)const RenderConcept = (list) =>(  <div className={s.concept}>    {list.map((item,i)=>      <p key={i}>{item.content}</p>)    }  </div>  )const RenderContent = (list) =>(  <div className={s.content}>    {list.map((item,i)=>      <p key={i}>{item.content}</p>      )    }  </div>  )const RenderDetail = (item)=>(  <div className={s.shopDetail}>    <div className={s.row}>      <span>{item.content}</span>    </div>  </div>)const RenderList = (list)=>(  <>  {list.map((item,i)=>    <div key={i} className={s.shopitem}>      <div className={s.img}>        <picture>          <source media="(min-width: 769px)" srcSet={item.img} />          <img src={`${item.img.split('.jpg')[0]}_sp.jpg`} />        </picture>      </div>      <div className={s.detail}>        <i>{item.title}</i>        {RenderDetail(item)}      </div>    </div>  )}  </>)const RenderFeatureList = (list)=>(  <>    </>)const About = () => {  const { store } = React.useContext(MobXProviderContext)  const [sel,setSel] = useState(0)    return (    <section>      <div className={s.about}>        <div className={s.header}>          <div className={s.info }>            <h1>About</h1>            <span>ささ和紙について</span>          </div>          <div className={s.bg}>            <picture>              <source media="(min-width: 769px)" srcSet="https://gigaplus.makeshop.jp/sasawashi/img/about/mv.jpg" />              <img src="https://gigaplus.makeshop.jp/sasawashi/img/about/mv.jpg" />            </picture>          </div>        </div>        <div className={s.sect}>          {RenderHeader('ものづくりへの想い','Concept')}          {RenderConcept(ABOUT_CONCEPT)}        </div>        <div className={s.gallery}>          <picture>            <source media="(min-width: 769px)" srcSet="https://gigaplus.makeshop.jp/sasawashi/img/about/gallery_01.jpg" />            <img src="https://gigaplus.makeshop.jp/sasawashi/img/about/gallery_01_sp.jpg" />          </picture>                  </div>        <div className={s.sect}>          {RenderHeader('ささ和紙がくれる心地よさ','Comfortable Everyday','big')}          {RenderContent(ABOUT_EVERYDAY_CONTENT)}        </div>        <div className={s.sect}>          {ABOUT_FEATURE.map((item,i)=>            <FeatureItem item={item} index={i} left={i%2===0}/>          )}        </div>                <div className={s.gallery}>          <picture>            <source media="(min-width: 769px)" srcSet="https://gigaplus.makeshop.jp/sasawashi/img/about/gallery_02.jpg" />            <img src="https://gigaplus.makeshop.jp/sasawashi/img/about/gallery_02_sp.jpg" />          </picture>                      </div>        <div className={s.sect}>          {RenderHeader('和紙とくまざさ','Washi & Kumazasa')}          {RenderList(ABOUT_WASHIKUMAZASA)}        </div>        <div className={s.sect}>          {RenderHeader('ささ和紙ができるまで','SASAWASHI Until')}          {/*{RenderList(shopList)}*/}        </div>      </div>    </section>      )}export default  inject('store')(observer(About))
>>>>>>> 2d53964b6c5ae8ca3b1fa6d9d80254df5cff2d69
