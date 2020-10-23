import React, { useState } from 'react'; 
import logo from './logo.svg';
import './App.css';
{/* state 사용하기 
  1. 변수 대신 쓰는 데이터 저장공간
  2. useState()를 이용해 만들어야 함 뱉는 것은 [state 데이터, state 데이터 변경 함수]
  3. 문자, 숫자, array, object 전부 저장 가능
  state만의 장점?
  -> 웹이 App처럼 동작하게 만들려면 중요한 데이터는 state에 보관 해야함
  -> 글 제목 등이 변경될 때 혹은 순서가 바뀔 때 (state는 변경되면) 새로고침 없어도 HTML이 자동으로 재렌더링됨
    = html이 새로고침 없이도 스무스하게 변경 됨
  => 자주 바뀌는, 중요한 데이터는 변수 말고 state 쓰기!!
*/}
function App() {

  let [글제목,글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '강남 고기 맛집']); 
  {/* destructuring, a에는 데이터가 들어가고 b에는 데이터를 변경하는 함수가 들어간다.*/}
  
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <div className="list">
        <h3> {글제목[0]}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>

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
