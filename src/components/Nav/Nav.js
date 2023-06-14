import React from 'react';
import './Nav.scss';

function Nav() {
  return (
    <nav className="nav">
      <div className="logo">
        <img alt="instaimg" src="./images/yanghoejin/instagram.png" />
        <p>|</p>
        <h1>Westagram</h1>
      </div>
      <div className="searchUser">
        <input className="explore" placeholder="🔍검색" />
        {/* <div id="search"></div> */}
      </div>
      <div className="emoji">
        <img alt="나침반" src="./images/yanghoejin/explore.png" />
        <img alt="heart" src="./images/yanghoejin/blackheart.png" />
        <div className="manPlusProfile">
          <button id="man">
            <img alt="man" src="./images/yanghoejin/profile.png" />
          </button>

          <div className="profileMenu">
            <div className="eachProfile">
              <img alt="프로필" src="./images/yanghoejin/IMG_7632 2.jpg" />
              <p>프로필</p>
            </div>
            <div className="eachProfile">
              <img alt="저장됨" src="./images/yanghoejin/bookmark.png" />
              <p>저장됨</p>
            </div>
            <div className="eachProfile">
              <img
                alt="설정"
                src="./images/yanghoejin/free-icon-settings-cogwheel-63827.png"
              />
              <p>설정</p>
            </div>
            <div className="logout">
              <p>로그아웃</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
