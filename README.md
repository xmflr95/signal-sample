# Signal 은 무엇인가 예제

## signal 에 대한 생각
정확히 singal 개념이 어떤건지 아직까지 모르겠으나 이미 오래전에 있었던 개념으로 보이고  
react 에서 주로 사용하는 상태관리가 아닌 단순 값의 변화를 변수에 값마다 시그널로 선언해  
그 값의 변화에 따른 effect 설정 혹은 computed 로 변화된 값 관리가 가능한거같다.  

현재 소스에서는 singal 에 대입된 값을 js 클래스 객체 getter/setter 로 접근하면서 signal 값 변화를  
다른 불필요한 코드 없이 사용 및 변경 가능한것같다.  

어쩌면 Vue 에서 사용했던 data 값을 watch, computed 로 감시하거나, 계산하는 것과 유사한 기능같기도하다.

## source
- index.html
- index.js
- signal.js (Class 선언)

## 실행
vscode 혹은 웹 서버에서 index.html 을 실행 (module을 사용하기 떄문에 단순 브라우저 오픈은 안됨)
