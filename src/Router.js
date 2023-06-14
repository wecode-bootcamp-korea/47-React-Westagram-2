import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// 김수정의 컴포넌트
import LoginSujeong from './pages/kimsujeong/LoginSujeong/LoginSujeong';
import MainSujeong from './pages/kimsujeong/MainSujeong/MainSujeong';

// 양회진의 컴포넌트
import LoginHoejin from './pages/yanghoejin/LoginHoejin/LoginHoejin';
import MainHoejin from './pages/yanghoejin/MainHoejin/MainHoejin';

// import 한 컴포넌트에 대한 경로를 각각 설정해줍니다.
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/LoginSujeong" element={<LoginSujeong />} />
        <Route path="/MainSujeong" element={<MainSujeong />} />
        <Route path="/LoginHoejin" element={<LoginHoejin />} />
        <Route path="/MainHoejin" element={<MainHoejin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
