# CSS(Cascading Style Sheet) 기본
기초 이론을 정리해보자!!

## 의미, 정의
정의된 스타일이 있다면 사용, 없다면 다음(기본)으로 넘어감.   

웹사이트 스타일링 세가지 순서
* Author style (우리가 정의한 스타일)
* User style (사용자 지정 스타일)
* Browser (브라우저 기본 스타일)

> `!important` : cascading 의 연결고리를 끊어냄 - 가급적 피하자!

## 선택자 (selectors)
html 의 어떤 태그들을 고를건지 규정하는 문법

* `Universal` : `*`
* `type` : `Tag`
* `ID` : `#id`
* `Class` : `.class`
* `State` : `:`
* `Attribute` : `[]`
> 여기서 해당 태그에 가까울 수록 우선적으로 적용된다.

### css 기본 문법
```css
/* css base */
selector {
    property: value;
}
```

### 예시
```html
<body>
    <ol>
        <li id="special">First</li>
        <li>Second</li>
    </ol>
    <button>Button1</button>
    <button>Button2</button>
    <div class="red"></div>
    <div class="blue"></div>
    <a href="naver.com">Naver</a>
    <a href="google.com">Google</a>
    <a>Empty</a>
</body>
```

```css
/* universal */
* {
    color: green;
}

/* Tag */
li {
    color: blue;
}

/* id */
#special {
    color: pink;
}

/* class */
.red {
    width: 100px;
    height: 100px;
    background: yellow;
}

/* state - 마우스를 올렸을 때 스타일 */
button:hover {
    color: red;
    background: beige;
}

/* 
* attribute
* ^= 시작
* $= 끝 
*/
a[href="naver.com"] {
    color: purple;
}
```
## padding / margin
* padding - 안쪽 여백
  * padding-left
  * padding-right
  * padding-top
  * padding-bottom

* margin - 바깥 여백
  * margin-left
  * margin-right
  * margin-top
  * margin-bottom

padding 과 margin 둘다 시계방향으로 한번에 여백을 줄 수 있음
* `padding: 20px 15px 10px 5px` 상단, 우측, 하단, 좌측
* `padding: 20px 15px 10px` 상단, 우측/좌측, 하단
* `padding: 20px 15px` 상단/하단, 우측/좌측


