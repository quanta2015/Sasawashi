import React,{useState,useEffect} from 'react';import classnames from 'classnames';import {API_SERVER} from '@/constant/apis'import s from './index.module.less';import Slide from '@/component/Slide'const width = '600'const list = [{  name:'ルームブーツ',  spec: '足がムレない、心地よいサラサラ感',  img: 'slide_1.jpg',  link: '#'},{  name:'ルームブーツ',  spec: '足がムレない、心地よいサラサラ感',  img: 'slide_2.jpg',  link: '#'},{  name:'ルームブーツ',  spec: '足がムレない、心地よいサラサラ感',  img: 'slide_3.jpg',  link: '#'}]const Index = () => {    return (    <div className={s.slide}>      <Slide width={width} list={list} />    </div>  )}export default Index