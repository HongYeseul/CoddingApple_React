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
                    {
                        props.state.map((a,i) => {
                            return (
                                <tr key={i}>
                                    <td>{ a.id }</td>
                                    <td>{ a.name }</td>
                                    <td>{ a.quan }</td>
                                    <td><button onClick={()=>{ props.dispatch({type: '수량증가'}) }}>+</button> {/* dispatch(수정)요청 */}
                                        <button onClick={()=>{ props.dispatch({type: '수량감소'}) }}>-</button></td> 
                                </tr>
                            )
                        })
                    }
                
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