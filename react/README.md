# React

## React 란?
리액트는 UI 라이브러리이다. (컴포넌트로 이루어진 UI)

### library vs framework
* library
    - 틀이 없고 작은 부분을 구현
    - 필요한 기능에 따라 라이브러리를 선택해서 사용할 수 있음. (자유도가 높음!)
    - 러닝커브가 상대적으로 낮음
    - ex) React

* framework
    - 정해진 골격 안에서 원하는 기능을 구현해야함.
    - Routing, UI, HTTP Clients, State management 등 다양한 기능들이 한번에 묶어져서 제공됨.
    - 러닝커브가 높음
    - ex) Angular

### Component
* 한가지의 기능을 수행하는 UI 단위
* 독립적이며 고립적이며 재사용 가능(테스트 가능)
* 각 컴포넌트 별로 state(상태값)을 갖고있다.
* 상태가 변경될 때 마다 렌더함수가 호출됨

### VirtualDOM
부모 컴포넌트의 상태값이 변경되어 렌더함수가 호출되면 이에 포함되어있는 자식컴포넌트 또한 렌더함수가 호출된다.   
But 리액트는 VirtualDOM Tree(메모리에 저장되어있음!!) 가 이전의 DOM Tree 와 비교하여 실제 변경된 부분만 반영되기때문에 성능에 크게 영향을 미치지는 않는다.   

### 공식 사이트
> [리액트 공식 사이트](https://reactjs.org/docs/getting-started.html)   
> [Create React App](https://create-react-app.dev/docs/getting-started)

## Create React App (CRA)
페이스북에서 만들었고, 리액트를 개발하는 수많은 개발자들이 공통적으로 사용하는 유용한 툴들 및 설정을 한번에 자동적으로 설치할 수 있도록 도와주는 보일러 플레이트
```sh
# npx
npx create-react-app project_name

# or
# yarn
yarn create react-app project_name

# or
# npm
npm ini react-app project_name
```

## React Component 종류
* React.Component (class)
    - 라이프사이클
        + `componentDidMount` : 컴포넌트가 UI 상에 등록되어 사용자에게 보여질 때 호출
        + `componentWillUnmount` : 컴포넌트가 UI 상에 제거되어 사용자에게 안보일 때 호출
* React.PureComponent
    - 값이 변경되지 않았을 때 불필요한 렌더링을 없애줌.
* function
* memo (function)
    - PureComponent 와 비슷!
* React Hook
    - function 방식에서 라이프사이클 및 상태값을 가질 수 있도록 도와줌.