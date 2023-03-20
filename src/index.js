import React from 'react';
import { Routes, Route, HashRouter, BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { Provider } from 'mobx-react'
import { configure } from 'mobx'
import { ConfigProvider } from 'antd'
import Loadable from '@/component/Loadable'
import zhCN from 'antd/es/locale/zh_CN'
import injects from '@/store'

import '@/less/var.less'
import '@/less/com.less'


configure({enforceActions: 'observed'})


let Index  = Loadable({ loader: () => import('./app/index')})
let Layout = Loadable({ loader: () => import('./app/layout')})
// let Product  = Loadable({ loader: () => import('./app/product')})
// let About    = Loadable({ loader: () => import('./app/about')})
// let Guide    = Loadable({ loader: () => import('./app/guide')})
let News     = Loadable({ loader: () => import('./app/news')})
let Shop     = Loadable({ loader: () => import('./app/shop')})
// let Contact  = Loadable({ loader: () => import('./app/contact')})


let Slide  = Loadable({ loader: () => import('./app/slide')})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider {...injects}>
    <ConfigProvider locale={zhCN}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/"        element={<Index />} />
            {/*<Route path="/product" element={<Product />} />*/}
            {/*<Route path="/about"   element={<About />} />*/}
            {/*<Route path="/guide"   element={<Guide />} />*/}
            <Route path="/news"    element={<News />} />
            <Route path="/shop"    element={<Shop />} />
            {/*<Route path="/contact"    element={<Contact />} />*/}

            <Route path="/slide"  element={<Slide />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  </Provider>
);
