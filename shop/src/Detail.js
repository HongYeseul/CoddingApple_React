import React, {useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import styled from 'styled-components';

//컴포넌트에 직접 스타일 넣어서 스타일링 하기
//css를 미리 입혀놓은 컴포넌트
let 박스 = styled.div`
    padding : 20px;
`;

let 제목 = styled.h4`
    font-sie : 25px;
    color : ${props => props.색상}
    // props.색상이 아닌 콜백 함수로 집어넣어야함!
`;

// 컴포넌트가 많은 경우 스타일링을 하다보면 불편함이 생기는데
// 1. class 만들어놓은걸 까먹고 중복해서 또 만들거나
// 2. 갑자기 다른 이상한 컴포넌트에 원하지않는 스타일이 적용되거나
// 3. CSS 파일이 너무 길어져서 수정이 어렵거나
// 이런 경우 styled-components 라이브러리 사용

// styled-component의 장점은
// 1. 스타일넣을 때 다른 파일이랑 컴포넌트 명이 겹쳐도 전혀 CSS적으로 문제가 생기지 않음
// 2. 나중에 컴포넌트 스타일 수정을 원할 때 CSS가 아니라 컴포넌트 파일을 찾으면 되니 수정도 편리
// 개인적으로 CSS 아키텍쳐를 잘하면 CSS + SASS로 작성한 뒤 원하는 css 파일만 import 쓰는게 전체적 스타일 관리하는데 편리할 것이고
// CSS 초보자라면 styled-components 라이브러리 이용하는게 관리하기 편할 수 있지만
// 사내에 퍼블리셔라든지 CSS 디자인 담당하는 사람이 있으면 이런 라이브러리는 안쓰는게 좋다.
// 그리고 라이브러리가 리액트 숙련도를 요구하기 때문에 협업이 어려울 수 있다.


function Detail(props){
    let { id } = useParams(); 
    let history = useHistory();

    let 찾은상품 = props.shoes.find( x=> x.id == id);

    return (
      <div className="container">
          <박스>
            <제목 색상="red">Detail</제목>
            <제목 색상="blue">Detail</제목>
            {/* props 문법
                보낼이름 = {변수명}
                보낼이름 = "일반문자"
            */}
          </박스>
        <div className="row">
          <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{찾은상품.title}</h4>
            <p>{찾은상품.content}</p>
            <p>{찾은상품.price}</p>
            <button className="btn btn-danger">주문하기</button> 
            <button className="btn btn-danger" onClick={()=>{
                history.goBack();
            }}>뒤로가기</button> 
          </div>
        </div>
      </div>
    )
}

  export default Detail;