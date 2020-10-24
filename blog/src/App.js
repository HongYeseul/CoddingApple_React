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
    <Profile/> {/* 컴포넌트 아무데나 집어넣기 */}

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

// 옛날 리액트 문법
class Profile extends React.Component{
  constructor(){ // class의 변수/초기값을 저장할 때 쓴다.
    super();
    this.state = { name : 'Kim', age : 30} // state는 constructor안에 작성
  }

  changeName = ()=> {
    this.setState({name : 'Park'})
  }

  // changeName() { 로 쓰려면 함수를 불러오는 곳에서 .bind(this)를 사용해 줘야 한다.
  //   this.setState({name : 'Park'})
  // }

  render(){
    return(
      <div>
        <h3>프로필 입니다.</h3>
        <p>저는 { this.state.name }입니다.</p>
        <button onClick={ this.changeName }>버튼</button>
        {/* 최신문법에서 변경하는 함수들은 state를 대체를 해버리지만 setState()는 원하는 state를 변경만 해 준다. */}
        {/* 과거 리액트에서는 this를 써주는게 중요했다.  */}
      </div>
    )
  }
}

export default App;
