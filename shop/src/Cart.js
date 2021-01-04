import React from 'react';
import {Table} from 'react-bootstrap';
import {connect} from 'react-redux';

function Cart(props){
    return (
        <div>
            <Table responsive>
                <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>{ props.state[0].name }</td> {/* props로 만들어졌기 때문에 props로 받아 props.~로 출력한다. */}
                    <td>Table cell</td>
                    <td>Table cell</td>
                </tr>
                
                </tbody>
            </Table>
            
        </div>
    )
}

// 컴포넌트에서 store에 있는 state 쓰려면
// 1. function 만들기
// 2. export default conntect()()
// 3. store 데이터를 props로 등록하기

function 함수명(state){ // redux store 데이터 가져와서 props로 변환해주는 함수
    return {
        state : state // state라는 이름의 props로 바꿔달라는 뜻.
        // 상품명 : state[0].name 과 같이 만들어 줘도 된다.
    }
}

export default connect(함수명)(Cart);
// export default Cart;