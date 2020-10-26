import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';
// 라이브러리 import
// BrowserRouter vs HashRouter -> HashRouter은 라우팅을 좀더 안전하게 할 수있게 도와줌
// Hash : (서버가 없어서 서버에게 요청하지 않게하기 위해 사용, url에 #을 적게되는데 #뒤에 적게되는 것은 서버로 전송하지 않음)
// Browser : 라우팅을 리액트가 아니라 서버에게 요청할 수도 있어서 위험

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
