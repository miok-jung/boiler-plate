# yarn start

- package.json에서 script에 의해 node index.js를 실행할 수 있게 설정.
- index.js에서는 express기반으로 5000포트에서 index.js를 실행한다. 실행시 res.send에 대한 내용이 표출이 된다.

# yarn backend

- 서버다운없이 수정된 스크립트가 자동으로 업데이트가 되어, 브라우저에서 리프레시만 하면 바로 업데이트가 된다.
- 뒤 backend는 package에 backend 단어만 바꾸면 다른 명령어로 변경할 수 있다.

# yarn dev

- 서버, 클라이언트 모두 한번에 실행할 수 있는 명령어(npm을 yarn으로 바꾸는건 실패한상황)

## 210219

- MongoDB 연결
- yarn run start에 대한 오류로 인해 mongodb패키지 추가 및 mongoose다운그레이 진행하여 오류는 없음
- 콘솔창에 db연결이 잘되었는지 확인여부가 안되는 상황

## 210223

MongoDB Model & Schema

- Model과 Schema에 대한 정리

## 210226

SSH : 안전한 통신?Secure Shell

## 210310

- body-parser사용 및 Postman 설치
- https://jnarin-development-story.tistory.com/89

## 210311

- nodemon 설치, package.json에서 패키지 설치명령어가 나뉘는 이유
- yarn run backend 설정완료
- https://jnarin-development-story.tistory.com/90

## 210312

- 비밀설정 정보관리를 통해 좀 더 보완적으로 업로드 가능
- https://jnarin-development-story.tistory.com/91

## 210313

- bcrypt 비밀번호를 암호화하여 받기
- https://jnarin-development-story.tistory.com/92

## 210315

- jsonwebtoken, cookie-parser 설치하여 로그인 쿠키 기반으로 토큰 생성하기
- https://jnarin-development-story.tistory.com/94

## 210316

- Auth 기능 추가하기
- https://jnarin-development-story.tistory.com/95

## 210317

- 로그아웃 기능 추가
- https://jnarin-development-story.tistory.com/96

## 210318

- server, client 구별 및 리액트 폴더 및 파일만 생성

## 210322

- concurrently 라이브러리 추가
- package.json이동 및 <b>yarn dev</b> 명령어 추가
- https://jnarin-development-story.tistory.com/100
