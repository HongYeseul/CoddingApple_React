import React, {useState} from 'react';
import { Navbar, Nav, NavDropdown, Button, Jumbotron } from 'react-bootstrap';
import './App.css';
import Data from './data.js';
import Detail from './Detail.js';
import axios from 'axios';

import {Link, Route, Switch} from 'react-router-dom'

// 리액트 사이트 build & Github Page로 배포해보기
// 배포하기 전 확인 해야 할 사항
// 사이트를 배포할 때
// http://codingapple.com/ 여기에 배포할 경우엔 따로 설정이 필요없이 대충 해도 되지만
// http://codingapple.com/blog/ 이런 하위 경로에 배포하고 싶다면 프로젝트에 설정이 따로 필요하다. 
// 프로젝트 파일 중 package.json 이라는 파일을 오픈하면 큰 object가 하나 있는데
// "homepage": "http://codingapple.com/blog",
// 라는 homepage key값을 추가해 주면 된다.

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
          <div className="row">
            {
              shoes.map((a, i)=>{
                return <Card shoes={shoes[i]} i={i} key={i}/> 
              })
            }
          </div>
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
        <Detail shoes={shoes} 재고={재고} 재고변경={재고변경}/>
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
