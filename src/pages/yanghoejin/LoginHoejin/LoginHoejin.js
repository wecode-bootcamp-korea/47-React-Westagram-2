import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginHoejin.scss';

function LoginHoejin() {
  const navigate = useNavigate();

  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');

  function goToMain() {
    navigate('/MainHoejin');
  }

  const saveUserId = e => {
    setIdValue(e.target.value);
  };

  const savePwValue = e => {
    setPwValue(e.target.value);
  };

  return (
    <div className="loginHoejin">
      <div className="container">
        <h1>Westagram</h1>
        <div className="inputandbutton">
          <input
            id="name"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            defaultValue={idValue}
            onChange={e => {
              saveUserId(e);
            }}
          />
          <input
            id="password"
            type="password"
            placeholder="비밀번호"
            value={pwValue}
            onChange={e => {
              savePwValue(e);
            }}
          />
          <button id="button" onClick={goToMain}>
            로그인
          </button>
        </div>
        <p>비밀번호를 잊으셨나요?</p>
      </div>
    </div>
  );
}

export default LoginHoejin;
