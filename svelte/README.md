# Svelte
Svelte 는 빠른 웹 어플리케이션을 구축하기 위한 도구!   
요새 프론트엔드 개발자들 사이에서 리액트를 제치고 배우고 싶은 기술스택에서 1위를 차지했다고함.. 
리액트보다 속도가 굉장히 빠르다던데, 아직 실무에서 사용하기엔 무리가 있어보임. (커뮤니티가 활성화되어있지않아서!!)

## Svelte 특징
* 프레임워크, 라이브러리 개념이 아닌 컴파일러에 가까움.
* Svelte 로 빌드하고 배포하면 브라우저가 바로 읽을 수 있는 JS 로 바뀌기 때문에 추가적인 디펜던시가 줄어듬.
* 앱사이즈가 굉장히 매우 작음!!!!!!!
* 바닐라JS 와 속도가 유사함. (속도 매우 빠름)* 
* ***no VitualDOM*** , 컴파일러가 최적화된 js 코드를 만들어내기 때문에 빠른 속도로 UI 를 새로고침 할 수 있음.
* 개발하기 쉬움! (상당히 직관적, 러닝커브가 낮음)
* 코드가 읽기 쉬움.

## Svelte 구성
3가지 요소로 구성
* *script tag*
* *style tag*
* *html*

## Svelte Kit
프레임워크(아직 베타)

## Svelte 를 지금 당장 도입해야할까?
No.. 아직은 시기상조! 공부는 해둬야할 것으로 보임.
* Svelte 커뮤니티는 아직 어린이 수준.
* Svelte 는 너무너무 쉬워서 주니어 개발자들에게 적합하지 않을 수 있음. (처음엔 js에 가장 가까운 것을 먼저 습득해야함..)

## React 와의 소스 비교
React
```js
import React from "react";

const HelloWorld = () => {
  let name = "Hello World";
  return <h1>{name}!</h1>;
};

export default HelloWorld;
```

Svelte
```js
<script>
  let name = "Hello World";
</script>

<h1>Hello {name}!</h1>
```