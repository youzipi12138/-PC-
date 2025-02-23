import './Header.scss'
export default function Header(){

  return(
    <header>
    <div className="nav-left">
      <button className='arrow-button'>
          <i className="iconfont icon-zuojiantou"></i>
        </button>
        
        <div className="search-bar">
          <span className="search-icon">
            <i className="iconfont icon-sousuo"></i>
          </span>
          <input type="text" className='search-input'/>
        </div>
        
        <button className="maikefeng-button">
          <i className="iconfont icon-maikefeng"></i>
        </button>
    </div>
    <div className="profile-container">
      <div className="profile-ava">
        <img src="https://picsum.photos/600/400" alt="" />
      </div>
      <div className="info">
        我爱大米饭
      </div>

    </div>
      
      
    </header>
  )
}