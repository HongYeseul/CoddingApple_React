import React, { useState } from 'react'; 
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목,글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '강남 고기 맛집']); 
  let [따봉, 따봉변경] = useState(0);

  function 제목바꾸기(){
    var newArray = [...글제목]; 
    newArray[0] = '여자 코트 추천';
    글제목변경( newArray );
  }
  
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <div className="list">
        <h3> {글제목[0]} <span onClick={ ()=>{ 따봉변경(따봉+1) } }>👍</span> {따봉} </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>

      <button onClick={ 제목바꾸기 }>버튼</button>

      <div className="list">
        <h3> {글제목[1]}</h3>
        <p>2월 16일 발행</p>
        <hr/>
      </div>

      <div className="list">
        <h3> {글제목[2]}</h3>
        <p>2월 10일 발행</p>
        <hr/>
      </div>

      <Modal />
      {/* 
        Component 만들때 주의 사항
        1. 이름은 대문자로 시작
        2. return 소괄호 안에 내용을 담는데, return()안에 있는 건 태그 하나로 묶어야함

        Component를 사용하면,
        컴포넌트 안에 컴포넌트를 넣는 등 관리가 편해짐

        어떤 것들을 Component로 만드는 것이 좋을까?
        - 반복 출현하는 HTML 덩어리들
        - 자주 변경되는 HTML UI들
        - 다른 페이지를 만들 때

        단점
        - State를 사용할 때 복잡해짐
          -> 상위 컴포넌트에서 만든 state를 사용하려면 props문법을 이용해야함
       */}
    </div>
  );
}

function Modal(){
  return(
    <> {/* div가 쓰기 싫다면 <>, </> 로 해주어도 됨 */}
    <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  )
}

export default App;
