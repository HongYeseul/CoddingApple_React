import React, { useState } from 'react'; 
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목,글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '강남 고기 맛집']); 
  let [따봉, 따봉변경] = useState([0,0,0]);

  let [modal, modal변경] = useState(false);
  
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>

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
        ? <Modal 글제목={글제목} ></Modal> // 자식 컴포넌트
        : null 
        // props로 자식에게 state 전해주는 법
        // 1. <자식컴포넌트 작명={state명} />
        // 2. 자식컴포넌트에서 props 파라미터 입력 후 사용
        // 참고 > 꼭 중괄호 {}로 전송해야하는 것은 아님.
        //    <Modal 글제목="강남우동맛집"></Modal>으로 일반텍스트도 전송가능
      }
    </div>
  );
}

function Modal(props){ //부모에게 전달받은 props는 전부 들어가게 됨
  return(
    <div className="modal">
        <h2>제목 {props.글제목[0]}</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

export default App;
