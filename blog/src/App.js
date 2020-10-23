import React, { useState } from 'react'; 
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목,글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '강남 고기 맛집']); 
  let [따봉, 따봉변경] = useState(0);

  let [modal, modal변경] = useState(false);

  /*
  function 제목바꾸기(){
    var newArray = [...글제목]; 
    newArray[0] = '여자 코트 추천';
    글제목변경( newArray );
  }
  */
  
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

      {/*<button onClick={ 제목바꾸기 }>버튼</button>*/}

      <div className="list">
        <h3> {글제목[1]}</h3>
        <p>2월 16일 발행</p>
        <hr/>
      </div>

      <div className="list">
        <h3 onClick={ ()=>{ modal변경(true)} }> {글제목[2]}</h3>
        <p>2월 10일 발행</p>
        <hr/>
      </div>

      <button onClick={ ()=> { modal변경(!modal)}}>버튼</button>
      {/* 리액트에서 if문은 동작하지 않는다. 대신 삼항연산자를 사용한다! */}
      {
        modal === true
        ? <Modal></Modal>
        : null /* 텅 빈 HTML */
        /*
        1 < 3 
        ? console.log('맞아요')
        : console.log('틀려요')
        */
      }
    </div>
  );
}

function Modal(){
  return(
    <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

export default App;
