import React, {useState} from 'react';
import { Navbar, Nav, NavDropdown, Button, Jumbotron } from 'react-bootstrap';
import './App.css';
import Data from './data.js';
import Detail from './Detail.js';
import axios from 'axios';

import {Link, Route, Switch} from 'react-router-dom'

// Ajax : 서버에 새로고침 없이 요청을 할 수 있게 도와주는 기술
// 서버에 요청을 할 수 있는 방법은 여러종류가 있는데,
// GET 요청 : 주소창에 URL로 표현 -> 특정 페이지 / 자료 읽기에 사용
// POST 요청 : 서버로 중요 정보 전달 시 사용

// Ajax 사용 방법
// 1. jQuery 설치해서 $.ajax() 사용
// 2. axios 설치해서 axios.get() 사용
// 3. JS - fetch() 사용 : 호환성 문제로 잘 쓰이지 않음

function App() {

  let [shoes, shoes변경] = useState(Data);

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
          <div className="row">
            {
              shoes.map((a, i)=>{
                return <Card shoes={shoes[i]} i={i} key={i}/> 
              })
            }
          </div>
          <button className="btn btn-primary" onClick={()=>{

            // 버튼을 누르게되면
            // 1. axios.get(데이터 요청할 URL)
            // 2. 성공하면.then()
            // 3. 실패하면 .catch()

            axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((result)=>{
              console.log("Complete");
              console.log(result.data); // 그냥 result 값에는 통신 정보 등의 모든 정보가 들어있게 됨.
            })
            .catch(()=>{
              console.log("FAIL");
            })
          }}>더보기</button>
        </div>
      </Route>

      <Route path="/detail/:id"> 
        <Detail shoes={shoes}/>
      </Route>
      
    </Switch>
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
