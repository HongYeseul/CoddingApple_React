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

function Detail(props){

  let [alert, alert변경] = useState(true);

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