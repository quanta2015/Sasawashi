import React from 'react'
import { Outlet } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import Footer from '@/component/Footer'

import s from './index.module.less';
import logo from '@/img/logo.svg'



const Layout = () => {
  // const navigate = useNavigate()
  // const { store } = React.useContext(MobXProviderContext)


	 
  return (
    <>
      <div className={s.nav}>
        <div className={s.logo}>
          <img src={logo} alt=""/>
          <span>ONLINE SHOP</span>
        </div>

        <div className={s.wrap}>
          
        </div>
      </div>
      
      <Outlet />


      <Footer />
    </>
  )
 
}

export default inject('store')(observer(Layout))
