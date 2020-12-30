import React, {useState} from 'react';
import { Navbar, Nav, NavDropdown, Button, Jumbotron } from 'react-bootstrap';
import './App.css';
import Data from './data.js';
import Detail from './Detail.js';
import axios from 'axios';

import {Link, Route, Switch} from 'react-router-dom'

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

            //post로 요청 시 (예제 코드)
            // axios.post('서버URL', {id : 'coddingapple', pw : 1234});
            // + 요청 시 header도 설정 가능

            // 만약 컴포넌트 로드 시 ajax로 데이터를 가지고 오고 싶을 때는 컴포넌트 내 존재하는 useEffect() 내 axios.get() 등을 사용하면 된다.
            // 참고 ) useEffect는 컴포넌트 등장 & 업데이트 시 실행할 코드가 들어가게 된다.
            //        만약 업데이트 시 실행되지 않게 하고싶다면 useEffect( ()=>{}, [])로 대괄호 삽입을 해주면 된다.

            // 로딩 중이라는 UI를 띄우고 싶을 때 추가하는 구간

            axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((result)=>{
              // 로딩 중이라는 UI 지우기
              console.log("Complete");
              console.log(result.data); 

              // *** 저번시간 숙제 : 더보기 버튼을 누르면 상품 데이터 3개를 가져온 후 메인페이지 하단에 상품 레이아웃 3개를 추가해보십시오. ***
              // !! 더보기 버튼을 클릭했을 때 동적으로 신발들이 더 생기게 하려면 Card를 더 생성해주는것이 아닌, shoes변수에 상품데이터 3개를 추가해주면 된다. !!
              // * ...연산자는 괄호를 벗겨주는 역할을 한다.
              shoes변경([...shoes, ...result.data]);

              //각각은 [ {}, {}, {} ] 이렇게 생겼으므로 괄호를 벗겨서 두개를 붙여준다.
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
