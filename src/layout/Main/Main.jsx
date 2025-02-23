import './Main.scss'
import { Carousel } from 'antd';

const contentStyle = {
  height: '150  px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
export default function Main(){

  return(
    <main>
      <Carousel className='carousel' autoplay style={{ borderRadius: '10px', overflow: 'hidden'}}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
      <div className="box">
        <div className="box-nav">
          <div className="box-nav-left">
            <h1>晚上好，</h1>
            <span>猜你最近喜欢听</span>
          </div>
          <div className="box-nav-right">
            <button className='arrow-button'>
              <i className="iconfont icon-zuojiantou"></i>
            </button>
            <button className='arrow-button'>
              <i className="iconfont icon-zuojiantou"></i>
            </button>
          </div>
        </div>
        <div className="container">
          <div className="imgContainer">
            <img src="https://picsum.photos/600/400" alt="" />
          </div>
          <div className="imgContainer">
            <img src="https://picsum.photos/600/400" alt="" />
          </div>
          <div className="imgContainer">
            <img src="https://picsum.photos/600/400" alt="" />
          </div>
          <div className="imgContainer">
            <img src="https://picsum.photos/600/400" alt="" />
          </div>
        </div>
      </div>
    </main>
  )
}