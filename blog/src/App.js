import React, { useState } from 'react'; 
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목,글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '강남 고기 맛집']); 
  let [따봉, 따봉변경] = useState([0,0,0]);

  let [modal, modal변경] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);

  let [입력값, 입력값변경] = useState('');
  
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>

    {
      글제목.map(function(글, i){ 
        return ( 
        <div className="list" key={i}>  
              {/* map을 쓰면 콘솔창에 에러가 뜨는 이유는 key={}의 속성을 적지 않아서 그렇다. 
                  key={}안에는 반복문이 돌 때마다 0,1,2... 이렇게 하나씩 증가하는 변수를 넣어주면 된다.*/}
              <h3 onClick={ ()=> { 누른제목변경(i) } } > {글} <span onClick={ ()=>{
                var newArray = [...따봉];
                newArray[i]++;
                따봉변경(newArray) 
                } }>👍</span> {따봉[i]}</h3>
              <p>2월 16일 발행</p>
              <hr/>
          </div>
        )  
      })
    }

    {/* {입력값} */}
    <input onChange={ (e)=>{ 입력값변경(e.target.value) } } /> 

    {/* 자바스크립트 문법
        input에 입력한 값을 알고 싶으면 input에 onChange이벤트 핸들러를 달면 가능하다.
        e.target이라는건 '지금 이벤트가 동작하는 HTML요소', .value라는건 input등에 입력한 값을 의미
        cf) <input>태그는 원래 html에선 그냥 쓸 수 있지만 리액트에서는 <input />으로 쓰거나 닫힘태그를 꼭 써주어야 한다.
    */}
    

      <button onClick={ ()=> { modal변경(!modal)}}>버튼</button>
      {
        modal === true
        ? <Modal 글제목={글제목} 누른제목={누른제목}></Modal> 
        : null 
      }
    </div>
  );
}

function Modal(props){ 
  return(
    <div className="modal">
        <h2>{props.글제목[props.누른제목]}</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

export default App;
