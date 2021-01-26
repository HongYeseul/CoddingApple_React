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
                                    <td>{ a.quan }</td> { /* dispatch할 때 데이터도 같이 보내는 방법 */ }
                                    <td><button onClick={()=>{ props.dispatch({type: '수량증가', payload : {name: 'kim'}}) }}>+</button> {/* dispatch(수정)요청 */}
                                        <button onClick={()=>{ props.dispatch({type: '수량감소'}) }}>-</button></td> 
                                </tr>
                            )
                        })
                    }
                
                </tbody>
            </Table>
            { props.alert열렸니 === true
            ? <div className="alert alert-primary">
                <p>지금 구매하시면 신규할인 20%</p>
                <button onClick={()=>{props.dispatch({type : 'alert닫기'})}}>닫기</button>
            </div>
            : null
            }
        </div>
    )
}

// 컴포넌트에서 store에 있는 state 쓰려면
// 1. function 만들기
// 2. export default conntect()()
// 3. store 데이터를 props로 등록하기

// 하지만 이 부분은 이 페이지에서만 사용하는 데이터이므로 redux에 저장해서 가져오는 것은 좋지 않은 습관이므로 주의가 필요하다.
function 함수명(state){ // redux store 데이터 가져와서 props로 변환해주는 함수
    return {
        state : state.reducer, // reducer에 담긴 데이터 가져오기
        alert열렸니 : state.reducer2
    }
}

export default connect(함수명)(Cart);