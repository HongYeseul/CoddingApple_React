import React, {useState, useContext, lazy, Suspense} from 'react';
import { Navbar, Nav, NavDropdown, Button, Jumbotron } from 'react-bootstrap';
import './App.css';
import Data from './data.js';
import axios from 'axios';
import Cart from './Cart.js';
import {Link, Route, Switch, useHistory} from 'react-router-dom'
let Detail = lazy( ()=>{ return import('./Detail.js') } ); // 상단에 import가 먼저 온 후 선언을 해야 에러가 나지 않음!
// 메인페이지 방문시 한번에 다른 페이지들을 모두 import 해온다.
// 이렇게 되면 사이트 초기 접속속도가 굉장히 느려질 수 있기 때문에 첫 방문시 import가 바로 필요없는 페이지는 lazy하게 import를 시키는 방법도 있다.

// export는 외부로 보내기 위해 사용하는 함수. Detail.js로 보내기 위해 사용하였다.
export let 재고context = React.createContext();
// 1. props 대신 context를 쓰자!
// --> 하위 컴포넌트들이 props 없이도 부모의 값을 사용가능
// context 만들기
//    1. React.createContext()로 범위 생성
//    2. 같은 값을 공유할 HTML을 <범위>로 싸매기
//    3. useContext(범위)로 공유된 값을 사용하기

// 2. Reducx 라는 라이브러리 사용하기!
// : 모든 컴포넌트 파일들이 같은 값을 공유할 수 있는 저장공간 생성 가능 
//    + state 데이터 관리 기능

function App() {

  let [shoes, shoes변경] = useState(Data);
  let [재고, 재고변경] = useState([10, 11, 12]);

  return (
    <div className="App">
      
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
    </Navbar>

    <Switch>
      <Route exact path="/"> 
        <Jumbotron className="background">
          <h1>20% Season OFF</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>

        <div className="container">

          <재고context.Provider value={재고}>
            <div className="row">
              {
                shoes.map((a, i)=>{
                  return <Card shoes={shoes[i]} i={i} key={i}/> 
                  // Card에서 props 없이 재고를 갖다 쓸 수 있다.
                })
              }
            </div>
          </재고context.Provider>

          
          <button className="btn btn-primary" onClick={()=>{

            axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((result)=>{
              console.log("Complete");
              console.log(result.data); 

              shoes변경([...shoes, ...result.data]);
            })
            .catch(()=>{
              console.log("FAIL");
            })
          }}>더보기</button>
        </div>
      </Route>

      <Route path="/detail/:id"> 
          {/* 다른파일로 전송하고 싶을 때 */}
          <재고context.Provider value={재고}>
            <Suspense fallback={ <div>로딩중입니다~!</div> }> {/* 컴포넌트 로딩 전까지 띄울 HTML */}
              <Detail shoes={shoes} 재고={재고} 재고변경={재고변경}/> {/* Detail컴포넌트가 필요해질때 그때서야 import Detail을 해준다. */}
            </Suspense>
          </재고context.Provider>
      </Route>
      
      <Route path="/cart">
        {/* redux 쓰는 이유 ?
          1. props 없이 모든 컴포넌트가 state 갖다 쓰기 가능
          2. state 데이터 관리 가능
        */}
        <Cart/>
      </Route>

    </Switch>
    </div>
  );
}

function Card(props) {
  let 재고 = useContext(재고context);
  let history = useHistory();
  // 이 문법은 props 안에 props 안에 props ... 였을 때 편한 문법일 수 있으나, 평소에는 불편할 수 있으므로 잘 판단 후 사용하면 된다.(지양해 주세요.)
  // Card 내에 onClick을 달지말고 Card 컴포넌트 안에 써주어야 잘 동작한다.
  return(
    <div className="col-md-4" onClick={()=>{ history.push('/detail/' + props.shoes.id) }}> 
        <img src={'https://codingapple1.github.io/shop/shoes'+(props.i+1)+'.jpg'} width="100%"/>
        {/* 글자 중간에 변수를 넣고싶다면 {}를 사용해서 쓴다. */}
        <h4>{ props.shoes.title } </h4>
        <p>{ props.shoes.content } & { props.shoes.price }</p>
        {재고[props.i]}
    </div>
  )
}

export default App;
