import React, {useState} from 'react';
import { Navbar, Nav, NavDropdown, Button, Jumbotron } from 'react-bootstrap';
import './App.css';
import Data from './data.js';

import {Link, Route, Switch} from 'react-router-dom'

function App() {

  let [shoes, shoes변경] = useState(Data);
  // 파일 쪼갤 때 사용하는 import/ export 문법
  // 내보내기 : export default 변수명
  // 가져오기 : import 변수명 from 경로
  return (
    <div className="App">
      
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {/* ml auto하면 오른쪽으로감, mr-auto는 왼쪽 */}
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
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

    

    {/*그냥 React에서 경로를 주면 /detail 페이지를 가도 /페이지가 뜨기 때문에 exact속성추가 -> 경로가 정확히 일치할 때만 보여줌*/} 
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
        <div className="row">
          {
            shoes.map((a, i)=>{
              return <Card shoes={shoes[i]} i={i} key={i}/> 
            })
          }
        </div>
      </div>
    </Route>
    <Route path="/detail">
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
          </div>
        </div>
      </div>
    </Route>
    {/* 코드를 깔끔하게 하기 위해서 컴포넌트를 보여주고 싶을 때
      <Route path="/어쩌구" component={Modal}></Route> 혹은
      <Route path="/어쩌구"> <Card/> </Route> 가능
    */}

    {/* React-Router 특징
      - 각각 페이지마다 다른 HTML 파일을 보여주는게 아닌 HTML 내부의 내용을 갈아치워서 다른 페이지처럼 흉내내는 것 뿐이다.
    */}

    </div>
  );
}

function Card(props) {
  return(
    <div className="col-md-4">
        <img src={'https://codingapple1.github.io/shop/shoes'+(props.i+1)+'.jpg'} width="100%"/>
        {/* 글자 중간에 변수를 넣고싶다면 {}를 사용해서 쓴다. */}
        <h4>{ props.shoes.title } </h4>
        <p>{ props.shoes.content } & { props.shoes.price }</p>
    </div>
  )
}

export default App;
