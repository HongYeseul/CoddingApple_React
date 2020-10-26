import logo from './logo.svg';
import React, {useState} from 'react';
import { Navbar, Nav, NavDropdown, Button, Jumbotron } from 'react-bootstrap';
import './App.css';
import Data from './data.js';
//.js 생략해도 js 파일인지 자동인식 가능

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

    <Jumbotron className="background">
      {/* Jumbotron은 대문! */}
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
        {/* bootstrap 문법! 안에 있는 row를 12컬럼으로 쪼개줌 */}
        <div className="col-md-4">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%"/>
          <h4>{ shoes[0].title } </h4>
          <p>{ shoes[0].content }</p>
        </div>
        {/* col-4 : 그 중에 4개 컬럼을 차지하는 div 박스를 만들겠다. */}
        {/* col-md-4는 모바일에서 세로졍렬을 위해.  */}
        <div className="col-md-4">
          <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="100%"/>
          <h4>상품명</h4>
          <p>상품설명 & 가격</p>
        </div>
        <div className="col-md-4">
          <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="100%"/>
          <h4>상품명</h4>
          <p>상품설명 & 가격</p>
        </div>
      </div>
    </div>

    </div>
  );
}

export default App;
