import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';


import {Provider} from 'react-redux';
import {combineReducers, createStore} from 'redux';

let alert초기값 = true;

function reducer2(state = alert초기값, 액션){
  if (액션.type === 'alert닫기'){
    return false
  } else {
    return state
  }
}


let 초기값 = [
  {id : 0, name : '멋진신발', quan : 2},
  {id : 1, name : '멋진신발2', quan : 1}
];

// 보낸 자료는 액션 파라미터에 저장되어있음.
function reducer( state = 초기값, 액션){
  // 액션.payload로 사용할 수 있음
  if(액션.type === '항목추가'){
    let copy = [...state];

    let found = state.findIndex( (a)=>{return a.name === 액션.payload.name }); // array 내에서 값이 있는지 알아내는 함수

    액션.payload.id = copy.length;
    if(found >= 0){
      let copy = [...state]
      copy[found].quan++;
      return copy;
    }else{
      let copy = [...state]
      copy.push(액션.payload)
      return copy;
    }
  }
  else if(액션.type === '수량증가'){
    let copy = [...state];
    copy[액션.데이터].quan++;
    return copy 
  }else if(액션.type === '수량감소'){
    let copy = [...state];
    copy[액션.데이터].quan--;
    return copy;
  }else{
    return state
  }
}

// state 보관함, 여러개 사용할 때는 combineReducers() 사용
let store = createStore( combineReducers({reducer, reducer2}) );

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
