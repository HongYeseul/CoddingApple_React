import React, {useContext, useEffect, useState} from 'react';
import { Navbar, Nav, NavDropdown, Button, Jumbotron } from 'react-bootstrap';
import {useHistory, useParams} from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss'

import {재고context} from './App.js';
import {CSSTransition} from 'react-transition-group'; //탭 키를 눌렀을 때 애니메이션 효과를 넣기 위함
// 이는 컴포넌트 등장/업데이트 시 transition을 쉽게 쉽게 줄 수 있다.
import { connect } from 'react-redux';

let 박스 = styled.div`
    padding : 20px;
`;

let 제목 = styled.h4`
    font-sie : 25px;
    color : ${props => props.색상}
`;

function Detail(props){

  let [alert, alert변경] = useState(true);
  let 재고 = useContext(재고context);

  let [누른탭, 누른탭변경] = useState(0); //이 때 0은 기본값
  let [스위치, 스위치변경] = useState(false);

  useEffect(()=>{  
    //2초 후에 alert 창을 보이지 않게 하려면
    let 타이머 = setTimeout(()=>{ alert변경(false) }, 2000);
    return ()=> { clearTimeout(타이머) } // timeOut쓸 때 꼭 써줘야함
  },[alert]); // 실행 조건 - alert라는 state가 변경이 될때만
  //실행 조건이 없다면 컴포넌트가 수정되는 모든 순간에 실행이 되기 때문에 자원낭비가 된다.
  //만약 조건이 없으면([]) Detail이 생성될 때 딱 한번만 실행하게 할 수 있다.

  let { id } = useParams(); 
  let history = useHistory();

  let 찾은상품 = props.shoes.find( x=> x.id == id);

  return (
    <div className="container">
        <박스>
          <제목 className="red">Detail</제목>
        </박스>

        {
          alert == true
          ? (<div className="my-alert2">
            <p>재고가 얼마 남지 않았습니다.</p>
            </div>)
          : null
        }

        
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}</p>

          <Info 재고={props.재고}></Info>

          <button className="btn btn-danger" onClick={()=>{
            props.재고변경([props.재고[0]-1,11,12]);
            props.dispatch( {type : '항목추가', payload : {id: 3, name : 찾은상품.title, quan:1} });
            history.push('/cart') // 페이지 이동 시(reload) 데이터가 초기화되기 때문에 라우터 함수를 이용하여 페이지 이동을 강제화
          }}>주문하기</button> 

          <button className="btn btn-danger" onClick={()=>{
              history.goBack();
          }}>뒤로가기</button> 
        </div>
      </div>

      {/* UI 만드는 법
        1. UI 상태를 true/false state로 저장해둠
        2. state에 따라 UI 보이게 안보이게

        => TAB UI 만드는 법
        1. 몇번째 버튼 눌렀는지를 state로 저장해둠
        2. state에 따라 UI 보이게 안보이게
      */}
      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0"> {/* defaultActiveKey : 기본으로 눌러진 버튼의 eventKey */}
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={()=>{ 스위치변경(false); 누른탭변경(0) }}>Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={()=>{ 스위치변경(false); 누른탭변경(1) }}>Option 2</Nav.Link>
        </Nav.Item>
      </Nav>

      {/* CSS Transition 사용법
        1. 애니메이션 필요한 곳 감싸기
        2. in, classNames, timeout 넣기 (in은 switch같은 역할)
        3. class로 애니메이션 넣기
        4. 원할 때 스위치 켜기
      */}
      <CSSTransition in={스위치} classNames="wow" timeout={500}>
        <TabContent 누른탭={누른탭} 스위치변경={스위치변경}/>
      </CSSTransition>
    </div>
  )
}

function TabContent(props){

  // 이 컴포넌트가 등장하거나 업데이트될 때 스위치 true로 바꿔주면됨.
  useEffect(()=>{
    props.스위치변경(true);
  });

  if(props.누른탭 === 0){
    return <div>0번째 누른 내용입니다.</div>
  }else if(props.누른탭 === 1){
    return <div>1번째 누른 내용입니다.</div>
  }
}


function Info(props){
  return(
    <p>재고 : {props.재고[0]}</p>
  )
}

// state를 props화 해주는걸 써줘야 dispatch도 가능해진다.
function 함수명(state){ // redux store 데이터 가져와서 props로 변환해주는 함수
  return {
      state : state.reducer, // reducer에 담긴 데이터 가져오기
      alert열렸니 : state.reducer2
  }
}

export default connect(함수명)(Detail); // connect도 import 해 주어야 함.