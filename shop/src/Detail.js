import React, {useState} from 'react';
//컴포넌트 파일 만들 때는 꼭 import React를 해 주어야 함.
import {useHistory} from 'react-router-dom';

function Detail(){
    let history = useHistory();
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">상품명</h4>
            <p>상품설명</p>
            <p>120000원</p>
            <button className="btn btn-danger">주문하기</button> 
            <button className="btn btn-danger" onClick={()=>{
                history.goBack();
                // history.push('/') 하면 이 경로로 가게 할 수도 있다.
            }}>뒤로가기</button> 
          </div>
        </div>
      </div>
    )
}

  export default Detail;