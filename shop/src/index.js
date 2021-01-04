import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';

// Redux 셋팅은
// 1. index.js에 <Provider>를 import 
// 2. state 값공유를 원하는 컴포넌트를 감싸면 된다.
// 3. createStore를 import 해온 다음 사용 법에 의해 state를 만들어 let store라는 변수에 저장
// 4. <Provider store={store}> 이렇게 store를 등록하면
// 이제 Provider로 감싼 컴포넌트는 전부 store안에 있던 값을 props없이 공유 가능

import {Provider} from 'react-redux';
//provider로 감싼 모든 컴포넌트들은 같은 state 공유 가능
import {createStore} from 'redux';
let store = createStore(()=>{ return [{id : 0, name : '멋진신발', quan : 2}]  });

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
