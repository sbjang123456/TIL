# 2022 구글 I/O CSS 추가된 기능
새롭게 발표된 css 기능들 중 중요하게 체크해야 될 기능 정리
> https://web.dev/state-of-css-2022

## Cascade Layers (`@layer`)
스타일링의 순서를 간단하게 만들어준다. (2022년 최신브라우저에 모두 지원됨)
* 기존의 레이어 순서
  - ...
  - **구체적인 셀렉터**
  - **선언된 순서**

만약 프레임워크 css(ex: Bootstrap, Material-ui, ...)를 사용 중이라면 프로젝트 내의 css 에서 스타일 핸들링이 어려울 수 있다. (이미 프레임워크 내에서 구체적인 셀렉터로 해당 요소 스타일의 우선 순위가 높을 수 있기 때문)
> 만약 `!important` 를 사용하면 우리 예상하지 못하는 사이드 이펙트가 발생할 수 있고, 유지보수가 굉장히 힘들어질 수 있음.   

*구체적인 셀렉터와 선언된 순서를 확인하지 않아도 손 쉽게 스타일링의 우선순위를 결정할 수 있다.*
* **Cascade Layers**
  1. 레이어 순서 정의 (우선순위 정의)
  2. 각 레이어별 스타일 정의
  3. 높은 우선 순위의 레이어가 스타일 적용

> [MDN CSS @layer](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer)

## Container Queries (`@container`)
기존 @media 쿼리는 윈도우 창 사이즈에 의거하여 컨텐츠들이 배치되는데 반해, @container 쿼리는 부모요소의 사이즈에 의존하여 반응형 웹 사이트를 제작할 수 있다.
(현재 브라우저들의 실험적 버전들에만 적용되어 있음)
* 반응형 디자인
* 재사용 가능
* 독립적 컴포넌트 제작 가능

> [MDN CSS Container Queyries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries)   
> [Container Queyry Demo](https://codepen.io/una/pen/RwodQZw)

## accent-color (`accent-color`)
기본적인 HTML 요소들을 빠르게 스타일링을 할 수 있도록 도와줌.(2022년 최신 브라우저에서 모두 지원됨)   
* 페이지에서 사용하는 기본적인 색상을 설정할 수 있음.
* 컴포넌트가 위치한 배경 색상에 따라 그에 대비된 색상을 자동적으로 스타일링

> [MDN CSS accent-color](https://developer.mozilla.org/en-US/docs/Web/CSS/accent-color)

## color-contrast (`color-contrast()`)
배경색에 따라 그에 대조되는 색상을 자동적으로 셋팅됨.(현재 사파리에서 지원, 다른 브라우저는 실험적 버전에서 사용 가능)

> [MDN CSS accent-color](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-contrast)   
> [accent-color Demo](https://codepen.io/web-dot-dev/pen/qBpzwZW)

## nest (`@nest`)
부모와 자식간의 관계를 명확하게 표현(*=sass | postCSS 스타일 구조와 같음*) (현재 브라우저 지원 안됨)
```css
/* legacy */
header {
  color: red;
}
header > a {
  color: blue;
}

/* apply @nest */
header {
  color: red;

  & > a {
    color: blue;
  }
}
```

## scope (`@scope`)
서로 스타일링 다른 컴포넌트, 모듈과 충돌이 나지 않도록 scope 라는 이름 명으로 래핑해주는 기능
* 이름 충돌을 피하기 위해 사용하였던 CSS Module 은 사용 불필요
* BEM 명명 규칙 불필요