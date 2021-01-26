import React, {useEffect, memo} from 'react';
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
                                    <td><button onClick={()=>{ props.dispatch({type: '수량증가', 데이터 : a.id }) }}>+</button> 
                                        <button onClick={()=>{ props.dispatch({type: '수량감소', 데이터 : a.id }) }}>-</button></td> 
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
            <Parent 이름="예슬" 나이="20"/>
        </div>
    )
}


//props를 사용하여 예슬, 20이라는 데이터를 각각 child1, 2에 전달한다고 가정한다.
//이 때 이름만 변경되거나 나이만 변경되는, 즉 둘 중 하나만 변경이 되더라도 모든 Child는 재렌더링이 일어난다.
//이러한 재렌더링을 막기위해서는 memo()를 사용하면 된다. (= props 변경이 안된 컴포넌트는 재렌더링 하지말아주세요.)
function Parent(props){
    return (
        <div>
            <Child1 이름={props.이름}/>
            <Child2 나이={props.나이}/> 
        </div>
    )
}

function Child1(){
    useEffect( ()=>{ console.log('렌더링됨1') } );
    return <div>1111</div>
}

let Child2 = memo(function(){
    useEffect( ()=>{ console.log('렌더링됨2') } );
    return <div>2222</div>
}) // 하지만 memo()로 감싼 컴포넌트는 재렌더링을 시키지 않으려고 기존 props와 바뀐 props를 비교하는 연산을 추가로 진행하므로 props가 크고 복잡하면 이 자체로도 부담이 될 수 있음을 참고로 알아두자.


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