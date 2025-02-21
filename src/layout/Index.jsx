import Aside from "./Aside/Aside";
import Header from "./Header/Header"
import Main from "./Main/Main"
import Footer from "./Footer/Footer"

import './index.scss'

export default function Index(){
  
  
  return(
    <div className="layout">
      <section>
        <Aside/>
        <section className="left">
          <Header/>
          <Main/>
        </section>
      </section>
      <Footer/>
    </div>
  )
}