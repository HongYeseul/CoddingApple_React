import React, { useState } from 'react'; 
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목,글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '강남 고기 맛집']); 
  let [따봉, 따봉변경] = useState([0,0,0]);

  let [modal, modal변경] = useState(false);

  var 어레이 = [2,3,4];
  {/* map을 사용하면 각각의 값에 *2를 해서 새로운 어레이가 생성 된다. => 유사 반복문*/}
  var 뉴어레이 = 어레이.map(function(a){
    return a*2
  });
  
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      {/*
      <div className="list">
        <h3> {글제목[0]} <span onClick={ ()=>{ 따봉변경(따봉+1) } }>👍</span> {따봉} </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>

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
      */}
    {
      글제목.map(function(글, 좋아요){ //파라미터가 차례대로 넘어온다.
        return ( 
        <div className="list">
              <h3> {글} <span onClick={ ()=>{
                var newArray = [...따봉];
                newArray[좋아요]++;
                따봉변경(newArray) 
                } }>👍</span> {따봉[좋아요]}</h3>
              <p>2월 16일 발행</p>
              <hr/>
          </div>
        )  
      })
    }

      <button onClick={ ()=> { modal변경(!modal)}}>버튼</button>
      {
        modal === true
        ? <Modal></Modal>
        : null 
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
