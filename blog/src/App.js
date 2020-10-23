import React, { useState } from 'react'; 
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목,글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '강남 고기 맛집']); 
  let [따봉, 따봉변경] = useState(0);

  function 제목바꾸기(){
    {/* 
      미리 정의된 함수를 집어 넣을 때는 소괄호를 넣지 않는게 포인트
      ()를 적게되면 바로 실행되기 때문에. 버튼을 눌렀을 때 실행이 되어야 함!
    */}
    {/*var newArray = 글제목;  이렇게 복사하면 reference copy가 된다 주의 */}
    var newArray = [...글제목]; {/* deep copy!!! ...기호는 중괄호나 대괄호를 벗겨달라는 뜻으로 사용되거나 array/object자료형을 deepcopy시 사용 */}
    newArray[0] = '여자 코트 추천';
    글제목변경( newArray );
    {/* 
      state 변경 방법 (꼭 외우세요!!!)
      1. 일단 기존 state 카피본을 만들고
      2. 카피본에 수정사항 반영하고
      3. 변경함수()에 집어넣기
    */}
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
    </div>
  );
}

export default App;
