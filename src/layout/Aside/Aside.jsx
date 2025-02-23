import { useState } from 'react';
import './Aside.scss';
import { Divider } from 'antd';

export default function Aside() {
  const [isHidden1, setIsHidden1] = useState(true);

  const toggle1 = () => {
    setIsHidden1(!isHidden1);
  };
  const [isHidden2, setIsHidden2] = useState(true);

  const toggle2 = () => {
    setIsHidden2(!isHidden2);
  };

  return (
    <aside>
      <nav>
        <i className="iconfont icon-wangyiyunyinle-"></i>
      </nav>
      <div className="list1">
        <ul>
          <li>
            <span>推荐</span>
          </li>
          <li>
            <span>精选</span>
          </li>
          <li>
            <span>播客</span>
          </li>
          <li>
            <span>漫游</span>
          </li>
          <li>
            <span>动态</span>
          </li>
        </ul>
      </div>
      <Divider className="divider" />
      <div className="center">
        <span>我的</span>
        <span>修改</span>
      </div>
      <div className="list1">
        <ul>
          <li>
            <span>我喜欢的音乐</span>
          </li>
          <li>
            <span>最近播放</span>
          </li>
          <li>
            <span>我的播客</span>
          </li>
          <li style={isHidden1 ? { display: 'none' } : undefined}>
            <span>我的收藏</span>
          </li>
          <li style={isHidden1 ? { display: 'none' } : undefined}>
            <span>下载管理</span>
          </li>
          <li style={isHidden1 ? { display: 'none' } : undefined}>
            <span>我的音乐网盘</span>
          </li>
        </ul>
        <li> {/* 更多按钮放在 ul 外面 */}
          <div className="more" onClick={toggle1}>
            {isHidden1 ? (
              <>
                <i className="iconfont icon-xiangxia"></i>
                <span>更多</span>
              </>
            ) : (
              <>
                <i className="iconfont icon-xiangshang"></i>
                <span>收起</span>
              </>
            )}
          </div>
        </li>
      </div>
      <Divider className="divider" />

      {/* <div className="nav">
        <span>创建歌单 27</span>
        <i className="iconfont icon-xiangxia"></i>
      </div> */}
      <div className="list1">
        <ul>
          <li onClick={toggle2}>
            <span>创建歌单 27</span>
            { isHidden2 ?(<i className="iconfont icon-xiangxia"></i>) : (<i className="iconfont icon-xiangshang"></i>)}
          </li>
          <div style={isHidden2 ? { display: 'none' } : undefined}>
            <li>
              <img  className="img"src="https://picsum.photos/600/400" alt="" />
              <span>我喜欢的音乐</span>
            </li>
            <li>
              <span>最近播放</span>
            </li>
            <li>
              <span>我的播客</span>
            </li>
            <li>
            <span>我的收藏</span>
          </li>
          <li >
            <span>下载管理</span>
          </li>
          <li>
            <span>我的音乐网盘</span>
          </li>    
          </div>
        </ul>
        <li> {/* 更多按钮放在 ul 外面 */}
          <Divider className="divider" />
        </li>
      </div>
    </aside>
  );
}
