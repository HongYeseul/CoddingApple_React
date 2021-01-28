const express = require('express');
const path = require('path');
const app = express();

const http = require('http').createServer(app);
http.listen(8080, function () {
  console.log('listening on 8080')
}); 

app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/react', express.static(path.join(__dirname, 'shop/build'))) // static 파일들이 어디에있는지 명시(html, css, img)

app.get('/', function(요청, 응답){
    응답.sendFile(path.join(__dirname, 'public/main.html'))
})
// 여러 라우터를 사용할 때 이 파일에서만 만지면 리액트 파일이 제대로 렌더링 되지 않음.
// 리액트 프로젝트 내 package.json에서 homepage 설정을 추가 후 다시 npm run build를 해주어야 한다!
// -->> 리액트 개발 시 항상 빌드를 새로 해주어야 하나요? 라이브로는 개발 못하나요? -> proxy 검색 ㄱㄱ
app.get('/react', function(요청, 응답){
    응답.sendFile(path.join(__dirname, 'shop/build/index.html'))
}) // 참고) react 프로젝트 파일 내 App.js 내용이 '/'였을 때 보이는 내용이 있어 '/react'로 수정 해줌.

// 리액트 내에서 라우팅을 할 수 있는데, 이는 새로고침이 되는 것이 아니므로 서버에 요청을 하지 않음
// -> 링크에 입력 후에 페이지를 접속하려하면 서버에는 라우팅이 되어있지 않기 때문에 페이지를 받지 못함
// app.get('*', function(요청, 응답){ // 모든 글자에 반응하게 함
//     응답.sendFile( path.join(__dirname, 'shop/build/index.html'))
// })

// react <-> node.js 통신은 ajax로 하면 됨