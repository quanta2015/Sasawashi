import React from 'react';// import { useNavigate } from 'react-router-dom'// import {isN} from '@/util/fn'import { inject,observer } from 'mobx-react'import * as urls from '@/constant/urls'import {API_SERVER} from '@/constant/apis'import s from './index.module.less';import Slide from '@/component/Slide'const mobile = document.querySelector('html').clientWidth<768?'_sp':''const slideList = [{  img: `https://mqcai.top/img/slide01${mobile}.jpg`, btn: 'more'},{  img: `https://mqcai.top/img/slide02${mobile}.jpg`, btn: 'more'},{  img: `https://mqcai.top/img/slide03${mobile}.jpg`, btn: 'more'}]const Index = ({store}) => {  // const navigate = useNavigate();    return (      <div className={s.index}>      <div className={s.slide}>        <Slide list={slideList} />        <div className={s.info}>          <h1>SASAWASHI</h1>          <p>{"SASAWASHI, an oraganic fabric made from a combination of \n traditional japanese paper(Washi) and leaves of the k\n umazasa plant.this extraordinary gift of nature from japan \n has the ability to increase yuor health and well-being."}</p>          <div className={s.bot}>            <span>心地よさ、</span>            <span>つづく約束。</span>          </div>        </div>              </div>                </div>  )}export default  inject('store')(observer(Index))