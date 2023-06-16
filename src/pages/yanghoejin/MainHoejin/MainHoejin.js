import { useState } from 'react';
import './MainHoejin.scss';

function MainHoejin() {
  const [idValue, setIdValue] = useState('');
  const [saveComment, setSaveComment] = useState([]);
  const [btnColor, setBtnColor] = useState(0.3);

  const comment = e => {
    setIdValue(e.target.value);
  };

  const changeBtnColor = () => {
    setBtnColor(!btnColor);
  };

  const post = e => {
    const postSaveComment = [...saveComment];
    postSaveComment.push(idValue);
    setSaveComment(postSaveComment);
    setIdValue('');
  };

  const CommentFull = props => {
    return <p className="userComment">wecode {props.userComment}</p>;
  };

  return (
    <div className="mainHoejin">
      <main>
        <div className="feeds">
          <article>
            <div className="top">
              <div className="topleft">
                <img
                  className="roundimg"
                  alt="roundimg"
                  src="./images/yanghoejin/IMG_7632.jpg"
                />
                <p>ggul_bbang</p>
              </div>
              <img
                alt="더보기"
                src="./images/yanghoejin/free-icon-three-dots-6941941.png"
              />
            </div>
            <img
              className="mainimg"
              alt="mainimg"
              src="./images/yanghoejin/IMG_7631 2.jpg"
            />
            <div className="bottom">
              <div className="articleimg">
                <div className="articleimgleft">
                  <img alt="heart" src="./images/yanghoejin/heart.png" />
                  <img
                    alt="말풍선"
                    src="./images/yanghoejin/speech-bubble.png"
                  />
                  <img alt="공유" src="./images/yanghoejin/export-file.png" />
                </div>
                <img alt="책갈피" src="./images/yanghoejin/bookmark.png" />
              </div>
              <div className="good">
                <img
                  alt="좋아요누른사람"
                  src="./images/yanghoejin/IMG_7632.jpg"
                />
                <p>
                  <span className="weightbolder">wecode</span>님
                  <span className="weightbolder">외 10명</span>이 좋아합니다
                </p>
              </div>
              <p>
                <span className="weightbolder">ggul_bbang</span> 꿀빵이와 앙꼬
                그리고 햄빵이<span className="gray">더보기</span>
              </p>
              <div id="newComment">
                {saveComment.map((ele, idx) => {
                  return <CommentFull userComment={ele} key={idx} />;
                })}
              </div>
            </div>
            <form className="enterComment">
              <input
                id="input"
                placeholder="댓글 달기..."
                value={idValue}
                onChange={e => {
                  comment(e);
                }}
              />
              <button
                id="button"
                style={{ opacity: `${idValue > '0' ? 1 : 0.3}` }}
                disabled={idValue > '0' ? false : true}
                onChange={changeBtnColor}
                onClick={post}
              >
                게시
              </button>
            </form>
          </article>
        </div>
        <div className="main-right">
          <div className="wecode">
            <img
              alt="wecode"
              src="https://image.rocketpunch.com/company/99609/wecode_logo_1590553949.jpg?s=400x400&t=inside"
            />
            <div className="pTag">
              <p className="weightbolder">wecode_bootcamp</p>
              <p>WeCode | 위코드</p>
            </div>
          </div>
          <div className="story">
            <div className="letter">
              <p className="weightbolder gray">스토리</p>
              <p className="weightbolder">모두 보기</p>
            </div>
            <div className="eachStory">
              <img alt="스토리1" src="./images/yanghoejin/IMG_7632.jpg" />
              <div className="pTag">
                <p className="weightbolder">_yum_s</p>
                <p className="gray">16분 전</p>
              </div>
            </div>
            <div className="eachStory">
              <img alt="스토리2" src="./images/yanghoejin/IMG_7632.jpg" />
              <div className="pTag">
                <p className="weightbolder">drink_eat_drink</p>
                <p className="gray">3시간 전</p>
              </div>
            </div>
            <div className="eachStory">
              <img alt="스토리3" src="./images/yanghoejin/IMG_7632.jpg" />
              <div className="pTag">
                <p className="weightbolder">hyukyc</p>
                <p className="gray">20시간 전</p>
              </div>
            </div>
            <div className="eachStory">
              <img alt="스토리4" src="./images/yanghoejin/IMG_7632.jpg" />
              <div className="pTag">
                <p className="weightbolder">jminkeek</p>
                <p className="gray">23시간 전</p>
              </div>
            </div>
          </div>
          <div className="recommend">
            <div className="letter">
              <p className="weightbolder gray">회원님을 위한 추천</p>
              <p className="weightbolder">모두 보기</p>
            </div>
            <div className="eachRecommend">
              <img alt="추천1" src="./images/yanghoejin/IMG_7632.jpg" />
              <div className="pTag">
                <p className="weightbolder">joaaaaaahye</p>
                <p className="gray">_legend_a님 외 2명이 팔로우중입니다</p>
              </div>
              <p className="weightbolder blue">팔로우</p>
            </div>
            <div className="eachRecommend">
              <img alt="추천2" src="./images/yanghoejin/IMG_7632.jpg" />
              <div className="pTag">
                <p className="weightbolder">rampart81</p>
                <p className="gray">
                  ringo.in.seoul님 외 12명이 팔로우중입니다
                </p>
              </div>
              <p className="weightbolder blue">팔로우</p>
            </div>
            <div className="eachRecommend">
              <img alt="추천3" src="./images/yanghoejin/IMG_7632.jpg" />
              <div className="pTag">
                <p className="weightbolder">shawnjjoo</p>
                <p className="gray">jimmylee1220님 외 1명이 팔로우중입니다</p>
              </div>
              <p className="weightbolder blue">팔로우</p>
            </div>
          </div>
          <p className="gray">
            Instagram 정보﹒지원﹒홍보 센터﹒API﹒채용
            정보﹒개인정보처리방침﹒약관﹒디렉터리﹒프로필﹒해시태그﹒언어
          </p>
          <p className="gray">ⓒ 2019 INSTAGRAM</p>
        </div>
      </main>
    </div>
  );
}

export default MainHoejin;
