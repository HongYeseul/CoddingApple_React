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

    <div className="publish">
      <input onChange={ (e)=>{ 입력값변경(e.target.value) }}/>
      <button onClick={ ()=> {
        var arrayCopy = [...글제목]
        arrayCopy.unshift(입력값) // 배열 맨앞에 자리를 하나 추가 해 주세요.
        글제목변경(arrayCopy)
      }}>저장</button>
    </div>

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
