import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSujeong.scss';

const LoginSujeong = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const isEmailValid = email.includes('@');
  const isButtonDisabled = !isEmailValid || password.length < 5;

  const handleSubmit = e => {
    e.preventDefault();
    if (!isEmailValid) {
      alert('@ 포함 여부를 확인해주세요');
    } else if (password.length < 5) {
      alert('비밀번호는 5자리 이상 입력해주세요');
    } else {
      alert('✅ 로그인에 성공하셨습니다.');
      navigate('/MainSujeong');
    }
  };

  return (
    <div className="loginSujeong">
      <div className="content-wrap">
        <form onSubmit={handleSubmit}>
          <h1>westagram</h1>
          <div className="input-box">
            <input
              onChange={e => setEmail(e.target.value)}
              type="text"
              value={email}
              placeholder=" 전화번호, 사용자 이름 또는 이메일"
              className={!isEmailValid ? 'invalid' : ''}
            />
          </div>
          <input
            onChange={e => setPassword(e.target.value)}
            type="password"
            value={password}
            placeholder=" 비밀번호"
            className={password.length < 5 ? 'invalid' : ''}
          />

          <button
            type="submit"
            className="login-btn"
            disabled={isButtonDisabled}
            style={{
              backgroundColor: isButtonDisabled ? 'grey' : 'rgb(45, 139, 240)',
            }}
          >
            로그인
          </button>
        </form>

        <a href="https://www.instagram.com/accounts/password/reset/">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </div>
  );
};

export default LoginSujeong;
