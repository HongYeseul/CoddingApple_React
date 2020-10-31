import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss'

let 박스 = styled.div`
    padding : 20px;
`;

let 제목 = styled.h4`
    font-sie : 25px;
    color : ${props => props.색상}
`;

// //Hook이라는 것을 사용해서 컴포넌트가 일할 때 중간 중간에 참견을 할 수 있다.
// //ex. Detail 컴포넌트 등장 전에 이것 좀 해줘
// class Detail2 extends React.Component{
//   componentDidMount(){
//     //Detail2 컴포넌트가 Mount 되고나서 실행할 코드
//     //컴포넌트 첫 등장 후 실행할 코드
//   }
//   componentWillUnmount(){
//     //Detail2 컴포넌트가 UnMount 되고나서 실행할 코드
//     //다른페이지로 넘어간다든지 등의 사유로 컴포넌트가 사라지기 전 실행 할 코드
//   }
// }

function Detail(props){

  useEffect(()=>{  // hook은 여러개 사용하고 싶으면 여러개도 생성 가능하다. (대신 코드 적힌 순서대로 실행)
    //컴포넌트가 mount, update 되었을 때 실행 가능
    //2초 후에 alert 창을 보이지 않게 하려면
    let 타이머 = setTimeout(()=>{
      
    }, 2000);
    return function 어쩌구() {
      //실행할 코드 
      // unmount 될 때 실행. (컴포넌트 사라질 때 실행되는 부분)
    }
  });

    let { id } = useParams(); 
    let history = useHistory();

    let 찾은상품 = props.shoes.find( x=> x.id == id);

    return (
      <div className="container">
          <박스>
            <제목 className="red">Detail</제목>
          </박스>
          <div className="my-alert2">
            <p>재고가 얼마 남지 않았습니다.</p>
          </div>
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