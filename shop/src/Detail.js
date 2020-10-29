import React, {useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';


function Detail(props){
    let { id } = useParams(); // parameter값 저장-> {사용자가 입력한 URL 파라미터들}
    // 여러개를 입력 받을 시 id, id2, id3 로 넣어주면 됨.

    //만약 shoes의 데이터 순서가 바뀐다면 ? 상세페이지도 이상해짐
        //-> 상품의 영구번호를 활용하자!
        // -> 전체 자료 중에 영구번호 0을 가진 데이터의 제목으로 사용!
    let history = useHistory();

    // find()는 array뒤에 붙일 수 있으며, 안에 콜백 함수가 들어간다.
    // 콜백 함수 내의 파라미터(상품)에는 array안에 있던 하나하나의 데이터를 의미
    // return에는 조건식을 적을 수 있고, 참인 데이터만 새로운 변수에 저장해 준다.
    let 찾은상품 = props.shoes.find(function (상품){
        return 상품.id == id
    });

    return (
      <div className="container">
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
                // history.push('/') 하면 이 경로로 가게 할 수도 있다.
            }}>뒤로가기</button> 
          </div>
        </div>
      </div>
    )
}

  export default Detail;