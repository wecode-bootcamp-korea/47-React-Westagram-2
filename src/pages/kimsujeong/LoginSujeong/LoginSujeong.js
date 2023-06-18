import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './LoginSujeong.scss';

const LoginSujeong = () => {
  const [ID, setID] = useState('');
  const [password, setPassword] = useState('');

  const isButtonDisabled = !ID || !password;
  const navigate = useNavigate();

  const saveUserId = e => {
    setID(e.target.value);
  };

  const savePassword = e => {
    setPassword(e.target.value);
  };

  return (
    <div className="loginSujeong">
      <div className="content-wrap">
        <form>
          <h1>westagram</h1>
          <div className="input-box">
            <input
              onChange={saveUserId}
              type="text"
              value={ID}
              placeholder=" 전화번호, 사용자 이름 또는 이메일"
            />
          </div>
          <input
            onChange={savePassword}
            type="password"
            value={password}
            placeholder=" 비밀번호"
          />
          <Link to="/MainSujeong">
            <button
              type="submit"
              className="login-btn"
              disabled={isButtonDisabled}
              onClick={() => {
                navigate('/MainSujeong');
              }}
            >
              로그인
            </button>
          </Link>
        </form>

        <a href="https://www.instagram.com/accounts/password/reset/">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </div>
  );
};

export default LoginSujeong;
