import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// 김코드의 컴포넌트
import LoginCode from './pages/kimsujeong/Login/Login';
import MainCode from './pages/kimsujeong/Main/Main';

// 김개발의 컴포넌트
import LoginGaebal from './pages/yanghoejin/Login/Login';
import MainGaebal from './pages/yanghoejin/Main/Main';

// import 한 컴포넌트에 대한 경로를 각각 설정해줍니다.
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-code" element={<LoginCode />} />
        <Route path="/main-code" element={<MainCode />} />
        <Route path="/login-gaebal" element={<LoginGaebal />} />
        <Route path="/main-gaebal" element={<MainGaebal />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
